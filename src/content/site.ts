/**
 * River Apps website content.
 *
 * Edit this file to change copy, links, and placeholders.
 *
 * Visible placeholder chips are the yellow dashed labels on the site.
 * They are any string below that still starts with "[" and ends with "]".
 * Replace the whole string with the real value and the chip styling drops
 * away. Leave a string as-is until the founder has approved the real value.
 *
 * Image slots: set `src` to a file in /public (for example
 * "/partners/station.png"). While `src` is empty, the dashed box stays.
 * When you add an image, replace `label` with a short description so it
 * can be used as the alt text.
 *
 * Do not add numbers, testimonials, customer counts, or partner names
 * that are not already in this file. The copy comes from the approved
 * design.
 *
 * Partner form delivery is NOT configured here. See
 * src/lib/partner-form.ts (`submitPartnerLead`).
 */

/**
 * Public URL of this marketing site. Used for canonical links, Open Graph,
 * sitemap, and robots.
 *
 * Confirm before launch. app.riverph.com is already the product workspace;
 * this default assumes the marketing site lives on the apex domain.
 */
export const siteUrl = "https://riverph.com";

export const company = {
  brand: "River Apps",
  legalName: "River Tech Inc.",
  founder: "Jimboy Regalado",
  country: "Philippines",
  region: "Metro Manila",
  copyrightYear: 2026,
  contactEmail: "[Contact email]",
  officeAddress: "[Office address]",
  /** Leave the list empty to keep the [Social links] footer chip. */
  socialLinksLabel: "[Social links]",
  socialProfiles: [] as { label: string; href: string }[],
  privacy: { label: "[Privacy]", href: "" },
  terms: { label: "[Terms]", href: "" },
  /**
   * Journey page "Follow our journey" button.
   * Leave href empty to keep the [Social link] chip inside the button.
   */
  followJourney: { href: "", label: "[Social link]" },
  footerNote: "Built in the Philippines 🇵🇭 · Starting in Metro Manila",
  motto: "Innovation · Automation · Growth",
};

export const links = {
  signIn: "https://app.riverph.com",
  smartRefill: "https://smartrefill.io",
  workspace: "https://app.riverph.com",
};

export const seo = {
  siteName: "River Apps",
  themeColor: "#06071a",
  ogImage: "/web-cover.png",
  ogImageAlt: "River Apps. Digitize. Connect. Grow.",
  ogImageWidth: 1920,
  ogImageHeight: 640,
  logo: "/assets/river-icon-white.png",
  logoMark: "/assets/river-icon-white-trim.png",
  home: {
    title: "River Apps: AI-powered operations for local business",
    description:
      "River Apps is the AI-powered platform that helps local businesses in the Philippines go digital. River Mobile connects households to all their local providers.",
  },
  journey: {
    title: "Our Journey | River Apps",
    description:
      "The River Apps journey: Smart Refill, River for Business, River Mobile and what's next.",
  },
};

export const nav = {
  signIn: "Sign in",
  partner: "Partner with us",
  menuLabel: "Menu",
  items: [
    { label: "Businesses", href: "/#industries" },
    { label: "AI", href: "/#ai" },
    { label: "River Mobile", href: "/#river-mobile" },
    { label: "Products", href: "/#products" },
    { label: "Journey", href: "/journey" },
    { label: "About", href: "/#about" },
  ],
};

export const footer = {
  blurb:
    "AI-powered technology for local businesses, and one app that connects every household to them.",
  wordmark: "River",
  columns: [
    {
      title: "Businesses",
      links: [
        { label: "Industries", href: "/#industries" },
        { label: "AI built in", href: "/#ai" },
        { label: "Partner with us", href: "/#partner" },
        { label: "Sign in", href: links.signIn },
      ],
    },
    {
      title: "Products",
      links: [
        { label: "Smart Refill", href: links.smartRefill },
        { label: "Mylaundry.ph", href: "/#products" },
        { label: "Mycarwash.ph", href: "/#products" },
        { label: "River for Business", href: links.workspace },
      ],
    },
    {
      title: "River Mobile",
      links: [
        { label: "For households", href: "/#river-mobile" },
        { label: "App Store (coming soon)", href: "/#river-mobile" },
        { label: "Google Play (coming soon)", href: "/#river-mobile" },
      ],
    },
  ],
  companyTitle: "Company",
};

