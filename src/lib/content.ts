// All copy and prices for the landing page live here. Edit this file, not the components.

export const site = {
  name: "MatePro",
  tagline: "Mobile truck wash, done properly.",
  phone: "0494 733 274",
  phoneHref: "tel:+61494733274",
  email: "hello@matepro.com.au",
  area: "Melbourne-wide",
};

export const nav = {
  app: { label: "App", href: "/app" },
  wash: { label: "Truck Wash", href: "/" },
};

// The scrolling strip under the hero. lime: true makes an item stand out.
export const ticker: { text: string; lime?: boolean }[] = [
  { text: "Fixed prices", lime: true },
  { text: "Prime movers" },
  { text: "Hand wash, no brushes" },
  { text: "Trailers" },
  { text: "Overnight at your depot" },
  { text: "B-doubles" },
  { text: "Defect check every wash" },
  { text: "Rigid trucks" },
  { text: "Before and after photos" },
  { text: "Fleet rates from 3 trucks", lime: true },
  { text: "Whole fleets" },
  { text: "EPA compliant" },
  { text: "Melbourne-wide" },
]

// Per wash, GST included. fleetPrice applies to each truck when 3 or more are washed in one visit.
export const washServices: {
  name: string;
  detail: string;
  price: number;
  fleetPrice: number;
}[] = [
  { name: "Prime mover", detail: "Cab, chassis and wheels", price: 130, fleetPrice: 115 },
  { name: "Trailer", detail: "Full exterior, including the rear", price: 105, fleetPrice: 95 },
  { name: "Semi", detail: "Prime mover plus trailer", price: 225, fleetPrice: 200 },
  { name: "B-double", detail: "Prime mover plus both trailers", price: 290, fleetPrice: 260 },
  { name: "Rigid truck", detail: "Body, cab, chassis and wheels", price: 140, fleetPrice: 125 },
];

export const washOffer = {
  name: "Zero-Downtime Truck Wash",
  badge: "Overnight, at your depot",
  guarantee: "A fixed price, agreed before we start. No surprises on the invoice.",
  late: "Late for a booked wash? $30 off.",
  extras: [
    "Bonneted truck +$30",
    "Chassis degrease +$40",
    "Cab interior from $80",
    "Very dirty trucks quoted first",
    "$150 minimum call-out",
  ],
};

export const washIncludes = [
  "Hand wash, no brushes",
  "Done while it's parked",
  "Before and after photos",
  "Defect check on every truck",
  "Wash water captured, EPA compliant",
  "Wash records emailed for audits",
];

export const washBonuses = [
  { title: "Same crew every time", text: "We get to know your trucks and your yard." },
  { title: "Photo report", text: "Before and after photos of every truck, sent to your phone." },
  { title: "Regular slot", text: "Weekly or fortnightly, same night, no chasing." },
  { title: "Fleet rates", text: "Book 3 or more trucks in one visit and every truck costs less." },
];

export const washSteps = [
  {
    title: "Book it",
    text: "Call, text or send a quote request. Pick a night that suits the run.",
  },
  {
    title: "We come to you",
    text: "Depot, yard or job site. We bring the water and the gear.",
  },
  {
    title: "Done",
    text: "Clean truck by morning, before and after photos sent to your phone.",
  },
];

export const quoteTypes = [
  "Prime mover",
  "Semi (prime mover and trailer)",
  "B-double",
  "Rigid truck",
  "Trailers only",
  "Fleet of 3 or more",
  "Something else",
];

export const app = {
  title: "The MatePro app is coming.",
  text: "Truck stops, diesel prices, pre-starts and expenses in one place. Free for every driver, built by a working truck driver.",
  features: [
    { icon: "pin", title: "Truck stops and rest areas", text: "Find a bay, a shower or a feed on your route." },
    { icon: "fuel", title: "Diesel prices", text: "See who's cheapest before you pull in." },
    { icon: "check", title: "Daily pre-start", text: "Tick it off, add photos, done before you roll." },
    { icon: "note", title: "Trip and expense notes", text: "Jot it down now, sort it out later." },
    { icon: "users", title: "Driver community", text: "Road conditions, tips and a yarn with other drivers." },
    { icon: "drop", title: "Book a truck wash", text: "Book a MatePro wash in a couple of taps." },
  ],
};
