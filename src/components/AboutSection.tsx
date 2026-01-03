import { Check, Shield } from "lucide-react";
import Link from "next/link";
import React from "react";

import AnimatedSection from "./AnimatedSection";

const AboutSection: React.FC = () => {
  const keyPoints = [
    "Professionally trained security personnel",
    "24/7 availability and rapid response",
    "Customised security solutions",
    "Industry-leading expertise and international certifications",
    "Leadership with City of London Livery Company membership",
    "Comprehensive risk assessment and management",
    "Cutting-edge security technologies",
  ];

  return (
    <>
      <section id="about" className="py-24 bg-white">
        <div className="section-container">
          {/* Centered header over the entire section */}
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-medium">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              London's Elite Protection Security Company
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection className="order-2 lg:order-1" animation="fade-in-right">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                JCR Elite Protection delivers premier security services across London, specialising
                in hotel security, corporate protection, and event security management. Our
                SIA-licensed security professionals maintain the highest standards of protection and
                professionalism.
              </p>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                We understand that each client has unique security needs, which is why we take a
                personalised approach to every project. Our comprehensive services are designed to
                provide peace of mind, allowing you to focus on what matters most – your business.
              </p>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">
                  Our Security Services Excellence
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {keyPoints.map((point, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <div className="flex-shrink-0 mt-1">
                        <Check size={18} className="text-primary" />
                      </div>
                      <p className="text-sm text-gray-700">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection className="order-1 lg:order-2 relative" animation="fade-in-left">
              <div className="aspect-[4/3] rounded-lg overflow-hidden glass-card p-3">
                <picture>
                  <source srcSet="/assets/security-monitoring-400.webp" type="image/webp" />
                  <img
                    src="/assets/security-monitoring-400.jpg"
                    alt="Professional security monitoring and surveillance"
                    className="w-full h-full object-cover rounded-md"
                    width={400}
                    height={300}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white shadow-xl rounded-lg p-4 glass-card hidden md:block">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center text-primary">
                    <Shield size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Professional Security</div>
                    <div className="text-xs text-muted-foreground">Trusted & Reliable</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-primary shadow-xl rounded-lg p-4 text-white hidden md:block">
                <div className="text-sm font-semibold">Excellence</div>
                <div className="text-xs opacity-80">in Security</div>
              </div>
            </AnimatedSection>
          </div>

          {/* Centered button below the content */}
          <AnimatedSection className="text-center mt-12">
            <Link href="/approach" className="button-primary inline-flex items-center">
              Discover Our Approach
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
