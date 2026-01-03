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
  title: "Chelsea Hotel Security | JCR Elite Protection | Luxury Hotel Security Services",
  description:
    "Professional Chelsea hotel security services for luxury hotels in London's fashionable district. Elite SIA-licensed security personnel specialising in luxury hospitality. Call 020 8087 4233.",
  keywords:
    "chelsea hotel security, luxury hotel security chelsea, chelsea security services, luxury hotel security london, boutique hotel security chelsea",
  alternates: {
    canonical: "https://jcreliteprotection.co.uk/chelsea-hotel-security",
  },
  openGraph: {
    title: "Chelsea Hotel Security | JCR Elite Protection | Luxury Hotel Security Services",
    description:
      "Professional Chelsea hotel security services for luxury hotels in London's fashionable district. Elite SIA-licensed security personnel specialising in luxury hospitality.",
    type: "website",
    url: "https://jcreliteprotection.co.uk/chelsea-hotel-security",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chelsea Hotel Security | JCR Elite Protection | Luxury Hotel Security Services",
    description:
      "Professional Chelsea hotel security services for luxury hotels in London's fashionable district. Elite SIA-licensed security personnel specialising in luxury hospitality.",
  },
};

export default function ChelseaHotelSecurityPage() {
  const luxuryFeatures = [
    "Luxury Hotels",
    "Premium Suites",
    "VIP Services",
    "Concierge Security",
    "Guest Protection",
    "Property Security",
    "Event Security",
    "24/7 Coverage",
  ];

  const services = [
    {
      icon: <Crown size={32} />,
      title: "Luxury Hotel Security Chelsea",
      description:
        "Elite security services for Chelsea's prestigious luxury hotels and boutique hospitality venues.",
      features: [
        "VIP Guest Protection",
        "Discreet Security Presence",
        "Concierge Security",
        "Emergency Response",
      ],
    },
    {
      icon: <Shield size={32} />,
      title: "Guest Safety Management",
      description:
        "Comprehensive guest safety protocols tailored for Chelsea's sophisticated international clientele.",
      features: [
        "Guest Screening",
        "Personal Security",
        "Safe Escort Services",
        "Threat Assessment",
      ],
    },
    {
      icon: <Users size={32} />,
      title: "Event Security Chelsea",
      description:
        "Professional event security for luxury hotel events, fashion shows, and exclusive functions in Chelsea.",
      features: ["Event Planning Security", "VIP Protection", "Crowd Management", "Access Control"],
    },
    {
      icon: <Building size={32} />,
      title: "Property Protection",
      description:
        "Advanced security systems and personnel for protecting Chelsea's valuable hotel properties and assets.",
      features: [
        "Asset Protection",
        "Surveillance Systems",
        "Access Management",
        "Loss Prevention",
      ],
    },
    {
      icon: <Eye size={32} />,
      title: "Security Assessments",
      description:
        "Comprehensive security evaluations specifically designed for Chelsea's luxury hotel environment.",
      features: ["Risk Analysis", "Security Audits", "Compliance Review", "Improvement Plans"],
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Chelsea Hotel Security Services",
    description:
      "Professional Chelsea hotel security services for luxury hotels in London's fashionable district with elite SIA-licensed security personnel specialising in luxury hospitality.",
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
    serviceType: "Hotel Security Services",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      description: "Professional Chelsea hotel security services available 24/7",
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
                  Chelsea's Premier Security Specialists
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Chelsea Hotel Security Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                Elite security services for Chelsea's luxury hotels in London's most fashionable
                district. Professional SIA-licensed security personnel specialising in luxury
                hospitality and VIP guest protection available 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Get Luxury Hotel Security Quote
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

        {/* Luxury Hotels Section */}
        <section className="py-20 bg-gray-50">
          <div className="section-container">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Trusted by Chelsea's Finest Hotels
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                JCR Elite Protection provides security services to Chelsea's luxury hotels and
                boutique properties, serving discerning guests in London's most fashionable
                district.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {luxuryFeatures.map((feature, index) => (
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
                Luxury Hotel Security Services in Chelsea
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                Specialised security solutions designed for Chelsea's luxury hotel environment,
                ensuring the highest standards of guest safety and property protection.
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
                  Why Choose JCR Elite Protection for Chelsea Hotels?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Crown className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Luxury Hospitality Expertise</h3>
                      <p className="text-muted-foreground">
                        Specialised experience in Chelsea's luxury hotel environment with deep
                        understanding of boutique hospitality standards.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <UserCheck className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Elite SIA-Licensed Personnel</h3>
                      <p className="text-muted-foreground">
                        Handpicked security professionals with luxury hotel experience and
                        impeccable presentation standards.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Chelsea Local Knowledge</h3>
                      <p className="text-muted-foreground">
                        Intimate knowledge of Chelsea's unique security challenges and luxury hotel
                        requirements.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Shield className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Discreet Professional Service</h3>
                      <p className="text-muted-foreground">
                        Unobtrusive security presence that maintains the luxury ambiance whilst
                        ensuring complete protection.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="bg-primary/5 rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-6">Secure Your Chelsea Hotel</h3>
                  <p className="text-muted-foreground mb-6">
                    Contact our Chelsea hotel security specialists for a bespoke security solution
                    tailored to your luxury property's unique requirements.
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
                    Get Chelsea Hotel Security Quote
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
                Protect Your Chelsea Hotel's Reputation
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Trust JCR Elite Protection to maintain the highest security standards for your
                luxury Chelsea hotel property and distinguished guests.
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
