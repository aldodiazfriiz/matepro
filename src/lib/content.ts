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
  { label: "Prices", href: "/#prices" },
  { label: "FAQ", href: "/#faq" },
  { label: "Franchise", href: "/franchise" },
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
  "Steam cleaning",
  "Seat shampoo",
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
    prices: { small: 89, mid: 99, large: 109 },
    includes: [
      "Snow foam hand wash and dry",
      "Wheels, tyres and door jambs cleaned",
      "Spray wax sealant",
      "Windows and mirrors cleaned",
      "Seats, carpets and boot vacuumed",
      "Dash and trims cleaned, tyres glossed",
      "Interior deodorised",
    ],
  },
  {
    name: "Interior Detail",
    text: "Kids, dogs, work gear. We get it all out.",
    prices: { small: 129, mid: 149, large: 169 },
    includes: [
      "Full interior vacuum and wipe-down",
      "Seats and carpets shampooed and steam cleaned",
      "Boot and floor mats steam cleaned",
      "Leather cleaned and conditioned",
      "Windows and mirrors cleaned inside",
      "Interior deodorised",
    ],
  },
  {
    name: "Full Detail",
    text: "The lot, inside and out.",
    prices: { small: 219, mid: 259, large: 289 },
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
];

export const priceNotes = [
  "Prices include GST.",
  "Very dirty cars, pet hair and oversized vehicles cost extra. We'll tell you before we start.",
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
      q: "Do you do polishing or ceramic coating?",
      a: "No. We stick to what we do best: hand washing and interior detailing.",
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

export const franchise = {
  badge: "MatePro franchise",
  title: ["Run your own", "MatePro"],
  text: "We're looking for owner-operators to take MatePro to more Melbourne driveways. Register your interest and we'll call you for a chat.",
  offer: {
    title: "What you get",
    text: "Everything you need to start washing cars under the MatePro name.",
    items: [
      { icon: "tag", title: "The MatePro brand", text: "Logo, ute signage and workwear, so customers know who's pulling up." },
      { icon: "pin", title: "Bookings in your area", text: "Customers book on matepro.com.au and the jobs near you come to you." },
      { icon: "note", title: "Set packages and prices", text: "Mini, Interior and Full Detail, already priced to win work in Melbourne." },
      { icon: "card", title: "Payments sorted", text: "Card at the car and PayID invoices, set up from day one." },
      { icon: "check", title: "The MatePro way", text: "Step by step how we wash and detail each package, so every job looks the same." },
      { icon: "phone", title: "Someone to call", text: "Questions on a job or a customer? You're not on your own." },
    ],
  },
  who: {
    title: "Who we're looking for",
    items: [
      "You've got a ute or van, or can get one",
      "You have an ABN, or you're happy to get one",
      "You're reliable, tidy and good with customers",
      "You want to be your own boss and set your own hours",
    ],
  },
  faq: {
    title: "Franchise questions",
    text: "The things people ask before they get in touch.",
    items: [
      {
        q: "How much does it cost?",
        a: "We'll go through all the costs on a call. Before you sign anything you'll get a full disclosure document, as the Franchising Code requires.",
      },
      {
        q: "Do I need detailing experience?",
        a: "No. We'll show you how we do each package. You need to be keen, careful and good with people.",
      },
      {
        q: "Which areas are available?",
        a: "Suburbs across Melbourne. Tell us where you live in the form and we'll let you know what's open near you.",
      },
      {
        q: "Do I need my own vehicle?",
        a: "Yes, a ute or van to carry the water tank and gear. We can talk through options if you don't have one yet.",
      },
    ],
  },
  form: {
    title: "Register your interest",
    text: "No cost, no commitment. Leave your details and we'll call you for a chat.",
  },
};
