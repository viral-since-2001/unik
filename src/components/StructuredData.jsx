/**
 * StructuredData.jsx
 * Injects JSON-LD structured data into the document <head> for SEO.
 * Includes: LocalBusiness, FAQPage, and BreadcrumbList schemas.
 */
import { useEffect } from 'react';
import { faqs } from '../data/siteData';

export default function StructuredData() {
  useEffect(() => {
    // ── 1. LocalBusiness Schema ──────────────────────────────────────────────
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "AutoBodyShop",
      "name": "Unik Car Care & Spa",
      "alternateName": "Unik Car Care",
      "description": "Ahmedabad's premier automotive detailing studio offering ceramic coating, Paint Protection Film (PPF), paint correction, interior detailing, and foam wash services. Serving since 2019.",
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
        "https://www.instagram.com/unik_car_care_and_spa"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Detailing & Protection Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Foam Wash & Decontamination",
              "description": "Professional multi-stage foam wash and clay bar decontamination to remove embedded contaminants from the paint surface."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Ultra Ceramic Coating",
              "description": "Professional Gtechniq ceramic coating providing 3–9 years of hydrophobic paint protection with a mirror-like finish."
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
              "name": "Elite Exterior Polishing",
              "description": "Multi-stage machine polishing to eliminate swirl marks, micro-scratches, and oxidation for a showroom-grade mirror finish."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Bespoke Interior Detailing",
              "description": "Deep steam extraction, leather conditioning, and odor elimination for a pristine, showroom-fresh cabin."
            }
          }
        ]
      }
    };

    // ── 2. FAQPage Schema ────────────────────────────────────────────────────
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

    // ── 3. BreadcrumbList Schema ─────────────────────────────────────────────
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://unikcarcare.in/#home"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://unikcarcare.in/#services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Gallery",
          "item": "https://unikcarcare.in/#gallery"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Pricing",
          "item": "https://unikcarcare.in/#pricing"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Contact",
          "item": "https://unikcarcare.in/#contact"
        }
      ]
    };

    // Inject all schemas into <head>
    const schemas = [localBusinessSchema, faqSchema, breadcrumbSchema];
    const scriptElements = schemas.map((schema, i) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = `structured-data-${i}`;
      script.textContent = JSON.stringify(schema);
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
