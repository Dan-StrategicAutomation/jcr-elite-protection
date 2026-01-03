import { Home, Mail, MapPin, Phone, Shield, Users, Video } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import AnimatedSection from "@/components/AnimatedSection";
import LazyFooter from "@/components/LazyFooter";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Residential Security London | Home Security Services | JCR Elite Protection",
  description:
    "Professional residential security services in London including manned guarding, electronic security systems, and concierge services for homes and estates. 24/7 protection available.",
  keywords:
    "residential security london, home security london, estate security london, manned guarding london, concierge services london, property security london",
  alternates: {
    canonical: "https://jcreliteprotection.co.uk/residential-security-london",
  },
  openGraph: {
    title: "Residential Security London | Home Security Services | JCR Elite Protection",
    description:
      "Professional residential security services in London including manned guarding, electronic security systems, and concierge services for homes and estates.",
    type: "website",
    url: "https://jcreliteprotection.co.uk/residential-security-london",
  },
  twitter: {
    card: "summary_large_image",
    title: "Residential Security London | Home Security Services | JCR Elite Protection",
    description:
      "Professional residential security services in London including manned guarding, electronic security systems, and concierge services for homes and estates.",
  },
};

export default function ResidentialSecurityPage() {
  const services = [
    {
      icon: <Shield size={32} />,
      title: "Manned Guarding",
      description:
        "Professional manned guarding services for residential properties including 24/7 security patrols, access control, and emergency response.",
      features: [
        "24/7 Security Patrols",
        "Access Control",
        "Emergency Response",
        "Property Monitoring",
      ],
    },
    {
      icon: <Video size={32} />,
      title: "Electronic Security Systems",
      description:
        "Advanced electronic security solutions including CCTV systems, alarm systems, and smart home integration for comprehensive residential protection.",
      features: ["CCTV Systems", "Alarm Systems", "Smart Home Integration", "Remote Monitoring"],
    },
    {
      icon: <Home size={32} />,
      title: "Concierge Services",
      description:
        "Professional concierge services including key holding, parcel management, and resident assistance for luxury residential properties.",
      features: [
        "Key Holding",
        "Parcel Management",
        "Resident Assistance",
        "Maintenance Coordination",
      ],
    },
    {
      icon: <Users size={32} />,
      title: "Estate Security",
      description:
        "Comprehensive estate security for large residential properties including perimeter security, gate management, and multi-resident coordination.",
      features: [
        "Perimeter Security",
        "Gate Management",
        "Multi-Resident Coordination",
        "Community Safety",
      ],
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Residential Security Services London",
    description:
      "Professional residential security services in London including manned guarding, electronic security systems, and concierge services for homes and estates.",
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
    serviceType: "Residential Security",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      description: "Professional London residential security services available 24/7",
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
                Residential Security London
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                Professional residential security services in London providing comprehensive
                protection for homes and estates. Manned guarding, electronic security systems, and
                concierge services with elite security personnel available 24/7 across London.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Get Home Security Quote
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
                Comprehensive Residential Security Solutions
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                JCR Elite Protection delivers professional residential security services across
                London. From luxury homes to large estates, our comprehensive security solutions
                ensure your property and loved ones are protected around the clock.
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
                  Why Choose Our Residential Security?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Shield className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">SIA-Licensed Professionals</h3>
                      <p className="text-muted-foreground">
                        All security personnel are fully SIA-licensed with extensive experience in
                        residential security and property protection across London.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Home className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Tailored Security Solutions</h3>
                      <p className="text-muted-foreground">
                        Customized security solutions designed specifically for your residential
                        property, whether it's a luxury home or large estate.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Users className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">24/7 Residential Protection</h3>
                      <p className="text-muted-foreground">
                        Round-the-clock residential security with immediate response capabilities
                        and comprehensive coverage for your property.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="bg-primary/5 rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-6">Free Residential Security Assessment</h3>
                  <p className="text-muted-foreground mb-6">
                    Contact our residential security experts for a comprehensive assessment of your
                    home or estate security needs.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Secure Your Home Today</h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Contact JCR Elite Protection for professional residential security services in
                London tailored to protect your property and loved ones.
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
