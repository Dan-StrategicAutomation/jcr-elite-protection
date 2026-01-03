import { Building, Mail, MapPin, Phone, Shield, Users, Video } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import AnimatedSection from "@/components/AnimatedSection";
import LazyFooter from "@/components/LazyFooter";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Commercial Security London | Business Security Services | JCR Elite Protection",
  description:
    "Professional commercial security services in London including manned guarding, CCTV systems, and site security for businesses and commercial properties. 24/7 protection available.",
  keywords:
    "commercial security london, business security london, office security london, site security london, manned guarding london, cctv london, property security london",
  alternates: {
    canonical: "https://jcreliteprotection.co.uk/commercial-security-london",
  },
  openGraph: {
    title: "Commercial Security London | Business Security Services | JCR Elite Protection",
    description:
      "Professional commercial security services in London including manned guarding, CCTV systems, and site security for businesses and commercial properties.",
    type: "website",
    url: "https://jcreliteprotection.co.uk/commercial-security-london",
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Security London | Business Security Services | JCR Elite Protection",
    description:
      "Professional commercial security services in London including manned guarding, CCTV systems, and site security for businesses and commercial properties.",
  },
};

export default function CommercialSecurityPage() {
  const services = [
    {
      icon: <Shield size={32} />,
      title: "Manned Guarding",
      description:
        "Professional manned guarding services for commercial properties including access control, security patrols, and emergency response coordination.",
      features: ["Access Control", "Security Patrols", "Emergency Response", "Visitor Management"],
    },
    {
      icon: <Video size={32} />,
      title: "CCTV & Surveillance",
      description:
        "Advanced CCTV systems and surveillance solutions including remote monitoring, video analytics, and comprehensive security coverage.",
      features: ["CCTV Installation", "Remote Monitoring", "Video Analytics", "24/7 Recording"],
    },
    {
      icon: <Building size={32} />,
      title: "Site Security",
      description:
        "Construction and commercial site security including perimeter protection, equipment security, and workforce management.",
      features: [
        "Perimeter Protection",
        "Equipment Security",
        "Workforce Management",
        "Site Access Control",
      ],
    },
    {
      icon: <Users size={32} />,
      title: "Office Security",
      description:
        "Comprehensive office security solutions including reception services, key holding, and business continuity planning.",
      features: ["Reception Services", "Key Holding", "Business Continuity", "Staff Safety"],
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Commercial Security Services London",
    description:
      "Professional commercial security services in London including manned guarding, CCTV systems, and site security for businesses and commercial properties.",
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
    serviceType: "Commercial Security",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      description: "Professional London commercial security services available 24/7",
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
                Commercial Security London
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                Professional commercial security services in London providing comprehensive
                protection for businesses and commercial properties. Manned guarding, CCTV systems,
                and site security with elite security personnel available 24/7 across London.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Get Business Security Quote
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
                Comprehensive Commercial Security Solutions
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                JCR Elite Protection delivers professional commercial security services across
                London. From office buildings to construction sites, our comprehensive security
                solutions protect your business assets and ensure operational continuity.
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
                  Why Choose Our Commercial Security?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Shield className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">SIA-Licensed Professionals</h3>
                      <p className="text-muted-foreground">
                        All security personnel are fully SIA-licensed with extensive experience in
                        commercial security and business protection across London.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Building className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Tailored Business Solutions</h3>
                      <p className="text-muted-foreground">
                        Customized security solutions designed specifically for your commercial
                        property, whether it's an office building or construction site.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Users className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">24/7 Business Protection</h3>
                      <p className="text-muted-foreground">
                        Round-the-clock commercial security with immediate response capabilities and
                        comprehensive coverage for your business operations.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="bg-primary/5 rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-6">Free Commercial Security Assessment</h3>
                  <p className="text-muted-foreground mb-6">
                    Contact our commercial security experts for a comprehensive assessment of your
                    business security needs.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Protect Your Business Today</h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Contact JCR Elite Protection for professional commercial security services in London
                tailored to protect your business assets and operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Get Free Assessment
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
