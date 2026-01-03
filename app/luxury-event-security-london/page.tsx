import {
  Calendar,
  Crown,
  Eye,
  Mail,
  MapPin,
  Phone,
  Shield,
  Star,
  UserCheck,
  Users,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import AnimatedSection from "@/components/AnimatedSection";
import LazyFooter from "@/components/LazyFooter";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Luxury Event Security London | JCR Elite Protection | VIP Event Protection",
  description:
    "Professional luxury event security London services for VIP events, galas, and exclusive functions. Elite SIA-licensed security personnel specialising in luxury venue protection and celebrity security. Call 020 8087 4233.",
  keywords:
    "luxury event security london, vip event security london, gala security london, celebrity security london, fashion show security, luxury venue security, private party security",
  alternates: {
    canonical: "https://jcreliteprotection.co.uk/luxury-event-security-london",
  },
  openGraph: {
    title: "Luxury Event Security London | JCR Elite Protection | VIP Event Protection",
    description:
      "Professional luxury event security London services for VIP events, galas, and exclusive functions. Elite SIA-licensed security personnel specialising in luxury venue protection.",
    type: "website",
    url: "https://jcreliteprotection.co.uk/luxury-event-security-london",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Event Security London | JCR Elite Protection | VIP Event Protection",
    description:
      "Professional luxury event security London services for VIP events, galas, and exclusive functions. Elite SIA-licensed security personnel specialising in luxury venue protection.",
  },
};

export default function LuxuryEventSecurityPage() {
  const eventFeatures = [
    "VIP Protection",
    "Crowd Management",
    "Access Control",
    "Event Planning",
    "Celebrity Security",
    "Luxury Venues",
    "Discreet Service",
    "Emergency Response",
  ];

  const services = [
    {
      icon: <Crown size={32} />,
      title: "VIP Event Security",
      description:
        "Elite security services for VIP events, galas, and exclusive functions at London's luxury venues.",
      features: [
        "VIP Guest Protection",
        "Red Carpet Security",
        "Celebrity Protection",
        "Discreet Operations",
      ],
    },
    {
      icon: <Calendar size={32} />,
      title: "Luxury Hotel Events",
      description:
        "Specialised security for luxury hotel events, conferences, and private functions in prestigious venues.",
      features: [
        "Hotel Event Security",
        "Conference Protection",
        "Private Functions",
        "Venue Coordination",
      ],
    },
    {
      icon: <Users size={32} />,
      title: "Corporate Gala Security",
      description:
        "Professional security for corporate galas, award ceremonies, and high-profile business events.",
      features: ["Gala Security", "Award Ceremonies", "Corporate Events", "Executive Protection"],
    },
    {
      icon: <Shield size={32} />,
      title: "Fashion Show Security",
      description:
        "Specialised security for fashion shows, product launches, and luxury brand events in London.",
      features: ["Fashion Week Security", "Product Launches", "Brand Events", "Media Management"],
    },
    {
      icon: <Eye size={32} />,
      title: "Private Party Security",
      description:
        "Discreet security services for private parties, celebrations, and exclusive gatherings.",
      features: ["Private Parties", "Celebrations", "Exclusive Events", "Guest Management"],
    },
    {
      icon: <UserCheck size={32} />,
      title: "Event Risk Management",
      description:
        "Comprehensive risk assessment and management for luxury events and high-profile functions.",
      features: ["Risk Assessment", "Event Planning", "Crisis Management", "Emergency Protocols"],
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Luxury Event Security London",
    description:
      "Professional luxury event security London services for VIP events, galas, and exclusive functions with elite SIA-licensed security personnel specialising in luxury venue protection and celebrity security.",
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
      name: "London, United Kingdom",
    },
    serviceType: "Luxury Event Security Services",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      description: "Professional luxury event security services available for all events",
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
                  London's Premier Luxury Event Security Specialists
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Luxury Event Security London
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                Professional luxury event security services for VIP events, galas, and exclusive
                functions in London. Elite SIA-licensed security personnel specialising in luxury
                venue protection, celebrity security, and discreet event management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Get Luxury Event Security Quote
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

        {/* Event Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="section-container">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Comprehensive Luxury Event Security for London
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                JCR Elite Protection provides comprehensive luxury event security services across
                London's most prestigious venues and exclusive locations.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {eventFeatures.map((feature, index) => (
                <AnimatedSection key={index} delay={index * 50}>
                  <div className="bg-white rounded-lg p-4 shadow-md text-center">
                    <Star className="text-primary mx-auto mb-2" size={20} />
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
                Professional Luxury Event Security Services
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                Specialised security solutions designed for London's luxury event environment,
                ensuring the highest standards of VIP protection and event security.
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
                  Why Choose JCR Elite Protection for Luxury Events?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Crown className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Luxury Event Expertise</h3>
                      <p className="text-muted-foreground">
                        Specialised experience in London's luxury event environment with deep
                        understanding of VIP protection and high-profile event security.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <UserCheck className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Elite SIA-Licensed Personnel</h3>
                      <p className="text-muted-foreground">
                        Handpicked security professionals with luxury event experience and
                        impeccable presentation standards for high-profile occasions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Calendar className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Event Planning Integration</h3>
                      <p className="text-muted-foreground">
                        Seamless integration with event planners and venue management to ensure
                        comprehensive security coverage without disrupting the event flow.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Shield className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Discreet Professional Service</h3>
                      <p className="text-muted-foreground">
                        Unobtrusive security presence that maintains the luxury atmosphere whilst
                        ensuring complete protection for all guests and VIPs.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="bg-primary/5 rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-6">Secure Your Luxury Event</h3>
                  <p className="text-muted-foreground mb-6">
                    Contact our luxury event security specialists for a comprehensive security
                    solution tailored to your exclusive event requirements.
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
                    Get Luxury Event Security Quote
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
                Make Your Luxury Event Unforgettable and Secure
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Trust JCR Elite Protection to provide comprehensive luxury event security services
                with professional, discreet, and reliable VIP protection for your exclusive London
                events.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Get Free Event Security Consultation
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
