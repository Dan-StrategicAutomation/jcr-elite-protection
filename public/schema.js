// This file contains the schema.org structured data for the website
// It will be injected into the HTML during the build process
// Optimized to run after page load to avoid blocking rendering

// Use requestIdleCallback for non-critical operations if available, or setTimeout as fallback
(function () {
  const runWhenIdle =
    window.requestIdleCallback ||
    function (cb) {
      return setTimeout(function () {
        cb({
          didTimeout: false,
          timeRemaining: function () {
            return 50;
          },
        });
      }, 1);
    };

  runWhenIdle(function () {
    // Create LocalBusiness schema
    const localBusinessSchema = document.createElement("script");
    localBusinessSchema.type = "application/ld+json";
    localBusinessSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://jcreliteprotection.co.uk/#business",
      additionalType: "https://schema.org/SecurityService",
      name: "JCR Elite Protection",
      image: "https://jcreliteprotection.co.uk/og-image.png",
      logo: "https://jcreliteprotection.co.uk/favicon.svg",
      url: "https://jcreliteprotection.co.uk/",
      telephone: "02080874233",
      email: "info@jcreliteprotection.co.uk",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Riverbank House, 1 Putney Bridge Approach",
        addressLocality: "London",
        postalCode: "SW6 3JD",
        addressCountry: "GB",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 51.468399,
        longitude: -0.21124,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
      sameAs: [
        "https://www.facebook.com/jcreliteprotection",
        "https://www.twitter.com/jcreliteprotect",
        "https://www.linkedin.com/company/jcreliteprotection",
        "https://www.instagram.com/jcreliteprotection",
      ],
      priceRange: "££",
      description:
        "Leading security company in London providing professional manned security, corporate security, and event security services. British-trained SIA licensed personnel since 2022.",
      areaServed: [
        {
          "@type": "City",
          name: "London",
        },
        {
          "@type": "AdministrativeArea",
          name: "Greater London",
        },
        {
          "@type": "Place",
          name: "Central London",
        },
        {
          "@type": "Place",
          name: "Westminster",
        },
        {
          "@type": "Place",
          name: "City of London",
        },
        {
          "@type": "Place",
          name: "Kensington and Chelsea",
        },
        {
          "@type": "Place",
          name: "Camden",
        },
        {
          "@type": "Place",
          name: "Islington",
        },
      ],
      foundingDate: "2022",
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          name: "SIA Licensed Security Personnel",
          description:
            "All security personnel are licensed by the Security Industry Authority (SIA)",
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "British-Trained Security Professionals",
          description: "Professional security training following British standards and protocols",
        },
      ],
      paymentAccepted: ["Cash", "Credit Card", "Bank Transfer", "Invoice"],
      currenciesAccepted: "GBP",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Security Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Hotel Security Services London",
              description:
                "Professional, SIA-certified security officers for London's finest hotels, ensuring guest safety and property protection around the clock.",
              areaServed: "London",
              provider: {
                "@id": "https://jcreliteprotection.co.uk/#organisation",
              },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Event Security Management London",
              description:
                "Comprehensive security for corporate events, galas, and special occasions with discreet, experienced personnel who understand the London hospitality scene.",
              areaServed: "London",
              provider: {
                "@id": "https://jcreliteprotection.co.uk/#organisation",
              },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Close Protection Officers London",
              description:
                "Highly trained close protection specialists providing discreet personal security for VIPs, executives, and high-profile individuals in London and beyond.",
              areaServed: "London",
              provider: {
                "@id": "https://jcreliteprotection.co.uk/#organisation",
              },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Security Assessments London",
              description:
                "Thorough evaluations of your property's security vulnerabilities and protocols, delivered with actionable recommendations tailored to London's unique security landscape.",
              areaServed: "London",
              provider: {
                "@id": "https://jcreliteprotection.co.uk/#organisation",
              },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Corporate Security London",
              description:
                "Bespoke security solutions for businesses across London and the UK, including access control, surveillance systems design, and emergency response planning.",
              areaServed: "London",
              provider: {
                "@id": "https://jcreliteprotection.co.uk/#organisation",
              },
            },
          },
        ],
      },
    });
    document.head.appendChild(localBusinessSchema);

    // Create Organisation schema
    const organisationSchema = document.createElement("script");
    organisationSchema.type = "application/ld+json";
    organisationSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organisation",
      "@id": "https://jcreliteprotection.co.uk/#organisation",
      name: "JCR Elite Protection",
      url: "https://jcreliteprotection.co.uk/",
      logo: "https://jcreliteprotection.co.uk/favicon.svg",
      sameAs: [
        "https://www.facebook.com/jcreliteprotection",
        "https://www.twitter.com/jcreliteprotect",
        "https://www.linkedin.com/company/jcreliteprotection",
        "https://www.instagram.com/jcreliteprotection",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "02080874233",
        contactType: "customer service",
        email: "info@jcreliteprotection.co.uk",
        availableLanguage: ["English"],
      },
    });
    document.head.appendChild(organisationSchema);

    // Create WebSite schema
    const websiteSchema = document.createElement("script");
    websiteSchema.type = "application/ld+json";
    websiteSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://jcreliteprotection.co.uk/#website",
      url: "https://jcreliteprotection.co.uk/",
      name: "JCR Elite Protection | London Security Services | Elite Event Security",
      description:
        "Professional London security services including event security, corporate protection, and hotel security. Elite SIA-licensed personnel available 24/7. Call 020 8087 4233.",
      publisher: {
        "@id": "https://jcreliteprotection.co.uk/#organisation",
      },
    });
    document.head.appendChild(websiteSchema);

    // Create Review schema for testimonials
    const reviewSchema = document.createElement("script");
    reviewSchema.type = "application/ld+json";
    reviewSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Review",
      itemReviewed: {
        "@type": "LocalBusiness",
        "@id": "https://jcreliteprotection.co.uk/#business",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      name: "Excellent Security Services",
      author: {
        "@type": "Person",
        name: "Duane Allwell-Brown",
      },
      reviewBody:
        "We recently worked with JCR Elite Protection for our corporate event and couldn't be more impressed with their professional service. Their experienced security team maintained an effective presence without being intrusive, handled crowd control expertly, and coordinated seamlessly with our event planners.",
      publisher: {
        "@type": "Organisation",
        name: "The Marylebone Hotel",
      },
    });
    document.head.appendChild(reviewSchema);

    // Create FAQ schema for common security questions
    const faqSchema = document.createElement("script");
    faqSchema.type = "application/ld+json";
    faqSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What security services do you provide in London?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We provide comprehensive security services across London including hotel security, event security management, close protection officers, security assessments, and corporate security solutions. All our personnel are SIA licensed and British-trained.",
          },
        },
        {
          "@type": "Question",
          name: "Are your security officers SIA licensed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, all our security personnel are fully licensed by the Security Industry Authority (SIA) and undergo rigorous British security training to ensure the highest standards of professionalism and competence.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide 24/7 security services in London?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we provide 24/7 security services across London and the surrounding areas. Our team is available around the clock to respond to your security needs and provide continuous protection for your premises or events.",
          },
        },
        {
          "@type": "Question",
          name: "What areas of London do you serve?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We serve all areas of London including Central London, Westminster, City of London, Kensington and Chelsea, Camden, Islington, and the greater London area. Contact us to discuss your specific location requirements.",
          },
        },
      ],
    });
    document.head.appendChild(faqSchema);
  });
})();
