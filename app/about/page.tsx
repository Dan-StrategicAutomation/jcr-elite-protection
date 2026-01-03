import AnimatedSection from "@/components/AnimatedSection";
import LazyFooter from "@/components/LazyFooter";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { Award, Check, Clock, Shield, Target } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About JCR Elite Protection | London's Premier Security Company",
  description:
    "Learn about JCR Elite Protection, London's premier security company providing professional hotel security, corporate protection, and event security services with SIA-licensed personnel.",
  keywords: [
    "about JCR Elite Protection",
    "London security company",
    "professional security services",
    "SIA licensed security",
    "hotel security London",
    "corporate protection",
  ],
  authors: [{ name: "JCR Elite Protection" }],
  openGraph: {
    title: "About JCR Elite Protection | London's Premier Security Company",
    description:
      "Premier security services across London, specializing in hotel security, corporate protection, and event security management.",
    images: ["https://jcreliteprotection.co.uk/og-image.png"],
    url: "https://jcreliteprotection.co.uk/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About JCR Elite Protection | London's Premier Security Company",
    description:
      "Premier security services across London, specializing in hotel security, corporate protection, and event security management.",
    images: ["https://jcreliteprotection.co.uk/og-image.png"],
  },
  alternates: {
    canonical: "https://jcreliteprotection.co.uk/about",
  },
};

export default function AboutPage() {
  const keyPoints = [
    "Professionally trained security personnel",
    "24/7 availability and rapid response",
    "Customised security solutions",
    "Industry-leading expertise and international certifications",
    "Leadership with City of London Livery Company membership",
    "Comprehensive risk assessment and management",
    "Cutting-edge security technologies",
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "About JCR Elite Protection",
            description:
              "Learn about JCR Elite Protection, London's premier security company providing professional hotel security, corporate protection, and event security services.",
            url: "https://jcreliteprotection.co.uk/about",
            mainEntity: {
              "@type": "LocalBusiness",
              name: "JCR Elite Protection",
              description:
                "London's premier security company providing professional hotel security, corporate protection, and event security services with SIA-licensed personnel.",
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
                  About JCR Elite Protection
                </h1>
                <p className="text-xl text-gray-300 mb-6">
                  London's premier security company providing professional hotel security, corporate
                  protection, and event security services.
                </p>
                <Button asChild className="px-6 py-6 h-auto text-base">
                  <Link href="/contact">Get Your Free Consultation</Link>
                </Button>
              </div>
            </AnimatedSection>

            {/* Company Overview Section */}
            <AnimatedSection className="mb-16" animation="fade-in-right">
              <div className="glass-card rounded-xl p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Company</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-gray-900">
                      Premier Security Services Across London
                    </h4>
                    <p className="text-muted-foreground mb-6">
                      JCR Elite Protection delivers premier security services across London,
                      specialising in hotel security, corporate protection, and event security
                      management. Our SIA-licensed security professionals maintain the highest
                      standards of protection and professionalism.
                    </p>
                    <h5 className="text-base font-medium mb-3 text-gray-800">
                      Personalised Approach
                    </h5>
                    <p className="text-muted-foreground mb-6">
                      We understand that each client has unique security needs, which is why we take
                      a personalised approach to every project. Our comprehensive services are
                      designed to provide peace of mind, allowing you to focus on what matters most
                      – your business.
                    </p>
                    <h5 className="text-base font-medium mb-3 text-gray-800">
                      Professional Excellence
                    </h5>
                    <p className="text-muted-foreground">
                      With years of experience in London's security landscape, we combine
                      traditional security expertise with modern technology to deliver unparalleled
                      protection services.
                    </p>
                  </div>
                  <div className="relative">
                    <OptimizedImage
                      src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
                      alt="Professional security team"
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

            {/* Services Excellence Section */}
            <AnimatedSection className="mb-16" animation="fade-in-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">
                Our Security Services Excellence
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: <Shield size={24} />,
                    title: "Professional Personnel",
                    description:
                      "All our security personnel are professionally trained and SIA-licensed with extensive experience.",
                  },
                  {
                    icon: <Clock size={24} />,
                    title: "24/7 Availability",
                    description:
                      "Round-the-clock availability with rapid response capabilities for all security needs.",
                  },
                  {
                    icon: <Target size={24} />,
                    title: "Customised Solutions",
                    description:
                      "Tailored security solutions designed specifically for your unique requirements and challenges.",
                  },
                  {
                    icon: <Award size={24} />,
                    title: "Industry Leadership",
                    description:
                      "Leadership with City of London Livery Company membership and international certifications.",
                  },
                ].map((step, index) => (
                  <div key={index} className="glass-card rounded-lg p-6">
                    <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center text-primary mb-4">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Key Points Section */}
            <AnimatedSection className="mb-16" animation="fade-in-right">
              <div className="bg-slate-50 rounded-xl p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-8">
                  Why Choose JCR Elite Protection
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {keyPoints.map((point, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                        <Check size={20} />
                      </div>
                      <div>
                        <p className="text-muted-foreground">{point}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* CTA Section */}
            <AnimatedSection className="text-center py-16" animation="fade-in">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Experience Elite Protection?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Contact us today to discuss your security needs and discover how our professional
                services can protect your business, events, or property.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
        <LazyFooter />
      </main>
    </>
  );
}
