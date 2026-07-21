// siteData.js - Static data externalized for dynamic API rendering

// Import images from assets
import heroBg from '../assets/images/hero_bg.jpg';
import beforeDirty from '../assets/images/before_dirty.jpg';
import afterClean from '../assets/images/after_clean.jpg';
import ceramicImg from '../assets/images/ceramic.jpg';
import interiorImg from '../assets/images/interior.jpg';
import foamWashImg from '../assets/images/foam_wash.jpg';
import galleryVelarFoam from '../assets/images/gallery/gallery-range-rover-velar-foam.jpg';
import galleryVelarWhite from '../assets/images/gallery/gallery-range-rover-velar-white.jpg';
import galleryFortunerWhite from '../assets/images/gallery/gallery-fortuner-white.jpg';
import galleryBmw5 from '../assets/images/gallery/gallery-bmw-5-series-black.jpg';
import galleryBmwX3 from '../assets/images/gallery/gallery-bmw-x3-white.jpg';
import galleryInnovaHycross from '../assets/images/gallery/gallery-innova-hycross-black.jpg';
import galleryFortunerSilver from '../assets/images/gallery/gallery-fortuner-silver-bay.jpg';
import galleryTataCurvv from '../assets/images/gallery/gallery-tata-curvv-delivery.jpg';
import gallerySedanWash from '../assets/images/gallery/gallery-camry-wash-bay.jpg';

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
  description: "Explore our curated menu of detailing, correction, and surface protection therapies, engineered to produce a concour-level presentation. Note: The prices are indicative, and actual charges may vary."
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
  yearsTarget: 7,
  yearsLabel: "Years Experience",
  yearsSub: "Operating since 2019",
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

export const founderHeader = {
  subtitle: "The Story Behind Unik",
  title: "Meet Our Founder"
};

export const founderContent = {
  name: "Er. Nikunj Patel",
  role: "Expertise in the Auto Industry",
  initials: "NP",
  bio: "Nikunj founded Unik Car Care & Spa in 2019 with a single bay in Hathijan and an obsession with getting every panel, vent, and stitch of leather absolutely right. What began as a one-man operation has grown into Ahmedabad's trusted detailing studio, having personally overseen the care of over 1,500 vehicles ranging from daily hatchbacks to Range Rovers and BMWs. He still inspects every car before it leaves the bay.",
  quote: "Every car that rolls out of our bay should look better than the day it was bought. That's not a tagline, it's how we check our own work.",
  highlights: [
    { label: "Founded", value: "2019" },
    { label: "Cars Detailed", value: "1,500+" },
    { label: "Rating", value: "5.0 / 5" }
  ]
};

export const careerHeader = {
  subtitle: "Join The Team",
  title: "Build Your Career With Unik",
  description: "We're always looking for skilled detailers, technicians, and service-minded people who take pride in their work. Send us your resume and we'll get in touch."
};

export const jobRoles = [
  "Car Detailer / Polisher",
  "Denting & Painting Technician",
  "AC & Mechanical Technician",
  "Service Advisor / Front Desk",
  "Helper / Trainee",
  "Other"
];

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
    title: "Car Wash Service",
    description: "Deep foam wash, engine bay detailing, underbody cleaning, vacuuming, and dashboard dressing.",
    time: "1 - 1.5 Hours",
    price: "500",
    image: foamWashImg
  },
  {
    id: "denting-painting",
    title: "Car Denting & Painting",
    description: "Precision panel dent removal and factory-grade color matched spray painting and scratch fixes.",
    time: "1 - 2 Days",
    price: "2,500",
    image: beforeDirty
  },
  {
    id: "battery-services",
    title: "Car Battery Repairs & Service",
    description: "Battery health diagnostic checks, charging, terminal cleaning, and replacement with premium brands.",
    time: "30 Mins",
    price: "300",
    image: interiorImg
  },
  {
    id: "mechanical-repairs",
    title: "Car Mechanical Repairs",
    description: "Multi-point diagnostic check, engine servicing, tuning, oil change, and brake adjustments.",
    time: "2 - 4 Hours",
    price: "500",
    image: afterClean
  },
  {
    id: "ac-services",
    title: "Car AC Repair & Services",
    description: "AC gas refilling, condenser wash, vent cleaning, filter replacement, and leak diagnostic inspections.",
    time: "1 - 2 Hours",
    price: "1,200 - 1,500",
    image: ceramicImg
  },
  {
    id: "regular-services",
    title: "Car Regular Services",
    description: "Oil filter change, fluid top-ups, spark plug clean, wheel alignment check, and complete car checkup.",
    time: "3 Hours",
    price: "1,500",
    image: foamWashImg
  },
  {
    id: "suspension-fitment",
    title: "Car Suspension Services",
    description: "Shock absorber checkups, bush replacements, steering linkage updates, and fitment services.",
    time: "2 - 3 Hours",
    price: "1,800 - 2,000",
    image: interiorImg
  },
  {
    id: "tyre-wheel",
    title: "Car Tyre & Wheel Services",
    description: "Wheel alignment, computerized wheel balancing, tyre rotation, and pressure checks.",
    time: "1 Hour",
    price: "500",
    image: ceramicImg
  },
  {
    id: "polishing-services",
    title: "Car Polishing Services",
    description: "Machine rubbing compounding, minor scratch removal, wax polish, and paint gloss restoration.",
    time: "2 - 3 Hours",
    price: "2,500 - 3,500",
    image: beforeDirty
  },
  {
    id: "car-inspections",
    title: "Car Inspections",
    description: "Pre-purchase evaluation, computerized scanning, structural inspection, and test drive evaluation report.",
    time: "1.5 Hours",
    price: "500",
    image: foamWashImg
  }
];

