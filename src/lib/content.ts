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
  badge: "We come to you, Melbourne-wide",
  title: ["Your car,", "detailed in", "your driveway"],
  text: "Hand wash, interior and full details at your home or work. Pick a package, book a time, and we turn up with everything we need.",
};

// The scrolling strip under the hero
export const ticker = [
  "Hand wash",
  "Mini Detail",
  "Interior Detail",
  "Full Detail",
  "Ultimate Detail",
  "Ceramic coating",
  "We come to you",
  "Melbourne-wide",
];

export const sizes = [
  { id: "small", label: "Hatch / Sedan", short: "Sedan" },
  { id: "mid", label: "Small SUV / Wagon", short: "SUV" },
  { id: "large", label: "Large SUV / 4WD / 7 seater", short: "4WD" },
] as const;

export type Size = (typeof sizes)[number]["id"];

// Prices in dollars, GST included, by car size
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
    prices: { small: 120, mid: 139, large: 157 },
    includes: [
      "Hand wash and wax",
      "Chamois dry",
      "Seats, carpets and boot vacuumed",
      "Windows inside and out",
      "Dash, trims and tyres dressed",
      "Interior deodorised",
    ],
  },
  {
    name: "Interior Detail",
    text: "Kids, dogs, work gear. We get it all out.",
    prices: { small: 157, mid: 176, large: 194 },
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
    prices: { small: 232, mid: 269, large: 306 },
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
    text: "Full Detail plus a cut and polish.",
    prices: { small: 325, mid: 371, large: 418 },
    includes: [
      "Everything in the Full Detail",
      "Bug and tar removal",
      "Paint decontamination",
      "Cut and polish for light swirls",
      "Wheel arches and mud flaps dressed",
      "Foot pedals cleaned and sanitised",
    ],
  },
];

export const priceNotes = [
  "Prices include GST.",
  "Very dirty cars and pet hair cost extra. We'll tell you before we start.",
  "Ceramic coating and paint protection: ask for a quote.",
];

export const steps = [
  { title: "Book online or call", text: "Pick a package and tell us your car and suburb." },
  { title: "We confirm a time", text: "We call or text to lock in a day that suits you." },
  { title: "We come to you", text: "Home, work or the gym car park. You don't go anywhere." },
];

export const why = {
  title: "Why MatePro?",
  text: "A proper detail without losing your Saturday.",
  home: { title: "We come to you", text: "Your driveway, your office car park, wherever the car is. No driving to a car wash and waiting around." },
  prices: { title: "Clear prices", text: "Set prices by package and car size, listed right here. You know the cost before we start." },
  hand: { title: "Done by hand", text: "Hand washed and detailed panel by panel. No machine brushes near your paint." },
};

export const faq = {
  title: "Frequently asked questions",
  text: "The stuff people ask us most.",
  items: [
    {
      q: "Where do you go?",
      a: "All over Melbourne. We come to your home or work. Tell us your suburb when you book.",
    },
    {
      q: "Which size is my car?",
      a: "Hatches and sedans are the smallest price. Small SUVs and wagons are the middle. Large SUVs, 4WDs, utes and 7 seaters are the largest. Not sure? Put the make and model in the form.",
    },
    {
      q: "Can the price change?",
      a: "Only if the car is very dirty or has a lot of pet hair. If so, we'll tell you the price before we start, not after.",
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
