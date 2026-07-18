// siteData.js - Static data for Unik Car Care & Spa

// Import images from assets (Vite will resolve these paths)
import heroBg from '../assets/images/hero_bg.jpg';
import beforeDirty from '../assets/images/before_dirty.jpg';
import afterClean from '../assets/images/after_clean.jpg';
import ceramicImg from '../assets/images/ceramic.jpg';
import interiorImg from '../assets/images/interior.jpg';
import foamWashImg from '../assets/images/foam_wash.jpg';

export const whyChooseUs = [
  {
    id: "products",
    title: "Premium Products",
    description: "We use only the finest Swissvax, Gtechniq, and CARPRO formulas to treat your vehicle's delicate surfaces.",
    icon: "ShieldAlert"
  },
  {
    id: "detailers",
    title: "Certified Detailers",
    description: "Our craftsmen undergo rigorous certifications to safely handle exotic, classic, and high-value vehicles.",
    icon: "BadgeCheck"
  },
  {
    id: "eco",
    title: "Eco-Friendly Products",
    description: "A luxury shine shouldn't compromise the planet. We utilize steam detailing and biodegradable, pH-balanced formulas.",
    icon: "Leaf"
  },
  {
    id: "turnaround",
    title: "Fast Turnaround",
    description: "State-of-the-art infrared curing lamps and optimized workflows ensure your vehicle is returned precisely on schedule.",
    icon: "Timer"
  },
  {
    id: "luxury",
    title: "Affordable Luxury",
    description: "Transparent, flexible pricing tiers that deliver exceptional craftsmanship and value without compromise.",
    icon: "Gem"
  },
  {
    id: "satisfaction",
    title: "Customer Satisfaction",
    description: "We offer a 100% satisfaction guarantee. Our work is not finished until it exceeds your highest expectations.",
    icon: "Heart"
  }
];

export const services = [
  {
    id: "car-wash",
    title: "Foam Wash & Decontamination",
    description: "Safe multi-stage wash using ultra-soft wash mitts, pH-neutral snow foam, and mechanical clay bar treatment.",
    time: "1.5 - 2 Hours",
    price: "75",
    image: foamWashImg
  },
  {
    id: "interior-detailing",
    title: "Bespoke Interior Detailing",
    description: "Deep steam extraction, premium leather nourishment, dashboard UV protection, and complete odor elimination.",
    time: "3 - 4 Hours",
    price: "180",
    image: interiorImg
  },
  {
    id: "exterior-detailing",
    title: "Elite Exterior Polishing",
    description: "Multi-stage paint wash, iron decontamination, and single-stage machine polish to restore deep paint gloss.",
    time: "4 - 5 Hours",
    price: "250",
    image: beforeDirty
  },
  {
    id: "ceramic-coating",
    title: "Ultra hydrophobic Ceramic Coating",
    description: "Gtechniq nanotech coating offering 9H hardness, extreme water beading, and robust swirl resistance.",
    time: "1.5 - 2 Days",
    price: "850",
    image: ceramicImg
  },
  {
    id: "ppf",
    title: "Paint Protection Film (PPF)",
    description: "Elite self-healing thermoplastic polyurethane shield safeguarding your paint from rock chips and road hazards.",
    time: "2 - 3 Days",
    price: "1599",
    image: heroBg
  },
  {
    id: "engine-cleaning",
    title: "Precision Engine Bay Detailing",
    description: "Delicate steam cleaning, degreasing, and protective dressing of all engine bay plastics and rubber hoses.",
    time: "1.5 Hours",
    price: "130",
    image: foamWashImg
  },
  {
    id: "headlight-restoration",
    title: "Headlight Clarity Restoration",
    description: "Wet-sanding, compounding, and application of a UV-blocking polymer clear-coat to restore yellowed lenses.",
    time: "1 Hour",
    price: "90",
    image: afterClean
  },
  {
    id: "car-sanitization",
    title: "Elite Bio-Sanitization & Steam",
    description: "Deep extraction sanitization coupled with medical-grade ozone treatments to eliminate 99.9% of bacteria.",
    time: "1.5 Hours",
    price: "110",
    image: interiorImg
  }
];

