import { Building, Eye, Home, Mail, MapPin, Phone, Shield, Users } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import AnimatedSection from "@/components/AnimatedSection";
import LazyFooter from "@/components/LazyFooter";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Family Office Security London | Private Family Protection | JCR Elite Protection",
  description:
    "Professional family office security services in London including personal protection, residential security, and asset protection for high-net-worth families. Discreet and comprehensive security solutions.",
  keywords:
    "family office security london, private family security london, wealth protection london, high net worth security london, family protection london, asset security london",
  alternates: {
    canonical: "https://jcreliteprotection.co.uk/family-office-security-london",
  },
  openGraph: {
    title: "Family Office Security London | Private Family Protection | JCR Elite Protection",
    description:
      "Professional family office security services in London including personal protection, residential security, and asset protection for high-net-worth families.",
    type: "website",
    url: "https://jcreliteprotection.co.uk/family-office-security-london",
  },
  twitter: {
    card: "summary_large_image",
    title: "Family Office Security London | Private Family Protection | JCR Elite Protection",
    description:
      "Professional family office security services in London including personal protection, residential security, and asset protection for high-net-worth families.",
  },
};

export default function FamilyOfficeSecurityPage() {
  const services = [
    {
      icon: <Shield size={32} />,
      title: "Personal Protection",
      description:
        "Comprehensive personal security for family members including close protection officers, residential security, and secure transportation services.",
      features: [
        "Close Protection Officers",
        "Residential Security",
        "Secure Transportation",
        "Threat Assessment",
      ],
    },
    {
      icon: <Home size={32} />,
      title: "Residential Security",
      description:
        "Advanced residential security solutions including manned guarding, electronic security systems, and emergency response for family homes.",
      features: [
        "Manned Guarding",
        "Electronic Security",
        "Emergency Response",
        "Property Protection",
      ],
    },
    {
      icon: <Building size={32} />,
      title: "Asset Protection",
      description:
        "Professional asset protection services including valuables storage, transportation security, and risk management for family wealth.",
      features: [
        "Valuables Security",
        "Transportation Security",
        "Risk Management",
        "Insurance Coordination",
      ],
    },
    {
      icon: <Eye size={32} />,
      title: "Privacy & Discretion",
      description:
        "Discreet security services maintaining privacy while providing comprehensive protection for high-profile families and their assets.",
      features: [
        "Privacy Protection",
        "Discreet Operations",
        "Confidential Services",
        "Reputation Management",
      ],
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Family Office Security Services London",
    description:
      "Professional family office security services in London including personal protection, residential security, and asset protection for high-net-worth families.",
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
    serviceType: "Family Office Security",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      description: "Professional London family office security services available 24/7",
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
                Family Office Security London
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                Professional family office security services in London providing comprehensive
                protection for high-net-worth families. Discreet personal protection, residential
                security, and asset management with elite security personnel available 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Get Family Security Quote
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

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="section-container">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Comprehensive Family Office Security
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                JCR Elite Protection delivers bespoke family office security services tailored to
                the unique needs of high-net-worth families. Our discreet and professional approach
                ensures complete protection while maintaining privacy and lifestyle.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
        <section className="py-20">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Choose Our Family Office Security?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Shield className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Elite Security Personnel</h3>
                      <p className="text-muted-foreground">
                        SIA-licensed security professionals with extensive experience in
                        high-net-worth protection and family office security requirements.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Eye className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Discreet & Professional</h3>
                      <p className="text-muted-foreground">
                        Utmost discretion and professionalism in all security operations,
                        maintaining privacy while providing comprehensive protection.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Users className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">24/7 Family Protection</h3>
                      <p className="text-muted-foreground">
                        Round-the-clock security services with immediate response capabilities and
                        comprehensive coverage for all family members and assets.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="bg-primary/5 rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-6">
                    Confidential Family Security Consultation
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Contact our family office security specialists for a confidential assessment of
                    your family's security needs.
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
                    Contact Us Today
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Protect Your Family's Future</h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Contact JCR Elite Protection for professional family office security services in
                London tailored to your family's unique needs.
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
