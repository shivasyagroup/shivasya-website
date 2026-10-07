/*
  Shivasya events data — the single source of truth for the Events archive.

  To add an event, copy one block and fill it in. Fields:
    id          unique slug, lowercase-with-dashes (used in the URL: event.html?id=<id>)
    year        number
    date        display string: "August 27, 2022" or "August 2022" or "2022"
    isoDate     optional "YYYY-MM-DD". If it's today or in the future, the event
                shows in the "Upcoming" section at the top; once the date passes it
                moves into the year archive automatically. Leave off for past events.
    name        event name
    type        "performance" (dhol-tasha), "community" (seva/volunteer), or "other"
    location    optional
    description optional paragraph
    photos      optional list of image paths, e.g. ["assets/events/<id>/1.jpg"]
    videos      optional list of YouTube links

  Newest events sort to the top automatically (by year; within a year, array order).
*/
window.SHIVASYA_EVENTS = [
  // ---------------------------------------------------------------- 2026
  {
    id: "gandhi-jayanti-2026",
    year: 2026,
    date: "October 2026",
    name: "Gandhi Jayanti Performance",
    type: "performance",
    location: "Charlotte, NC",
    description: "A dhol-tasha performance by Shivasya around Gandhi Jayanti. More details coming soon.",
    photos: [],
    videos: []
  },
  {
    id: "festival-of-india-2026",
    year: 2026,
    date: "September 20, 2026",
    name: "Festival of India — Uptown",
    type: "performance",
    location: "Uptown Charlotte",
    description: "Shivasya performed at the Festival of India in Uptown Charlotte, bringing dhol-tasha energy to one of the city's largest celebrations of Indian culture.",
    photos: [],
    videos: []
  },
  {
    id: "ganesh-visarjan-2026",
    year: 2026,
    date: "September 19, 2026",
    name: "Ganesh Visarjan Miravnuk",
    type: "performance",
    location: "Hindu Center of Charlotte",
    description: "Shivasya performed at the Ganesh Visarjan miravnuk (procession) at the Hindu Center of Charlotte, closing the Ganeshotsav celebrations with the thunderous beats of dhol and tasha.",
    photos: [],
    videos: []
  },
  {
    id: "humanity-blood-drive-2026",
    year: 2026,
    date: "August 16, 2026",
    name: "Humanity Blood Donation Drive",
    type: "community",
    location: "Vivek Hall, Hindu Center of Charlotte",
    description: "Our annual Humanity Blood Donation Drive with the American Red Cross, the Charlotte Marathi Mandal, and the Hindu Center of Charlotte, held in Vivek Hall. 132 people registered and 110 came forward to donate. Led by Milind Bansode, Jaanvi Holé, Shurya Bansode, Mahesh Bhor, and Rahul Garad.",
    photos: [],
    videos: []
  },
  {
    id: "vedic-mandir-inauguration-2026",
    year: 2026,
    date: "July 2026",
    name: "New Vedic Mandir Inauguration",
    type: "performance",
    location: "Hindu Center of Charlotte",
    description: "Shivasya delivered a powerful dhol-tasha performance at the historic inauguration of the new Vedic Mandir at the Hindu Center of Charlotte.",
    photos: [],
    videos: []
  },
  {
    id: "jindagi-na-milegi-dobara-2026",
    year: 2026,
    date: "July 24, 2026",
    name: "“Jindagi Na Milegi Dobara” — Yajurvendra Mahajan",
    type: "other",
    location: "Charlotte, NC",
    description: "Shivasya hosted Shri Yajurvendra Mahajan of the Deepstambh Manobal Foundation for his inspiring Friday-evening lecture, “Jindagi Na Milegi Dobara” — a journey of inspiration, inclusion, and purpose. Mahajan Sir has dedicated over 20 years to the education of differently-abled, orphaned, transgender, and underprivileged students.",
    photos: [],
    videos: []
  },
  {
    id: "shivjayanti-5k-2026",
    year: 2026,
    date: "February 28, 2026",
    name: "Shiv Jayanti 5K Run & Walk",
    type: "other",
    location: "Hindu Center of Charlotte",
    description: "The second annual Shiv Jayanti 5K Run & Walk — a community wellness event held alongside the food donation drive. Registration filled to capacity (“housefull”) this year. Led by Chinmay Kulkarni and Amit Bidre.",
    photos: [],
    videos: []
  },
  {
    id: "shivjayanti-food-drive-2026",
    year: 2026,
    date: "February 28, 2026",
    name: "Shiv Jayanti Food Donation Drive",
    type: "community",
    location: "Hindu Center of Charlotte",
    description: "Our annual Shiv Jayanti food donation drive with the Charlotte Marathi Mandal, held at the Hindu Center of Charlotte from 8 AM. Volunteers collected and packed donations for families in need. Led by Jaanvi Holé and Mahesh Bhor.",
    photos: [],
    videos: []
  },

  // ---------------------------------------------------------------- 2025
  {
    id: "shivjayanti-5k-2025",
    year: 2025,
    date: "February 2025",
    name: "Shiv Jayanti 5K Run & Walk",
    type: "other",
    location: "Charlotte, NC",
    description: "The inaugural Shiv Jayanti 5K Run & Walk. Despite talk of freezing cold, nearly 200 people took part — from three-year-olds to seventy-five-year-olds — in a wonderful show of community engagement. Led by Amit Bidre and Chinmay Kulkarni.",
    photos: [],
    videos: []
  },
  {
    id: "shivjayanti-food-drive-2025",
    year: 2025,
    date: "February 2025",
    name: "Shiv Jayanti Food Donation Drive",
    type: "community",
    location: "Charlotte, NC",
    description: "Our fifth annual Shiv Jayanti celebration opened with a food donation drive. Together with the Charlotte Marathi Mandal, the community delivered 18,000 pounds of food to the Second Harvest Food Bank, and supplied about a month's worth of diapers, paper products, soap, and cleaning supplies to Gracious Hands, a local transition home. The day was filled with powada and valor songs honoring Chhatrapati Shivaji Maharaj.",
    photos: [],
    videos: []
  },

  // ---------------------------------------------------------------- 2024
  {
    id: "shivjayanti-food-drive-2024",
    year: 2024,
    date: "February 2024",
    name: "Shiv Jayanti Food Donation Drive",
    type: "community",
    location: "Charlotte, NC",
    description: "Our annual Shiv Jayanti food donation drive with the Charlotte Marathi Mandal. Roughly 3,416 pounds of food were delivered directly to the Second Harvest Food Bank; with additional cash donations (about 7 pounds of food per dollar), the total reached approximately 15,750 pounds — some 2,500 pounds more than the previous year. Many children took part and did a wonderful job.",
    photos: [],
    videos: []
  },

  // ---------------------------------------------------------------- 2023
  {
    id: "shivjayanti-lecture-2023",
    year: 2023,
    date: "February 18, 2023",
    name: "Shiv Jayanti Online Lecture",
    type: "other",
    location: "Online",
    description: "For Shiv Jayanti 2023, the Charlotte Marathi Mandal and Shivasya hosted an online lecture, “Shivray and the Environmental Policy of the Shivaji Era,” by Dr. Sangeeta Todmal-Ingulkar, PhD (Environment), streamed on Saturday, February 18, 2023.",
    photos: [],
    videos: []
  },

  // ---------------------------------------------------------------- 2022
  {
    id: "festival-of-india-2022",
    year: 2022,
    date: "August 27, 2022",
    name: "Festival of India — Uptown",
    type: "performance",
    location: "Tryon Street, Uptown Charlotte",
    description: "Shivasya performed at the Festival of India, a long-running annual celebration on Tryon Street in Uptown Charlotte.",
    photos: [],
    videos: []
  },
  {
    id: "shiv-jayanti-food-drive-2022",
    year: 2022,
    date: "February 2022",
    name: "Shiv Jayanti Food Drive",
    type: "community",
    location: "Charlotte, NC",
    description: "Our annual Shiv Jayanti food drive with the Charlotte Marathi Mandal and Second Harvest Food Bank — 2,200 pounds of food and $2,200 raised in 2022.",
    photos: [],
    videos: []
  }
];
