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
    },
    {
        id: "13",
        title: "Obedience and Rally All Breed and Specialty Trial, Manchester",
        date: "2024-07-21",
        time: "",
        location: "Manchester, CT",
        category: "obedience",
        description: "",
        htmlDescription: `
            <p>Location: Tails U Win! 175 Adams Street, Manchester, CT 06042</p>

            <p><i>Premium list is available below</i></p>
        `,
        registrationRequired: false,
        hasDocuments: true,
        documents: [
            {
                id: "doc-1",
                title: "German Shepherd Premium List",
                type: "premium-list",
                url: "/events/13/2024 REVISED German Shepherd Premium List.pdf",
                size: "333 KB",
            }
        ]
    },
    {
        id: "14",
        title: "Obedience/Rally Event",
        date: "2023-07-23",
        time: "",
        location: "Manchester, CT",
        category: "obedience",
        description: "",
        htmlDescription: `
            <p>Put your German Shepherd Dog to the test in our Rally event at Tails You Win, Manchester CT</p>
            <p>Location: Tails U Win! 175 Adams Street, Manchester, CT 06042</p>

            <p><i>Premium list is available below</i></p>
        `,
        registrationRequired: false,
        hasDocuments: true,
        documents: [
            {
                id: "doc-1",
                title: "German Shepherd Premium List",
                type: "premium-list",
                url: "/events/14/German Shepherd Premium List.pdf",
                size: "494 KB",
            }
        ]
    },
    {
        id: "15",
        title: "Obedience Practice",
        date: "2023-03-07",
        time: "",
        location: "Oxford, CT",
        category: "obedience",
        description: "",
        htmlDescription: `
            <p>Location: 11 Robinson Lane, Oxford CT</p>
        `,
        registrationRequired: false,
        hasDocuments: false
    },
    {
        id: "16",
        title: "Obedience Practice",
        date: "2023-04-14",
        time: "",
        location: "Oxford, CT",
        category: "obedience",
        description: "",
        htmlDescription: `
            <p>Location: 11 Robinson Lane, Oxford CT</p>
        `,
        registrationRequired: false,
        hasDocuments: false
    },
    {
        id: "17",
        title: "Obedience Practice",
        date: "2023-07-14",
        time: "",
        location: "Oxford, CT",
        category: "obedience",
        description: "",
        htmlDescription: `
            <p>Location: 11 Robinson Lane, Oxford CT</p>
        `,
        registrationRequired: false,
        hasDocuments: false
    },
    {
        id: "18",
        title: "AKC Scent Work Judge's Seminar",
        date: "2025-03-30",
        time: "8 AM",
        location: "Easton, CT",
        category: "seminar",
        description: "",
        htmlDescription: `
            <h1 style="font-size: 28px; font-weight: bold; margin-bottom: 10px;">AKC Scent Work Judge's Seminar</h1>
  <p style="font-size: 16px;"><strong>Date:</strong> March 30, 2025, starting at 8 AM</p>
  <p style="font-size: 16px;"><strong>Location:</strong> Easton Public Library<br>
     691 Morehouse Rd, Easton, CT 06612</p>

  <p style="font-size: 18px; font-weight: bold; margin-top: 30px;">Hosted by</p>
  <p style="font-size: 16px;">German Shepherd Dog Club of Greater New Haven</p>

  <p style="font-size: 18px; font-weight: bold; margin-top: 30px;">Overview</p>
  <p style="font-size: 16px;">
    This one-day seminar satisfies the seminar option for new judge candidates and counts as continuing education for current judges. 
    Full-day participation is required to meet AKC Scent Work seminar requirements. 
    The seminar includes both classroom instruction and hands-on activities.
  </p>

  <p style="font-size: 18px; font-weight: bold; margin-top: 30px;">Discussion Topics</p>
  <ul style="font-size: 16px; margin-left: 20px;">
    <li>Scent Theory</li>
    <li>General expectations of judges</li>
    <li>Picking and planning search areas</li>
    <li>General hide placement considerations</li>
    <li>Searches by class level: hide placement, test challenges, and judging the search</li>
  </ul>

  <p style="font-size: 18px; font-weight: bold; margin-top: 30px;">Hands-on Learning</p>
  <p style="font-size: 16px;">
    Participants will act as Judges and Stewards in groups, designing searches for selected classes and difficulty levels. 
    After a demo dog runs the search, the group will discuss the design and hide placement with the instructor.
  </p>

  <p style="font-size: 18px; font-weight: bold; margin-top: 30px;">Seminar Fees</p>
  <ul style="font-size: 16px; margin-left: 20px;">
    <li><strong>Judges (Full Participation):</strong> $125</li>
    <li><strong>Audit Participation:</strong> $75</li>
  </ul>

  <p style="font-size: 18px; font-weight: bold; margin-top: 30px;">Other Information</p>
  <p style="font-size: 16px;">
    The AKC may photograph or record the seminar for future use. No dogs should be brought by attendees.
  </p>

  <p style="font-size: 18px; font-weight: bold; margin-top: 30px;">Nearby Hotels</p>
  <ul style="font-size: 16px; margin-left: 20px;">
    <li>Ethan Allen Hotel - Danbury, CT - 20 miles - 38 min drive</li>
    <li>Circle Hotel - Fairfield, CT - 9.1 miles - 22 min drive</li>
    <li>Residence Inn Shelton/Fairfield County - Shelton, CT - 11 miles - 15 min drive</li>
  </ul>

  <p style="font-size: 18px; font-weight: bold; margin-top: 30px;">Registration</p>
  <p style="font-size: 16px;">
    Mail attached registration form to:<br>
    Laura Danielle Chernak<br>
    115 Vought Pl, Stratford, CT 06614<br>
    <a href="mailto:Laura.Chernak@yahoo.com" style="color: #0000ee; text-decoration: underline;">Laura.Chernak@yahoo.com</a><br>
    Phone: 203-395-1046
  </p>

  <p style="font-size: 16px;">
    No partial payments permitted. Returned checks will incur a $40 collection fee. 
    After January 30, 2025, refunds will only be issued if the space can be filled.
  </p>

        `,
        registrationRequired: false,
        hasDocuments: true,
        documents: [
            {
                id: "doc-1",
                title: "Registration",
                type: "premium-list",
                url: "/events/18/GSDCGNH SWJ Seminar Registration.pdf",
                size: "180 KB",
            }
        ],
        photos: [
            {
                id: "1",
                src: "/events/18/image_495.png",
                alt: "Seminar Photo"
            }
        ]
    },
    {
        id: "19",
        title: "Scent work Seminar with Jim Helems",
        date: "2024-04-14",
        time: "8 AM",
        location: "Easton, CT",
        category: "seminar",
        description: "",
        htmlDescription: `
<h1 style="font-size: 28px; font-weight: bold; margin-bottom: 10px;">Scent Work Seminar with Jim Helems</h1>
  <p style="font-size: 20px; font-style: italic; margin-top: -10px;">“You are the brain - Your dog is the nose”</p>
  <p style="font-size: 16px;"><strong>Presented by:</strong> AKC Judge, Jim Helems and the German Shepherd Dog Club of Greater New Haven</p>

  <p style="font-size: 18px; font-weight: bold; margin-top: 30px;">Morning Classroom Topics</p>
  <ul style="font-size: 16px; margin-left: 20px;">
    <li>Scent theory</li>
    <li>Search techniques & leash handling (likely different than most teach)</li>
    <li>Aging dogs - health considerations at master/detective levels</li>
    <li>Common mistakes handlers make</li>
  </ul>

  <p style="font-size: 18px; font-weight: bold; margin-top: 30px;">Working Session</p>
  <p style="font-size: 16px;">
    12 working dogs will run detective searches. If time allows, additional small searches and a demonstration using a smoke device to brief odor movement.
  </p>

  <p style="font-size: 18px; font-weight: bold; margin-top: 30px;">Event Details</p>
  <ul style="font-size: 16px; margin-left: 20px;">
    <li><strong>Date:</strong> Sunday, April 14, 2024</li>
    <li><strong>Check-in:</strong> 7:30 AM</li>
    <li><strong>Seminar:</strong> 8:00 AM - 5:00 PM</li>
    <li><strong>Location:</strong> Easton Library, 691 Morehouse Rd., Easton, CT 06612</li>
  </ul>

  <p style="font-size: 18px; font-weight: bold; margin-top: 30px;">Registration</p>
  <ul style="font-size: 16px; margin-left: 20px;">
    <li><strong>Opens:</strong> March 11, 2024</li>
    <li><strong>Working Spot:</strong> $95.00 per dog (no swapping)</li>
    <li><strong>Audit (no dog):</strong> $55.00</li>
  </ul>
  <p style="font-size: 16px;">
    Coffee and refreshments in the morning. Lunch provided for all participants.<br>
    <strong>Note:</strong> Due to time constraints, swapping dogs is not permitted.
  </p>

  <p style="font-size: 18px; font-weight: bold; margin-top: 30px;">Contact & Payment</p>
  <p style="font-size: 16px;">
    For more info, contact: Lyn Chernak at 203-395-8473 or 
    <a href="mailto:CherLynGSD@gmail.com" style="color: #0000ee; text-decoration: underline;">CherLynGSD@gmail.com</a><br><br>
    Make checks payable to: <strong>GSDCGNH</strong><br>
    Mail to: GSDCGNH, 115 Vought Place, Stratford, CT 06614<br>
    Checks must be received by: <strong>April 6, 2024</strong>
  </p>


        `,
        registrationRequired: false,
        hasDocuments: true,
        documents: [
            {
                id: "doc-1",
                title: "You are the brain",
                type: "premium-list",
                url: "/events/19/You are the brain.pdf",
                size: "475 KB",
            }
        ],
    },
    {
        id: "20",
        title: "Are you Ready for the Unknown?",
        date: "2023-11-12",
        time: "",
        location: "Easton, CT",
        category: "seminar",
        description: "",
        htmlDescription: `
            <p>AKC Judge Terri Marineir and the German Shepherd Dog Club of Greater New Haven will be presenting a fun-filled day learning about odor, hide placements, how to work higher level classes and clear a room.</p>
            <br />
            <p><strong>Date:</strong> Sunday, November 12th</p>
            <p><strong>Check in:</strong> 8:00 AM</p>
            <p><strong>Seminar:</strong> 8:30 AM - 4:00 PM</p>
            <p><strong>Location:</strong> Easton Library, 691 Morehouse Rd., Easton, CT 06612</p>
            <p><strong>Cost:</strong> (10) Working Spots $70.00 / dog (unlimited) Audit (without dogs): $45.00<p>
            <p>Working spots are reserved for dogs currently working in Interior Excellent or above. Audit spots are open to all levels.</p>
            <br />
            <p>Coffee and Refreshments in AM. Lunch will be provided for all participants.</p>
            <p><strong>FMI:</strong> Lyn Chernak 203-395-8473 or <a href="mailto:CherLynGSD@gmail.com" style="color: #0000ee; text-decoration: underline;">CherLynGSD@gmail.com</a></p>      
        `,
        registrationRequired: false,
        hasDocuments: true,
        documents: [
            {
                id: "doc-1",
                title: "Are You Ready for the Unknown?",
                type: "premium-list",
                url: "/events/20/Are You Ready for the Unknown.pdf",
                size: "375 KB",
            }
        ],
        photos: [
            {
                id: "1",
                src: "/events/20/Screenshot_20230918_083630_Messenger.jpg",
                alt: "Scent Work Trial"
            }
        ]
    },
    {
        id: "21",
        title: "Reading Your Dog - The 7 Steps",
        date: "2023-07-15",
        time: "",
        location: "Easton, CT",
        category: "seminar",
        description: "",
        htmlDescription: `
            <h1 style="font-size: 28px; font-weight: bold;">Reading Your Dog - The 7 Steps</h1>
  <p style="font-size: 16px;">Posted: 03-07-2023, 06:38 PM</p>

  <p style="font-size: 18px; font-weight: bold; margin-top: 30px;">Understanding and Reading Your Detection Dog</p>
  <p style="font-size: 16px;">Two-Day Seminar with Kyle McCraith</p>
  <p style="font-size: 16px;">
    <strong>Dates:</strong> July 15th and 16th, 2023<br>
    <strong>Location:</strong> 691 Morehouse Road, Easton, CT<br>
    <strong>Contact:</strong> 203-396-8473
  </p>

  <p style="font-size: 18px; font-weight: bold; margin-top: 30px;">Instructor Bio - Kyle McCraith</p>
  <p style="font-size: 16px;">
    I offer canine behavior consulting and training based on proven, science-based principles. 
    I adhere to LIMA (Least Intrusive, Minimally Aversive) techniques and use my academic, professional, and real-world experiences to assess and modify canine behaviors.
  </p>

  <ul style="font-size: 16px; margin-left: 20px;">
    <li>Trained and certified teams nationwide for NAPWDA and previously NYS DCJS</li>
    <li>Examiner/Certifier for NAPWDA</li>
    <li>One of two NAPWDA Master Trainers in NYS</li>
    <li>Extensive experience handling, training, and deploying dogs</li>
    <li>Expertise in canine communication and behavior modification</li>
  </ul>

  <p style="font-size: 18px; font-weight: bold; margin-top: 30px;">Professional Experience</p>
  <p style="font-size: 16px;"><strong>2015-Present:</strong> Chairperson, Program Coordinator, Instructor - SUNY Cobleskill</p>
  <p style="font-size: 16px;">Courses in canine training, behavior, handling, tracking, aggression, and detection</p>
  <p style="font-size: 16px;"><strong>2017-Present:</strong> Master Trainer, NAPWDA - Utility and Explosives Detection</p>
  <p style="font-size: 16px;">Mentoring and certifying police, military, and search and rescue canine teams</p>
  <p style="font-size: 16px;"><strong>2016-2018:</strong> Master Sergeant/K9 Trainer - Albany County Sheriff&apos;s Office</p>
  <p style="font-size: 16px;"><strong>1993-2016:</strong> K9 Handler - Albany Police Department & US Marshals Task Force</p>
  <p style="font-size: 16px;"><strong>1983-1985:</strong> Military Police - US Army</p>

  <p style="font-size: 16px;"><strong>Education:</strong><br>
    BA in Sociology - SUNY Polytechnic<br>
    AA in Criminal Justice - Adirondack Community College
  </p>

  <p style="font-size: 18px; font-weight: bold; margin-top: 30px;">Seminar Details</p>
  <p style="font-size: 16px;">
    8 working spots per day and unlimited audit spots. All dogs must be familiar with Birch, Anise, and Clove. 
    <br><br>
    <strong>Day One:</strong> for newer teams focused on building foundational skills and understanding canine signals.<br>
    <strong>Day Two:</strong> for experienced teams targeting advanced techniques and detection strategy refinement.<br>
    <br>
    Classroom and fieldwork are integrated both days. Attendees booking both days receive 10% off the total fee. 
    Enrollment closes July 1, 2023. A waitlist will be maintained as needed.
  </p>

  <p style="font-size: 18px; font-weight: bold; margin-top: 30px;">Refund Policy</p>
  <p style="font-size: 16px;">
    100% refund prior to July 1, 2023 after July 1st, 50% refund unless your working spot has been filled by the wait-list. If you submit enrollment for a working spot and become wait-listed, you will automatically be placed in an audit spot and refunded the difference if a working spot does not open.
  </p>

    <p style="font-size: 18px; font-weight: bold; margin-top: 30px;">Hospitality</p>
  <p style="font-size: 16px;">
    Coffee and pastries/muffins will be available during check-in each day. Lunch will also be provided each day during the break at Kyle&apos;s discretion.
  </p>

    <p style="font-size: 18px; font-weight: bold; margin-top: 30px;">Hotels that accept dogs</p>
  <p style="font-size: 16px;">
    Days Inn by Wyndham Ridgefield, 296 Ethan Allen Hwy, Ridgefield, CT 203-438-3781 Circle Hotel Fairfield, 417 Post Road, Fairfield, CT 203-255-0491
  </p>

    <p style="font-size: 18px; font-weight: bold; margin-top: 30px;">No Pets Hotel</p>
  <p style="font-size: 16px;">
    Hi-Ho, 4180 Black Rock Turnpike, Fairfield, CT 203-259-5264 Best Western Plus, 100 Kings Highway Cutoff, Fairfield, CT 203-659-2200
  </p>

    <p style="font-size: 18px; font-weight: bold; margin-top: 30px;">Odors</p>
  <p style="font-size: 16px;">
    Birch, Anise, Clove, Cypress. If you want another odor, please comment with enrollment. You will be asked to also bring it with you to be used that day.
  </p>
     
  <p style="font-size: 18px; font-weight: bold; margin-top: 30px;">Day 1 - Saturday</p>
  <ul style="font-size: 16px; margin-left: 20px;">
    <li><strong>8:30-9:00:</strong> Registration. Welcome, housekeeping, agenda overview.</li>
    <li><strong>9:00-9:45:</strong> Lecture - <em>Reading your Dog - The 7 Steps</em>. Academic framework for interpreting dog signals.</li>
    <li><strong>9:45-10:30:</strong> Lecture - <em>Eight Body Language Indicators of Search Dogs</em>. Applicable to detection, tracking, and patrol work.</li>
    <li><strong>10:30-12:00:</strong> Fieldwork. Basic detection drills applying lecture concepts. Ongoing Q&A with working and audit teams.</li>
    <li><strong>12:00-12:30:</strong> Lunch break.</li>
    <li><strong>12:30-4:30:</strong> Continued fieldwork. Hands-on training and problem-solving as needed.</li>
  </ul>

  <p style="font-size: 18px; font-weight: bold; margin-top: 30px;">Day 2 - Sunday</p>
  <ul style="font-size: 16px; margin-left: 20px;">
    <li><strong>8:30-9:00:</strong> Registration. Welcome, housekeeping, agenda overview.</li>
    <li><strong>9:00-12:00:</strong> Advanced detection scenarios tailored to working teams. Problem-solving and open discussion encouraged.</li>
    <li><strong>12:00-12:30:</strong> Lunch break.</li>
    <li><strong>12:30-4:30:</strong> Fieldwork continued. Advanced detection scenarios, troubleshooting, and collaborative learning.</li>
  </ul>

        `,
        registrationRequired: false,
        hasDocuments: true,
        documents: [
            {
                id: "doc-1",
                title: "Understanding and Reading your Detection Dog",
                type: "premium-list",
                url: "/events/21/Understanding and Reading your Detection Dog-v2.pdf",
                size: "1,018 KB",
            },
            {
                id: "doc-2",
                title: "Seminar Enrollment Form",
                type: "premium-list",
                url: "/events/21/Seminar Enrollment Form-v2.pdf",
                size: "422 KB",
            }
        ],
        photos: [
            {
                id: "1",
                src: "/events/21/Reading your Dog 3.jpg",
                alt: "Reading Your Dog Seminar"
            }
        ]
    },
]

const today = new Date()
today.setHours(0, 0, 0, 0)

const upcomingEvents = events.filter((event) => new Date(event.date) >= today)
const pastEvents = events.filter((event) => new Date(event.date) < today)

export type { Event, EventDocument, EventPhoto }
export { events, upcomingEvents, pastEvents }