export const comparisons = [
  {
    id: "regular",
    name: "Regular Service",
    price: "1,000",
    duration: "3 Hours",
    features: [
      "Engine Oil Top-up",
      "Oil Filter Replacement",
      "Air Filter Cleaning",
      "Complete Foam Wash",
      "40-Point Inspection Check"
    ],
    warranty: "30 Days",
    recommended: "Daily Commuters"
  },
  {
    id: "polishing",
    name: "Body Polishing",
    price: "3,000",
    duration: "4 Hours",
    features: [
      "Deep Foam Wash & Clay",
      "Machine Rubbing Compounding",
      "Minor Paint Scratches Buffing",
      "Ultra-gloss Wax Coating",
      "Tire & Plastic Trims Dressing"
    ],
    warranty: "3 Months",
    recommended: "Seasonal Gloss Restoration"
  },
  {
    id: "teflon",
    name: "Teflon Coating",
    price: "5,000",
    duration: "6 Hours",
    features: [
      "Full Detailing Prep Wash",
      "Teflon Sealant Polish Layer",
      "High Hydrophobic Water Beading",
      "Anti-Static Rust Protection",
      "1-Year Maintenance Inspection"
    ],
    warranty: "1 Year",
    recommended: "Showroom Shine Fans"
  },
  {
    id: "ceramic",
    name: "Ceramic Coating",
    price: "12,000",
    duration: "1.5 Days",
    features: [
      "Multi-stage Paint Correction",
      "9H Hardness Coating Layer",
      "Ultra Hydrophobic Protection",
      "UV Rays & Swirl Protection",
      "Infrared Heat Curing",
      "Complimentary 1-Month Wash Checkup"
    ],
    warranty: "3 Years",
    recommended: "Exotics & New Vehicles",
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
    name: "Regular Pack",
    price: "1,500",
    description: "Essential car maintenance check, engine tuning, filter cleaning, and complete diagnostic checks.",
    features: [
      "Engine Oil Replacement Checkup",
      "Air and Oil Filter Cleaning",
      "Fluids Top-up (Coolant, Brake)",
      "Spark Plugs Cleaning",
      "Car Underbody Checkup",
      "Computerized Fault Diagnosis",
      "Indicative Justdial Prices"
    ],
    bestFor: "Basic Car Health"
  },
  {
    name: "Premium Pack",
    price: "4,999",
    description: "Deep interior upholstery refresh, exterior compounding polishing, and AC system servicing.",
    features: [
      "Deep Snow Foam Washing",
      "Exterior Machine Rubbing Wax Polish",
      "Full Cabin Vacuum & Sanitization",
      "Upholstery Dry Cleaning",
      "AC Vent Cleaning & Gas Checkup",
      "Engine Bay Detailed Dressing",
      "100% Client Satisfaction Guarantee"
    ],
    bestFor: "Complete Rejuvenation",
    popular: true
  },
  {
    name: "Detox Ceramic Pack",
    price: "12,999",
    description: "Ultra protective Teflon & multi-stage paint correction nanotech coatings for lasting shine.",
    features: [
      "Gold standard paint compound buffing",
      "Hydrophobic Teflon/Ceramic Coating",
      "9H Hardness Scratch Resistance",
      "Wheel Faces & Glasses Shielding",
      "Odor removal treatment inside",
      "UV & Oxidation Fade Protection",
      "2-Year Certified Warranty"
    ],
    bestFor: "Showroom Preservation"
  }
];

