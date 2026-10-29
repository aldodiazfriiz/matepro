// All copy for the site lives here. Edit this file, not the components.

export const site = {
  name: "MatePro",
  tagline: "The free truck map for Aussie drivers.",
  email: "hello@matepro.com.au",
};

export const nav = [
  { label: "The map", href: "#map" },
  { label: "Features", href: "#features" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  badge: "Coming soon to iPhone and Android",
  title: ["The truck map", "that knows", "your rig"],
  text: "Low bridges, load limits and truck routes on one map, checked against your truck's height and mass. Free for every driver, big enough to use with gloves on.",
};

// What the truck map shows
export const map = {
  title: "One map for everything that can stop a truck",
  text: "Put in your height, mass and combination once. MatePro warns you about anything on your route your rig won't fit.",
  layers: [
    { icon: "bridge", title: "Low bridges and clearances", text: "Every low bridge, tunnel and overhead on the route, flagged when it's lower than your load." },
    { icon: "weight", title: "Bridge and road load limits", text: "Mass limits on bridges and roads, checked against your GVM before you're committed." },
    { icon: "route", title: "B-double and road train routes", text: "See which roads are approved for your combination, from B-doubles up to road trains." },
    { icon: "alert", title: "No-truck roads and curfews", text: "Local truck bans, time curfews and restricted streets, so you're not turning around in a cul-de-sac." },
    { icon: "grade", title: "Steep grades and tight turns", text: "Long descents, steep climbs and corners that are tight for a long trailer, before you get there." },
    { icon: "scale", title: "Weigh and checking stations", text: "Where the weighbridges and heavy vehicle checking stations are on your run." },
  ],
};

// Each feature has a screen in Phone.tsx with the same id
export const features = [
  {
    id: "map",
    icon: "route",
    title: "Truck map",
    text: "Low bridges, load limits and truck routes on one map, with a warning before anything your rig won't clear.",
  },
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
    { icon: "truck", title: "Set to your rig", text: "Your height, mass and combination are saved once, so every warning is about your truck, not a car." },
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
      q: "Where does the map data come from?",
      a: "From public road authority and NHVR network data, plus reports from drivers on the road. We keep adding to it before launch.",
    },
    {
      q: "Can I rely on it instead of the signs?",
      a: "No. MatePro helps you plan, but always follow road signs, your permits and your own check of the clearance.",
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
