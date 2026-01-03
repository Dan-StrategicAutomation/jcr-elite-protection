import {
  Building,
  Crown,
  Eye,
  Mail,
  MapPin,
  Phone,
  Shield,
  ShoppingBag,
  UserCheck,
  Users,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import AnimatedSection from "@/components/AnimatedSection";
import LazyFooter from "@/components/LazyFooter";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Knightsbridge Security Services | JCR Elite Protection | Professional Security Company",
  description:
    "Professional Knightsbridge security services including luxury hotel security, retail protection, corporate security, and residential security. Elite SIA-licensed personnel serving Knightsbridge's prestigious district near Harrods and Hyde Park. Call 020 8087 4233.",
  keywords:
    "knightsbridge security services, security company knightsbridge, knightsbridge security, luxury security knightsbridge, corporate security knightsbridge, retail security knightsbridge",
  alternates: {
    canonical: "https://jcreliteprotection.co.uk/knightsbridge-security-services",
  },
  openGraph: {
    title: "Knightsbridge Security Services | JCR Elite Protection | Professional Security Company",
    description:
      "Professional Knightsbridge security services including luxury hotel security, retail protection, corporate security, and residential security. Elite SIA-licensed personnel serving Knightsbridge's prestigious district near Harrods and Hyde Park.",
    type: "website",
    url: "https://jcreliteprotection.co.uk/knightsbridge-security-services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Knightsbridge Security Services | JCR Elite Protection | Professional Security Company",
    description:
      "Professional Knightsbridge security services including luxury hotel security, retail protection, corporate security, and residential security. Elite SIA-licensed personnel serving Knightsbridge's prestigious district near Harrods and Hyde Park.",
  },
};

export default function KnightsbridgeSecurityServicesPage() {
  const services = [
    {
      icon: <Crown size={32} />,
      title: "Luxury Hotel Security",
      description:
        "Elite security services for Knightsbridge's world-renowned luxury hotels and hospitality venues.",
      features: [
        "Luxury Hotel Security",
        "VIP Guest Protection",
        "Concierge Security",
        "Premium Property Protection",
      ],
    },
    {
      icon: <ShoppingBag size={32} />,
      title: "Retail Security Knightsbridge",
      description:
        "Professional security solutions for Knightsbridge's luxury retail stores, boutiques, and shopping areas.",
      features: [
        "Luxury Retail Security",
        "Customer Safety",
        "Loss Prevention",
        "Asset Protection",
      ],
    },
    {
      icon: <Building size={32} />,
      title: "Corporate Security",
      description:
        "Professional security solutions for Knightsbridge's prestigious corporate offices and business premises.",
      features: ["Executive Protection", "Office Security", "Access Control", "Corporate Events"],
    },
    {
      icon: <Users size={32} />,
      title: "Event Security Services",
      description:
        "Comprehensive event security for Knightsbridge's exclusive events, galas, and private functions.",
      features: ["Private Events", "Corporate Functions", "VIP Events", "Gallery Openings"],
    },
    {
      icon: <Shield size={32} />,
      title: "Residential Security",
      description:
        "Discrete security services for Knightsbridge's luxury residential properties and private residences.",
      features: [
        "Residential Protection",
        "Personal Security",
        "Property Surveillance",
        "Concierge Security",
      ],
    },
    {
      icon: <UserCheck size={32} />,
      title: "Close Protection",
      description:
        "Professional close protection services for VIPs, executives, and high-profile individuals in Knightsbridge.",
      features: [
        "Personal Protection",
        "Executive Security",
        "Threat Assessment",
        "Secure Transportation",
      ],
    },
  ];

  const knightsbridgeAreas = [
    "Brompton Road",
    "Sloane Street",
    "Hans Crescent",
    "Pont Street",
    "Beauchamp Place",
    "Walton Street",
    "Cadogan Square",
    "Lennox Gardens",
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Knightsbridge Security Services",
    description:
      "Professional Knightsbridge security services including luxury hotel security, retail protection, corporate security, and residential security with elite SIA-licensed personnel.",
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
      name: "Knightsbridge, London",
    },
    serviceType: "Security Services",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      description: "Professional Knightsbridge security services available 24/7",
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
                  London's Premier Shopping District
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Knightsbridge Security Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                Professional security services for Knightsbridge's luxury hotels, high-end retail
                stores, corporate offices, and exclusive residential properties. Elite SIA-licensed
                security personnel with extensive experience in London's most prestigious shopping
                district.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Get Knightsbridge Security Quote
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

        {/* Knightsbridge Areas Section */}
        <section className="py-20 bg-gray-50">
          <div className="section-container">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Serving All of Knightsbridge</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                JCR Elite Protection provides comprehensive security services throughout
                Knightsbridge's prestigious streets and exclusive locations.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {knightsbridgeAreas.map((area, index) => (
                <AnimatedSection key={index} delay={index * 50}>
                  <div className="bg-white rounded-lg p-4 shadow-md text-center">
                    <MapPin className="text-primary mx-auto mb-2" size={20} />
                    <p className="text-sm font-medium text-gray-700">{area}</p>
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
                Comprehensive Knightsbridge Security Services
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                Tailored security solutions designed for Knightsbridge's unique requirements, from
                luxury hospitality to high-end retail and exclusive residential properties.
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

        {/* Why Choose Knightsbridge Section */}
        <section className="py-20 bg-gray-50">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Knightsbridge Requires Specialized Security
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Crown className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Luxury Shopping Environment</h3>
                      <p className="text-muted-foreground">
                        Knightsbridge hosts world-famous luxury retailers, exclusive boutiques, and
                        high-value properties requiring specialized security expertise.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Users className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">International VIP Clientele</h3>
                      <p className="text-muted-foreground">
                        International VIPs, celebrities, and affluent shoppers frequent
                        Knightsbridge, requiring discrete and professional security services.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Building className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">High-Value Assets</h3>
                      <p className="text-muted-foreground">
                        From luxury hotels to exclusive retail stores, Knightsbridge properties
                        contain high-value assets requiring expert protection.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Eye className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Reputation Management</h3>
                      <p className="text-muted-foreground">
                        Security incidents in Knightsbridge can damage prestigious reputations,
                        making professional security essential.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="bg-primary/5 rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-6">Knightsbridge Security Expertise</h3>
                  <p className="text-muted-foreground mb-6">
                    Our team understands Knightsbridge's unique security challenges and provides
                    tailored solutions that maintain the district's prestigious reputation.
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
                    Discuss Your Knightsbridge Security Needs
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
                Secure Your Knightsbridge Property Today
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Contact JCR Elite Protection for professional Knightsbridge security services
                tailored to your specific requirements in London's premier shopping district.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Get Free Knightsbridge Security Assessment
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
