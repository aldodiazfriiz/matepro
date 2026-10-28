// All copy and prices for the landing page live here. Edit this file, not the components.

export const site = {
  name: "MatePro",
  tagline: "Mobile pressure washing, done properly.",
  phone: "0494 733 274",
  phoneHref: "tel:+61494733274",
  email: "hello@matepro.com.au",
  area: "Melbourne-wide",
};

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Truck Wash", href: "#wash" },
  { label: "Contact", href: "#contact" },
];

export const ticker = [
  "Truck wash",
  "Bus wash",
  "Heavy machinery",
  "Concrete",
  "Car parks",
  "Bin areas",
  "House washing",
];

// "from" prices, GST included. Every job is confirmed after a quick look or a few photos.
export const services: {
  icon: string;
  title: string;
  text: string;
  from: number | null;
  unit?: string;
}[] = [
  {
    icon: "truck",
    title: "Trucks and fleets",
    text: "Prime movers, trailers, rigids and B-doubles, hand washed at your depot overnight.",
    from: 105,
    unit: "per unit",
  },
  {
    icon: "bus",
    title: "Buses and coaches",
    text: "School buses, coaches and minibuses washed in the yard between runs.",
    from: 110,
    unit: "per bus",
  },
  {
    icon: "digger",
    title: "Heavy machinery",
    text: "Excavators, loaders, tractors and plant. Mud and grease off before service, sale or hire return.",
    from: 150,
    unit: "per machine",
  },
  {
    icon: "drive",
    title: "Concrete and driveways",
    text: "Oil, tyre marks, moss and grime lifted with a surface cleaner. No stripes.",
    from: 180,
  },
  {
    icon: "store",
    title: "Commercial and car parks",
    text: "Shopfronts, footpaths, forecourts, loading docks and gum. Before opening or after close.",
    from: null,
  },
  {
    icon: "bin",
    title: "Bin areas and drive-thrus",
    text: "Grease and stink removed with hot degreaser. Weekly or monthly runs.",
    from: 120,
  },
  {
    icon: "home",
    title: "House soft wash",
    text: "Brick, render and weatherboard. Low pressure and the right chemicals, safe on paint.",
    from: 350,
  },
  {
    icon: "spray",
    title: "Graffiti and stains",
    text: "Tags, rust, oil and paint overspray removed from brick, concrete and metal.",
    from: 150,
  },
];

export const promises = [
  "Fully insured",
  "We bring our own water",
  "Wash water captured, EPA compliant",
  "Before and after photos",
  "Fixed quote before we start",
  "Not happy? We come back free",
];

// Per wash, GST included. fleetPrice applies to each vehicle when 3 or more are washed in one visit.
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
  { name: "Bus or coach", detail: "Full exterior, wheels and windows", price: 180, fleetPrice: 160 },
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
    title: "Call or text",
    text: "Tell us what needs a clean, or send a few photos for a quote.",
  },
  {
    title: "We come to you",
    text: "Home, shop, depot or job site. We bring the water and the gear.",
  },
  {
    title: "Done",
    text: "Before and after photos sent to your phone. Pay when you're happy.",
  },
];

export const quoteTypes = [
  "Trucks or fleet",
  "Buses or coaches",
  "Heavy machinery",
  "Concrete or driveway",
  "Commercial or car park",
  "Bin area or drive-thru",
  "House wash",
  "Graffiti or stains",
  "Something else",
];
