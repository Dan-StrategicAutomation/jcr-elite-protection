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
  title:
    "Belgravia Hotel Security | JCR Elite Protection | SIA Licensed Event Security for 5-Star Hotels",
  description:
    "Professional Belgravia hotel security services for luxury hotels. SIA licensed event security for 5-star hotels with insured, GDPR-compliant operations. 24/7 emergency response teams available. Call 020 8087 4233.",
  keywords:
    "belgravia hotel security, SIA licensed event security for 5-star hotels, insured hotel event security services london, luxury hotel security belgravia, GDPR-compliant crowd management",
  alternates: {
    canonical: "https://jcreliteprotection.co.uk/belgravia-hotel-security",
  },
  openGraph: {
    title:
      "Belgravia Hotel Security | JCR Elite Protection | SIA Licensed Event Security for 5-Star Hotels",
    description:
      "Professional Belgravia hotel security services for luxury hotels. SIA licensed event security for 5-star hotels with insured, GDPR-compliant operations and 24/7 emergency response teams.",
    type: "website",
    url: "https://jcreliteprotection.co.uk/belgravia-hotel-security",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Belgravia Hotel Security | JCR Elite Protection | SIA Licensed Event Security for 5-Star Hotels",
    description:
      "Professional Belgravia hotel security services for luxury hotels. SIA licensed event security for 5-star hotels with insured, GDPR-compliant operations.",
  },
};

export default function BelgraviaHotelSecurityPage() {
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
      title: "SIA Licensed Event Security for 5-Star Hotels",
      description:
        "Elite SIA-licensed event security services for Belgravia's prestigious luxury hotels and hospitality venues.",
      features: [
        "VIP Protection Services",
        "Discreet Security Presence",
        "GDPR-Compliant Operations",
        "24/7 Emergency Response Teams",
      ],
    },
    {
      icon: <Shield size={32} />,
      title: "Insured Hotel Event Security Services",
      description:
        "Comprehensive insured security solutions tailored for Belgravia's discerning international clientele and luxury hotel events.",
      features: [
        "Guest Safety Protocols",
        "Post-Pandemic Sanitization Patrols",
        "Low-Profile Security for High-End Events",
        "Security Risk Assessment Specialists",
      ],
    },
    {
      icon: <Users size={32} />,
      title: "Crowd Control Solutions for Hotel Events",
      description:
        "Professional crowd management and event security for luxury hotel galas, conferences, and private functions in Belgravia.",
      features: ["Event Planning Security", "VIP Protection", "Crowd Management", "Access Control"],
    },
    {
      icon: <Building size={32} />,
      title: "Damage Prevention Security",
      description:
        "Advanced security systems and personnel for protecting Belgravia's valuable hotel properties and preventing damage during events.",
      features: [
        "Asset Protection",
        "Surveillance Systems",
        "Access Management",
        "Loss Prevention",
      ],
    },
    {
      icon: <Eye size={32} />,
      title: "Undercover Security Staff for Discreet Events",
      description:
        "Specialized undercover security personnel for discreet protection during high-profile hotel events and VIP gatherings.",
      features: ["Risk Analysis", "Security Audits", "Compliance Review", "Improvement Plans"],
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Belgravia Hotel Security Services",
    description:
      "Professional Belgravia hotel security services for luxury hotels with SIA licensed event security for 5-star hotels, insured operations, and GDPR-compliant crowd management.",
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
      name: "Belgravia, London",
    },
    serviceType: "Hotel Security Services",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      description: "Professional Belgravia hotel security services available 24/7",
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
                  Belgravia's Premier Security Specialists
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Belgravia Hotel Security Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                SIA licensed event security for 5-star hotels in Belgravia. Professional insured
                hotel event security services with GDPR-compliant operations and 24/7 emergency
                response teams for London's most prestigious luxury hotels.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Get SIA Licensed Security Quote
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
                Trusted by Belgravia's Finest Luxury Hotels
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                JCR Elite Protection provides SIA licensed event security services to Belgravia's
                most prestigious luxury hotels, ensuring GDPR-compliant operations and comprehensive
                guest safety protocols.
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
                SIA Licensed Event Security for Belgravia's 5-Star Hotels
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                Specialized insured hotel event security services designed for Belgravia's luxury
                hotel environment, with GDPR-compliant crowd management and 24/7 emergency response
                capabilities.
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
                  Why Choose JCR Elite Protection for Belgravia Hotels?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Crown className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">SIA Licensed Security Specialists</h3>
                      <p className="text-muted-foreground">
                        Fully SIA licensed event security for 5-star hotels with specialized
                        experience in Belgravia's luxury hospitality environment and GDPR-compliant
                        operations.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <UserCheck className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Insured Hotel Event Security Services</h3>
                      <p className="text-muted-foreground">
                        Comprehensive insurance coverage for all hotel event security operations
                        with 24/7 emergency response teams and low-profile security for high-end
                        events.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Belgravia Local Expertise</h3>
                      <p className="text-muted-foreground">
                        Intimate knowledge of Belgravia's unique security challenges and luxury
                        hotel requirements with specialized crowd control solutions for hotel
                        events.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Shield className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Post-Pandemic Security Protocols</h3>
                      <p className="text-muted-foreground">
                        Advanced post-pandemic sanitization patrols and guest safety protocols
                        designed specifically for luxury hotel environments and VIP protection
                        services.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="bg-primary/5 rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-6">Secure Your Belgravia Hotel</h3>
                  <p className="text-muted-foreground mb-6">
                    Contact our SIA licensed security specialists for insured hotel event security
                    services tailored to your luxury property's unique requirements in Belgravia.
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
                    Get SIA Licensed Security Quote
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
                Protect Your Belgravia Hotel's Reputation
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Trust JCR Elite Protection's SIA licensed event security for 5-star hotels to
                maintain the highest security standards for your luxury Belgravia property with
                GDPR-compliant operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Get Free Security Risk Assessment
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
