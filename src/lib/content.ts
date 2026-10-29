// All copy for the site lives here. Edit this file, not the components.

export const site = {
  name: "MatePro",
  tagline: "Mobile car wash and detailing, Melbourne-wide.",
  area: "Melbourne-wide",
  phone: "0494 733 274",
  phoneHref: "tel:+61494733274",
  email: "hello@matepro.com.au",
};

export const nav = [
  { label: "Prices", href: "#prices" },
  { label: "How it works", href: "#how" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  badge: "We come to your home, Melbourne-wide",
  title: ["Your car,", "detailed in", "your driveway"],
  text: "Hand wash, interior and full details in your driveway at home. Pick a package, book a time, and we turn up with everything we need.",
};

// The scrolling strip under the hero
export const ticker = [
  "Hand wash",
  "Mini Detail",
  "Interior Detail",
  "Full Detail",
  "Ultimate Detail",
  "Ceramic coating",
  "We come to your home",
  "Melbourne-wide",
];

export const sizes = [
  { id: "small", label: "Hatch / Sedan", short: "Sedan" },
  { id: "mid", label: "Small SUV / Wagon", short: "SUV" },
  { id: "large", label: "Large SUV / 4WD / 7 seater", short: "4WD" },
] as const;

export type Size = (typeof sizes)[number]["id"];

// Starting prices in dollars, GST included, by car size
export const packages: {
  name: string;
  text: string;
  prices: Record<Size, number>;
  includes: string[];
  popular?: boolean;
}[] = [
  {
    name: "Mini Detail",
    text: "A quick freshen up inside and out.",
    prices: { small: 116, mid: 134, large: 152 },
    includes: [
      "Hand wash and wax",
      "Chamois dry",
      "Seats, carpets and boot vacuumed",
      "Windows inside and out, ashtrays cleaned",
      "Dash, trims and tyres dressed",
      "Interior deodorised",
    ],
  },
  {
    name: "Interior Detail",
    text: "Kids, dogs, work gear. We get it all out.",
    prices: { small: 152, mid: 170, large: 188 },
    includes: [
      "Seats, carpets and boot vacuumed",
      "Seats and carpets shampooed",
      "Trims cleaned and dressed",
      "Windows and mirrors inside and out",
      "Sun visors cleaned",
      "Interior deodorised",
    ],
  },
  {
    name: "Full Detail",
    text: "The lot, inside and out.",
    prices: { small: 224, mid: 260, large: 296 },
    popular: true,
    includes: [
      "Snow foam hand wash and wax",
      "Wheels, tyres and brake dust",
      "Door, boot and fuel jambs cleaned",
      "Seats, carpets, boot and mats steam cleaned",
      "Leather cleaned and conditioned",
      "Dash, console, vents and trims detailed",
    ],
  },
  {
    name: "Ultimate Detail",
    text: "Inside and out, plus a cut and polish.",
    prices: { small: 314, mid: 359, large: 404 },
    includes: [
      "Snow foam hand wash and wax",
      "Bug and tar removal, paint decontamination",
      "Cut and polish for light swirls",
      "Wheel arches, mud flaps and tyres dressed",
      "Seats, carpets, boot and mats steam cleaned",
      "Leather, dash, console and pedals detailed",
    ],
  },
];

export const priceNotes = [
  "Prices include GST.",
  "Very dirty cars, pet hair and oversized vehicles cost extra. We'll tell you before we start.",
  "Ceramic coating and paint protection: ask for a quote.",
];

export const steps = [
  { title: "Book online or call", text: "Pick a package and tell us your car and suburb." },
  { title: "We confirm a time", text: "We call or text to lock in a day that suits you." },
  { title: "We come to your home", text: "We wash it in your driveway. You don't go anywhere." },
];

export const why = {
  title: "Why MatePro?",
  text: "A proper detail without losing your Saturday.",
  home: { title: "We come to your home", text: "Right in your driveway. No driving to a car wash and waiting around." },
  prices: { title: "Clear prices", text: "Set prices by package and car size, listed right here. You know the cost before we start." },
  hand: { title: "Done by hand", text: "Hand washed and detailed panel by panel. No machine brushes near your paint." },
};

export const faq = {
  title: "Frequently asked questions",
  text: "The stuff people ask us most.",
  items: [
    {
      q: "Where do you go?",
      a: "All over Melbourne. We come to your home and wash the car in your driveway. Tell us your suburb when you book.",
    },
    {
      q: "Can you come to my work?",
      a: "Not right now. We only do home washes, in your driveway.",
    },
    {
      q: "Which size is my car?",
      a: "Hatches and sedans are the smallest price. Small SUVs and wagons are the middle. Large SUVs, 4WDs, utes and 7 seaters are the largest. Not sure? Put the make and model in the form.",
    },
    {
      q: "Can the price change?",
      a: "The prices are starting prices. A very dirty car, a lot of pet hair or an oversized vehicle costs more. If so, we'll tell you the price before we start, not after.",
    },
    {
      q: "Do you do ceramic coating?",
      a: "Yes. It depends on the car and the paint, so send us a booking request and we'll quote it.",
    },
    {
      q: "Do the prices include GST?",
      a: "Yes. The price you see is the price you pay.",
    },
    {
      q: "How do I book?",
      a: "Fill in the form below or call us. We'll get back to you to confirm a day and time.",
    },
  ],
};

export const book = {
  title: "Book a wash",
  text: "Tell us your car and suburb. We'll call or text to confirm a time.",
};
