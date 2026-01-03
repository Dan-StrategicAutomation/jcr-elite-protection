import AnimatedSection from "@/components/AnimatedSection";
import ContactSection from "@/components/ContactSection";
import LazyFooter from "@/components/LazyFooter";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact JCR Elite Protection | London Security Company | 020 8087 4233",
  description:
    "Contact JCR Elite Protection for professional security services in London. Call 020 8087 4233 or email info@jcreliteprotection.co.uk for immediate assistance.",
  keywords: [
    "contact JCR Elite Protection",
    "London security company contact",
    "security services London phone",
    "professional security contact",
    "020 8087 4233",
  ],
  authors: [{ name: "JCR Elite Protection" }],
  openGraph: {
    title: "Contact JCR Elite Protection | London Security Company",
    description:
      "Get in touch with London's premier security company. Professional security services available 24/7. Call 020 8087 4233 for immediate assistance.",
    images: ["https://jcreliteprotection.co.uk/og-image.png"],
    url: "https://jcreliteprotection.co.uk/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact JCR Elite Protection | London Security Company",
    description:
      "Professional security services in London. Call 020 8087 4233 or email for immediate assistance.",
    images: ["https://jcreliteprotection.co.uk/og-image.png"],
  },
  alternates: {
    canonical: "https://jcreliteprotection.co.uk/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact JCR Elite Protection",
            description:
              "Contact page for JCR Elite Protection, London's premier security company providing professional security services.",
            url: "https://jcreliteprotection.co.uk/contact",
            mainEntity: {
              "@type": "LocalBusiness",
              name: "JCR Elite Protection",
              telephone: "+442080874233",
              email: "info@jcreliteprotection.co.uk",
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
                  Contact JCR Elite Protection
                </h1>
                <p className="text-xl text-gray-300 mb-6">
                  Get in touch with London's premier security company. Professional security
                  services available 24/7.
                </p>
                <a
                  href="tel:+442080874233"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 py-2 min-h-[44px]"
                  aria-label="Call JCR Elite Protection now at 020 8087 4233"
                >
                  <Phone size={20} className="mr-2" />
                  Call Now: 020 8087 4233
                </a>
              </div>
            </AnimatedSection>

            {/* Contact Form Section */}
            <AnimatedSection className="mb-16" animation="fade-in-right">
              <ContactSection />
            </AnimatedSection>

            {/* Contact Information Section */}
            <AnimatedSection className="mb-16" animation="fade-in-right">
              <div className="glass-card rounded-xl p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Get In Touch</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-gray-900">
                      Professional Security Services Across London
                    </h4>
                    <p className="text-muted-foreground mb-6">
                      Ready to enhance your security? Contact JCR Elite Protection today for a free
                      consultation. Our expert team is available 24/7 to discuss your security needs
                      and provide tailored solutions for your business.
                    </p>
                    <h5 className="text-base font-medium mb-3 text-gray-800">Immediate Response</h5>
                    <p className="text-muted-foreground mb-6">
                      We understand that security concerns can arise at any time. That's why our
                      dedicated team provides immediate response and round-the-clock support for all
                      your security requirements.
                    </p>
                    <h5 className="text-base font-medium mb-3 text-gray-800">
                      Expert Consultation
                    </h5>
                    <p className="text-muted-foreground">
                      Our experienced security professionals will assess your specific needs and
                      recommend the most effective security solutions for your situation.
                    </p>
                  </div>
                  <div className="relative">
                    <OptimizedImage
                      src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
                      alt="Professional security consultation"
                      className="rounded-lg object-cover w-full h-full"
                      width={800}
                      height={600}
                      displayWidth={400}
                      displayHeight={300}
                    />
                    <div className="absolute -bottom-6 -right-6 bg-primary shadow-xl rounded-lg p-4 text-white hidden md:block">
                      <div className="text-sm font-semibold">24/7</div>
                      <div className="text-xs opacity-80">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Methods Section */}
            <AnimatedSection className="mb-16" animation="fade-in-left">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: <Phone size={24} />,
                    title: "Phone",
                    description: "Call us directly for immediate assistance",
                    contact: "020 8087 4233",
                    action: "tel:02080874233",
                    actionText: "Call Now",
                  },
                  {
                    icon: <Mail size={24} />,
                    title: "Email",
                    description: "Send us an email and we'll respond promptly",
                    contact: "info@jcreliteprotection.co.uk",
                    action: "mailto:info@jcreliteprotection.co.uk",
                    actionText: "Send Email",
                  },
                  {
                    icon: <MapPin size={24} />,
                    title: "Office",
                    description: "Visit our office in Putney Bridge, London",
                    contact: "Riverbank House, 1 Putney Bridge Approach, London SW6 3JD",
                    action: "#",
                    actionText: "Get Directions",
                  },
                ].map((method, index) => (
                  <div key={index} className="glass-card rounded-lg p-6 text-center">
                    <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center text-primary mb-4 mx-auto">
                      {method.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{method.title}</h3>
                    <p className="text-muted-foreground mb-4">{method.description}</p>
                    <p className="text-sm font-medium mb-4">{method.contact}</p>
                    <Button asChild variant="outline" size="sm">
                      <a href={method.action}>{method.actionText}</a>
                    </Button>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* CTA Section */}
            <AnimatedSection className="text-center py-16" animation="fade-in">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Secure Your Business?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Contact JCR Elite Protection today and discover how our professional security
                services can protect what matters most to you.
              </p>
              <a
                href="tel:+442080874233"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 py-2 min-h-[44px]"
                aria-label="Call JCR Elite Protection now at 020 8087 4233"
              >
                <Phone size={20} className="mr-2" />
                Call Now: 020 8087 4233
              </a>
            </AnimatedSection>
          </div>
        </div>
        <LazyFooter />
      </main>
    </>
  );
}