export const hero = {
  eyebrowKicker: "AI",
  eyebrow: "AI-powered operations for local business",
  titleLead: "Digitize. Connect.",
  titleAccent: "Grow.",
  subBefore: "River Apps is the ",
  subStrong1: "AI-powered platform",
  subMiddle: " that helps water refilling stations, laundry shops, carwashes and more run smarter. ",
  subStrong2: "River Mobile",
  subAfter: " is the bridge that connects every household to them.",
  ctaBusiness: { label: "For Businesses", href: "#industries" },
  ctaCustomers: { label: "For Customers: River Mobile", href: "#river-mobile" },
  motto: ["Innovation", "Automation", "Growth"],
  tags: [
    { title: "AI Dashboard", detail: "Your day at a glance" },
    { title: "River Mobile", detail: "Customer app" },
    { title: "Refill Forecaster", detail: "Predicts next refills" },
    { title: "Smart Scan", detail: "Gallon QR to order" },
    { title: "Rider Tracking", detail: "Live delivery status" },
    { title: "River Insights", detail: "Trends from your data" },
  ],
  dashboard: {
    product: "Smart Refill",
    url: "smartrefill.io",
    greeting: "Good morning 👋",
    greetingSub: "Here's your station today",
    search: "Search orders",
    summary: "AI summary · What needs attention",
    points: [
      "Stock running low on caps & seals",
      "Regular customers due for a refill",
      "Afternoon demand expected to rise",
      "Water quality (TDS) update ready to share",
    ],
    kpis: ["Orders", "Deliveries", "Stock", "Riders out"],
    chart: "Demand · Refill Forecaster",
    actual: "Actual",
    forecast: "Forecast",
    columns: ["Order", "Rider", "Status"],
    statuses: ["Delivered", "On the way", "Preparing"],
    scan: "Smart Scan",
    scanReady: "Ready",
    scanHint: "Scan a gallon to start an order",
    quality: "Water quality",
    tds: "TDS updated",
    tdsSub: "Shared with customers",
    riders: "Riders",
    riderNames: ["Rider A", "Rider B", "Rider C"],
  },
};

export const partnerLogos = {
  caption: "Partner stations and businesses",
  note: "[Partner logos, add once approved]",
  /**
   * Six slots, matching the approved row. Set src (and optionally href
   * and name) when a logo is approved. Name is the chip text until then.
   */
  slots: [
    { name: "[Partner logo]", src: "", href: "" },
    { name: "[Partner logo]", src: "", href: "" },
    { name: "[Partner logo]", src: "", href: "" },
    { name: "[Partner logo]", src: "", href: "" },
    { name: "[Partner logo]", src: "", href: "" },
    { name: "[Partner logo]", src: "", href: "" },
  ],
};

export const about = {
  label: "One river, two sides",
  titleLead: "Built for the businesses.",
  titleAccent: "Made for their customers.",
  lead: "Your suki water station, laundry shop and carwash still run on notebooks, group chats and phone calls. River connects both sides on one platform.",
  businessKicker: "River Apps · for businesses",
  businessTitle: "Run your shop smarter",
  businessBody:
    "AI-powered operations software built for how Philippine local businesses actually work.",
  businessPoints: [
    "Orders, deliveries and riders in one place",
    "Inventory that tells you before you run low",
    "AI Dashboard, forecasting and insights",
    "Team Hub for staff, salary and time-in",
  ],
  customerKicker: "River Mobile · for households",
  customerTitle: "All your suki, in one app",
  customerBody: "The bridge between your home and the local providers you already trust.",
  customerPoints: [
    "Scan the QR on your gallon to reorder",
    "Order from your providers in a few taps",
    "Track your rider in real time",
    "Launching soon on App Store & Google Play",
  ],
};

