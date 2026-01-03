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
  title: "Chelsea Security Services | JCR Elite Protection | Professional Security Company",
  description:
    "Professional Chelsea security services including manned security, mobile patrols, and corporate security. Elite SIA-licensed security personnel for London's fashionable district. Call 020 8087 4233.",
  keywords:
    "chelsea security services, manned security chelsea, mobile patrols chelsea, corporate security chelsea, retail security chelsea, security company chelsea",
  alternates: {
    canonical: "https://jcreliteprotection.co.uk/chelsea-security-services",
  },
  openGraph: {
    title: "Chelsea Security Services | JCR Elite Protection | Professional Security Company",
    description:
      "Professional Chelsea security services including manned security, mobile patrols, and corporate security. Elite SIA-licensed security personnel for London's fashionable district.",
    type: "website",
    url: "https://jcreliteprotection.co.uk/chelsea-security-services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chelsea Security Services | JCR Elite Protection | Professional Security Company",
    description:
      "Professional Chelsea security services including manned security, mobile patrols, and corporate security. Elite SIA-licensed security personnel for London's fashionable district.",
  },
};

export default function ChelseaSecurityServicesPage() {
  const securityFeatures = [
    "Manned Security",
    "Mobile Patrols",
    "Access Control",
    "CCTV Monitoring",
    "Alarm Response",
    "Key Holding",
    "Security Guards",
    "Risk Assessment",
  ];

  const services = [
    {
      icon: <Crown size={32} />,
      title: "Chelsea Manned Security Services",
      description:
        "Professional manned security services for Chelsea's luxury properties, boutiques, and commercial premises.",
      features: [
        "Static Security Guards",
        "Reception Security",
        "Retail Security",
        "Property Protection",
      ],
    },
    {
      icon: <Shield size={32} />,
      title: "Mobile Security Patrols Chelsea",
      description:
        "Comprehensive mobile patrol services covering Chelsea's residential and commercial areas with rapid response capabilities.",
      features: ["Regular Patrols", "Alarm Response", "Key Holding", "Emergency Response"],
    },
    {
      icon: <Users size={32} />,
      title: "Corporate Security Chelsea",
      description:
        "Tailored corporate security solutions for Chelsea's businesses, offices, and commercial developments.",
      features: ["Office Security", "Executive Protection", "Access Control", "Visitor Management"],
    },
    {
      icon: <Building size={32} />,
      title: "Retail Security Services",
      description:
        "Specialised retail security for Chelsea's luxury boutiques, galleries, and high-end shopping areas.",
      features: ["Loss Prevention", "Customer Safety", "Asset Protection", "Theft Deterrence"],
    },
    {
      icon: <Eye size={32} />,
      title: "CCTV & Surveillance",
      description:
        "Advanced CCTV monitoring and surveillance systems for comprehensive security coverage in Chelsea.",
      features: [
        "24/7 Monitoring",
        "Remote Surveillance",
        "Incident Recording",
        "Evidence Collection",
      ],
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Chelsea Security Services",
    description:
      "Professional Chelsea security services including manned security, mobile patrols, and corporate security with elite SIA-licensed security personnel for London's fashionable district.",
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
      name: "Chelsea, London",
    },
    serviceType: "Security Services",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      description: "Professional Chelsea security services available 24/7",
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
                  Chelsea's Trusted Security Specialists
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Chelsea Security Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                Professional security services for Chelsea's luxury properties, boutiques, and
                businesses. Elite SIA-licensed manned security, mobile patrols, and corporate
                security solutions available 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Get Security Services Quote
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
                Comprehensive Security Solutions for Chelsea
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                JCR Elite Protection provides comprehensive security services to Chelsea's luxury
                properties, high-end retail establishments, and prestigious commercial premises.
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
                Professional Security Services in Chelsea
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                Tailored security solutions designed for Chelsea's unique environment, from luxury
                retail to corporate offices and residential properties.
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
                  Why Choose JCR Elite Protection for Chelsea?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Crown className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Chelsea Area Expertise</h3>
                      <p className="text-muted-foreground">
                        Specialised knowledge of Chelsea's unique security requirements, from luxury
                        retail to high-end residential properties.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <UserCheck className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Elite SIA-Licensed Personnel</h3>
                      <p className="text-muted-foreground">
                        Highly trained security professionals with experience in Chelsea's luxury
                        environment and impeccable presentation standards.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Local Response Capability</h3>
                      <p className="text-muted-foreground">
                        Rapid response times throughout Chelsea with intimate knowledge of local
                        streets and security challenges.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Shield className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Comprehensive Service Range</h3>
                      <p className="text-muted-foreground">
                        Full spectrum of security services from manned guarding to mobile patrols
                        and corporate security solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="bg-primary/5 rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-6">Secure Your Chelsea Property</h3>
                  <p className="text-muted-foreground mb-6">
                    Contact our Chelsea security specialists for a comprehensive security solution
                    tailored to your property's specific requirements.
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
                    Get Chelsea Security Quote
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
                Protect Your Chelsea Business or Property
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Trust JCR Elite Protection to provide comprehensive security services for your
                Chelsea property with professional, reliable, and discreet security solutions.
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