export const galleryItems = [
  { id: 1, title: "Range Rover Velar Foam Bath", category: "suv", image: galleryVelarFoam },
  { id: 2, title: "Range Rover Velar Showroom Finish", category: "luxury", image: galleryVelarWhite },
  { id: 3, title: "BMW 5-Series Luxury Detailing", category: "luxury", image: galleryBmw5 },
  { id: 4, title: "BMW X3 Exterior Detailing", category: "suv", image: galleryBmwX3 },
  { id: 5, title: "Toyota Fortuner Detailing", category: "suv", image: galleryFortunerWhite },
  { id: 6, title: "Toyota Fortuner Wash & Polish", category: "suv", image: galleryFortunerSilver },
  { id: 7, title: "Toyota Innova Hycross Delivery Detail", category: "suv", image: galleryInnovaHycross },
  { id: 8, title: "Tata Curvv New Car Delivery", category: "suv", image: galleryTataCurvv },
  { id: 9, title: "Sedan Deep Foam Wash", category: "sedan", image: gallerySedanWash }
];

export const testimonials = [
  {
    id: 1,
    name: "Mayank Rathod",
    role: "Google Review",
    stars: 5,
    vehicle: "Regular Customer",
    review: "I've been a regular customer for car washing and complete detailing services. Nikunj Bhai and his team are always professional, reliable, and consistently deliver exceptional results. Every visit exceeds my expectations.",
    avatar: "MR"
  },
  {
    id: 2,
    name: "Patel Pragnesh",
    role: "Google Review",
    stars: 5,
    vehicle: "Mahindra XUV700",
    review: "Amazing work and outstanding customer service. They even provide pickup and drop facilities. I got Teflon coating done on my XUV700, and the results were excellent. Highly recommended for car enthusiasts.",
    avatar: "PP"
  },
  {
    id: 3,
    name: "Kaushal Dave",
    role: "Google Review",
    stars: 5,
    vehicle: "Verified Customer",
    review: "The best place for car accessories and detailing. Every service is performed with attention to detail, the pricing is transparent, and there are no hidden charges. A complete solution for your car.",
    avatar: "KD"
  },
  {
    id: 4,
    name: "Utkarsh Thaker",
    role: "Google Review",
    stars: 5,
    vehicle: "Verified Customer",
    review: "I recently used Unik's car washing service, and they cleaned my car perfectly inside and out. It genuinely looked like it had just come out of the showroom. Excellent workmanship and attention to detail.",
    avatar: "UT"
  },
  {
    id: 5,
    name: "Harshad Dholariya",
    role: "Google Review",
    stars: 5,
    vehicle: "Verified Customer",
    review: "A one-stop destination for car accessories, denting, painting, washing, and servicing. Their skilled team delivers reliable, high-quality work every time. I highly recommend them.",
    avatar: "HD"
  },
  {
    id: 6,
    name: "Pinal Patel",
    role: "Google Review",
    stars: 5,
    vehicle: "Verified Customer",
    review: "The best car service center in Hathijan and one of the finest in Ahmedabad. Honest ownership, trustworthy service, and consistently high-quality work.",
    avatar: "PP"
  },
  {
    id: 7,
    name: "Rushi Dave",
    role: "Google Review",
    stars: 5,
    vehicle: "Verified Customer",
    review: "A highly professional car washing and detailing service. The staff are courteous, supportive, and dedicated to delivering excellent results. In my experience, they are the best car care service in the Hathijan area.",
    avatar: "RD"
  },
  {
    id: 8,
    name: "Meera Gohil",
    role: "Google Review",
    stars: 5,
    vehicle: "Long-time Customer",
    review: "For me, Unik Car Care is the one-stop solution for every car-related problem. They have been taking care of my car for years, and I trust only Unik Car Care. Their honesty and quality of work are unmatched.",
    avatar: "MG"
  },
  {
    id: 9,
    name: "Yash Prajapati",
    role: "Google Review",
    stars: 5,
    vehicle: "Verified Customer",
    review: "My experience with Unik Car Care & Spa was outstanding. The staff were polite, attentive, and highly skilled. They treated my car with great care and maintained complete professionalism throughout the service.",
    avatar: "YP"
  },
  {
    id: 10,
    name: "Darshan Vinchhi",
    role: "Google Review",
    stars: 5,
    vehicle: "Verified Customer",
    review: "One of the finest car care centers with complete solutions for every vehicle. The quality of service is exceptional, and I would strongly recommend Unik Car Care & Spa to anyone.",
    avatar: "DV"
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
    answer: "Absolutely. We offer secure, fully-insured vehicle pickup and delivery services for clients booked under our Gold, Platinum, or Ceramic packages within a 25-kilometre radius of our Hathijan studio."
  },
  {
    question: "Which package should I choose for a new car?",
    answer: "For brand new vehicles, we highly recommend our Paint Protection Film (PPF) for the front bumper/hood to prevent rock chips, combined with a Ceramic Coating over the remaining body panels to ensure easy washing and lock in that showroom gloss."
  },
  {
    question: "What is the best car detailing studio near Hathijan, Ahmedabad?",
    answer: "Unik Car Care & Spa, located at Dharmvatika Complex, Opposite Baleshwar City, Hathijan Circle, Ahmedabad, is rated 5.0 stars on Google and Justdial with 140+ verified customer reviews. Founded in 2019, the studio has detailed over 1,500 vehicles ranging from hatchbacks to luxury SUVs like Range Rover and BMW."
  },
  {
    question: "How much does ceramic coating cost at Unik Car Care?",
    answer: "Ceramic coating at Unik Car Care & Spa starts at ₹12,000 for a standard 9H Gtechniq coating with a 3-year warranty. The complete Detox Ceramic Pack, which includes multi-stage paint correction, hydrophobic coating, and UV protection, is available from ₹12,999."
  },
  {
    question: "Is Unik Car Care open on Sundays and public holidays?",
    answer: "Yes, Unik Car Care & Spa is open 7 days a week — Monday through Sunday — from 9:00 AM to 8:00 PM IST. The studio operates on most public holidays as well; call +91 95867 43183 to confirm availability on specific dates."
  },
  {
    question: "What car brands and models does Unik Car Care service?",
    answer: "Unik Car Care has detailed over 1,500 vehicles including Range Rover Velar, BMW 5-Series, BMW X3, Toyota Fortuner, Toyota Innova Hycross, Tata Curvv, Mahindra XUV700, Maruti, Hyundai, Kia, and virtually all hatchback, sedan, and SUV models available in India."
  },
  {
    question: "What ceramic coating products does Unik Car Care use?",
    answer: "We use professional-grade ceramic coatings from globally trusted brands: Gtechniq (Crystal Serum Ultra), CARPRO, and Swissvax. These are not consumer-grade products — they are applied exclusively by trained and certified detailers using temperature-controlled infrared curing equipment."
  },
  {
    question: "How do I remove swirl marks and scratches from my car?",
    answer: "Swirl marks and light scratches are permanently removed through a process called paint correction. Our certified detailers use rotary and dual-action polishers with professional-grade compounds to safely cut and refine the clear coat, eliminating defects and restoring true paint depth and gloss. We then seal the corrected surface with a ceramic coating to prevent future swirls."
  },
  {
    question: "What is the difference between Teflon coating and ceramic coating?",
    answer: "Teflon coating is a wax-based sealant that provides basic hydrophobic protection for 6 to 12 months, priced from ₹5,000. Ceramic coating is a nano-technology glass layer that chemically bonds to the paint surface, providing 9H scratch hardness, long-lasting UV protection, and hydrophobic water-beading for 3 to 9 years, starting from ₹12,000. For lasting protection, ceramic coating is significantly superior."
  },
  {
    question: "Does Unik Car Care offer a satisfaction guarantee?",
    answer: "Yes. We offer a 100% client satisfaction guarantee on all services. Our work is not considered complete until the vehicle meets our strict quality inspection standards. Every car is inspected under multi-spectrum professional lighting before delivery to ensure zero defects."
  },
  {
    question: "How should I maintain my car after ceramic coating?",
    answer: "After ceramic coating, avoid washing your vehicle for at least 7 days to allow the coating to fully cure. Thereafter, use only pH-neutral (pH 6–8) car shampoos and a soft microfibre wash mitt. Avoid automatic brush car washes, harsh chemicals, and parking under direct sun for extended periods. Annual inspection washes at our studio will maximize the coating's hydrophobic performance and warranty life."
  },
  {
    question: "Where is Unik Car Care located and how do I reach there?",
    answer: "Unik Car Care & Spa is located at Dharmvatika Complex, Opposite Baleshwar City, Hathijan Circle, Ahmedabad, Gujarat 382445. The studio is easily accessible from Hathijan Circle and nearby areas including Vatva, Isanpur, and Narol. Call +91 95867 43183 for directions or to schedule a pickup."
  }
];
