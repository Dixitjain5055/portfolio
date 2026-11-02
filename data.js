/* ------------------------------------------------------------------
   All site content lives here. Edit this file to update the portfolio.
   Fields marked TODO need your real details before you publish.
------------------------------------------------------------------- */

const SITE = {
  name: "Dixit Kumar Jain",
  roles: ["Web Developer", "Ecommerce", "Marketing"],
  tagline: "Computer Engineering candidate working with HTML, CSS, React and Node.js. I built the Karigarii.shop store and run Amazon marketplace operations and social media.",
  location: "Bhiwandi, Maharashtra",
  email: "dixitjjain5505@gmail.com",
  socials: {
    github: "https://github.com/Dixitjain5055",
    linkedin: "",  // add your LinkedIn URL to show the button
    instagram: "",
  },
  about: {
    headline: "Web developer with ecommerce and marketing experience.",
    bio: [
      "I'm studying Computer Engineering at A. P. Shah Institute of Technology (2022–2026) and work with HTML, CSS, React, Node.js and GitHub.",
      "I designed and built Karigarii.shop on Shopify, and I handle end-to-end Amazon.com marketplace operations: listings, PPC, inventory, fulfilment and account health. I also run social media and the Sudopers brand content.",
    ],
    traits: [
      { title: "Frontend", text: "HTML, CSS, React" },
      { title: "Backend", text: "Node.js" },
      { title: "Ecommerce", text: "Shopify, Amazon Seller Central" },
      { title: "Digital marketing", text: "Social media, Amazon PPC, marketplace SEO" },
    ],
  },
};

