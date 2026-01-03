import React from "react";

import AnimatedSection from "./AnimatedSection";

const TrustedBySection: React.FC = () => {
  const trustedBy = [
    {
      name: "Trinity House",
      logo: "/assets/logos/trinity-house-logo.png",
      alt: "Trinity House - Maritime Authority",
      url: "https://www.trinityhouse.co.uk/",
    },
    {
      name: "The Marylebone Hotel",
      logo: "/assets/logos/marylebone-hotel-logo.png",
      alt: "The Marylebone Hotel - Luxury Hospitality",
      url: "https://www.doylecollection.com/hotels/the-marylebone-hotel",
    },
    {
      name: "Grocers' Hall",
      logo: "/assets/logos/grocers-hall-logo.png",
      alt: "Grocers' Hall - Historic Venue",
      url: "https://www.grocershall.co.uk",
    },
    {
      name: "Hurlingham Club",
      logo: "/assets/logos/hurlingham-club-logo.png",
      alt: "Hurlingham Club - Private Members Club",
      url: "https://www.hurlinghamclub.org.uk",
    },
  ];

  const certifications = [
    {
      name: "SIA Licensed",
      logo: "/assets/logos/sia-logo.png",
      alt: "Security Industry Authority Licensed",
    },
    {
      name: "Worshipful Company of Security Professionals",
      logo: "/assets/logos/wcosp-logo.png",
      alt: "WCoSP Member",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        {/* Professional Accreditations */}
        <AnimatedSection className="text-center" delay={200}>
          <h3 className="text-sm font-medium text-gray-500 mb-8 uppercase tracking-wider">
            Professional Accreditations
          </h3>
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[120px] max-w-[200px]"
              >
                <div className="text-gray-400 text-center">
                  {/* Fallback to text if logo not available */}
                  <div className="h-16 flex items-center justify-center mb-2">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <span className="text-xs font-bold text-gray-600">
                        {cert.name
                          .split(" ")
                          .map(word => word[0])
                          .join("")
                          .slice(0, 3)}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs sm:text-sm font-medium block leading-tight">
                    {cert.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Professional Standards Statement */}
        <AnimatedSection className="text-center mt-16" delay={400}>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              JCR Elite Protection maintains the highest professional standards through continuous
              training, industry certifications, and membership of prestigious security
              organisations. Our commitment to excellence is recognised by leading institutions and
              luxury venues across London.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TrustedBySection;
