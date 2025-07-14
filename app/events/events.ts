interface EventPhoto {
    id: string
    src: string
    alt: string
    caption?: string
}

interface EventDocument {
    id: string
    title: string
    type: "premium-list" | "entry-form" | "results" | "flyer" | "info" | "photos" | ""
    url: string
    size?: string
}

interface Event {
    id: string
    title: string
    date: string
    time: string
    location: string
    category: "trial" | "seminar" | "conformation" | "obedience" | "test" | "akcfitdog" | "other"
    description: string
    htmlDescription?: string
    registrationRequired: boolean
    hasDocuments: boolean
    results?: string
    photos?: EventPhoto[]
    documents?: EventDocument[]
    hideDay?: boolean
}

const events: Event[] = [
    // Past Events
    {
        id: "1",
        title: "Obedience and Rally All Breed Speciality Trial Manchester CT",
        date: "2025-07-20",
        time: "8:30 AM - 5:00 PM",
        location: "175 Adams st Manchester CT 06402",
        category: "obedience",
        description:
            "The German Shepherd Club of Greater New Haven is hosting an Obedience and Rally Trial at Tails U Win!",
        htmlDescription: `
            <p>The German Shepherd Club of Greater New Haven is hosting an Obedience and Rally Trial
                at Tails U Win!</p>
                <p>Entries Open May 30 2025</p>
                <p>Entries Close 12PM Wed July 2 2025</p>
        `,
        registrationRequired: false,
        hasDocuments: true,
        photos: [
            {
                id: "1",
                src: "/events/2025_obediance_trial_manchester_ct.jpg",
                alt: "2025 Obedience Trial in Manchester CT",
            }
        ],
        documents: [
            {
                id: "doc-1",
                title: "2025 German Shepherd Premium List",
                type: "info",
                url: "/documents/2025-German_Shepherd_Premium_List_.pdf",
                size: "386 KB",
            }
        ],
    },
    {
        id: "2",
        title: "Conformation Show in October",
        date: "2025-10-01",
        time: "TBD",
        location: "TBD",
        category: "conformation",
        description: "The German Shepherd Club Of Greater New haven is hosting a Conformation show in October 2025.",
        htmlDescription: `
            <p>The German Shepherd Club Of Greater New haven is hosting a Conformation show in October 2025.<p>
                <p>Premium to follow.</p>
        `,
        registrationRequired: true,
        hasDocuments: false,
        hideDay: true,
        photos: [
            {
                id: "1",
                src: "/events/2025/conformation_october.png",
                alt: "Conformation October Show"
            }
        ]
    },
    {
        id: "3",
        title: "GSDCA Temperament Test, CGC, CGCA, Trick Dog Novice, Fit Dog Walk, Annual Picnic",
        date: "2025-06-15",
        time: "",
        location: "HOP BROOK LAKE - Meadows Shelter\n4 Straits Turnpike, Middlebury, CT\nRT 8 Exit 28 towards CT 63N/Church Street",
        category: "test",
        description: "",
        htmlDescription: `<div style="max-width:800px; margin:0 auto; text-align:center; padding:20px;">
    <section>
      <h2>GSDCA Temperament Test</h2>
      <p>Cost: $30.00 1st dog, $25.00 2nd dog</p>
      <p>Minimum Age: 1 year on the day of the test</p>
      <p>Sr Evaluator: Linda Chernak</p>
      <p>All breeds and mixed breeds welcomed</p>
      <p>Females in heat will be tested last</p>
      <p>Schedule: Demo Dog at 10:00 AM, Testing begins at 10:30 AM</p>
    </section>

    <section>
      <h2>AKC Canine Good Citizen Test / Community Canine</h2>
      <p>Cost: $25.00 1st dog, $20.00 2nd dog</p>
      <p>Evaluator: Karla Trombetto</p>
    </section>

    <section>
      <h2>AKC FIT DOG WALK</h2>
      <p>Cost: Free to all participants</p>
    </section>

    <section>
      <h2>AKC Trick Dog - Novice Level Only</h2>
      <p>Cost: $25.00 1st dog, $20.00 2nd dog</p>
      <p>Evaluator: Laura Chernak</p>
    </section>

    <section>
      <h2>Entry Information</h2>
      <p>Deadline: Saturday, June 07, 2025</p>
      <p>No entries will be taken on the day of the event.</p>
      <p>The site is located on federal grounds. Payment must be made in advance as money exchange is not allowed on-site.</p>
    </section>

    <section>
      <h2>Picnic Details</h2>
      <p>Morning refreshments: Coffee, donuts, and Danish will be available</p>
      <p>Provided by club: Hot dogs, hamburgers, soda, and water</p>
      <p>Salads and desserts: Provided by members</p>
      <p>If you're not a member and would like to bring something, please contact Karla Trombetto for food donations and party headcount.</p>
      <p>Email: <a href="mailto:ktrombetto@hotmail.com">ktrombetto@hotmail.com</a></p>
    </section>

    <section>
      <h2>Entries Submission</h2>
      <p>Use a separate form for each dog.</p>
      <p>Checks payable to: GSDCGNH, Inc</p>
      <p>Mail to:</p>
      <address>
        Temperament Test / CGC / Trick Dog<br>
        115 Vought Place<br>
        Stratford, CT 06614
      </address>
      <p>FMI: (203) 395-8473</p>
    </section>
  </div>
`,
        registrationRequired: false,
        hasDocuments: true,
        documents: [
            {
                id: "doc-2",
                title: "2025 GSDCA TEMPERAMENT TEST-AKC CGC-AKC TDN Flyer",
                type: "",
                url: "/documents/2025-GSDCA TEMPERAMENT TEST-AKC CGC-AKC TDN Flyer-3.pdf",
                size: "108 KB",
            },
            {
                id: "doc-1",
                title: "2025 GSDCA TEMPERAMENT TEST CGC CGCA Trick Dog ENTRY FORM",
                type: "",
                url: "/documents/2025-GSDCA- TEMPERAMENT TEST -CGC -CGCA- Trick Dog ENTRY -FORM-10.pdf",
                size: "103 KB",
            }
        ],
        photos: [
            {
                id: "1",
                src: "/events/2025/temperament_test.jpg",
                alt: "GSDCA Temperament Test Event"
            }
        ]
    },
    {
        id: "4",
        title: "Akc fit dog 5k spring scurry",
        date: "2025-04-15",
        time: "",
        location: "",
        category: "akcfitdog",
        description:
            "",
        htmlDescription: `
            <p>We had a great time at the Spring Scurry. Here are some pics.</p>
                <p>Look for future AKC Fit Dog events</p>
        `,
        registrationRequired: false,
        hasDocuments: false,
        photos: [
            {
                id: "1",
                src: "/events/4/1000008674.jpg",
                alt: "1",
            },
            {
                id: "2",
                src: "/events/4/1000008679.jpg",
                alt: "2",
            },
            {
                id: "3",
                src: "/events/4/resized.jpg",
                alt: "3",
            },
        ],
    },
    {
        id: "5",
        title: "GSDCGNH is now an approved AKC Fit Dog Club",
        date: "2024-12-11",
        time: "",
        location: "",
        category: "akcfitdog",
        description:
            "",
        htmlDescription: `
            <p style="padding-bottom: 10px">An AKC FIT DOG Club is a local group of dog owners who meet to work on fitness goals with their dogs. The American Kennel Club (AKC) launched the AKC FIT DOG program in 2018 to encourage people and their dogs to be more active together.</p>
            <p style="padding-bottom: 10px">To become an AKC FIT DOG Club, a group must:</p>
            <ul class="list-disc pl-10">
                <li>Be an AKC club, independent dog training school, or other dog-related club or organization</li>
                <li>Complete the online FIT DOG Club Application</li>
                <li>Conduct at least four group fitness walks per year or regularly scheduled canine fitness classes</li>
            </ul>
            <p style="padding-bottom: 10px">The goal of AKC FIT DOG clubs is to promote the health and fitness of dogs and their owners. Clubs host a variety of events, including: Community runs, Club walks, and FIT DOG classes.</p>
            <p style="padding-bottom: 10px">The AKC FIT DOG program also offers a way for dog owners to earn titles for their dogs by completing structured activities. There are three levels of titles: Bronze, Silver, and Gold. To earn a title, dogs must earn points in at least six fitness categories, such as:</p>
            <ul>
                <li>AKC Course</li>
                <li>Community runs</li>
                <li>Walks and hikes</li>
                <li>Unique activities, such as parkour or swimming</li>
                <li>Fitness-related AKC Performance Titles, such as Agility, Diving Dogs, Fast CAT, or Obedience</li>
            </ul>
        `,
        registrationRequired: false,
        hasDocuments: false,
        photos: [
            {
                id: "1",
                src: "/events/5/fit_dog_banner.jpg",
                alt: "1",
            }
        ],
    },
    {
        id: "6",
        title: "AKC Fit Dog 5k Spring Scurry",
        date: "2025-04-13",
        time: "11:00 AM",
        location: "Fairfield Hills Campus, Newtown CT",
        category: "akcfitdog",
        description:
            "",
        htmlDescription: `
            <p style="padding-bottom: 10px"><strong>AKC FIT DOG 5K SPRING SCURRY (3.1miles)</strong></p>
            <p style="padding-bottom: 10px">Registration fee $25</p>
            <p style="padding-bottom: 10px">Registration includes a 3 inch laminated medal and signed documentation form to be used towards your AKC Fit Dog Title. This is not a timed event you may walk at your own pace and rest when needed. This is a public location where other people and dogs not associated with our event will be present. Please be cautious and courteous of others at all times.​</p>
            <p style="padding-bottom: 10px">Please see attachment for Registration Form and Event Flyer.</p>
        `,
        registrationRequired: false,
        hasDocuments: true,
        documents: [
            {
                id: "doc-2",
                title: "Spring Scurry-3-1.pdf",
                type: "",
                url: "/events/6/Spring Scurry-3-1.pdf",
                size: "84.4 KB",
            },
            {
                id: "doc-1",
                title: "FIT DOG SPRING SCURRY REGISTRATION (1)-2-3.pdf",
                type: "",
                url: "/events/6/FIT DOG SPRING SCURRY REGISTRATION (1)-2-3.pdf",
                size: "57.3 KB",
            }
        ],
        photos: [
            {
                id: "1",
                src: "/events/6/spring_scurry_1.png",
                alt: "1",
            }
        ],
    },
]

const today = new Date()
today.setHours(0, 0, 0, 0)

const upcomingEvents = events.filter((event) => new Date(event.date) >= today)
const pastEvents = events.filter((event) => new Date(event.date) < today)

export type { Event, EventDocument, EventPhoto }
export { events, upcomingEvents, pastEvents }