export const ai = {
  eyebrowKicker: "AI",
  eyebrow: "AI built in",
  titleLead: "AI that helps local businesses",
  titleAccent: "run themselves.",
  lead: "Intelligence isn't an add-on. It's built into how River products work, so owners spend less time on busywork and more time serving customers.",
  foot: "AI features are available in Smart Refill today, with more River products to follow.",
  dashboard: {
    tag: "AI Dashboard",
    title: "Your whole day, summarized.",
    body: "A smart overview of the station's day: orders, deliveries, stock, and what needs your attention right now.",
    glance: ["Orders", "Deliveries", "Stock", "Riders"],
    needs: "Needs attention",
    rows: [
      {
        title: "Stock is running low",
        body: "Reorder caps and seals before the afternoon rush",
        pill: "Inventory",
        pillClass: "s3",
      },
      {
        title: "Regular customers due for a refill",
        body: "Based on their usual refill rhythm",
        pill: "Forecast",
        pillClass: "s1",
      },
      {
        title: "Deliveries waiting for a rider",
        body: "Assign now to stay on schedule",
        pill: "Riders",
        pillClass: "s2",
      },
      {
        title: "Water quality update ready",
        body: "Share the latest TDS reading with customers",
        pill: "Quality",
        pillClass: "s1",
      },
    ],
    illustrative: "Illustrative example",
  },
  scan: {
    tag: "Smart Scan",
    title: "Scan. Know. Order.",
    body: "Scan gallon QR codes to identify the customer and container and create orders fast.",
    result: "Customer & container found. Order ready.",
  },
  forecast: {
    tag: "Refill Forecaster",
    title: "See demand before it arrives.",
    body: "Predicts when customers will need their next refill and what the station's demand will be, so you can plan stock and riders.",
  },
  insights: {
    tag: "River Insights",
    title: "Trends you can act on.",
    body: "Business insights and trends drawn from your own station data.",
    tags: ["Busiest days", "Repeat customers", "Delivery patterns", "Product mix"],
  },
  automated: {
    status: "Coming soon",
    title: "Automated refills & reminders",
    body: "AI-powered reminders and automated refill orders, so customers never run dry and stations can plan ahead.",
    steps: ["Forecast", "Reminder", "Refill order"],
  },
};

export interface IndustryFeature {
  text: string;
  ai?: boolean;
}

export interface IndustryTab {
  id: "t1" | "t2" | "t3" | "t4";
  panel: "p1" | "p2" | "p3" | "p4";
  tab: string;
  statusClass: "live" | "soon" | "plan";
  status: string;
  title: string;
  body: string;
  features?: IndustryFeature[];
  cta: { label: string; href: string };
  photoLabel: string;
  photoSrc: string;
  photoAlt: string;
}

export const industries = {
  label: "Built for local services",
  titleLead: "Expertise across",
  titleAccent: "industries",
  lead: "Purpose-built apps for each kind of neighborhood business, starting with water refilling stations in Metro Manila.",
  tabs: [
    {
      id: "t1",
      panel: "p1",
      tab: "💧 Water Refill",
      statusClass: "live",
      status: "Live · Smart Refill",
      title: "Water Refill",
      body: "Smart Refill runs the whole station, from the first order to the last delivery, with AI that helps you plan ahead.",
      features: [
        { text: "Orders & deliveries" },
        { text: "Rider management" },
        { text: "Inventory" },
        { text: "Water quality / TDS" },
        { text: "AI Dashboard", ai: true },
        { text: "Smart Scan", ai: true },
        { text: "Refill Forecaster", ai: true },
        { text: "River Insights", ai: true },
      ],
      cta: { label: "Explore Smart Refill", href: links.smartRefill },
      photoLabel: "[Photo: water refilling station]",
      photoSrc: "",
      photoAlt: "",
    },
    {
      id: "t2",
      panel: "p2",
      tab: "🧺 Laundry",
      statusClass: "soon",
      status: "Coming soon · Mylaundry.ph",
      title: "Laundry",
      body: "Pickups, loads, turnaround and customer updates for laundry shops, connected to River Mobile.",
      cta: { label: "Join the early list", href: "#partner" },
      photoLabel: "[Photo: laundry shop]",
      photoSrc: "",
      photoAlt: "",
    },
    {
      id: "t3",
      panel: "p3",
      tab: "🚗 Carwash",
      statusClass: "soon",
      status: "Coming soon · Mycarwash.ph",
      title: "Carwash",
      body: "Bookings, queues and service tracking for carwashes, connected to River Mobile.",
      cta: { label: "Join the early list", href: "#partner" },
      photoLabel: "[Photo: carwash]",
      photoSrc: "",
      photoAlt: "",
    },
    {
      id: "t4",
      panel: "p4",
      tab: "＋ More soon",
      statusClass: "plan",
      status: "Planned",
      title: "More local services",
      body: "River is built to bring more neighborhood businesses online over time. Run a different kind of local service? Tell us.",
      cta: { label: "Talk to us", href: "#partner" },
      photoLabel: "[Photo: local business]",
      photoSrc: "",
      photoAlt: "",
    },
  ] satisfies IndustryTab[],
};

