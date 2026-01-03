import AnimatedSection from "@/components/AnimatedSection";
import LazyFooter from "@/components/LazyFooter";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { Award, Shield, Star, Users } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Client Testimonials | JCR Elite Protection Reviews",
  description:
    "Read testimonials from our clients including Trinity House, The Marylebone Hotel, Grocers' Hall, and Hurlingham Club about our professional security services in London.",
  keywords: [
    "JCR Elite Protection testimonials",
    "security company reviews",
    "London security testimonials",
    "client reviews",
    "professional security feedback",
  ],
  openGraph: {
    title: "Client Testimonials | JCR Elite Protection Reviews",
    description:
      "Read testimonials from our clients including Trinity House, The Marylebone Hotel, Grocers' Hall, and Hurlingham Club about our professional security services.",
    url: "https://jcreliteprotection.co.uk/testimonials",
    type: "website",
    images: ["https://jcreliteprotection.co.uk/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Testimonials | JCR Elite Protection Reviews",
    description:
      "Read testimonials from our clients including Trinity House, The Marylebone Hotel, Grocers' Hall, and Hurlingham Club about our professional security services.",
    images: ["https://jcreliteprotection.co.uk/og-image.png"],
  },
  alternates: {
    canonical: "https://jcreliteprotection.co.uk/testimonials",
  },
};

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  companyUrl?: string;
  delay: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  quote,
  author,
  position,
  company,
  companyUrl,
  delay,
}) => {
  return (
    <AnimatedSection delay={delay} className="testimonial-card flex flex-col h-full">
      <div className="mb-4 text-primary">
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 11H6.21C6.07 11 5.98 10.85 6.04 10.72C6.21388 10.3245 6.4668 9.95939 6.79 9.65C7.52 8.96 8.54 8.5 10 8.5V7C6.5 7 4 9 4 13V16.5C4 17.88 5.12 19 6.5 19H10C11.38 19 12.5 17.88 12.5 16.5V13.5C12.5 12.12 11.38 11 10 11Z"
            fill="currentColor"
          />
          <path
            d="M20 11H16.21C16.07 11 15.98 10.85 16.04 10.72C16.2139 10.3245 16.4668 9.95939 16.79 9.65C17.52 8.96 18.54 8.5 20 8.5V7C16.5 7 14 9 14 13V16.5C14 17.88 15.12 19 16.5 19H20C21.38 19 22.5 17.88 22.5 16.5V13.5C22.5 12.12 21.38 11 20 11Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <p className="text-gray-700 italic flex-grow mb-6">{quote}</p>
      <div className="mt-auto pt-4 border-t border-gray-100">
        <div className="font-semibold">{author}</div>
        <div className="text-sm text-muted-foreground">
          {position},{" "}
          {companyUrl ? (
            <a
              href={companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors duration-200"
              aria-label={`Visit ${company} website (opens in new tab)`}
            >
              {company}
            </a>
          ) : (
            company
          )}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default function TestimonialsPage() {
  const testimonials = [
    {
      quote:
        "JCR Elite Protection has been providing security at Trinity House since 2022. Chris has never let us down with any shifts, is able to provide cover at short notice and the service he provides is first class. All his team are top notch; well-presented and courteous.",
      author: "Antollella Santos",
      position: "Head of events",
      company: "Trinity House",
      companyUrl: "https://www.trinityhouse.co.uk/",
      delay: 100,
    },
    {
      quote:
        "We recently worked with JCR Elite Protection for our corporate event and couldn't be more impressed with their professional service. Their experienced security team maintained an effective presence without being intrusive, handled crowd control expertly, and coordinated seamlessly with our event planners. I highly recommend JCR Elite Protection for dependable, top-tier security that enhances rather than disrupts your event experience.",
      author: "Duane Allwell-Brown",
      position: "Security Manager",
      company: "The Marylebone Hotel",
      companyUrl: "https://www.doylecollection.com/hotels/the-marylebone-hotel",
      delay: 200,
    },
    {
      quote:
        "We highly value our partnership with JCR Elite, who manage to balance necessary security presence with excellent customer service – both imperative to our venue's ethos. It is a pleasure to work with Chris and his team on our events.",
      author: "Melanie Uttley",
      position: "Events Manager",
      company: "Grocers' Hall",
      companyUrl: "https://www.grocershall.co.uk",
      delay: 300,
    },
    {
      quote:
        "JCR has consistently provided the club with a high level of professionalism and top-tier customer service. Their reliability in assisting with emergency shift cover is especially commendable. Over the past 15 years, we've enjoyed a strong and dependable relationship, and we would highly recommend their services to others.",
      author: "Robin Foster",
      position: "Head of Security",
      company: "Hurlingham Club",
      companyUrl: "https://www.hurlinghamclub.org.uk",
      delay: 400,
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
            name: "Client Testimonials",
            description:
              "Read testimonials from our clients about professional security services in London.",
            url: "https://jcreliteprotection.co.uk/testimonials",
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
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "4",
              },
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
                  Client Testimonials
                </h1>
                <p className="text-xl text-gray-300 mb-6">
                  Read what our clients say about our professional security services in London.
                </p>
                <Button asChild className="px-6 py-6 h-auto text-base">
                  <Link href="/contact">Get Your Free Consultation</Link>
                </Button>
              </div>
            </AnimatedSection>

            {/* Testimonials Section */}
            <AnimatedSection className="mb-16" animation="fade-in-right">
              <div className="glass-card rounded-xl p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">What Our Clients Say</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-gray-900">
                      Trusted by Leading Organisations
                    </h4>
                    <p className="text-muted-foreground mb-6">
                      Our clients include prestigious London venues, hotels, and organisations that
                      trust us with their security needs. We take pride in delivering exceptional
                      service that exceeds expectations.
                    </p>
                    <h5 className="text-base font-medium mb-3 text-gray-800">
                      Professional Excellence
                    </h5>
                    <p className="text-muted-foreground mb-6">
                      From Trinity House to The Marylebone Hotel, our clients consistently praise
                      our professionalism, reliability, and ability to handle complex security
                      requirements with discretion and expertise.
                    </p>
                    <h5 className="text-base font-medium mb-3 text-gray-800">
                      Long-Term Partnerships
                    </h5>
                    <p className="text-muted-foreground">
                      Many of our clients have been with us for years, demonstrating the trust and
                      confidence they place in our security services and team.
                    </p>
                  </div>
                  <div className="relative">
                    <OptimizedImage
                      src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
                      alt="Client testimonials and reviews"
                      className="rounded-lg object-cover w-full h-full"
                      width={800}
                      height={600}
                      displayWidth={400}
                      displayHeight={300}
                    />
                    <div className="absolute -bottom-6 -right-6 bg-primary shadow-xl rounded-lg p-4 text-white hidden md:block">
                      <div className="text-sm font-semibold">Trusted</div>
                      <div className="text-xs opacity-80">by Clients</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Testimonials Grid */}
            <AnimatedSection className="mb-16" animation="fade-in-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Client Reviews & Testimonials</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="glass-card rounded-lg p-6">
                    <TestimonialCard
                      quote={testimonial.quote}
                      author={testimonial.author}
                      position={testimonial.position}
                      company={testimonial.company}
                      companyUrl={testimonial.companyUrl}
                      delay={testimonial.delay}
                    />
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Trusted Organisations */}
            <AnimatedSection className="mb-16" animation="fade-in-right">
              <div className="bg-slate-50 rounded-xl p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-8">
                  Trusted by Leading London Organisations
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    {
                      icon: <Shield size={24} />,
                      title: "Trinity House",
                      description:
                        "Historic maritime organisation and lighthouse authority, trusting us with their event security since 2022.",
                    },
                    {
                      icon: <Users size={24} />,
                      title: "The Marylebone Hotel",
                      description:
                        "Luxury hotel in London's West End, relying on our professional security management for their events.",
                    },
                    {
                      icon: <Award size={24} />,
                      title: "Grocers' Hall",
                      description:
                        "Historic venue and livery company, partnering with us for their prestigious event security needs.",
                    },
                    {
                      icon: <Star size={24} />,
                      title: "Hurlingham Club",
                      description:
                        "Exclusive private members club with a 15-year relationship built on trust and professional service.",
                    },
                  ].map((org, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                        {org.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2">{org.title}</h4>
                        <p className="text-muted-foreground">{org.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* CTA Section */}
            <AnimatedSection className="text-center py-16" animation="fade-in">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Satisfied Clients</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Experience the same professional security services that have earned us the trust of
                leading London organisations. Contact us today for your security consultation.
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
