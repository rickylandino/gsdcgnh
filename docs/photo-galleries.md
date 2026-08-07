# Adding Photo Galleries

How to publish event photos to `/gallery`. Everything below is driven off folder
names, so getting the folder name right is most of the job.

## Moving pieces

| Thing | Where | Notes |
| --- | --- | --- |
| The images | `public/photo-gallery/<event-slug>/` | One folder per event |
| The generator | `scripts/generate-photo-manifest.js` | Run via `npm run generate-photos` |
| The manifest | `app/gallery/photo-manifest.ts` | **Auto-generated — never hand-edit** |
| The gallery page | `app/gallery/page.tsx` | Filters on `?event=` / `?category=` |
| Event → gallery link | `app/events/events.ts` | Via the `galleryId` field |

The generator scans `public/photo-gallery/` recursively, picks up
`.jpg/.jpeg/.png/.gif/.webp` (case-insensitive), and rewrites the manifest from
scratch. Editing the manifest by hand is pointless — the next run overwrites it.

## Steps

### 1. Name the folder

`public/photo-gallery/<event-slug>/` — the slug drives three things:

- **The URL:** `/gallery?event=<event-slug>`
- **The display title:** dash-separated words, each capitalized. So
  `scent-trial-spring-2026` → "Scent Trial Spring 2026". Acronyms come out wrong
  (`akc-…` → "Akc …"), and a two-digit year renders as a bare "26" — use the
  full year.
- **The category**, by substring match, **first hit wins**:

  | Slug contains | Category |
  | --- | --- |
  | `conformation` | `conformation` |
  | `obedience` or `rally` | `obedience` |
  | `scent` or `trial` | `trial` |
  | `meeting` | `meeting` |
  | `seminar` | `seminar` |
  | *(none of the above)* | `general` |

  Precedence matters: `obedience-rally-trial-summer-2026` contains both
  `obedience` and `trial`, and lands on `obedience` because that check runs
  first.

Pick the final name before generating. Once the manifest is committed the paths
are live URLs, and renaming later breaks any link anyone has shared.

### 2. Add the images

- Keep them in the **100–300 KB** range. The grid uses a plain `<img>`, *not*
  `next/image`, so nothing is resized at serve time — a 4 MB file is downloaded
  at 4 MB. (`obedience-july-20/DSC02494.jpg` is 3.9 MB and predates this rule.)
- Alt text is derived from the filename: extension stripped, dashes and
  underscores become spaces. `DSC02416.jpg` becomes alt text "DSC02416", which
  is useless to screen readers and search engines. Descriptive filenames
  (`shepherd-rally-heeling.jpg` → "shepherd rally heeling") give real alt text
  for free.
- Watch for near-duplicate filenames from the photographer's export
  (`_DSC6488-2.jpg` vs `_DSC6488-2_hww.jpg` were byte-identical). Compare with
  `md5sum` before assuming they differ.

### 3. Add the photographer link

In `PHOTOGRAPHER_LINKS` at the top of `scripts/generate-photo-manifest.js`,
keyed by the **same slug** as the folder:

```js
"scent-trial-spring-2026": {
  "photographerName": "Kelly Iannello Photography",
  "url": "https://kellyiannellophotography.pixieset.com/…/",
  "description": "Spring Scent Work Trial"
}
```

Without an entry the page still renders, but falls back to the generic
Kelly Iannello portfolio link instead of that event's album.

### 4. Link the event to the gallery

In `app/events/events.ts`, find the event and add `galleryId`:

```ts
galleryId: [
    { id: "scent-trial-spring-2026", label: "Spring Scent Work Photos" }
]
```

Skip this and the photos exist at `/gallery` but nothing on `/events` points to
them. An event can list more than one gallery — event 1 has separate obedience
and rally folders.

Mind the trailing commas; the `documents` array above it sometimes has one and
sometimes doesn't.

### 5. Generate, verify, commit

```bash
npm run generate-photos   # reports "<N> photos and <M> photographer links"
npx tsc --noEmit          # catches events.ts syntax slips
npm run build
```

Check the reported photo count against what you added. Then spot-check
`/gallery`, `/gallery?event=<slug>`, and the event's own page.

Commit together: the images, `app/gallery/photo-manifest.ts`,
`app/events/events.ts`, and `scripts/generate-photo-manifest.js`.

## Adding photos to a gallery that already exists

Drop the files in the existing folder, run `npm run generate-photos`, commit the
images and the manifest. Steps 1, 3, and 4 are already done.

---

## What Claude needs from you

To do this end to end without stopping to ask:

1. **The photos**, already in a folder under `public/photo-gallery/` — or tell
   me where they are and what the folder should be called.
2. **Which event they belong to** — the title or date from `app/events/events.ts`
   is enough. Needed for the `galleryId` link; without it the gallery is
   orphaned.
3. **The photographer's album URL** for that event (the pixieset link). This is
   the one thing that can't be derived from anything in the repo, and it's what
   held up the 2026 galleries.
4. **The label** for the link on the event page, if you want something other
   than what I'd infer from the event title (e.g. "Spring Scent Work Photos").

Nice to have:

5. **Descriptive filenames**, if you're willing to rename before handing them
   over — this is the only way to get meaningful alt text.
6. **Whether to push.** Default is to commit and leave it; say so if you want it
   pushed.

I can figure out the rest — category, display title, duplicate detection, file
sizes, and where in `events.ts` things go.