export const riverMobile = {
  eyebrowKicker: "Soon",
  eyebrow: "River Mobile · for households",
  titleLead: "Your home,",
  titleAccent: "connected",
  titleAfter: "to every local provider.",
  lead: "Water, laundry, carwash: one app for all your suki. Wala nang hanapan ng number, wala nang “Kuya, nasaan na po?”",
  features: [
    { title: "Scan & refill", body: "Scan the QR on your gallon to reorder." },
    { title: "Order in the app", body: "Book from your providers in a few taps." },
    { title: "Track your rider", body: "Know exactly when it arrives." },
    { title: "Easy reorders", body: "Your usual order, one tap away." },
  ],
  stores: [
    { small: "Coming soon on the", name: "App Store", badge: "SOON" },
    { small: "Coming soon on", name: "Google Play", badge: "SOON" },
  ],
  floats: [
    { title: "Scan QR" },
    { title: "Rider Tracking" },
    { title: "Refill reminders", detail: "Coming soon" },
  ],
  phone: {
    greeting: "Magandang araw!",
    name: "River Mobile",
    rider: "Your rider is on the way",
    orderBefore: "2 × 5-gal refill · ",
    stationName: "[Station name]",
    tiles: [
      { icon: "💧", label: "Water", state: "Live" },
      { icon: "🧺", label: "Laundry", state: "Soon" },
      { icon: "🚗", label: "Carwash", state: "Soon" },
    ],
    usual: "Your usual",
    usualSub: "One tap to reorder",
  },
};

export const products = {
  label: "Our products",
  titleLead: "We build the tools",
  titleAccent: "local businesses run on.",
  lead: "One ecosystem, built vertical by vertical. Every product is connected to River Mobile and the River for Business workspace.",
  smartRefill: {
    name: "Smart Refill",
    href: links.smartRefill,
    status: "Live",
    domain: "smartrefill.io",
    body: "The AI-powered operating system for water refilling stations, from the first order to the last delivery.",
    chips: ["Orders", "Deliveries", "Riders", "Inventory", "Water quality / TDS"],
    aiChips: ["AI Dashboard", "Smart Scan", "Refill Forecaster", "River Insights"],
    cta: "Visit smartrefill.io",
    screenshotLabel: "[Screenshot: Smart Refill dashboard]",
    screenshotSrc: "",
    screenshotAlt: "",
  },
  laundry: {
    name: "Mylaundry.ph",
    href: "#partner",
    status: "Coming soon",
    domain: "mylaundry.ph",
    body: "Operations and customer updates for laundry shops.",
    chips: ["Pickup & delivery", "Load tracking", "Customer updates"],
    aiChips: ["Connected to River Mobile"],
    cta: "Join the early list",
    icon: "🧺",
  },
  carwash: {
    name: "Mycarwash.ph",
    href: "#partner",
    status: "Coming soon",
    domain: "mycarwash.ph",
    body: "Bookings, queues and service tracking for carwashes.",
    chips: ["Bookings", "Queues", "Service tracking"],
    aiChips: ["Connected to River Mobile"],
    cta: "Join the early list",
    icon: "🚗",
  },
  workspace: {
    name: "River for Business",
    href: links.workspace,
    domain: "app.riverph.com",
    body: "A shared workspace for owners and teams.",
    modules: [
      { title: "Collaboration", detail: "Docs" },
      { title: "Team Hub", detail: "Staff · salary · time-in" },
      { title: "Files", detail: "Shared storage" },
      { title: "Automation", detail: "Less manual work" },
    ],
    cta: "Open workspace",
  },
  mobile: {
    name: "River Mobile",
    href: "#river-mobile",
    status: "Launching soon",
    domain: "iOS · Android",
    body: "One customer app that connects households to all their local providers: scan your gallon's QR or order in the app, then track your rider.",
    cta: "Meet River Mobile",
  },
};

