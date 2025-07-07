interface EventPhoto {
  id: string
  src: string
  alt: string
  caption?: string
}

interface EventDocument {
  id: string
  title: string
  type: "premium-list" | "entry-form" | "results" | "flyer" | "info" | "photos"
  url: string
  size?: string
}

interface Event {
  id: string
  title: string
  date: string
  time: string
  location: string
  category: "trial" | "seminar" | "conformation" | "obedience"
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
            "The German Shepherd Club of Greater New Haven is hosting an Obedience and Rally Trial at Tails You Win!",
        htmlDescription: `
            <p>The German Shepherd Club of Greater New Haven is hosting an Obedience and Rally Trial
                at Tails You Win!</p>
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
    // {
    //     id: "3",
    //     title: "Monthly Meeting",
    //     date: "2025-06-13",
    //     time: "7:00 PM - 9:00 PM",
    //     location: "Virtual",
    //     category: "meeting",
    //     description:
    //         "GERMAN SHEPHERD DOG CLUB OF GREATER NEW HAVEN MEETING NOTICE",
    //     htmlDescription: `
    //         <p>Board Meeting 7:00 to 7:30</p>
    //             <p>General Meeting 7:30 to 9:00</p>

    //     `,
    //     registrationRequired: false,
    //     hasDocuments: false,
    // }
]

const today = new Date()
today.setHours(0, 0, 0, 0)

const upcomingEvents = events.filter((event) => new Date(event.date) >= today)
const pastEvents = events.filter((event) => new Date(event.date) < today)

export type { Event, EventDocument, EventPhoto }
export { events, upcomingEvents, pastEvents }