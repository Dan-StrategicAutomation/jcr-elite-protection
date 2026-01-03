import { Building, Crown, Eye, Mail, MapPin, Phone, Shield, UserCheck, Users } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import AnimatedSection from "@/components/AnimatedSection";
import LazyFooter from "@/components/LazyFooter";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title:
    "Belgravia Security Services | JCR Elite Protection | Central London Hotel Event Security Specialists",
  description:
    "Professional Belgravia security services including Central London hotel event security specialists. SIA licensed security risk assessment specialists for luxury hotels with 24/7 emergency response teams. Call 020 8087 4233.",
  keywords:
    "belgravia security services, central london hotel event security specialists, security risk assessment specialists for luxury hotels, low-profile security for high-end hotel events, post-pandemic sanitisation patrols",
  alternates: {
    canonical: "https://jcreliteprotection.co.uk/belgravia-security-services",
  },
  openGraph: {
    title:
      "Belgravia Security Services | JCR Elite Protection | Central London Hotel Event Security Specialists",
    description:
      "Professional Belgravia security services including Central London hotel event security specialists with SIA licensed personnel and 24/7 emergency response teams.",
    type: "website",
    url: "https://jcreliteprotection.co.uk/belgravia-security-services",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Belgravia Security Services | JCR Elite Protection | Central London Hotel Event Security Specialists",
    description:
      "Professional Belgravia security services including Central London hotel event security specialists with SIA licensed personnel.",
  },
};

