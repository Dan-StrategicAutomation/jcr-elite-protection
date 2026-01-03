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
  title: "Canary Wharf Corporate Security | JCR Elite Protection | Financial Services Security",
  description:
    "Professional Canary Wharf corporate security services for financial institutions and businesses. Elite SIA-licensed security personnel specialising in financial services and executive protection. Call 020 8087 4233.",
  keywords:
    "canary wharf corporate security, financial services security london, canary wharf security services, executive protection canary wharf, corporate tower security, banking security london",
  alternates: {
    canonical: "https://jcreliteprotection.co.uk/canary-wharf-corporate-security",
  },
  openGraph: {
    title: "Canary Wharf Corporate Security | JCR Elite Protection | Financial Services Security",
    description:
      "Professional Canary Wharf corporate security services for financial institutions and businesses. Elite SIA-licensed security personnel specialising in financial services and executive protection.",
    type: "website",
    url: "https://jcreliteprotection.co.uk/canary-wharf-corporate-security",
  },
  twitter: {
    card: "summary_large_image",
    title: "Canary Wharf Corporate Security | JCR Elite Protection | Financial Services Security",
    description:
      "Professional Canary Wharf corporate security services for financial institutions and businesses. Elite SIA-licensed security personnel specialising in financial services.",
  },
};

export default function CanaryWharfCorporateSecurityPage() {
  const corporateFeatures = [
    "Corporate Security",
    "Financial Services",
    "Executive Protection",
    "Office Security",
    "Access Control",
    "CCTV Monitoring",
    "Security Guards",
    "Risk Management",
  ];

  const services = [
    {
      icon: <Crown size={32} />,
      title: "Financial Services Security",
      description:
        "Specialised security services for Canary Wharf's financial institutions, banks, and investment firms.",
      features: [
        "Banking Security",
        "Financial Data Protection",
        "Regulatory Compliance",
        "Secure Transactions",
      ],
    },
    {
      icon: <Shield size={32} />,
      title: "Corporate Tower Security",
      description:
        "Comprehensive security solutions for Canary Wharf's iconic corporate towers and office complexes.",
      features: [
        "High-Rise Security",
        "Tenant Protection",
        "Visitor Management",
        "Emergency Response",
      ],
    },
    {
      icon: <Users size={32} />,
      title: "Executive Protection Services",
      description:
        "Discreet executive protection for Canary Wharf's business leaders and high-profile professionals.",
      features: ["Personal Protection", "Travel Security", "Threat Assessment", "Risk Management"],
    },
    {
      icon: <Building size={32} />,
      title: "Commercial Property Security",
      description:
        "Advanced security systems for protecting Canary Wharf's valuable commercial properties and corporate assets.",
      features: [
        "Asset Protection",
        "Surveillance Systems",
        "Perimeter Security",
        "Loss Prevention",
      ],
    },
    {
      icon: <Eye size={32} />,
      title: "Corporate Event Security",
      description:
        "Professional security for corporate events, conferences, and business functions in Canary Wharf.",
      features: ["Conference Security", "VIP Protection", "Crowd Management", "Access Control"],
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Canary Wharf Corporate Security Services",
    description:
      "Professional Canary Wharf corporate security services for financial institutions and businesses with elite SIA-licensed security personnel specialising in financial services and executive protection.",
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
      name: "Canary Wharf, London",
    },
    serviceType: "Corporate Security Services",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      description: "Professional Canary Wharf corporate security services available 24/7",
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
                  Canary Wharf's Premier Corporate Security Specialists
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Canary Wharf Corporate Security Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                Elite corporate security services for Canary Wharf's financial district.
                Professional SIA-licensed security personnel specialising in financial services,
                executive protection, and corporate tower security available 24/7.
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

        {/* Corporate Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="section-container">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Trusted by Canary Wharf's Leading Corporations
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                JCR Elite Protection provides corporate security services to Canary Wharf's
                financial institutions, multinational corporations, and prestigious business towers.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {corporateFeatures.map((feature, index) => (
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
                Financial Services Security in Canary Wharf
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                Specialised corporate security solutions designed for Canary Wharf's financial
                environment, ensuring the highest standards of business protection and regulatory
                compliance.
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
                  Why Choose JCR Elite Protection for Canary Wharf?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Crown className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Financial Services Expertise</h3>
                      <p className="text-muted-foreground">
                        Specialised experience in Canary Wharf's financial environment with deep
                        understanding of banking and corporate security requirements.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <UserCheck className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Elite SIA-Licensed Personnel</h3>
                      <p className="text-muted-foreground">
                        Highly trained security professionals with financial services experience and
                        corporate presentation standards for high-security environments.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Canary Wharf Local Knowledge</h3>
                      <p className="text-muted-foreground">
                        Intimate understanding of Canary Wharf's unique security challenges and
                        financial district requirements.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Shield className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Regulatory Compliance Focus</h3>
                      <p className="text-muted-foreground">
                        Comprehensive understanding of financial services regulations and compliance
                        requirements for corporate security operations.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="bg-primary/5 rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-6">Secure Your Canary Wharf Business</h3>
                  <p className="text-muted-foreground mb-6">
                    Contact our Canary Wharf corporate security specialists for a comprehensive
                    security solution tailored to your financial services requirements.
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
                    Get Canary Wharf Security Quote
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
                Protect Your Canary Wharf Corporate Operations
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Trust JCR Elite Protection to provide comprehensive corporate security services for
                your Canary Wharf business with professional, reliable, and compliant financial
                services security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Get Free Corporate Security Assessment
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
