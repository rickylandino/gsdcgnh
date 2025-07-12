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
    category: "trial" | "seminar" | "conformation" | "obedience" | "test"
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

    }
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