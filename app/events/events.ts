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
    {
        id: "7",
        title: "3rd Annual October Scent Work Premium List",
        date: "2025-10-11",
        time: "",
        location: "750 Chase Parkway, Waterbury, CT 06708",
        category: "trial",
        description: "",
        htmlDescription: `
            <p><strong>The German Shepherd Dog Club of Greater New Haven is holding its 3rd Annual October Scent Work Trial!</strong></p>
            <br />
            <p><strong>Dates:</strong> October 11, 2025 and October 12, 2025</p>
            <p><strong>Location:</strong> Connecticut State Community College Naugatuck Valley<br>
                750 Chase Parkway, Waterbury, CT 06708</p>
            <br />
            <ul>
                <li><strong>Entries open:</strong> July 30, 2025 at 6:00am EST</li>
                <li><strong>Entries close:</strong> September 12, 2025 at 6:00pm EST</li>
            </ul>
            <br />
            <div class="text-center">
            <strong>
                <p>DETECTIVE</p>
                <p>NOVICE, ADVANCED, EXCELLENT, and MASTER ELEMENTS</p>
                <p>HANDLER DISCRIMINATION</p>
            </strong>
            </div>

            <p><i>Premium list is available below</i></p>
        `,
        registrationRequired: false,
        hasDocuments: true,
        documents: [
            {
                id: "doc-1",
                title: "3rd Annual October Scent Work Premium List",
                type: "premium-list",
                url: "/documents/10-2025-Scent_Work_Premium_List.pdf",
                size: "1.07 MB",
            }
        ],
        photos: [
            {
                id: "1",
                src: "/events/7/image_547.jpg",
                alt: "Scent Work Trial"
            }
        ]
    },
    {
        id: "8",
        title: "2nd Annual Spring Scent Work Trial",
        date: "2025-05-31",
        time: "",
        location: "800 Country Club Road, Waterbury, CT 06723",
        category: "trial",
        description: "",
        htmlDescription: `
            <p><strong>2nd Annual Spring Scent Work Trial</strong></p>
            <br />
            <p><strong>Trial Hours:</strong> Saturday May 31st & Sunday June 1st - 7:30 am to 5:00 pm</p>
            <p><strong>Location:</strong> Post University<br>
                800 Country Club Road, Waterbury, CT 06723</p>            
            <br />
            <p><strong>Note:</strong> Judging schedules may be adjusted due to weather conditions and or entries. All competitors should plan accordingly.</p>

            <p><i>Premium list is available below</i></p>
        `,
        registrationRequired: false,
        hasDocuments: true,
        documents: [
            {
                id: "doc-1",
                title: "2rd Annual October Scent Work Premium List",
                type: "premium-list",
                url: "/events/8/06-2025-Scent_Work_Premium_List_.pdf",
                size: "1.4 MB",
            }
        ],
        photos: [
            {
                id: "1",
                src: "/events/8/molly5.png",
                alt: "Scent Work Trial"
            }
        ]
    },
    {
        id: "9",
        title: "Scent work Trial, Waterbury",
        date: "2024-10-11",
        time: "",
        location: "750 Chase Parkway, Waterbury, CT 06708",
        category: "trial",
        description: "",
        htmlDescription: `
            <p>We&apos;re working hard to organize our 3rd club Scent Work Trial.</p>
            <br />
            <p><strong>Dates:</strong> October 11, 2024 - October 13, 2024</p>
            <p><strong>Trial Hours:</strong> Saturday and Sunday - 7:30 am to 5:00 pm</p>
             <p><strong>Location:</strong> Connecticut State Community College Naugatuck Valley<br>
                750 Chase Parkway, Waterbury, CT 06708</p>            
            <br />
            <p>Check-in from 7:30-8:30 am daily. Handlers&apos; Briefing at 8:30 am, first dog to follow.</p>
            <br />
            <p><strong>Note:</strong> Judging schedules may be adjusted due to weather conditions and or entries. All competitors should plan accordingly.</p>

            <p><i>Premium list is available below</i></p>
        `,
        registrationRequired: false,
        hasDocuments: true,
        documents: [
            {
                id: "doc-1",
                title: "October Scent Work Premium List",
                type: "premium-list",
                url: "/events/9/10-2024-V2-Scent_Work_Premium_List_.pdf",
                size: "1.3 MB",
            }
        ],
        photos: [
            {
                id: "1",
                src: "/events/9/ScentWork.jpg",
                alt: "Scent Work Trial"
            }
        ]
    },
    {
        id: "10",
        title: "Summer Scent Work Trial",
        date: "2024-06-01",
        time: "",
        location: "Terryville, CT",
        category: "trial",
        description: "",
        htmlDescription: `
            <p><strong>The German Shepherd Dog Club of Greater New Haven will hold a Scent Trial on June 1st & 2nd, 2024</strong></p>
            <br />
            <p><strong>Trial Hours:</strong> June 1st & 2nd - 8:00 am to 4:00 pm</p>
            <p><strong>Location:</strong> Terryville, CT</p>            
            <br />
            <p>Join us for our second club Scent Work trial this summer in Terryville, CT. More details coming soon.</p>

            <p><i>Premium list is available below</i></p>
        `,
        registrationRequired: false,
        hasDocuments: true,
        documents: [
            {
                id: "doc-1",
                title: "June Scent Work Premium List",
                type: "premium-list",
                url: "/events/10/06-2024-Scent_Work_Premium_List_.pdf",
                size: "1.5 MB",
            }
        ],
        photos: [
            {
                id: "1",
                src: "/events/10/ScentWork.jpg",
                alt: "Scent Work Trial"
            }
        ]
    },
    {
        id: "11",
        title: "GSDCGNH Scent Work Trial",
        date: "2023-10-14",
        time: "",
        location: "Terryville, CT",
        category: "trial",
        description: "",
        htmlDescription: `
            <p><strong>The German Shepherd Dog Club of Greater New Haven will hold its very first Scent Trial on October 14th-15th, 2023.</strong></p>
            <br />
            <p><strong>Dates:</strong> October 14, 2023 - October 15, 2023</p>
            <p><strong>Location:</strong> Connecticut State Community College Naugatuck Valley<br>
                750 Chase Parkway, Waterbury, CT 06708</p>           
            <br />

            <p><i>Premium list is available below</i></p>
        `,
        registrationRequired: false,
        hasDocuments: true,
        documents: [
            {
                id: "doc-1",
                title: "Scent Work Premium List",
                type: "premium-list",
                url: "/events/11/06-2025-Scent_Work_Premium_List_.pdf",
                size: "1.4 MB",
            }
        ]
    },
    {
        id: "12",
        title: "Albany Obedience Club Scent Work Trial",
        date: "2023-05-13",
        time: "",
        location: "Hudson, NY",
        category: "trial",
        description: "",
        htmlDescription: `
            <p>Novice, Advanced, Excellent, and Master Elements Trials, including Handler Discrimination</p>
            <br />
            <p>Saturday May 13, 2023 & Sunday May 14, 2023</p>
            <br />
            <p>Event #2023175201 Event #2023175202</p>
            <p><strong>Location:</strong> FASNY Museum of Firefighting<br>
                117 Harry Howard Avenue, Hudson, NY 12534<br />
                To be held Indoors and Outdoors</p>           
            <br />
            <p><strong>Trial Hours:</strong> Saturday and Sunday - 7:30am to 6:00pm</p>
            <p>Check-in will be held from 7:30-8:30 am daily.</p>
            <p>General Briefing at 8:30am, first dog to follow.</p>
            <br />
            <p><strong>Note:</strong> Judging schedules may be adjusted due to weather conditions and or entries. All competitors should plan accordingly.</p>

            <p><i>Premium list is available below</i></p>
        `,
        registrationRequired: false,
        hasDocuments: true,
        documents: [
            {
                id: "doc-1",
                title: "Scent Work Premium List",
                type: "premium-list",
                url: "/events/11/06-2025-Scent_Work_Premium_List_.pdf",
                size: "523 KB",
            }
        ]
    }
]

const today = new Date()
today.setHours(0, 0, 0, 0)

const upcomingEvents = events.filter((event) => new Date(event.date) >= today)
const pastEvents = events.filter((event) => new Date(event.date) < today)

export type { Event, EventDocument, EventPhoto }
export { events, upcomingEvents, pastEvents }