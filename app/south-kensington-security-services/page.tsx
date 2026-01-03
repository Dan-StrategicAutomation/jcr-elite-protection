import {
  Building,
  Crown,
  Mail,
  MapPin,
  Palette,
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
  title: "South Kensington Security Services | JCR Elite Protection | Corporate Security",
  description:
    "Professional South Kensington security services including corporate security, office security, and cultural venue protection. Elite SIA-licensed security personnel for London's museum district. Call 020 8087 4233.",
  keywords:
    "south kensington security services, corporate security south kensington, office security south kensington, museum district security london, cultural venue protection south kensington",
  alternates: {
    canonical: "https://jcreliteprotection.co.uk/south-kensington-security-services",
  },
  openGraph: {
    title: "South Kensington Security Services | JCR Elite Protection | Corporate Security",
    description:
      "Professional South Kensington security services including corporate security, office security, and cultural venue protection. Elite SIA-licensed security personnel for London's museum district.",
    type: "website",
    url: "https://jcreliteprotection.co.uk/south-kensington-security-services",
  },
  twitter: {
    card: "summary_large_image",
    title: "South Kensington Security Services | JCR Elite Protection | Corporate Security",
    description:
      "Professional South Kensington security services including corporate security, office security, and cultural venue protection. Elite SIA-licensed security personnel for London's museum district.",
  },
};

export default function SouthKensingtonSecurityServicesPage() {
  const securityFeatures = [
    "Corporate Security",
    "Office Security",
    "Cultural Protection",
    "VIP Services",
    "Access Control",
    "CCTV Monitoring",
    "Executive Protection",
    "Security Guards",
  ];

  const services = [
    {
      icon: <Crown size={32} />,
      title: "Corporate Security South Kensington",
      description:
        "Professional corporate security services for South Kensington's businesses, offices, and cultural institutions.",
      features: [
        "Office Security",
        "Executive Protection",
        "Corporate Events",
        "Business Premises",
      ],
    },
    {
      icon: <Palette size={32} />,
      title: "Cultural District Security",
      description:
        "Specialized security solutions for South Kensington's world-renowned museums, galleries, and cultural venues.",
      features: ["Museum Protection", "Gallery Security", "Event Management", "Visitor Safety"],
    },
    {
      icon: <Shield size={32} />,
      title: "VIP Security Services",
      description:
        "Discreet VIP protection services for South Kensington's high-profile residents and international visitors.",
      features: ["Personal Protection", "Escort Services", "Threat Assessment", "Risk Management"],
    },
    {
      icon: <Building size={32} />,
      title: "Professional Services Security",
      description:
        "Tailored security for South Kensington's professional services firms, from law offices to private clinics.",
      features: [
        "Reception Security",
        "Access Management",
        "Confidentiality Protocols",
        "Staff Support",
      ],
    },
    {
      icon: <Users size={32} />,
      title: "Event Security South Kensington",
      description:
        "State-of-the-art event security for galas, exhibitions, and corporate functions in South Kensington.",
      features: ["Crowd Management", "VIP Protection", "Access Control", "Emergency Planning"],
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "South Kensington Security Services",
    description:
      "Professional South Kensington security services including corporate security, office security, and cultural venue protection with elite SIA-licensed security personnel for London's museum district.",
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
      name: "South Kensington, London",
    },
    serviceType: "Security Services",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      description: "Professional South Kensington security services available 24/7",
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
                  South Kensington's Premier Security Specialists
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                South Kensington Security Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                Professional security services for South Kensington. Elite SIA-licensed corporate
                security, office security, and cultural venue protection solutions available 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Get Professional Security Quote
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
                Comprehensive Security Solutions for South Kensington
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                JCR Elite Protection provides tailored security services to South Kensington's
                unique mix of cultural institutions, professional services firms, and elite
                businesses.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {securityFeatures.map((feature, index) => (
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
                Professional Security Services in South Kensington
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                Tailored security solutions designed for South Kensington's prestigious environment,
                from corporate offices to world-renowned cultural venues.
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
                  Why Choose JCR Elite Protection for South Kensington?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Crown className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Cultural District Expertise</h3>
                      <p className="text-muted-foreground">
                        Specialized knowledge of South Kensington's cultural environment and the
                        unique security requirements of museums and prestigious institutions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <UserCheck className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Elite SIA-Licensed Personnel</h3>
                      <p className="text-muted-foreground">
                        Highly trained security professionals with experience in cultural venues and
                        impeccable presentation for South Kensington's elite environment.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Local Knowledge & Presence</h3>
                      <p className="text-muted-foreground">
                        Intimate knowledge of South Kensington's layout and unique security
                        challenges in London's cultural heart.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Shield className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Comprehensive Protection</h3>
                      <p className="text-muted-foreground">
                        Full spectrum of security services from corporate environments to cultural
                        venue protection and VIP personal security.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="bg-primary/5 rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-6">Secure Your South Kensington Interest</h3>
                  <p className="text-muted-foreground mb-6">
                    Contact our South Kensington security specialists for a comprehensive security
                    solution tailored to your specific requirements.
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
                    Get South Kensington Security Quote
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
                Protect Your South Kensington Operations
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Trust JCR Elite Protection to provide comprehensive security services for your South
                Kensington institution or business with professional and reliable solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Get Free Security Consultation
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
