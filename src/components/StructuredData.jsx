/**
 * StructuredData.jsx
 * Injects JSON-LD structured data into the document <head> for SEO & AIEO.
 * Includes: LocalBusiness, Person (Founder), FAQPage, BreadcrumbList, and Review schemas.
 */
import { useEffect } from 'react';
import { faqs, testimonials } from '../data/siteData';

export default function StructuredData() {
  useEffect(() => {
    // ── 1. LocalBusiness Schema ──────────────────────────────────────────────
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": ["AutoBodyShop", "AutoRepair", "LocalBusiness"],
      "@id": "https://unikcarcare.in/#business",
      "name": "Unik Car Care & Spa",
      "alternateName": ["Unik Car Care", "Unik Car Care and Spa", "Unik Detailing Ahmedabad"],
      "description": "Ahmedabad's premier automotive detailing studio offering ceramic coating, Paint Protection Film (PPF), paint correction, interior detailing, denting & painting, AC service, and mechanical repairs. Serving since 2019 with 140+ five-star reviews.",
      "url": "https://unikcarcare.in",
      "telephone": "+919586743183",
      "email": "nikunjpatel263.pn@gmail.com",
      "foundingDate": "2019",
      "priceRange": "₹₹₹",
      "currenciesAccepted": "INR",
      "paymentAccepted": "Cash, UPI, Bank Transfer",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Dharmvatika Complex, Opposite Baleshwar City, Hathijan Circle",
        "addressLocality": "Ahmedabad",
        "addressRegion": "Gujarat",
        "postalCode": "382445",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "22.9657",
        "longitude": "72.6414"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"
          ],
          "opens": "09:00",
          "closes": "20:00"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "140",
        "bestRating": "5",
        "worstRating": "1"
      },
      "sameAs": [
        "https://www.instagram.com/unik_car_care_and_spa",
        "https://maps.google.com/maps?q=Unik+Car+Care+and+Spa,+Hathijan,+Ahmedabad"
      ],
      "founder": {
        "@type": "Person",
        "@id": "https://unikcarcare.in/#founder",
        "name": "Nikunj Patel",
        "honorificPrefix": "Er.",
        "jobTitle": "Founder & Head Detailer",
        "worksFor": { "@id": "https://unikcarcare.in/#business" }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Detailing & Protection Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Ceramic Coating",
              "description": "Professional Gtechniq 9H ceramic coating providing 3–9 years of hydrophobic paint protection with a mirror-like finish. Cured under infrared lamps in a temperature-controlled booth.",
              "offers": { "@type": "Offer", "priceCurrency": "INR", "price": "12000" }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Foam Wash & Decontamination",
              "description": "Professional multi-stage pH-neutral snow foam wash and clay bar decontamination to remove embedded contaminants from the paint surface.",
              "offers": { "@type": "Offer", "priceCurrency": "INR", "price": "500" }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Paint Protection Film (PPF)",
              "description": "Self-healing thermoplastic urethane film applied to high-impact areas to protect against rock chips, scratches, and road debris."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Paint Correction",
              "description": "Multi-stage machine polishing using rotary and dual-action polishers to eliminate swirl marks, micro-scratches, and oxidation for a showroom-grade mirror finish.",
              "offers": { "@type": "Offer", "priceCurrency": "INR", "price": "2500" }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Interior Detailing",
              "description": "Deep steam extraction, leather conditioning, upholstery dry cleaning, and odor elimination for a pristine, showroom-fresh cabin.",
              "offers": { "@type": "Offer", "priceCurrency": "INR", "price": "4999" }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Car Denting & Painting",
              "description": "Precision panel dent removal and factory-grade colour-matched spray painting.",
              "offers": { "@type": "Offer", "priceCurrency": "INR", "price": "2500" }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Car AC Repair & Service",
              "description": "AC gas refilling, condenser wash, vent cleaning, filter replacement, and leak diagnostic inspections.",
              "offers": { "@type": "Offer", "priceCurrency": "INR", "price": "1200" }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Teflon Coating",
              "description": "Teflon sealant polish layer with hydrophobic water beading and anti-static rust protection.",
              "offers": { "@type": "Offer", "priceCurrency": "INR", "price": "5000" }
            }
          }
        ]
      },
      // Real customer reviews from Google
      "review": testimonials.slice(0, 6).map((t) => ({
        "@type": "Review",
        "author": { "@type": "Person", "name": t.name },
        "reviewRating": { "@type": "Rating", "ratingValue": String(t.stars), "bestRating": "5" },
        "reviewBody": t.review,
        "publisher": { "@type": "Organization", "name": "Google" }
      }))
    };

    // ── 2. Founder Person Schema ─────────────────────────────────────────────
    const founderSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://unikcarcare.in/#founder",
      "name": "Nikunj Patel",
      "honorificPrefix": "Er.",
      "jobTitle": "Founder & Head Detailer",
      "description": "Nikunj Patel founded Unik Car Care & Spa in 2019 in Hathijan, Ahmedabad. He has personally overseen the care of over 1,500 vehicles ranging from daily hatchbacks to Range Rovers and BMWs, and still inspects every car before it leaves the bay.",
      "worksFor": {
        "@type": "Organization",
        "name": "Unik Car Care & Spa",
        "url": "https://unikcarcare.in"
      }
    };

    // ── 3. FAQPage Schema ────────────────────────────────────────────────────
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    // ── 4. BreadcrumbList Schema ─────────────────────────────────────────────
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://unikcarcare.in/#home" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://unikcarcare.in/#services" },
        { "@type": "ListItem", "position": 3, "name": "Gallery", "item": "https://unikcarcare.in/#gallery" },
        { "@type": "ListItem", "position": 4, "name": "Pricing", "item": "https://unikcarcare.in/#pricing" },
        { "@type": "ListItem", "position": 5, "name": "FAQ", "item": "https://unikcarcare.in/#faq" },
        { "@type": "ListItem", "position": 6, "name": "Contact", "item": "https://unikcarcare.in/#contact" }
      ]
    };

    // Inject all schemas into <head>
    const schemas = [localBusinessSchema, founderSchema, faqSchema, breadcrumbSchema];
    const scriptElements = schemas.map((schema, i) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = `structured-data-${i}`;
      script.textContent = JSON.stringify(schema, null, 0);
      document.head.appendChild(script);
      return script;
    });

    // Cleanup on unmount
    return () => {
      scriptElements.forEach((el) => {
        if (document.head.contains(el)) document.head.removeChild(el);
      });
    };
  }, []);

  return null;
}