const PROJECTS = [
  /* ---------------- DEVELOPMENT ---------------- */
  {
    id: "karigarii-shop",
    title: "Karigarii.shop",
    category: "Development",
    year: "",
    role: "Designer & developer",
    tools: ["Shopify"],
    link: "https://karigarii.shop",
    summary: "A Shopify ecommerce store for DIY craft kits and kundan stones, designed and developed by me.",
    cover: "assets/karigarii/home.jpg",
    overview: "Karigarii sells beginner-friendly DIY craft kits that come with every tool and material, plus loose kundan stones and craft supplies sold by weight.",
    challenge: "",
    approach: [
      "Designed a bold, playful storefront around the line \"Make something by hand this weekend.\"",
      "Built a \"Pick your vibe\" mood selector (Just me, Craft night, Date night, House party) and a 60-second gift quiz to help shoppers choose.",
      "Set up the kundan catalogue in round, square, eye and diamond shapes, sold in 10 g to 50 g packs.",
      "Added a three-step \"How it works\" section, wishlist, search, order tracking and bulk quotes for teams and events.",
    ],
    deliverables: ["Shopify storefront design", "Product catalogue", "Gift quiz", "Mood-based browsing", "Mobile layout"],
    outcome: "",
    gallery: [
      { type: "img", src: "assets/karigarii/home.jpg", caption: "Homepage hero" },
      { type: "img", src: "assets/karigarii/products.jpg", caption: "Bestsellers and how it works" },
      { type: "img", src: "assets/karigarii/how-it-works.jpg", caption: "Kundan craft supplies" },
      { type: "img", src: "assets/karigarii/mobile.jpg", caption: "Mobile view" },
    ],
  },

  /* ---------------- MARKETING ---------------- */
  {
    id: "sudopers-brand-identity",
    title: "Sudopers Brand Identity",
    category: "Marketing",
    year: "2026",
    role: "Brand design, art direction",
    tools: ["Brand system", "SVG layouts", "AI image generation"],
    summary: "A minimalist, futuristic identity for my studio: wordmark, s. lettermark, palette and covers for every social channel.",
    cover: "assets/brand/brand-kit-preview.png",
    overview: "Sudopers needed to look like one brand everywhere, from a 320px profile picture to a 2560px YouTube banner. I designed a compact identity built on four colours, one wordmark and a square that doubles as a full stop.",
    challenge: "A new studio with no history has to earn trust at a glance. The identity had to feel modern and technical without becoming cold, and stay legible at tiny sizes.",
    approach: [
      "Built the wordmark around a single electric-blue square used as the full stop, which became the brand's signature.",
      "Defined a tight palette: Ink #111111, Paper #F8F7F3, Electric Blue #2454FF, Slate #666666.",
      "Wrote the tagline \"Code. Create. Grow.\" and the support line \"AI. Digital products. Brand & creative.\"",
      "Produced every cover and profile size so uploads never need cropping guesses.",
    ],
    deliverables: ["Wordmark (light, dark, transparent)", "s. lettermark in 4 sizes", "LinkedIn, X, Facebook and YouTube covers", "Launch post and story cover", "Brand guide page"],
    outcome: "A complete, consistent kit that every later project (carousels, reels, story series) is built on.",
    gallery: [
      { type: "img", src: "assets/brand/brand-kit-preview.png", caption: "Wordmark system and palette" },
      { type: "img", src: "assets/brand/linkedin-personal-1584x396.jpg", caption: "LinkedIn personal cover" },
      { type: "img", src: "assets/brand/youtube-channel-2560x1440.jpg", caption: "YouTube channel art" },
      { type: "img", src: "assets/brand/launch-post-1080x1080.jpg", caption: "Square launch post" },
    ],
  },
  {
    id: "carousel-series",
    title: "13-Part Carousel Series",
    category: "Marketing",
    year: "2026",
    role: "Content strategy, copywriting, design pipeline",
    tools: ["Python", "AI image generation", "LinkedIn documents", "Instagram"],
    summary: "Educational carousels for small business owners, produced through a scripted pipeline that keeps every slide on-brand.",
    cover: "assets/carousels/01-signs-website-losing-customers-slide-01.jpg",
    overview: "A library of 13 carousels for LinkedIn and Instagram that teach local business owners how their website and marketing lose or win customers.",
    challenge: "Posting three times a week by hand is slow and drifts off-brand. I needed volume without losing consistency or honesty.",
    approach: [
      "Researched which formats get engagement (founder stories, before/after, checklists) and planned topics around buyer questions.",
      "Wrote each carousel as structured prompts, then built a Python batch pipeline to generate and log every slide.",
      "Kept fixed brand rules: paper background, ink type, one blue accent, consistent slide anatomy.",
      "Added honesty rules: fictional examples are labelled, no unverified result claims.",
    ],
    deliverables: ["13 carousels, 5 to 6 slides each", "Captions for LinkedIn and Instagram", "Reusable prompt and batch scripts"],
    outcome: "A ready-to-schedule content bank covering the first month of posting.",
    gallery: "CAROUSELS",
  },
  {
    id: "brand-intro-reels",
    title: "Programmatic Brand Reels",
    category: "Marketing",
    year: "2026",
    role: "Script, motion design, code",
    tools: ["HyperFrames", "Remotion (React)", "FFmpeg", "Local TTS + transcription"],
    summary: "Vertical brand-intro reels built entirely in code: animated in HTML and React, captioned word by word, rendered to MP4.",
    cover: "assets/reels/brand-intro-cover.jpg",
    overview: "Instead of editing video by hand, I wrote the reels as code. Every scene, caption and sound cue is defined in files, so a reel can be re-rendered in minutes after a script change.",
    challenge: "A faceless studio still needs video. I wanted reels that look designed, stay on-brand and are cheap to iterate.",
    approach: [
      "Wrote 30-second scripts with a hook, a problem and a clear call to action.",
      "Built the same intro in two engines, HyperFrames (HTML) and Remotion (React), to compare workflows.",
      "Generated voice locally, transcribed it to word timings and drove animated captions where the current word turns blue.",
      "Synthesized music beds and SFX in code and mixed to -14 LUFS for social platforms.",
    ],
    deliverables: ["Brand intro reel (1080x1920, 29s)", "Intro reel: HyperFrames version", "Intro reel: Remotion version", "Reusable build and audio scripts"],
    outcome: "A repeatable video pipeline: change the script, re-render, publish.",
    gallery: [
      { type: "video", src: "assets/reels/brand-intro.mp4", poster: "assets/reels/brand-intro-cover.jpg", caption: "Reel 0: brand intro" },
      { type: "video", src: "assets/reels/intro-hyperframes.mp4", poster: "assets/reels/intro-hyperframes-cover.jpg", caption: "Intro reel, HyperFrames" },
      { type: "video", src: "assets/reels/intro-remotion.mp4", poster: "assets/reels/intro-remotion-cover.jpg", caption: "Intro reel, Remotion" },
    ],
  },
  {
    id: "story-reel-series",
    title: "Animated Story Reel Series",
    category: "Marketing",
    year: "2026",
    role: "Writing, character design, animation",
    tools: ["AI character sheets", "HyperFrames", "Sprite animation"],
    summary: "A 10-episode story series with a recurring cast and Sudo, the brand mascot, explaining why customers leave small businesses.",
    cover: "assets/story/scene-office.jpg",
    overview: "Short animated stories where fictional business owners hit real problems, and Sudo, a little blue square, shows the fix. Episode 1: Why customers leave.",
    challenge: "Educational content is easy to skip. Characters and a story arc give people a reason to watch the next episode.",
    approach: [
      "Wrote scripts for 10 episodes with a fixed end card and a DM keyword call to action.",
      "Designed a flat 2D cast (Mike, Dr. Priya, Sam, Sarah) plus Sudo, the brand mascot, as consistent character sheets.",
      "Built scenes and sprites, then animated them in code with app-style UI cards in brand colours.",
      "Tagged every on-screen stat as \"Example\" because the cast is fictional.",
    ],
    deliverables: ["10 episode scripts", "6 character sheets", "4 scene backgrounds", "Episode 1 final render"],
    outcome: "A recognisable recurring format and a mascot that ties every reel back to the brand.",
    gallery: [
      { type: "video", src: "assets/reels/ep01.mp4", poster: "assets/reels/ep01-cover.jpg", caption: "EP 01: Why customers leave" },
      { type: "img", src: "assets/story/sudo-sheet.jpg", caption: "Sudo, the brand mascot" },
      { type: "img", src: "assets/story/priya-sheet.jpg", caption: "Character sheet: Dr. Priya" },
      { type: "img", src: "assets/story/mike-sheet.jpg", caption: "Character sheet: Mike" },
      { type: "img", src: "assets/story/scene-office.jpg", caption: "Scene: office" },
      { type: "img", src: "assets/story/scene-train.jpg", caption: "Scene: train" },
    ],
  },
  {
    id: "launch-strategy",
    title: "Content Strategy & Launch Plan",
    category: "Marketing",
    year: "2026",
    role: "Market research, positioning, planning",
    tools: ["Competitor research", "ICP definition", "Content calendars"],
    summary: "Research-backed positioning and two 30-day calendars to launch Sudopers to small businesses in the US, UK and Canada.",
    cover: "assets/brand/linkedin-personal-1584x396.jpg",
    overview: "Three rounds of strategy that took Sudopers from \"we do everything\" to a focused offer: websites for owner-led local service businesses abroad, sold from Mumbai.",
    challenge: "Too broad an offer attracts nobody. I needed a clear audience, channels and a posting rhythm a one-person studio can keep.",
    approach: [
      "Mapped similar agencies in Mumbai, Bengaluru and Toronto and noted what to learn from each.",
      "Compared audiences and picked owner-led professional services as the first target.",
      "Chose LinkedIn (founder profile) as the primary channel and Instagram as the proof layer.",
      "Marked every claim as verified, hypothesis or assumption so tests are clear.",
    ],
    deliverables: ["Positioning and audience research", "Channel plan", "Two 30-day content calendars", "Carousel engagement research"],
    outcome: "A focused launch plan that the carousels, reels and brand kit were all produced against.",
    gallery: [
      { type: "img", src: "assets/brand/linkedin-personal-1584x396.jpg", caption: "LinkedIn as the primary channel" },
      { type: "img", src: "assets/carousels/11-our-process-slide-01.jpg", caption: "Process carousel from the plan" },
    ],
  },
];

