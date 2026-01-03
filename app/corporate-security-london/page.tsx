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
  title: "Corporate Security London | JCR Elite Protection | Business Security Services",
  description:
    "Professional corporate security London services for businesses, offices, and executives. Elite SIA-licensed security personnel specialising in corporate protection, executive security, and business premises. Call 020 8087 4233.",
  keywords:
    "corporate security london, business security london, executive protection london, office security london, corporate security services, financial services security london",
  alternates: {
    canonical: "https://jcreliteprotection.co.uk/corporate-security-london",
  },
  openGraph: {
    title: "Corporate Security London | JCR Elite Protection | Business Security Services",
    description:
      "Professional corporate security London services for businesses, offices, and executives. Elite SIA-licensed security personnel specialising in corporate protection and executive security.",
    type: "website",
    url: "https://jcreliteprotection.co.uk/corporate-security-london",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Security London | JCR Elite Protection | Business Security Services",
    description:
      "Professional corporate security London services for businesses, offices, and executives. Elite SIA-licensed security personnel specialising in corporate protection.",
  },
};

export default function CorporateSecurityLondonPage() {
  const corporateFeatures = [
    "Executive Protection",
    "Office Security",
    "Corporate Events",
    "Business Premises",
    "Financial Services",
    "Risk Management",
    "Access Control",
    "Asset Protection",
  ];

  const services = [
    {
      icon: <Crown size={32} />,
      title: "Executive Protection Services",
      description:
        "Discreet executive protection for London's business leaders, CEOs, and high-profile professionals.",
      features: ["Personal Protection", "Travel Security", "Threat Assessment", "Risk Management"],
    },
    {
      icon: <Building size={32} />,
      title: "Corporate Office Security",
      description:
        "Comprehensive security solutions for London's corporate offices, business centres, and headquarters.",
      features: ["Reception Security", "Access Control", "Visitor Management", "Staff Protection"],
    },
    {
      icon: <Users size={32} />,
      title: "Corporate Event Security",
      description:
        "Professional security for corporate events, conferences, product launches, and business functions.",
      features: ["Conference Security", "VIP Protection", "Crowd Management", "Event Planning"],
    },
    {
      icon: <Shield size={32} />,
      title: "Financial Services Security",
      description:
        "Specialised security services for London's financial institutions, banks, and investment firms.",
      features: [
        "Banking Security",
        "Data Protection",
        "Regulatory Compliance",
        "Secure Transactions",
      ],
    },
    {
      icon: <Eye size={32} />,
      title: "Corporate Risk Management",
      description:
        "Comprehensive risk assessment and management services for London businesses and corporations.",
      features: ["Risk Analysis", "Security Audits", "Threat Intelligence", "Crisis Management"],
    },
    {
      icon: <UserCheck size={32} />,
      title: "Business Premises Security",
      description:
        "Advanced security systems and personnel for protecting London's corporate properties and assets.",
      features: [
        "Property Protection",
        "Surveillance Systems",
        "Perimeter Security",
        "Loss Prevention",
      ],
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Corporate Security London",
    description:
      "Professional corporate security London services for businesses, offices, and executives with elite SIA-licensed security personnel specialising in corporate protection, executive security, and business premises.",
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
    serviceType: "Corporate Security Services",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      description: "Professional corporate security services available 24/7",
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
                  London's Premier Corporate Security Specialists
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Corporate Security London
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                Professional corporate security services for London businesses, offices, and
                executives. Elite SIA-licensed security personnel specialising in corporate
                protection, executive security, and business premises protection available 24/7.
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
                Comprehensive Corporate Security Solutions for London
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                JCR Elite Protection provides comprehensive corporate security services to London's
                business community, from multinational corporations to growing enterprises.
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
                Professional Corporate Security Services in London
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                Tailored corporate security solutions designed for London's business environment,
                ensuring the highest standards of executive protection and business security.
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
                  Why Choose JCR Elite Protection for Corporate Security?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Crown className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Corporate Security Expertise</h3>
                      <p className="text-muted-foreground">
                        Specialised experience in London's corporate environment with deep
                        understanding of business security requirements and executive protection,
                        backed by City of London Livery Company professional standards through WCoSP
                        membership.
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
                    <Shield className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Comprehensive Risk Management</h3>
                      <p className="text-muted-foreground">
                        Advanced risk assessment and management capabilities with crisis response
                        protocols tailored for corporate environments.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Building className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">London Business Knowledge</h3>
                      <p className="text-muted-foreground">
                        Intimate understanding of London's business districts and corporate security
                        challenges across all major commercial areas.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="bg-primary/5 rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-6">Secure Your London Business</h3>
                  <p className="text-muted-foreground mb-6">
                    Contact our corporate security specialists for a comprehensive security solution
                    tailored to your London business requirements.
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
                    Get Corporate Security Quote
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
                Protect Your London Business with Professional Corporate Security
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Trust JCR Elite Protection to provide comprehensive corporate security services for
                your London business with professional, reliable, and discreet executive protection
                solutions.
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
