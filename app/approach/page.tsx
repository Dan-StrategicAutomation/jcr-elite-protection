import AnimatedSection from "@/components/AnimatedSection";
import LazyFooter from "@/components/LazyFooter";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { CheckCircle, Clock, Shield, Target, TrendingUp, Users } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Security Approach | JCR Elite Protection London",
  description:
    "Discover JCR Elite Protection's comprehensive security approach. Proactive, tailored security solutions for London businesses with British-trained personnel and advanced systems.",
  keywords: [
    "security approach London",
    "professional security methodology",
    "London security company approach",
    "comprehensive security solutions",
    "JCR Elite Protection",
  ],
  openGraph: {
    title: "Our Security Approach | JCR Elite Protection London",
    description:
      "Proactive, comprehensive, and tailored security solutions that protect what matters most. Discover our four-step methodology.",
    url: "https://jcreliteprotection.co.uk/approach",
    type: "website",
    images: ["https://jcreliteprotection.co.uk/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Security Approach | JCR Elite Protection London",
    description:
      "Proactive, comprehensive, and tailored security solutions that protect what matters most.",
    images: ["https://jcreliteprotection.co.uk/og-image.png"],
  },
  alternates: {
    canonical: "https://jcreliteprotection.co.uk/approach",
  },
};

export default function ApproachPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Our Security Approach",
            description:
              "Discover JCR Elite Protection's comprehensive security approach with our four-step methodology for London businesses.",
            url: "https://jcreliteprotection.co.uk/approach",
            mainEntity: {
              "@type": "Service",
              name: "Security Approach & Methodology",
              provider: {
                "@type": "LocalBusiness",
                name: "JCR Elite Protection",
                url: "https://jcreliteprotection.co.uk",
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
                  Our Approach to Security
                </h1>
                <p className="text-xl text-gray-300 mb-6">
                  Proactive, comprehensive, and tailored security solutions that protect what
                  matters most.
                </p>
                <Button asChild className="px-6 py-6 h-auto text-base">
                  <Link href="/contact">Request a Security Assessment</Link>
                </Button>
              </div>
            </AnimatedSection>

            {/* Philosophy Section */}
            <AnimatedSection className="mb-16" animation="fade-in-right">
              <div className="glass-card rounded-xl p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Security Philosophy</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-gray-900">
                      Comprehensive Security Solutions
                    </h4>
                    <p className="text-muted-foreground mb-6">
                      At JCR Elite Protection, we believe that effective security is about more than
                      just having personnel on site. It's about developing a comprehensive strategy
                      that addresses potential vulnerabilities, mitigates risks, and ensures the
                      safety and comfort of everyone within your establishment.
                    </p>
                    <h5 className="text-base font-medium mb-3 text-gray-800">
                      Partnership Approach
                    </h5>
                    <p className="text-muted-foreground mb-6">
                      Our approach combines the expertise of our highly trained security
                      professionals with cutting-edge technology and industry best practices. We
                      view security as a partnership with our clients, working collaboratively to
                      understand your unique needs and implement solutions that align with your
                      goals and values.
                    </p>
                    <h5 className="text-base font-medium mb-3 text-gray-800">
                      Proactive Security Management
                    </h5>
                    <p className="text-muted-foreground">
                      Most importantly, we believe in being proactive rather than reactive. Through
                      thorough risk assessments, continual training, and staying ahead of emerging
                      threats, we provide security that prevents incidents before they occur.
                    </p>
                  </div>
                  <div className="relative">
                    <OptimizedImage
                      src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
                      alt="Security team planning"
                      className="rounded-lg object-cover w-full h-full"
                      width={800}
                      height={600}
                      displayWidth={400}
                      displayHeight={300}
                    />
                    <div className="absolute -bottom-6 -right-6 bg-primary shadow-xl rounded-lg p-4 text-white hidden md:block">
                      <div className="text-sm font-semibold">Strategic</div>
                      <div className="text-xs opacity-80">Security Planning</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Methodology Section */}
            <AnimatedSection className="mb-16" animation="fade-in-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">
                JCR Elite Protection Security Methodology
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: <Target size={24} />,
                    title: "Assessment",
                    description:
                      "We begin with a comprehensive evaluation of your premises, operations, and existing security measures to identify potential vulnerabilities.",
                  },
                  {
                    icon: <TrendingUp size={24} />,
                    title: "Strategy",
                    description:
                      "Based on our assessment, we develop a customized security strategy that addresses your specific needs and aligns with your business objectives.",
                  },
                  {
                    icon: <CheckCircle size={24} />,
                    title: "Implementation",
                    description:
                      "Our team of security professionals deploys the strategy, installing necessary technology and positioning personnel to maximize effectiveness.",
                  },
                  {
                    icon: <Clock size={24} />,
                    title: "Continuous Improvement",
                    description:
                      "We regularly review and refine our approach, adapting to changing circumstances and incorporating feedback to ensure optimal security.",
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

            {/* Benefits Section */}
            <AnimatedSection className="mb-16" animation="fade-in-right">
              <div className="bg-slate-50 rounded-xl p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-8">
                  Why Choose JCR Elite Protection Security Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    {
                      icon: <Shield size={24} />,
                      title: "Industry-Leading Expertise",
                      description:
                        "Our team brings decades of combined experience in security management for London's most prestigious venues.",
                    },
                    {
                      icon: <Users size={24} />,
                      title: "Personalised Service",
                      description:
                        "We take the time to understand your unique security challenges and tailor our approach to meet your specific needs.",
                    },
                    {
                      icon: <Clock size={24} />,
                      title: "24/7 Support",
                      description:
                        "Our dedicated team is available around the clock to address any security concerns that may arise.",
                    },
                    {
                      icon: <TrendingUp size={24} />,
                      title: "Cutting-Edge Technology",
                      description:
                        "We leverage the latest advancements in security technology to enhance our human-centered approach.",
                    },
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                        {benefit.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2">{benefit.title}</h4>
                        <p className="text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* CTA Section */}
            <AnimatedSection className="text-center py-16" animation="fade-in">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Enhance Your Security?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Contact us today to schedule a consultation and discover how our approach can be
                tailored to address your specific security challenges.
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
