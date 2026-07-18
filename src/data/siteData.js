// siteData.js - Static data externalized for dynamic API rendering

// Import images from assets
import heroBg from '../assets/images/hero_bg.jpg';
import beforeDirty from '../assets/images/before_dirty.jpg';
import afterClean from '../assets/images/after_clean.jpg';
import ceramicImg from '../assets/images/ceramic.jpg';
import interiorImg from '../assets/images/interior.jpg';
import foamWashImg from '../assets/images/foam_wash.jpg';

// Centralized Business Contact details
export const contactInfo = {
  phone: "+91 95867 43183",
  phoneRaw: "919586743183",
  email: "nikunjpatel263.pn@gmail.com",
  address: "Dharmvatika complex Opposite baleshwar city, Hathijan Cir, Ahmedabad, Gujarat 382445",
  hours: "Monday - Sunday: 9:00 AM - 8:00 PM",
  whatsappMsg: "Hi Unik Car Care, I'm interested in booking a luxury detailing package. Please share details.",
  mapEmbedUrl: "https://maps.google.com/maps?q=Unik%20Car%20Care%20and%20Spa,%20Hathijan,%20Ahmedabad&t=&z=15&ie=UTF8&iwloc=&output=embed",
  description: "Ahmedabad's premier detailing studio. Dedicated to preserving vehicle value, locking in showroom gloss, and restoring automotive luxury.",
  instagramUrl: "https://www.instagram.com/unik_car_care_and_spa",
  facebookUrl: "" // Empty since they only have Instagram
};

// Hero section static contents
export const heroContent = {
  badge: "Premium Detailing Studio",
  title: "Premium Car\nDetailing & SPA",
  subtitle: "Bring your car back to showroom perfection with world-class paint correction, multi-year hydrophobic ceramic coatings, and bespoke interior restoration.",
  primaryBtnText: "Book Appointment",
  secondaryBtnText: "Explore Services",
  ratingTitle: "140+ Happy Customers",
  ratingSubtitle: "Verified 5.0-Star rated automotive spa on Google & Justdial.",
  stats: {
    leftNumber: "9H Hardness",
    leftLabel: "Premium Products",
    rightNumber: "100% Elite",
    rightLabel: "Certified Experts"
  },
  scrollDownText: "Scroll Down"
};

// Headers content for all page sections
export const whyChooseUsHeader = {
  subtitle: "Uncompromising Excellence",
  title: "Why Discerning Owners Choose Us",
  description: "We merge advanced chemical engineering with artisan craftsmanship to preserve your vehicle's value and visual glory."
};

export const servicesHeader = {
  subtitle: "Bespoke Detailing Services",
  title: "Unrivaled Care For All Surfaces",
  description: "Explore our curated menu of detailing, correction, and surface protection therapies, engineered to produce a concour-level presentation."
};

export const comparisonHeader = {
  subtitle: "Service Matrix",
  title: "Compare detailing tiers",
  description: "Select a service tier below to explore its duration, inclusions, warranties, and target outcomes."
};

export const processHeader = {
  subtitle: "Chronological Workflow",
  title: "Our Precision Process",
  description: "How we transform your vehicle from its current state to a perfect, sealed showroom finish."
};

export const beforeAfterContent = {
  subtitle: "Visual Proof",
  title: "Precision Paint Correction",
  description: "Slide the handle to witness how our paint correction process eliminates micro-scratches, swirl marks, and oxidation to achieve a true mirror finish.",
  beforeLabel: "Before: Swirl Marks",
  afterLabel: "After: Flawless Polish"
};

export const pricingHeader = {
  subtitle: "Pricing Guides",
  title: "Luxury Detailing Packages",
  description: "Select a tailored combination of correction and protection treatments crafted to restore and protect your automobile."
};

export const statsHeader = {
  yearsTarget: 4,
  yearsLabel: "Years Experience",
  yearsSub: "Operating since 2021",
  carsTarget: 1500,
  carsLabel: "Cars Detailed",
  carsSub: "Hatchbacks, Sedans, & SUVs",
  customersTarget: 140,
  customersLabel: "Verified Reviews",
  customersSub: "5.0-star rating on Justdial",
  ratingTarget: 50,
  ratingLabel: "Average Rating",
  ratingSub: "100% positive feedback"
};

export const galleryHeader = {
  subtitle: "Brand Portfolio",
  title: "Elite Showroom Gallery",
  description: "Filter through our visual catalog of corrected and protected supercars, luxury sedans, and performance SUVs."
};

export const testimonialsHeader = {
  subtitle: "Client Endorsements",
  title: "Words From Our Patrons"
};

export const faqHeader = {
  subtitle: "Common Questions",
  title: "Frequently Asked Questions",
  description: "Find answers to commonly asked questions about our process, protection levels, and service procedures."
};

export const bookingCtaContent = {
  badge: "Limited Availabilities This Week",
  title: "Ready to Make Your Car\nShine Like New Again?",
  description: "Experience standard-setting automotive detailing. Schedule your appointment today and give your vehicle the care it deserves."
};

export const contactHeader = {
  subtitle: "Reservation Desk",
  title: "Book your slot",
  description: "Request an appointment at our premium garage. Our concierge team will review and confirm your details."
};

// Item Cards & Accompanying Arrays
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
    name: "Amit Patel",
    role: "Verified Local Guide",
    stars: 5,
    vehicle: "Hyundai Creta",
    review: "Excellent service! The staff is incredibly humble and professional. They explained the differences in paint detailing options clearly and did a fantastic job cleaning my car. Highly recommend Unik Car Care!",
    avatar: "AP"
  },
  {
    id: 2,
    name: "Rohan Sharma",
    role: "Verified Client",
    stars: 5,
    vehicle: "Maruti Suzuki Swift",
    review: "Very satisfied with their washing and detailing work. They use premium products and take their time to ensure the vehicle is spotless. Staff behavior is extremely polite.",
    avatar: "RS"
  },
  {
    id: 3,
    name: "Dr. Nidhi Shah",
    role: "Verified Client",
    stars: 5,
    vehicle: "Honda City",
    review: "Best place for car spa and detailing near Hathijan. Clean service, professional team, and very reasonable rates. My car feels completely fresh and brand new again.",
    avatar: "NS"
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
