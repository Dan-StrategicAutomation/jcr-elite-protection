import {
  Clock,
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
  title: "24/7 Security Services London | Round-the-Clock Protection | JCR Elite Protection",
  description:
    "Professional 24/7 security services London. Round-the-clock manned security, emergency response teams, and continuous protection. Elite SIA-licensed personnel available 24 hours. Call 020 8087 4233.",
  keywords:
    "24/7 security services london, round the clock security london, 24 hour security guards london, emergency response teams london, night security london, weekend security services",
  alternates: {
    canonical: "https://jcreliteprotection.co.uk/24-7-security-services-london",
  },
  openGraph: {
    title: "24/7 Security Services London | Round-the-Clock Protection | JCR Elite Protection",
    description:
      "Professional 24/7 security services London. Round-the-clock manned security, emergency response teams, and continuous protection. Elite SIA-licensed personnel available 24 hours.",
    type: "website",
    url: "https://jcreliteprotection.co.uk/24-7-security-services-london",
  },
  twitter: {
    card: "summary_large_image",
    title: "24/7 Security Services London | Round-the-Clock Protection | JCR Elite Protection",
    description:
      "Professional 24/7 security services London. Round-the-clock manned security, emergency response teams, and continuous protection.",
  },
};

export default function TwentyFourSevenSecurityServicesPage() {
  const securityFeatures = [
    "24/7 Availability",
    "Emergency Response",
    "Night Security",
    "Weekend Coverage",
    "Holiday Security",
    "Rapid Response",
    "Round-the-Clock",
    "Always Protected",
  ];

  const services = [
    {
      icon: <Clock size={32} />,
      title: "24/7 Manned Security Guards",
      description:
        "Professional security guards available around the clock, providing continuous protection for your London property.",
      features: [
        "Round-the-Clock Coverage",
        "Shift Handover Protocols",
        "Continuous Monitoring",
        "Emergency Response",
      ],
    },
    {
      icon: <Shield size={32} />,
      title: "Emergency Response Teams",
      description:
        "Rapid response security teams available 24/7 for immediate deployment to any security incident in London.",
      features: [
        "Immediate Deployment",
        "Crisis Management",
        "Emergency Protocols",
        "Incident Coordination",
      ],
    },
    {
      icon: <Eye size={32} />,
      title: "24/7 CCTV Monitoring",
      description:
        "Continuous CCTV surveillance and monitoring services with professional security operators watching your premises 24/7.",
      features: ["Live Monitoring", "Incident Detection", "Remote Surveillance", "Alert Systems"],
    },
    {
      icon: <Users size={32} />,
      title: "Night Security Patrols",
      description:
        "Dedicated night security patrols providing enhanced protection during vulnerable overnight hours across London.",
      features: ["Overnight Patrols", "Perimeter Checks", "Access Control", "Incident Prevention"],
    },
    {
      icon: <Crown size={32} />,
      title: "Weekend & Holiday Security",
      description:
        "Comprehensive security coverage during weekends and holidays when your regular staff are away.",
      features: [
        "Weekend Coverage",
        "Holiday Protection",
        "Skeleton Staff Support",
        "Continuous Security",
      ],
    },
    {
      icon: <UserCheck size={32} />,
      title: "24/7 Key Holding Services",
      description:
        "Professional key holding and alarm response services available 24 hours a day, 7 days a week.",
      features: ["Key Holding", "Alarm Response", "Lock-up Services", "Emergency Access"],
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "24/7 Security Services London",
    description:
      "Professional 24/7 security services London with round-the-clock manned security, emergency response teams, and continuous protection by elite SIA-licensed personnel available 24 hours.",
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
    serviceType: "24/7 Security Services",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      description: "Professional 24/7 security services available round-the-clock",
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
                  London's Premier 24/7 Security Specialists
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                24/7 Security Services London
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                Professional round-the-clock security services for London properties and businesses.
                Elite SIA-licensed security personnel providing continuous protection, emergency
                response, and peace of mind 24 hours a day, 7 days a week.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Get 24/7 Security Quote
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
                Round-the-Clock Protection for London
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                JCR Elite Protection provides comprehensive 24/7 security services across London,
                ensuring your property and assets are protected at all times.
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
                Comprehensive 24/7 Security Solutions
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                Professional security services available around the clock, providing continuous
                protection and rapid response capabilities for London properties and businesses.
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
                  Why Choose JCR Elite Protection for 24/7 Security?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Clock className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">True 24/7 Availability</h3>
                      <p className="text-muted-foreground">
                        Genuine round-the-clock security services with no gaps in coverage,
                        including nights, weekends, and holidays.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <UserCheck className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Elite SIA-Licensed Personnel</h3>
                      <p className="text-muted-foreground">
                        Highly trained security professionals with extensive experience in 24/7
                        operations and emergency response protocols, led by Worshipful Company of
                        Security Professionals member ensuring professional excellence.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Shield className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Rapid Emergency Response</h3>
                      <p className="text-muted-foreground">
                        Immediate response capabilities with emergency teams ready to deploy across
                        London at any time of day or night.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Eye className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Continuous Monitoring</h3>
                      <p className="text-muted-foreground">
                        Advanced monitoring systems and protocols ensuring your property is under
                        constant professional surveillance.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="bg-primary/5 rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-6">Secure Your Property 24/7</h3>
                  <p className="text-muted-foreground mb-6">
                    Contact our 24/7 security specialists for comprehensive round-the-clock
                    protection tailored to your specific requirements.
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
                    Get 24/7 Security Quote
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
                Never Compromise on Security - 24/7 Protection Available
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Trust JCR Elite Protection to provide continuous security coverage for your London
                property with professional, reliable, and responsive 24/7 security services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Get Free 24/7 Security Consultation
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