export const howItWorks = {
  label: "How it works",
  titleLead: "A simple loop that",
  titleAccent: "grows with you.",
  steps: [
    {
      num: "01",
      who: "Business",
      title: "Your business joins River",
      body: "Set up your shop on River Apps: orders, riders, inventory, team and AI tools, ready to go.",
    },
    {
      num: "02",
      who: "Customers",
      title: "Customers connect via River Mobile",
      body: "Households find you, scan your QR and order straight from their phones.",
    },
    {
      num: "03",
      who: "Growth",
      title: "Repeat orders grow",
      body: "Easy reorders, forecasting and insights keep customers coming back.",
    },
  ],
};

export const journeyPreview = {
  label: "Journey & updates",
  titleLead: "Follow the",
  titleAccent: "River journey.",
  cta: "View full timeline",
  cards: [
    {
      cover: "River Mobile\nis built.",
      statusClass: "live" as const,
      status: "Done",
      date: "Sep 2026",
      title: "River Mobile customer app is fully developed",
      body: "Scan, order and track, ready for beta with station customers.",
      cta: "Read the journey",
      tone: "c1",
    },
    {
      cover: "Beta, then\nthe stores.",
      statusClass: "soon" as const,
      status: "Upcoming",
      date: "Oct 2026",
      title: "Closed beta, then App Store & Google Play submission",
      body: "Closed beta Oct 5–19, store submission Oct 20.",
      cta: "See the timeline",
      tone: "c2",
    },
    {
      cover: "Soft launch\nin Parañaque.",
      statusClass: "soon" as const,
      status: "Upcoming",
      date: "Oct 27, 2026",
      title: "Soft launch with 5 partner stations",
      body: "Starting in Parañaque, then expanding across Metro Manila.",
      cta: "See what's next",
      tone: "c3",
    },
  ],
};

export const partner = {
  eyebrowKicker: "Now",
  eyebrow: "Onboarding partner stations",
  titleLead: "Bring your station",
  titleMid: "onto",
  titleAccent: "River.",
  lead: "We're onboarding water refilling stations first, starting in Metro Manila, with laundry shops and carwashes next. Tell us about your business and our team will reach out.",
  checks: [
    "Guided onboarding from the River team",
    "AI tools built in from day one",
    "Be discoverable on River Mobile at launch",
  ],
  pricingLabel: "Pricing:",
  pricing: "[Pricing / free trial details]",
  formTitle: "Partner interest form",
  formIntro: "Takes less than a minute. Walang bayad para mag-inquire.",
  submit: "Send my details",
  fine: "By submitting, you agree to be contacted by River Tech Inc.",
  privacy: "[Privacy policy link]",
  fields: {
    name: { label: "Full name", placeholder: "Juan Dela Cruz" },
    type: {
      label: "Business type",
      options: ["Water refilling station", "Laundry shop", "Carwash", "Other"],
    },
    city: { label: "City", placeholder: "e.g. Parañaque" },
    mobile: { label: "Mobile number", placeholder: "09XX XXX XXXX" },
  },
};

export type TimelineKind = "past" | "up" | "plan";

export interface TimelineEvent {
  kind: TimelineKind;
  side: "l" | "r";
  /** A [bracketed] value renders as a placeholder chip. */
  date: string;
  pulse?: boolean;
  badge: string;
  title: string;
  body: string;
  tags: string[];
  href?: string;
  ai?: boolean;
}

