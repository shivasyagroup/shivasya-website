/*
  Shivasya events data — the single source of truth for the Events archive.

  To add an event, copy one block and fill it in. Fields:
    id          unique slug, lowercase-with-dashes (used in the URL: event.html?id=<id>)
    year        number
    date        display string: "August 27, 2022" or "August 2022" or "2022"
    name        event name
    type        "performance" (dhol-tasha), "community" (seva/volunteer), or "other"
    location    optional
    description optional paragraph
    photos      optional list of image paths, e.g. ["assets/events/<id>/1.jpg"]
    videos      optional list of YouTube links

  Newest events sort to the top automatically. The handful below are seeded
  examples from what we already know — confirm/replace them with real details.
*/
window.SHIVASYA_EVENTS = [
  {
    id: "humanity-blood-drive-2026",
    year: 2026,
    date: "August 2026",
    name: "Humanity Blood Donation Drive",
    type: "community",
    location: "Hindu Center of Charlotte",
    description: "Our annual Independence Day blood donation drive, with the Charlotte Marathi Mandal and the Hindu Center of Charlotte. A recent drive brought together 110 donors.",
    photos: [],
    videos: []
  },
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
