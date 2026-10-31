// All copy for the site lives here. Edit this file, not the components.

export const site = {
  name: "MatePro",
  tagline: "Mobile car wash and detailing, Melbourne-wide.",
  area: "Melbourne-wide",
  phone: "0494 733 274",
  phoneHref: "tel:+61494733274",
  email: "hello@matepro.com.au",
  // Square Appointments booking site
  bookingUrl: "https://book.squareup.com/appointments/n7ucco2ah9cp4i/location/L0YZVP4AM257B/services",
};

// Leave href empty until the account is live; the icon shows without a link
export const socials = [
  { label: "Facebook", icon: "facebook", href: "https://www.facebook.com/mateprocardetailing" },
  { label: "Instagram", icon: "instagram", href: "https://www.instagram.com/mateprocardetailing" },
  { label: "TikTok", icon: "tiktok", href: "https://www.tiktok.com/@mateprocardetailing" },
  { label: "YouTube", icon: "youtube", href: "" },
];

export const nav = [
  { label: "Mobile Wash", href: "/mobile-wash" },
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

// Starting prices in dollars by car size
export const packages: {
  name: string;
  text: string;
  prices: Record<Size, number>;
  // Square Appointments service id, so Book goes straight to this package
  squareId: string;
  includes: { title: "Exterior" | "Interior"; items: string[] }[];
  popular?: boolean;
}[] = [
  {
    name: "Mini Detail",
    text: "A quick freshen up inside and out.",
    prices: { small: 119, mid: 139, large: 159 },
    squareId: "GTHKXINBAZA4V5RVT24362SX",
    includes: [
      {
        title: "Exterior",
        items: [
          "Pre-rinse",
          "Wheels, tyres and arches cleaned",
          "Door and boot jambs pressure cleaned and dried",
          "Snow foam hand wash and dry",
          "Spray wax sealant",
          "Windows and mirrors cleaned",
          "Tyres glossed",
        ],
      },
      {
        title: "Interior",
        items: [
          "All surfaces wiped down",
          "Seats, under seats, carpets, boot, mats and compartments vacuumed",
          "Dash, console, trims and plastics cleaned and dressed",
          "Windows and mirrors cleaned",
          "Interior deodorised",
        ],
      },
    ],
  },
  {
    name: "Interior Detail",
    text: "Dog hair, work gear, beach sand. We get it all out.",
    prices: { small: 179, mid: 209, large: 229 },
    squareId: "JLJQVEONQ5JE3I45ZYTDOA3B",
    includes: [
      {
        title: "Interior",
        items: [
          "All surfaces wiped down",
          "Seats, under seats, carpets, boot, mats and compartments vacuumed",
          "Seats, carpets, boot and mats shampooed and steam cleaned",
          "Leather seats cleaned and conditioned",
          "Dash, console, trims and plastics cleaned and dressed",
          "Air vents, seat rails and sun visors cleaned",
          "Foot pedals cleaned",
          "Windows and mirrors cleaned inside and out",
          "Interior deodorised",
        ],
      },
    ],
  },
  {
    name: "Full Detail",
    text: "The lot, inside and out.",
    prices: { small: 299, mid: 349, large: 399 },
    squareId: "XBJ6BPWKAUJ5ERKYLLLMUMKC",
    popular: true,
    includes: [
      {
        title: "Exterior",
        items: [
          "Pre-rinse",
          "Bug splatter and road tar removed",
          "Wheels, tyres and arches cleaned",
          "Door, boot and fuel door jambs pressure cleaned and dried",
          "Snow foam hand wash and dry",
          "Spray wax sealant",
          "Rubbers and plastics glossed",
          "Windows and mirrors cleaned",
          "Tyres, arches and mud flaps glossed",
        ],
      },
      {
        title: "Interior",
        items: [
          "All surfaces wiped down",
          "Seats, under seats, carpets, boot, mats and compartments vacuumed",
          "Seats, carpets, boot and mats shampooed and steam cleaned",
          "Leather seats cleaned and conditioned",
          "Dash, console, trims and plastics cleaned and dressed",
          "Air vents, seat rails and sun visors cleaned",
          "Foot pedals cleaned",
          "Windows and mirrors cleaned",
          "Interior deodorised",
        ],
      },
    ],
  },
];

// Add-ons for Mini, Interior and Full Detail (the Extras modifier set in Square)
export const extras = {
  title: "Extras",
  text: "Tick when you book",
  items: [
    { name: "Pet hair removal", price: "From $49", text: "Dog and cat hair pulled out of carpets, seats and the boot." },
    { name: "Engine bay clean", price: "$49", text: "Engine bay degreased, wiped down and plastics dressed." },
  ],
};

export const priceNotes = [
  "Very dirty cars, heavy pet hair and oversized vehicles cost extra. We'll tell you before we start.",
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
      q: "Are there any extra costs?",
      a: "No. The price you see is the price you pay. The only time it changes is a very dirty car, a lot of pet hair or an oversized vehicle, and we'll tell you before we start.",
    },
    {
      q: "How do I book?",
      a: "Pick your package under Services on the Mobile Wash page and tap Book, then choose your car size and a day and time that suits. Rather talk to someone? Call or text us on 0494 733 274.",
    },
  ],
};