export default function BelgraviaSecurityServicesPage() {
  const securityFeatures = [
    "Corporate Security",
    "Event Security",
    "VIP Protection",
    "24/7 Response",
    "Risk Assessment",
    "Access Control",
    "Surveillance",
    "Emergency Response",
  ];

  const services = [
    {
      icon: <Crown size={32} />,
      title: "Central London Hotel Event Security Specialists",
      description:
        "Professional Central London hotel event security specialists providing SIA licensed security for Belgravia's prestigious venues and corporate events.",
      features: [
        "SIA Licensed Personnel",
        "GDPR-Compliant Operations",
        "24/7 Emergency Response Teams",
        "VIP Protection Services",
      ],
    },
    {
      icon: <Shield size={32} />,
      title: "Security Risk Assessment Specialists for Luxury Hotels",
      description:
        "Comprehensive security risk assessment specialists for luxury hotels in Belgravia, providing detailed threat analysis and mitigation strategies.",
      features: [
        "Threat Assessment",
        "Vulnerability Analysis",
        "Security Planning",
        "Compliance Review",
      ],
    },
    {
      icon: <Users size={32} />,
      title: "Low-Profile Security for High-End Hotel Events",
      description:
        "Discreet low-profile security for high-end hotel events, ensuring guest comfort whilst maintaining the highest security standards in Belgravia.",
      features: [
        "Discreet Operations",
        "Guest Experience Focus",
        "Professional Appearance",
        "Seamless Integration",
      ],
    },
    {
      icon: <Building size={32} />,
      title: "Post-Pandemic Sanitisation Patrols for Hotel Venues",
      description:
        "Advanced post-pandemic sanitisation patrols for hotel venues, ensuring health and safety compliance for Belgravia's luxury hospitality sector.",
      features: [
        "Health Protocol Enforcement",
        "Sanitisation Monitoring",
        "Guest Safety Protocols",
        "Compliance Verification",
      ],
    },
    {
      icon: <Eye size={32} />,
      title: "Undercover Security Staff for Discreet Hotel Events",
      description:
        "Specialised undercover security staff for discreet hotel events, providing invisible protection for high-profile gatherings in Belgravia.",
      features: [
        "Covert Operations",
        "Intelligence Gathering",
        "Threat Detection",
        "Incident Prevention",
      ],
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Belgravia Security Services",
    description:
      "Professional Belgravia security services including Central London hotel event security specialists with SIA licensed personnel and security risk assessment specialists for luxury hotels.",
    provider: {
      "@type": "LocalBusiness",
      name: "JCR Elite Protection",
      url: "https://jcreliteprotection.co.uk",
      telephone: "+442080874233",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Riverbank House, 1 Putney Bridge Approach",
        addressLocality: "London",
        postalCode: "SW6 3JD",
        addressCountry: "GB",
      },
    },
    areaServed: {
      "@type": "Place",
      name: "Belgravia, London",
    },
    serviceType: "Security Services",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      description: "Professional Belgravia security services available 24/7",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main id="main-content" className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-20 lg:py-32">
          <div className="section-container">
            <AnimatedSection className="text-center max-w-4xl mx-auto">
              <div className="inline-block mb-4">
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium tracking-wide">
                  Belgravia's Elite Security Specialists
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Belgravia Security Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                Central London hotel event security specialists providing comprehensive Belgravia
                security services. SIA licensed security risk assessment specialists for luxury
                hotels with 24/7 emergency response teams and low-profile security for high-end
                hotel events.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Get Security Risk Assessment
                </Link>
                <a
                  href="tel:02080874233"
                  className="border border-white/20 hover:border-primary text-white hover:text-primary px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Call 020 8087 4233
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Security Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="section-container">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Comprehensive Belgravia Security Solutions
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                JCR Elite Protection delivers Central London hotel event security specialists
                services throughout Belgravia, providing security risk assessment specialists for
                luxury hotels and post-pandemic sanitisation patrols.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {securityFeatures.map((feature, index) => (
                <AnimatedSection key={index} delay={index * 50}>
                  <div className="bg-white rounded-lg p-4 shadow-md text-center">
                    <Shield className="text-primary mx-auto mb-2" size={20} />
                    <p className="text-sm font-medium text-gray-700">{feature}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="section-container">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Central London Hotel Event Security Specialists
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                Professional Belgravia security services featuring security risk assessment
                specialists for luxury hotels, low-profile security for high-end hotel events, and
                comprehensive 24/7 emergency response teams.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <div className="text-primary mb-6">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <Shield size={16} className="text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gray-50">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Choose JCR Elite Protection for Belgravia?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Crown className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Central London Hotel Event Security Specialists
                      </h3>
                      <p className="text-muted-foreground">
                        Specialised Central London hotel event security specialists with extensive
                        experience in Belgravia's luxury hospitality environment and GDPR-compliant
                        operations.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <UserCheck className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Security Risk Assessment Specialists for Luxury Hotels
                      </h3>
                      <p className="text-muted-foreground">
                        Comprehensive security risk assessment specialists for luxury hotels with
                        detailed threat analysis and post-pandemic sanitisation patrols for hotel
                        venues.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Belgravia Local Expertise</h3>
                      <p className="text-muted-foreground">
                        Intimate knowledge of Belgravia's unique security challenges with
                        low-profile security for high-end hotel events and undercover security staff
                        for discreet hotel events.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Shield className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">24/7 Emergency Response Teams</h3>
                      <p className="text-muted-foreground">
                        Professional 24/7 emergency response teams with advanced post-pandemic
                        sanitisation patrols and comprehensive guest safety protocols for luxury
                        hotel environments.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="bg-primary/5 rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-6">Secure Your Belgravia Property</h3>
                  <p className="text-muted-foreground mb-6">
                    Contact our Central London hotel event security specialists for comprehensive
                    Belgravia security services tailored to your property's unique requirements.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="text-primary" size={20} />
                      <span className="font-semibold">020 8087 4233</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="text-primary" size={20} />
                      <span>info@jcreliteprotection.co.uk</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="text-primary" size={20} />
                      <span>Riverbank House, 1 Putney Bridge Approach, London SW6 3JD</span>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 mt-6"
                  >
                    Get Security Risk Assessment
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-slate-900 text-white py-20">
          <div className="section-container text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Protect Your Belgravia Business
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Trust JCR Elite Protection's Central London hotel event security specialists to
                provide comprehensive Belgravia security services with security risk assessment
                specialists for luxury hotels.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Get Free Security Assessment
                </Link>
                <a
                  href="tel:02080874233"
                  className="border border-white/20 hover:border-primary text-white hover:text-primary px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Call Now: 020 8087 4233
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <LazyFooter />
    </>
  );
}
