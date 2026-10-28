// All copy and prices for the landing page live here. Edit this file, not the components.

export const site = {
  name: "MatePro",
  tagline: "Your fleet's best mate.",
  phone: "0494 733 274",
  phoneHref: "tel:+61494733274",
  email: "hello@matepro.com.au",
  area: "Melbourne-wide",
};

export const nav = [
  { label: "App", href: "#app" },
  { label: "Truck Wash", href: "#wash" },
  { label: "Contact", href: "#contact" },
];

export const freeFeatures = [
  {
    icon: "pin",
    title: "Truck stops and rest areas",
    text: "Find a bay, a shower or a feed on your route.",
  },
  {
    icon: "fuel",
    title: "Diesel prices",
    text: "See who's cheapest before you pull in.",
  },
  {
    icon: "check",
    title: "Daily pre-start",
    text: "Tick it off, add photos, done before you roll.",
  },
  {
    icon: "note",
    title: "Trip and expense notes",
    text: "Jot it down now, sort it out later.",
  },
  {
    icon: "users",
    title: "Driver community",
    text: "Road conditions, tips and a yarn with other drivers.",
  },
  {
    icon: "drop",
    title: "Book a truck wash",
    text: "Book it in the app, wash history kept for you.",
  },
] as const;

export const fleet = {
  name: "Fleet",
  price: "Per truck",
  per: "per month, 2 to 50 trucks",
  who: "For fleet owners",
  features: [
    "Pre-starts and defects dashboard",
    "Document and service reminders",
    "Proof of delivery",
    "Fleet AI assistant",
  ],
};

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
  "Wash history for audits",
];

// The live wash report cards in the animation, in the order they appear
export const washReport = [
  { icon: "check", title: "Wash done, 2:14am", text: "8 photos saved to your wash history" },
  { icon: "alert", title: "Defect flagged", text: "Rear left marker light out, photo attached" },
  { icon: "rain", title: "Rain Thursday", text: "Free rinse booked for Friday morning" },
];

export const washBonuses = [
  { title: "First truck free", text: "See the job before you pay a cent." },
  { title: "Rain rinse", text: "Rains within 48 hours? We come back and rinse it free." },
  { title: "One-tap rebook", text: "Book the next wash in the app in ten seconds." },
  { title: "3 months of Fleet free", text: "When you book 3 or more trucks." },
];

export const washSteps = [
  {
    title: "Book it",
    text: "Call, or book in the app. Pick a time that suits the run.",
  },
  {
    title: "We come to you",
    text: "Depot, yard or job site. We bring the water and the gear.",
  },
  {
    title: "Back on the road",
    text: "Clean truck, wash record saved in the app.",
  },
];

// Paste the real store links here at launch. While null, the buttons go to the sign-up form.
export const stores: { appStore: string | null; googlePlay: string | null } = {
  appStore: null,
  googlePlay: null,
};