export const comparisons = [
  {
    id: "basic",
    name: "Basic Wash",
    price: "50",
    duration: "45 Mins",
    features: [
      "Exterior Foam Bath",
      "Hand Dry with Microfiber",
      "Wheel & Tire Cleaning",
      "Basic Vacuuming",
      "Windows Cleaned Outside"
    ],
    warranty: "None",
    recommended: "Daily Commuters"
  },
  {
    id: "premium",
    name: "Premium Wash",
    price: "95",
    duration: "1.5 Hours",
    features: [
      "Everything in Basic Wash",
      "Iron Decontamination",
      "Spray Wax Gloss Protection",
      "Deep Wheel & Arch Dressing",
      "Full Interior Dusting & Wipe",
      "Door Jambs Detailed"
    ],
    warranty: "2 Weeks",
    recommended: "Weekly Maintenance"
  },
  {
    id: "detailing",
    name: "Full Detailing",
    price: "270",
    duration: "4 Hours",
    features: [
      "Everything in Premium Wash",
      "Clay Bar Paint Treatment",
      "Single-Stage Machine Gloss Polish",
      "Leather Cleaning & Conditioning",
      "Carpet & Mat Steam Extraction",
      "Engine Bay Clean & Dress",
      "6-Month Paint Sealant"
    ],
    warranty: "1 Month",
    recommended: "Bi-Annual Rejuvenation"
  },
  {
    id: "ceramic",
    name: "Ceramic Coating",
    price: "850",
    duration: "1.5 Days",
    features: [
      "Everything in Full Detailing",
      "Multi-stage Paint Correction (Swirls)",
      "9H Hydrophobic Ceramic Coating",
      "Glass & Wheel Face Coatings",
      "Trim Restorer & Protection",
      "Infrared Heat Lamps Curing",
      "Complimentary 1-Month Inspection Wash"
    ],
    warranty: "5 Years",
    recommended: "Exotics, New Cars & Enthusiasts",
    popular: true
  }
];

export const processSteps = [
  {
    step: "01",
    title: "Bespoke Inspection",
    description: "We measure paint thickness, examine defects under professional high-CRI lighting, and formulate a customized correction plan."
  },
  {
    step: "02",
    title: "Infrared Foam Wash",
    description: "A thick blanket of pH-neutral snow foam encapsulates and lifts dirt particles to ensure scratch-free washing."
  },
  {
    step: "03",
    title: "Clay Bar Decontamination",
    description: "Mechanical claying extracts embedded industrial fallout, brake dust, and environmental contamination."
  },
  {
    step: "04",
    title: "Precision Paint Correction",
    description: "Rotary and dual-action polishers meticulously eliminate swirl marks, scratches, and oxidation to release true paint depth."
  },
  {
    step: "05",
    title: "Nanotech Protection",
    description: "We apply ceramic coatings or premium PPF in a temperature-controlled dust-free booth to cure under infrared heaters."
  },
  {
    step: "06",
    title: "Elite Inspection",
    description: "Every square inch is double-checked using multi-spectrum inspection lamps to ensure absolute perfection."
  },
  {
    step: "07",
    title: "Luxury Delivery",
    description: "We present your vehicle in our showroom bay, walk you through the results, and provide a tailored maintenance guide."
  }
];

export const pricingPackages = [
  {
    name: "Silver Package",
    price: "199",
    description: "Premium cleansing and protection package designed for routine seasonal care and high gloss.",
    features: [
      "Safe Foam Wash & Clay Treatment",
      "Gloss-Enhancing Hand Polish",
      "Premium Synthetic Paint Sealant",
      "Interior Dusting & Vacuuming",
      "Leather Treatment & Wipe-down",
      "Wheel Faces & Tires Dressed",
      "3-Month Durability"
    ],
    bestFor: "Essential preservation"
  },
  {
    name: "Gold Package",
    price: "399",
    description: "Our signature paint correction and deep cabin refresh that restores showroom aesthetic.",
    features: [
      "Everything in Silver Package",
      "Single-Stage Machine Paint Correction",
      "6-Month Silica Paint Sealant",
      "Full Cabin Steam Extraction",
      "Leather Deep Clean & Conditioning",
      "Engine Bay Detailed & Dressed",
      "Exhaust Tips Polished",
      "6-Month Durability"
    ],
    bestFor: "Ultimate rejuvenation",
    popular: true
  },
  {
    name: "Platinum Package",
    price: "799",
    description: "Complete elite rejuvenation featuring deep paint correction and high-end protection layers.",
    features: [
      "Everything in Gold Package",
      "Dual-Stage Machine Paint Correction",
      "1-Year Hydrophobic Coating (Body & Glass)",
      "Wheel Barrels & Calipers Coated",
      "Premium Leather & Fabric Protection",
      "Matte & Piano Black Trim Refinishing",
      "Fabric Guard Shielding",
      "1-Year Warranty"
    ],
    bestFor: "Show-car perfection"
  }
];

