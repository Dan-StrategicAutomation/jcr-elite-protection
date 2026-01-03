import {
  Building,
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
  title: "Marylebone Security Services | JCR Elite Protection | Corporate Security Company",
  description:
    "Professional Marylebone security services including corporate security, office security, and executive protection. Elite SIA-licensed security personnel for London's business district. Call 020 8087 4233.",
  keywords:
    "marylebone security services, corporate security marylebone, office security marylebone, business security london, executive protection marylebone, commercial security marylebone",
  alternates: {
    canonical: "https://jcreliteprotection.co.uk/marylebone-security-services",
  },
  openGraph: {
    title: "Marylebone Security Services | JCR Elite Protection | Corporate Security Company",
    description:
      "Professional Marylebone security services including corporate security, office security, and executive protection. Elite SIA-licensed security personnel for London's business district.",
    type: "website",
    url: "https://jcreliteprotection.co.uk/marylebone-security-services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marylebone Security Services | JCR Elite Protection | Corporate Security Company",
    description:
      "Professional Marylebone security services including corporate security, office security, and executive protection. Elite SIA-licensed security personnel for London's business district.",
  },
};

export default function MaryleboneSecurityServicesPage() {
  const securityFeatures = [
    "Corporate Security",
    "Office Security",
    "Mobile Patrols",
    "Access Control",
    "CCTV Monitoring",
    "Executive Protection",
    "Security Guards",
    "Risk Assessment",
  ];

  const services = [
    {
      icon: <Crown size={32} />,
      title: "Corporate Security Marylebone",
      description:
        "Professional corporate security services for Marylebone's business district, offices, and commercial premises.",
      features: [
        "Office Security",
        "Executive Protection",
        "Corporate Events",
        "Business Premises",
      ],
    },
    {
      icon: <Shield size={32} />,
      title: "Business District Security",
      description:
        "Comprehensive security solutions for Marylebone's thriving business community and commercial developments.",
      features: [
        "Commercial Security",
        "Tenant Security",
        "Visitor Management",
        "Emergency Response",
      ],
    },
    {
      icon: <Users size={32} />,
      title: "Office Security Services",
      description:
        "Tailored office security solutions for Marylebone's professional services firms and corporate headquarters.",
      features: ["Reception Security", "Access Control", "Staff Protection", "Asset Security"],
    },
    {
      icon: <Building size={32} />,
      title: "Commercial Property Security",
      description:
        "Advanced security systems and personnel for protecting Marylebone's valuable commercial properties and assets.",
      features: [
        "Property Protection",
        "Surveillance Systems",
        "Perimeter Security",
        "Loss Prevention",
      ],
    },
    {
      icon: <Eye size={32} />,
      title: "Executive Protection Services",
      description:
        "Discreet executive protection for Marylebone's business leaders and high-profile professionals.",
      features: ["Personal Protection", "Travel Security", "Threat Assessment", "Risk Management"],
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Marylebone Security Services",
    description:
      "Professional Marylebone security services including corporate security, office security, and executive protection with elite SIA-licensed security personnel for London's business district.",
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
      name: "Marylebone, London",
    },
    serviceType: "Security Services",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      description: "Professional Marylebone security services available 24/7",
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
                  Marylebone's Trusted Business Security Specialists
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Marylebone Security Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                Professional security services for Marylebone's business district. Elite
                SIA-licensed corporate security, office security, and executive protection solutions
                available 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Get Corporate Security Quote
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
                Comprehensive Business Security Solutions for Marylebone
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                JCR Elite Protection provides comprehensive security services to Marylebone's
                business community, professional services firms, and commercial properties.
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
                Professional Security Services in Marylebone
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                Tailored security solutions designed for Marylebone's business environment, from
                corporate offices to commercial properties and executive protection.
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
                  Why Choose JCR Elite Protection for Marylebone?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Crown className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Business District Expertise</h3>
                      <p className="text-muted-foreground">
                        Specialised knowledge of Marylebone's business environment and corporate
                        security requirements for professional services firms.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <UserCheck className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Elite SIA-Licensed Personnel</h3>
                      <p className="text-muted-foreground">
                        Highly trained security professionals with corporate experience and
                        professional presentation standards for business environments.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Local Business Knowledge</h3>
                      <p className="text-muted-foreground">
                        Intimate understanding of Marylebone's business community and commercial
                        security challenges.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Shield className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Comprehensive Corporate Solutions</h3>
                      <p className="text-muted-foreground">
                        Full spectrum of corporate security services from office security to
                        executive protection and commercial property security.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="bg-primary/5 rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-6">Secure Your Marylebone Business</h3>
                  <p className="text-muted-foreground mb-6">
                    Contact our Marylebone security specialists for a comprehensive corporate
                    security solution tailored to your business requirements.
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
                    Get Marylebone Security Quote
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
                Protect Your Marylebone Business Operations
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Trust JCR Elite Protection to provide comprehensive security services for your
                Marylebone business with professional, reliable, and discreet corporate security
                solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Get Free Corporate Security Consultation
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
