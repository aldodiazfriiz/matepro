// All copy for the site lives here. Edit this file, not the components.

export const site = {
  name: "MatePro",
  tagline: "The free app for Aussie truck drivers.",
  email: "hello@matepro.com.au",
};

export const nav = [
  { label: "Features", href: "#features" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  badge: "Coming soon to iPhone and Android",
  title: ["Meet MatePro", "Your mate on", "every run"],
  text: "Truck stops, diesel prices, pre-starts and expenses in one place. Free for every driver, big enough to use with gloves on.",
};

// Each feature has a screen in Phone.tsx with the same id
export const features = [
  {
    id: "stops",
    icon: "pin",
    title: "Truck stops and rest areas",
    text: "Find a bay, a shower or a feed on your route, with what's there before you pull off.",
  },
  {
    id: "diesel",
    icon: "fuel",
    title: "Diesel prices",
    text: "See who's cheapest up the road before you pull in, not after you've filled up.",
  },
  {
    id: "prestart",
    icon: "check",
    title: "Daily pre-start",
    text: "Tick it off, add photos of anything that needs looking at, done before you roll.",
  },
  {
    id: "expenses",
    icon: "note",
    title: "Trip and expense notes",
    text: "Diesel, tolls, a feed. Jot it down now and sort it out at tax time.",
  },
  {
    id: "community",
    icon: "users",
    title: "Driver community",
    text: "Road conditions, tips and a yarn with other drivers who know the run.",
  },
] as const;

export const why = {
  title: "Why MatePro?",
  text: "Made for the cab, not the office.",
  items: [
    { icon: "tag", title: "Free. No catch.", text: "Every feature, free for every driver. No trial that runs out halfway up the Hume." },
    { icon: "truck", title: "Made for the job", text: "Built around a real day on the road, from the pre-start to the last drop." },
    { icon: "sun", title: "Easy in the cab", text: "Big buttons and clear screens, easy with gloves on, at 4am or in full sun." },
  ],
};

export const faq = {
  title: "Frequently asked questions",
  text: "The stuff drivers ask us most.",
  items: [
    {
      q: "Is MatePro really free?",
      a: "Yes. MatePro is free for every driver.",
    },
    {
      q: "When can I get it?",
      a: "We're building it now. Join the list and we'll email you the day it's on the App Store and Google Play.",
    },
    {
      q: "Will it be on iPhone and Android?",
      a: "Both. Same app, same features.",
    },
    {
      q: "Does it replace my work diary?",
      a: "No. MatePro isn't an NHVR-approved electronic work diary, so keep using your approved diary for fatigue records.",
    },
    {
      q: "What will you email me?",
      a: "Only news about the app launch. No spam.",
    },
  ],
};

export const cta = {
  title: "Be first on the road with MatePro",
  text: "Join the list and get it the day it's out.",
};