export const galleryItems = [
  { id: 1, title: "Porsche 911 GT3 Ceramic Coating", category: "ceramic", image: ceramicImg },
  { id: 2, title: "Mercedes AMG Interior Detailing", category: "luxury", image: interiorImg },
  { id: 3, title: "Audi R8 Active Snow Wash", category: "luxury", image: foamWashImg },
  { id: 4, title: "Porsche 911 Showroom PPF Protection", category: "ppf", image: heroBg },
  { id: 5, title: "Land Rover Paint Correction Before/After", category: "ceramic", image: afterClean },
  { id: 6, title: "Tesla Model S Plaid Foam Bath", category: "sedan", image: foamWashImg },
  { id: 7, title: "BMW M8 Interior Leather Dressing", category: "luxury", image: interiorImg },
  { id: 8, title: "Ferrari 488 Nanotech Coating", category: "ceramic", image: ceramicImg },
  { id: 9, title: "Lamborghini Urus Full Protection Film", category: "suv", image: heroBg }
];

export const testimonials = [
  {
    id: 1,
    name: "Alexander Mercer",
    role: "Verified Porsche 911 GT3 Owner",
    stars: 5,
    vehicle: "Porsche 911 GT3 RS",
    review: "The paint correction and ceramic coating exceeded every expectation. My GT3 RS has a mirror finish that literally looks liquid. Unik Car Care is the only team I trust with my collection.",
    avatar: "AM"
  },
  {
    id: 2,
    name: "Sarah Sterling",
    role: "Verified Tesla Owner",
    stars: 5,
    vehicle: "Tesla Model S Plaid",
    review: "The interior looks and smells brand new. The steam cleaning and leather treatment removed everything, and the PPF application is virtually invisible. Absolute perfectionists!",
    avatar: "SS"
  },
  {
    id: 3,
    name: "Marcus Vance",
    role: "Verified Aston Martin Owner",
    stars: 5,
    vehicle: "Aston Martin DBS",
    review: "Outstanding craftsmanship! The pickup service was seamless, the team sent progress updates, and the delivery room experience felt like taking delivery of a brand new supercar.",
    avatar: "MV"
  }
];

export const faqs = [
  {
    question: "How long does a professional ceramic coating last?",
    answer: "Our professional Gtechniq coatings are rated to last between 3 to 9 years depending on the tier chosen. Proper maintenance (using pH-neutral washes) and periodic inspection washes will maximize the longevity of the coating's hydrophobic properties."
  },
  {
    question: "How much time is required for a Gold detailing package?",
    answer: "A standard Gold Detailing package takes approximately 4 to 6 hours. This allows our detailers to thoroughly inspect the vehicle, perform multi-stage foam washing, clay-bar decontamination, single-stage machine polishing, and deep interior steam extraction."
  },
  {
    question: "Can I book my appointment online?",
    answer: "Yes, you can easily request a booking using our online form above, or click on the WhatsApp button to chat directly with our scheduling team. Once submitted, we will confirm your date, vehicle size, and service tier within 15 minutes."
  },
  {
    question: "Do you provide vehicle pickup and delivery services?",
    answer: "Absolutely. We offer secure, fully-insured vehicle pickup and delivery services for clients booked under our Gold, Platinum, or Ceramic packages within a 25-mile radius of our luxury spa studio."
  },
  {
    question: "Which package should I choose for a new car?",
    answer: "For brand new vehicles, we highly recommend our Paint Protection Film (PPF) for the front bumper/hood to prevent rock chips, combined with a Ceramic Coating over the remaining body panels to ensure easy washing and lock in that showroom gloss."
  }
];
