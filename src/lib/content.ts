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

// Set price to a string like "from $120" once you have fixed prices. null shows "Get a quote".
export const washServices: {
  name: string;
  detail: string;
  price: string | null;
}[] = [
  { name: "Prime mover", detail: "Cab, chassis and wheels", price: null },
  { name: "Trailer", detail: "Full exterior, including the rear", price: null },
  { name: "B-double", detail: "Prime mover plus both trailers", price: null },
  { name: "Depot wash", detail: "Your whole fleet, at your yard", price: null },
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
