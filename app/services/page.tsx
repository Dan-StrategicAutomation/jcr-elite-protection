import AnimatedSection from "@/components/AnimatedSection";
import LazyFooter from "@/components/LazyFooter";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { Building, Eye, Shield, UserCheck, Users } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Security Services London | Professional Security Company | JCR Elite Protection",
  description:
    "Comprehensive security services in London including hotel security, event security, corporate protection, close protection, and private investigation. SIA-licensed personnel available 24/7.",
  keywords: [
    "security services London",
    "professional security London",
    "hotel security London",
    "event security London",
    "corporate security London",
    "close protection London",
    "private investigation London",
  ],
  openGraph: {
    title: "Security Services London | Professional Security Company | JCR Elite Protection",
    description:
      "Comprehensive security services in London including hotel security, event security, corporate protection, close protection, and private investigation.",
    url: "https://jcreliteprotection.co.uk/services",
    type: "website",
    images: ["https://jcreliteprotection.co.uk/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Security Services London | Professional Security Company | JCR Elite Protection",
    description:
      "Comprehensive security services in London including hotel security, event security, corporate protection, close protection, and private investigation.",
    images: ["https://jcreliteprotection.co.uk/og-image.png"],
  },
  alternates: {
    canonical: "https://jcreliteprotection.co.uk/services",
  },
};

export default function ServicesPage() {
  const services = [
    {
      icon: <Shield size={32} />,
      title: "Hotel Security Services",
      description:
        "Professional, SIA-certified security officers for London's finest hotels, ensuring guest safety and property protection around the clock.",
      features: [
        "24/7 Security Coverage",
        "Guest Safety Management",
        "Property Protection",
        "Emergency Response",
      ],
      link: "/london-security-services",
      delay: 100,
    },
    {
      icon: <Users size={32} />,
      title: "Event Security Management",
      description:
        "Comprehensive security for corporate events, galas, and special occasions with discreet, experienced personnel who understand the London hospitality scene.",
      features: ["Crowd Control", "Access Management", "VIP Protection", "Emergency Planning"],
      link: "/luxury-event-security-london",
      delay: 200,
    },
    {
      icon: <UserCheck size={32} />,
      title: "Close Protection Officers",
      description:
        "Highly trained close protection specialists providing discreet personal security for VIPs, executives, and high-profile individuals in London and beyond.",
      features: [
        "Personal Protection",
        "Threat Assessment",
        "Secure Transportation",
        "Discreet Service",
      ],
      link: "/vip-protection-services",
      delay: 300,
    },
    {
      icon: <Eye size={32} />,
      title: "Security Assessments",
      description:
        "Thorough evaluations of your property's security vulnerabilities and protocols, delivered with actionable recommendations tailored to London's unique security landscape.",
      features: [
        "Vulnerability Assessment",
        "Risk Analysis",
        "Security Planning",
        "Compliance Review",
      ],
      link: "/approach",
      delay: 400,
    },
    {
      icon: <Building size={32} />,
      title: "Corporate Security",
      description:
        "Bespoke security solutions for businesses across London and the UK, including access control, surveillance systems design, and emergency response planning.",
      features: ["Access Control", "Surveillance Systems", "Emergency Response", "Risk Assessment"],
      link: "/corporate-security-london",
      delay: 500,
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Security Services London",
            description:
              "Comprehensive security services in London including hotel security, event security, corporate protection, close protection, and private investigation.",
            url: "https://jcreliteprotection.co.uk/services",
            mainEntity: {
              "@type": "LocalBusiness",
              name: "JCR Elite Protection",
              description:
                "London's premier security company providing professional hotel security, corporate protection, and event security services.",
              url: "https://jcreliteprotection.co.uk",
              telephone: "+442080874233",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Riverbank House, 1 Putney Bridge Approach",
                addressLocality: "London",
                postalCode: "SW6 3JD",
                addressCountry: "GB",
              },
              areaServed: "London",
              serviceType: "Security Services",
            },
          }),
        }}
      />

      <Navbar />

      <main id="main-content" className="bg-gray-50">
        <div className="pt-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 pb-20">
            {/* Hero Section */}
            <AnimatedSection className="bg-slate-900 text-white rounded-2xl p-8 md:p-12 mb-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center opacity-20 approach-hero-bg"></div>
              <div className="relative z-10 max-w-3xl">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Security Services London
                </h1>
                <p className="text-xl text-gray-300 mb-6">
                  Comprehensive security services across London including hotel security, event
                  security, corporate protection, and private investigation.
                </p>
                <Button asChild className="px-6 py-6 h-auto text-base">
                  <Link href="/contact">Get Free Consultation</Link>
                </Button>
              </div>
            </AnimatedSection>

            {/* Main Services Section */}
            <AnimatedSection className="mb-16" animation="fade-in-right">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                Our Core Security Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <AnimatedSection key={index} delay={service.delay}>
                    <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                      <div className="text-primary mb-6">{service.icon}</div>
                      <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                      <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm">
                            <Shield size={16} className="text-primary mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button asChild variant="outline" className="w-full">
                        <Link href={service.link}>Learn More</Link>
                      </Button>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>

            {/* Why Choose Us Section */}
            <AnimatedSection className="mb-16" animation="fade-in-right">
              <div className="glass-card rounded-xl p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Why Choose Our Security Services?
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-gray-900">
                      Professional Excellence Across London
                    </h4>
                    <p className="text-muted-foreground mb-6">
                      JCR Elite Protection delivers comprehensive security services across London,
                      specialising in hotel security, corporate protection, and event security
                      management. Our SIA-licensed security professionals maintain the highest
                      standards of protection and professionalism.
                    </p>
                    <h5 className="text-base font-medium mb-3 text-gray-800">24/7 Availability</h5>
                    <p className="text-muted-foreground mb-6">
                      Round-the-clock security services with immediate response capabilities and
                      emergency support for all your security needs.
                    </p>
                    <h5 className="text-base font-medium mb-3 text-gray-800">Local Expertise</h5>
                    <p className="text-muted-foreground">
                      Deep understanding of London's unique security challenges and regulatory
                      requirements, ensuring tailored solutions for your specific needs.
                    </p>
                  </div>
                  <div className="relative">
                    <OptimizedImage
                      src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
                      alt="Professional security services"
                      className="rounded-lg object-cover w-full h-full"
                      width={800}
                      height={600}
                      displayWidth={400}
                      displayHeight={300}
                    />
                    <div className="absolute -bottom-6 -right-6 bg-primary shadow-xl rounded-lg p-4 text-white hidden md:block">
                      <div className="text-sm font-semibold">Professional</div>
                      <div className="text-xs opacity-80">Security Services</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* CTA Section */}
            <AnimatedSection className="text-center py-16" animation="fade-in">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Secure Your Business?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Contact JCR Elite Protection today and discover how our comprehensive security
                services can protect what matters most to you.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
        <LazyFooter />
      </main>
    </>
  );
}
