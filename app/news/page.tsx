import AnimatedSection from "@/components/AnimatedSection";
import LazyFooter from "@/components/LazyFooter";
import Navbar from "@/components/Navbar";
import { Calendar, Shield } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Security News & Insights | Latest Security Updates | JCR Elite Protection",
  description:
    "Stay informed with the latest security news, insights, and tips from JCR Elite Protection. Expert advice on residential, commercial, and personal security in London.",
  keywords: [
    "security news london",
    "security insights",
    "security tips london",
    "security updates",
    "security blog london",
    "security advice london",
  ],
  openGraph: {
    title: "Security News & Insights | Latest Security Updates | JCR Elite Protection",
    description:
      "Stay informed with the latest security news, insights, and tips from JCR Elite Protection.",
    url: "https://jcreliteprotection.co.uk/news",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Security News & Insights | Latest Security Updates | JCR Elite Protection",
    description:
      "Stay informed with the latest security news, insights, and tips from JCR Elite Protection.",
  },
  alternates: {
    canonical: "https://jcreliteprotection.co.uk/news",
  },
};

export default function NewsPage() {
  const newsArticles = [
    {
      title: "Protect Your Home This Summer: Essential Security Tips for Hot Weather",
      excerpt:
        "Warm weather can invite burglars as well as sunshine – here's how to stay protected during the summer months with practical security measures.",
      date: "August 21, 2025",
      readTime: "3 min read",
      category: "Residential Security",
      slug: "protect-your-home-this-summer-essential-security-tips-for-hot-weather",
    },
    {
      title: "How to prevent Vehicle Theft: Essential Tips for Homeowners and Businesses",
      excerpt:
        "Stay one step ahead of vehicle thieves with these practical security tips. The growing threat of vehicle theft requires proactive measures.",
      date: "August 21, 2025",
      readTime: "4 min read",
      category: "Vehicle Security",
      slug: "how-to-prevent-vehicle-theft-essential-tips-for-homeowners-and-businesses",
    },
    {
      title: "How Effective Are Video Doorbells for Home Security?",
      excerpt:
        "Discover how video doorbells enhance home security and protect against modern threats. Why video doorbells are becoming essential.",
      date: "July 17, 2025",
      readTime: "5 min read",
      category: "Technology",
      slug: "how-effective-are-video-doorbells-for-home-security",
    },
    {
      title: "Why Remote Monitoring Services are Essential for UK Businesses",
      excerpt:
        "Protect your business 24/7 with cost-effective, real-time remote security monitoring. Essential for modern business protection.",
      date: "July 17, 2025",
      readTime: "4 min read",
      category: "Commercial Security",
      slug: "why-remote-monitoring-services-are-essential-for-uk-businesses",
    },
    {
      title: "ProResponse+ and the Rise of Residential Security in North London",
      excerpt:
        "Fast, visible and trusted: Safeguarding your home with ProResponse+ from London Security Syndicate (LSS) London.",
      date: "June 17, 2025",
      readTime: "3 min read",
      category: "Residential Security",
      slug: "proresponse-and-the-rise-of-residential-security-in-north-london",
    },
    {
      title:
        "The Vital Role of Security Guards in Safeguarding Large Commercial Properties in the UK",
      excerpt:
        "Protect your commercial property with skilled security guards – a key defence against modern threats.",
      date: "June 17, 2025",
      readTime: "4 min read",
      category: "Commercial Security",
      slug: "the-vital-role-of-security-guards-in-safeguarding-large-commercial-properties-in-the-uk",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "JCR Elite Protection Security News",
            description: "Latest security news, insights, and tips from JCR Elite Protection",
            url: "https://jcreliteprotection.co.uk/news",
            publisher: {
              "@type": "Organization",
              name: "JCR Elite Protection",
              url: "https://jcreliteprotection.co.uk",
            },
          }),
        }}
      />

      <Navbar />

      <main id="main-content" className="min-h-screen">
        <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-20 lg:py-32">
          <div className="section-container">
            <AnimatedSection className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Security News & Insights
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                Stay informed with the latest security news, expert insights, and practical tips
                from JCR Elite Protection. Your trusted source for London security information and
                industry updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Get Security Advice
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

        <section className="py-20 bg-gray-50">
          <div className="section-container">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Latest Security News & Articles
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                Expert insights, security tips, and industry updates to help you stay protected in
                London's dynamic security landscape.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.map((article, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <article className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                    <div className="p-6 flex-grow">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {article.category}
                        </span>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar size={14} className="mr-1" />
                          {article.date}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 line-clamp-2">{article.title}</h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3">{article.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{article.readTime}</span>
                        <Link
                          href={`/news/${article.slug}`}
                          className="text-primary hover:text-primary/80 font-medium text-sm transition-colors"
                        >
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </article>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedSection>
                <Shield className="text-primary mx-auto mb-6" size={48} />
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Stay Updated with Security Insights
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Subscribe to our newsletter for the latest security news, tips, and industry
                  updates delivered directly to your inbox.
                </p>
                <div className="bg-primary/5 rounded-lg p-8 max-w-md mx-auto">
                  <h3 className="text-2xl font-bold mb-6">Subscribe to Our Newsletter</h3>
                  <form className="space-y-4">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                    <button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                    >
                      Subscribe Now
                    </button>
                  </form>
                  <p className="text-sm text-muted-foreground mt-4">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 text-white py-20">
          <div className="section-container text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Expert Security Advice?</h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Contact JCR Elite Protection for professional security consultation and personalized
                advice for your London property.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Get Free Consultation
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
