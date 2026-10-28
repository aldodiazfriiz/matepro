// All copy and prices for the landing page live here. Edit this file, not the components.

export const site = {
  name: "MatePro",
  tagline: "Mobile truck wash, done properly.",
  phone: "0494 733 274",
  phoneHref: "tel:+61494733274",
  email: "hello@matepro.com.au",
  area: "Melbourne-wide",
};

export const nav = [
  { label: "How it works", href: "#wash" },
  { label: "Prices", href: "#prices" },
  { label: "Contact", href: "#contact" },
];

// The scrolling strip under the hero. lime: true makes an item stand out.
export const ticker: { text: string; lime?: boolean }[] = [
  { text: "First truck free", lime: true },
  { text: "Prime movers" },
  { text: "Hand wash, no brushes" },
  { text: "Trailers" },
  { text: "Overnight at your depot" },
  { text: "B-doubles" },
  { text: "Defect check every wash" },
  { text: "Rigid trucks" },
  { text: "Before and after photos" },
  { text: "Free rain rinse", lime: true },
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
  free: "Your first truck is free",
  guarantee: "Not clean? We wash it again free within 24 hours.",
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
  { title: "First truck free", text: "See the job before you pay a cent." },
  { title: "Rain rinse", text: "Rains within 48 hours? We come back and rinse it free." },
  { title: "Regular slot", text: "Weekly or fortnightly, same night, no chasing." },
  { title: "Yard thrown in", text: "Book 3 or more trucks and we hose the wash bay free." },
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
