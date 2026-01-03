import { Calendar, Eye, Mail, MapPin, Phone, Shield, UserCheck, Users } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import AnimatedSection from "@/components/AnimatedSection";
import LazyFooter from "@/components/LazyFooter";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "London Event Security | JCR Elite Protection | Professional Event Security Services",
  description:
    "Professional London event security services for corporate events, private parties, hotel events, and public gatherings. Elite SIA-licensed event security personnel available 24/7. Call 020 8087 4233.",
  keywords:
    "london event security, event security london, corporate event security london, private event security, hotel event security, event security services london",
  alternates: {
    canonical: "https://jcreliteprotection.co.uk/london-event-security",
  },
  openGraph: {
    title: "London Event Security | JCR Elite Protection | Professional Event Security Services",
    description:
      "Professional London event security services for corporate events, private parties, hotel events, and public gatherings. Elite SIA-licensed event security personnel available 24/7.",
    type: "website",
    url: "https://jcreliteprotection.co.uk/london-event-security",
  },
  twitter: {
    card: "summary_large_image",
    title: "London Event Security | JCR Elite Protection | Professional Event Security Services",
    description:
      "Professional London event security services for corporate events, private parties, hotel events, and public gatherings. Elite SIA-licensed event security personnel available 24/7.",
  },
};

export default function LondonEventSecurityPage() {
  const eventTypes = [
    {
      icon: <Calendar size={32} />,
      title: "Corporate Events",
      description:
        "Professional event security for corporate galas, conferences, and business functions across London.",
      features: ["Access Control", "VIP Protection", "Crowd Management", "Emergency Response"],
    },
    {
      icon: <Users size={32} />,
      title: "Private Events",
      description:
        "Discreet security for private parties, weddings, and exclusive gatherings in London venues.",
      features: [
        "Guest Screening",
        "Perimeter Security",
        "Discrete Presence",
        "Emergency Planning",
      ],
    },
    {
      icon: <Shield size={32} />,
      title: "Hotel Events",
      description: "Specialized event security for London's premier hotels and hospitality venues.",
      features: [
        "Guest Safety",
        "Property Protection",
        "Staff Coordination",
        "Incident Management",
      ],
    },
    {
      icon: <Eye size={32} />,
      title: "Public Events",
      description:
        "Comprehensive security for festivals, concerts, and public gatherings throughout London.",
      features: ["Crowd Control", "Traffic Management", "Public Safety", "Risk Assessment"],
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "London Event Security",
    description:
      "Professional London event security services for corporate events, private parties, hotel events, and public gatherings with elite SIA-licensed personnel.",
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
    areaServed: "London",
    serviceType: "Event Security Services",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      description: "Professional London event security services available 24/7",
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                London Event Security
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                Professional London event security services for corporate events, private parties,
                hotel events, and public gatherings. Elite SIA-licensed event security personnel
                with extensive London experience available 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Get Event Security Quote
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

        {/* Event Types Section */}
        <section className="py-20 bg-gray-50">
          <div className="section-container">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                London Event Security Services
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                JCR Elite Protection provides comprehensive London event security services for all
                types of events. Our experienced event security team understands London's unique
                venue requirements and regulatory compliance needs.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {eventTypes.map((eventType, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <div className="text-primary mb-6">{eventType.icon}</div>
                    <h3 className="text-xl font-semibold mb-4">{eventType.title}</h3>
                    <p className="text-muted-foreground mb-6">{eventType.description}</p>
                    <ul className="space-y-2">
                      {eventType.features.map((feature, featureIndex) => (
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

        {/* Event Security Process */}
        <section className="py-20">
          <div className="section-container">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our London Event Security Process
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                Professional event security planning and execution tailored to London venues and
                regulations.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Event Assessment",
                  description:
                    "Comprehensive security assessment of your London event venue and requirements.",
                },
                {
                  step: "2",
                  title: "Security Planning",
                  description:
                    "Detailed security plan development including risk assessment and personnel allocation.",
                },
                {
                  step: "3",
                  title: "Team Deployment",
                  description:
                    "Professional SIA-licensed event security team deployment and coordination.",
                },
                {
                  step: "4",
                  title: "Event Execution",
                  description:
                    "Seamless event security execution with real-time monitoring and response.",
                },
              ].map((process, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <div className="text-center">
                    <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      {process.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
                    <p className="text-muted-foreground">{process.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Event Security */}
        <section className="py-20 bg-gray-50">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Choose Our London Event Security?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <UserCheck className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">SIA-Licensed Event Security Team</h3>
                      <p className="text-muted-foreground">
                        All our event security officers are fully SIA-licensed with specialized
                        training in event security management.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">London Venue Expertise</h3>
                      <p className="text-muted-foreground">
                        Extensive experience with London's premier event venues and understanding of
                        local regulations.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Eye className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Comprehensive Event Coverage</h3>
                      <p className="text-muted-foreground">
                        From small private gatherings to large corporate events, we provide scalable
                        security solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="bg-primary/5 rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-6">Plan Your Event Security</h3>
                  <p className="text-muted-foreground mb-6">
                    Contact our London event security specialists for a tailored security plan for
                    your event.
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
                    Get Event Security Quote
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
                Secure Your London Event Today
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Contact JCR Elite Protection for professional London event security services
                tailored to your specific event requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Get Free Event Security Quote
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
