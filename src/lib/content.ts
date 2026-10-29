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
  { label: "Mobile Wash", href: "/mobile" },
  { label: "App", href: "/app" },
  { label: "Wash Bays", href: "/wash-bays" },
  { label: "Products", href: "/products" },
  { label: "Franchise", href: "/franchise" },
  { label: "FAQ", href: "/faq" },
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
  badge: "Coming soon",
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

export const shop = {
  badge: "Coming soon",
  title: ["The MatePro", "range"],
  text: "The same products we use on every wash, bottled under our own name. Leave your email and we'll tell you the day they're on sale.",
  chemicals: {
    title: "Wash and detail",
    items: [
      { slug: "snow-foam", name: "Snow Foam", text: "Thick foam that clings to the paint and loosens dirt before you touch it." },
      { slug: "car-shampoo", name: "Car Shampoo", text: "Slick, gentle wash for a safe hand wash, bucket after bucket." },
      { slug: "wheel-cleaner", name: "Wheel Cleaner", text: "Breaks down brake dust and road grime on wheels and arches." },
      { slug: "glass-cleaner", name: "Glass Cleaner", text: "Clear, streak-free windows and mirrors, inside and out." },
      { slug: "interior-detailer", name: "Interior Detailer", text: "Cleans and refreshes the dash, console, trims and plastics." },
      { slug: "tyre-shine", name: "Tyre Shine", text: "Deep black finish for tyres, the last touch on every wash." },
      { slug: "quick-detailer", name: "Quick Detailer", text: "Fast gloss and touch-ups between washes." },
      { slug: "bug-tar-remover", name: "Bug & Tar Remover", text: "Lifts bug splatter and road tar from paint and glass." },
    ],
  },
  accessories: {
    title: "Accessories",
    items: [
      { slug: "wash-mitt", name: "Wash Mitt", text: "Plush chenille mitt that holds suds and glides over the paint." },
      { slug: "drying-towel", name: "Drying Towel", text: "Thick microfibre that dries a whole car without streaks." },
      { slug: "wheel-brush", name: "Wheel Brush", text: "Soft bristles that reach between spokes and behind the rim." },
      { slug: "foam-cannon", name: "Foam Cannon", text: "Fits a pressure washer and lays down thick snow foam." },
    ],
  },
  form: {
    title: "Be first to know",
    text: "Leave your email and we'll let you know the day the MatePro range goes on sale.",
  },
};

export const carWash = {
  badge: "Coming soon",
  title: ["MatePro", "Car Wash"],
  text: "Wash it yourself in a hand-wash bay, or stay in the car and drive through the touchless automatic. Coming soon to Melbourne.",
  ways: {
    title: "Two ways to wash",
    items: [
      {
        image: "/carwash/bay.jpg",
        title: "Hand-wash bays",
        text: "Wash it your way. High-pressure wands, foam brushes and spot-free rinse in every bay.",
        points: ["Pay by card or phone at the bay", "Snow foam, wash, rinse and wax settings", "Room for utes and 4WDs"],
      },
      {
        image: "/carwash/auto.jpg",
        title: "Touchless automatic",
        text: "Stay in the car. Water and foam do the work, and no brushes touch your paint.",
        points: ["Drive in, pick a wash, drive out", "No brushes, no swirl marks", "Done in a few minutes"],
      },
    ],
  },
  menu: {
    title: "Automatic wash menu",
    text: "Prices announced on opening day.",
    items: [
      { name: "Basic", includes: ["Pre-soak", "High-pressure wash", "Spot-free rinse"] },
      { name: "Premium", includes: ["Everything in Basic", "Snow foam", "Wheel clean", "Underbody wash"], popular: true },
      { name: "Ultimate", includes: ["Everything in Premium", "Wax protectant", "Tyre shine", "Blow dry"] },
    ],
  },
  form: {
    title: "Be there on opening day",
    text: "Leave your email and we'll tell you when the MatePro Car Wash opens, and where.",
  },
};

export const app = {
  badge: "Coming soon",
  title: ["The MatePro", "app"],
  text: "A home for Melbourne car people. Show off your ride, meet other owners, book a wash in a few taps, and play Foam Frenzy, the game built right in. Coming soon to iPhone and Android.",
  features: {
    title: "More than a booking app",
    items: [
      { icon: "users", title: "Car community", text: "Post your car, see what other Melbourne owners are driving, and swap tips." },
      { icon: "pin", title: "Meets and events", text: "Find car meets and MatePro events near you, and see who's going." },
      { icon: "tick", title: "Book in seconds", text: "Pick your package, car and time. Your details are saved for next time." },
      { icon: "tag", title: "Points and rewards", text: "Earn points for washes, posts and Foam Frenzy scores, then swap them for money off." },
    ],
  },
  game: {
    title: "Foam Frenzy",
    text: "The game built into the MatePro app. Pop the foam bubbles before they dry. Give it a go right here.",
    note: "In the app, your score will earn points toward money off your next wash.",
  },
  form: {
    title: "Be first to download it",
    text: "Leave your email and we'll send you the link the day the MatePro app is out.",
  },
};
