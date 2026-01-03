import { Building, Shield, UserCheck, Users } from "lucide-react";
import Link from "next/link";
import React from "react";

import AnimatedSection from "./AnimatedSection";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
  return (
    <AnimatedSection className="service-card h-full flex flex-col" delay={delay}>
      <div className="bg-primary/10 rounded-full w-14 h-14 flex items-center justify-center text-primary mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground flex-grow">{description}</p>
    </AnimatedSection>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Shield size={24} />,
      title: "Hotel Security Services",
      description:
        "Professional, SIA-certified security officers for London's finest hotels, ensuring guest safety and property protection around the clock.",
      delay: 100,
    },
    {
      icon: <Users size={24} />,
      title: "Event Security Management",
      description:
        "Comprehensive security for corporate events, galas, and special occasions with discreet, experienced personnel who understand the London hospitality scene.",
      delay: 200,
    },
    {
      icon: <UserCheck size={24} />,
      title: "Close Protection Officers",
      description:
        "Highly trained close protection specialists providing discreet personal security for VIPs, executives, and high-profile individuals in London and beyond.",
      delay: 300,
    },
    {
      icon: <Building size={24} />,
      title: "Residential Security",
      description:
        "Comprehensive residential security including manned guarding, electronic monitoring, and concierge services for homes and estates.",
      delay: 700,
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="section-container">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary font-medium">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            London Security Services & Event Security Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            JCR Elite Protection delivers comprehensive London security services including event
            security, corporate protection, and hotel security with elite SIA-licensed personnel
            across London.
          </p>
        </AnimatedSection>

        {/* Services grid with responsive layout */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`w-full ${
                  // Extra large screens (xl+): 7 services in a row
                  "xl:col-span-1"
                } ${
                  // Large screens (lg): 4 services in a row
                  "lg:col-span-1"
                } ${
                  // Medium screens (md): 2 services per row
                  "md:col-span-1"
                }`}
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  delay={service.delay}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Single CTA for all services */}
        <AnimatedSection className="text-center" delay={600}>
          <Link
            href="/approach"
            className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105"
            aria-label="Learn more about our comprehensive security approach and methodology"
          >
            Learn About Our Security Approach
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2"
              aria-hidden="true"
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
  );
};

export default ServicesSection;