export const journey = {
  eyebrowKicker: "Journey",
  eyebrow: "Building in the Philippines",
  titleLead: "From one station",
  titleMid: "to a",
  titleAccent: "connected city.",
  lead: "River started with a simple idea: local businesses deserve great technology, and their customers deserve an easier way to reach them. Here's how far we've come, and where we're going next.",
  legend: [
    { className: "past", label: "Done / live" },
    { className: "up", label: "Upcoming" },
    { className: "plan", label: "Planned" },
  ],
  /** Inserted on the timeline where past events meet upcoming ones. */
  nowLabel: "● We are here · Sep 2026",
  aiNote: "AI built in",
  aiTags: ["AI Dashboard", "Smart Scan", "Refill Forecaster", "River Insights"],
  events: [
    {
      kind: "past",
      side: "l",
      date: "[Year founded]",
      badge: "Founded",
      title: "River Tech Inc. is founded",
      body: "Jimboy Regalado starts River Tech Inc. to help local businesses go digital.",
      tags: ["Company"],
    },
    {
      kind: "past",
      side: "r",
      date: "[Date]",
      badge: "Live",
      title: "Smart Refill launches",
      body: "An operations platform for water refilling stations: orders, deliveries, riders, inventory and water quality/TDS updates. Now live with 5 stations in Metro Manila.",
      tags: ["Water refill", "Metro Manila"],
      href: links.smartRefill,
      ai: true,
    },
    {
      kind: "past",
      side: "l",
      date: "[Date]",
      badge: "Live",
      title: "River for Business workspace",
      body: "A shared workspace at app.riverph.com with Collaboration, Team Hub (staff, salary, time-in), Files and Automation.",
      tags: ["Workspace", "Teams"],
      href: links.workspace,
    },
    {
      kind: "past",
      side: "r",
      date: "[Date]",
      badge: "Built",
      title: "River Kit and KawaniHub",
      body: "River Kit, our white-label app template, and KawaniHub, a government constituent-service app built on it.",
      tags: ["Platform", "White-label"],
    },
    {
      kind: "past",
      side: "l",
      date: "Sep 2026",
      pulse: true,
      badge: "Done",
      title: "River Mobile is fully developed",
      body: "The customer app that bridges households and their local providers: scan your gallon's QR or order in the app, then track your rider.",
      tags: ["River Mobile", "iOS", "Android"],
    },
    {
      kind: "up",
      side: "r",
      date: "Oct 5–19, 2026",
      badge: "Upcoming",
      title: "Closed beta with station customers",
      body: "River Mobile goes into the hands of real station customers for a closed beta.",
      tags: ["Beta"],
    },
    {
      kind: "up",
      side: "l",
      date: "Oct 20, 2026",
      badge: "Upcoming",
      title: "App Store and Google Play submission",
      body: "River Mobile is submitted to the App Store and Google Play.",
      tags: ["iOS", "Android"],
    },
    {
      kind: "up",
      side: "r",
      date: "Oct 27, 2026",
      badge: "Upcoming",
      title: "Soft launch with 5 partner stations",
      body: "River Mobile's soft launch with 5 partner stations, starting in Parañaque.",
      tags: ["Launch", "Parañaque"],
    },
    {
      kind: "plan",
      side: "l",
      date: "Next",
      badge: "Planned",
      title: "More providers, more of Metro Manila",
      body: "Mylaundry.ph and Mycarwash.ph bridged into River Mobile, and expansion across Metro Manila.",
      tags: ["Laundry", "Carwash", "Expansion"],
    },
  ] satisfies TimelineEvent[],
  ctaLabel: "Innovation · Automation · Growth",
  ctaTitleLead: "Be part of the",
  ctaTitleAccent: "next chapter.",
  ctaLead:
    "Run a water refilling station, laundry shop or carwash? Partner with us ahead of launch, or follow along as River Mobile goes live.",
  ctaPartner: "Partner with us",
  ctaFollow: "Follow our journey",
};