const CAROUSELS = [
  ["00-introducing-sudopers", "Introducing Sudopers"],
  ["01-signs-website-losing-customers", "Signs your website is losing customers"],
  ["02-website-best-salesperson", "Your website is your best salesperson"],
  ["03-why-customers-choose-competitor", "Why customers choose your competitor"],
  ["04-busy-not-growing", "Busy but not growing"],
  ["05-ads-before-you-spend", "Before you spend on ads"],
  ["06-the-lost-enquiry", "The lost enquiry"],
  ["07-look-bigger-brand", "Look like a bigger brand"],
  ["08-myths-growing-online", "Myths about growing online"],
  ["09-questions-before-hiring", "Questions to ask before hiring"],
  ["10-reviews-as-marketing", "Reviews as marketing"],
  ["11-our-process", "Our process"],
  ["12-weekend-website-checklist", "Weekend website checklist"],
];

const EXPERIENCE = [
  {
    org: "Amazon.com",
    role: "Marketplace Operations",
    dates: "Seller Central",
    points: [
      "Managed end-to-end Amazon Seller Central operations, including product listings, variations and keyword optimization.",
      "Managed Amazon PPC campaigns, pricing and promotions.",
      "Handled inventory, order processing and fulfillment through FBA and FBM.",
      "Managed customer service, returns, refunds and account health.",
      "Reviewed sales performance and competitor activity to support business decisions.",
    ],
    tags: ["Seller Central", "Amazon PPC", "FBA / FBM", "Marketplace SEO"],
  },
  {
    org: "Karigarii.shop",
    role: "Designer & Developer",
    dates: "Shopify store",
    points: ["Designed and developed a Shopify ecommerce storefront.", "Applied website design and ecommerce knowledge to present products online."],
    tags: ["Shopify", "Web design", "Ecommerce"],
  },
  {
    org: "Sudopers",
    role: "Brand & Content",
    dates: "Marketing projects",
    points: ["Brand identity and social kit.", "13-part carousel series.", "Brand reels and an animated story series.", "Content strategy and launch plan."],
    tags: ["Branding", "Social media", "Video"],
  },
  {
    org: "A. P. Shah Institute of Technology",
    role: "Bachelor's in Computer Engineering",
    dates: "2022 – 2026",
    points: ["Computer Engineering degree."],
    tags: ["Education"],
  },
];

const SKILLS = {
  Frontend: ["HTML", "CSS", "React"],
  Backend: ["Node.js"],
  "Development tools": ["GitHub"],
  "Ecommerce platforms": ["Shopify", "Amazon Seller Central"],
  "Digital marketing": ["Social media management", "Amazon PPC", "Marketplace SEO"],
};