export const book = {
  title: "Book a wash",
  text: "Pick your package, car size and a time that suits. Rather talk to someone? Call or text us.",
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

// Terms and privacy pages
export const legal = {
  updated: "31 October 2026",
  terms: {
    title: "Terms of service",
    text: "The basics of booking a wash or detail with MatePro.",
    sections: [
      {
        h: "Who we are",
        p: [
          "MatePro is a mobile car wash and detailing service based in Melbourne's south east. We come to your home anywhere in Melbourne. You can reach us on 0494 733 274 or hello@matepro.com.au.",
        ],
      },
      {
        h: "Bookings",
        p: [
          "You book online through Square Appointments, or by calling or texting us. We may contact you to confirm the details before the day.",
          "We only wash cars at home, in your driveway. You need to be allowed to have the car washed there, and the car needs to be unlocked or the keys available for interior work.",
          "If you need to change or cancel, let us know as early as you can.",
        ],
      },
      {
        h: "Prices and payment",
        p: [
          "Prices on this site are starting prices. A very dirty car, a lot of pet hair or an oversized vehicle costs more. If so, we'll tell you the price before we start, not after.",
          "Payment is due when the job is done, by card at the car or by invoice.",
        ],
      },
      {
        h: "Your car",
        p: [
          "Please take out valuables and anything you don't want moved before we arrive. Let us know about any existing damage, loose trims or aftermarket parts.",
          "If you're not happy with something, tell us on the day or soon after and we'll do our best to put it right.",
        ],
      },
      {
        h: "Your rights",
        p: [
          "Nothing in these terms takes away your rights under the Australian Consumer Law.",
        ],
      },
      {
        h: "Changes",
        p: [
          "We may update these terms from time to time. The date at the top shows when they last changed.",
        ],
      },
    ],
  },
  privacy: {
    title: "Privacy policy",
    text: "What we collect when you use this site, and what we do with it.",
    sections: [
      {
        h: "What we collect",
        p: [
          "When you book a wash we collect your name, phone, email, address, the package and car size you pick, and any notes you add, like your car's make and model.",
          "When you sign up for updates we collect your email. When you send a franchise enquiry we collect your name, phone, email, suburb and message.",
        ],
      },
      {
        h: "How we use it",
        p: [
          "We use your details to reply to you, confirm and carry out your booking, and send the updates you asked for. We don't sell your details or share them with anyone for their own marketing.",
        ],
      },
      {
        h: "Who else handles it",
        p: [
          "Online bookings and card payments are handled by Square. Sign-up and enquiry forms are sent to us by email through Resend, and this site is hosted by Vercel. They handle your details only to provide those services to us.",
        ],
      },
      {
        h: "How long we keep it",
        p: [
          "We keep your details for as long as we need them to look after your bookings and our records, then delete them.",
        ],
      },
      {
        h: "Access and correction",
        p: [
          "You can ask to see, correct or delete the details we hold about you, or stop getting updates, by emailing hello@matepro.com.au.",
        ],
      },
      {
        h: "Complaints",
        p: [
          "If you have a privacy concern, email us first and we'll respond. If you're not happy with our answer, you can contact the Office of the Australian Information Commissioner at oaic.gov.au.",
        ],
      },
    ],
  },
};
