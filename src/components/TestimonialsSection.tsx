import React from "react";

import AnimatedSection from "./AnimatedSection";

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

const TestimonialsSection: React.FC = () => {
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
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="section-container">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary font-medium">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what businesses and organisations have to say
            about our security services and expertise.
          </p>
        </AnimatedSection>

        {/* Responsive testimonials grid - mobile: 1 col, tablet/desktop: 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`w-full ${
                // Center the last testimonial if odd number
                testimonials.length % 2 === 1 && index === testimonials.length - 1
                  ? "md:col-span-2 md:max-w-md md:mx-auto"
                  : ""
              }`}
            >
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

        <div className="mt-12 sm:mt-16 text-center">
          <AnimatedSection delay={500}>
            <h3 className="text-sm font-medium text-gray-500 mb-6 sm:mb-8">
              Trusted by Leading Organisations
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-16 max-w-4xl mx-auto">
              <a
                href="https://www.trinityhouse.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary text-base sm:text-lg font-medium text-center transition-colors duration-200"
                aria-label="Visit Trinity House website (opens in new tab)"
              >
                Trinity House
              </a>
              <a
                href="https://www.doylecollection.com/hotels/the-marylebone-hotel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary text-base sm:text-lg font-medium text-center transition-colors duration-200"
                aria-label="Visit The Marylebone Hotel website (opens in new tab)"
              >
                The Marylebone Hotel
              </a>
              <a
                href="https://www.grocershall.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary text-base sm:text-lg font-medium text-center transition-colors duration-200"
                aria-label="Visit Grocers' Hall website (opens in new tab)"
              >
                Grocers' Hall
              </a>
              <a
                href="https://www.hurlinghamclub.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary text-base sm:text-lg font-medium text-center transition-colors duration-200"
                aria-label="Visit Hurlingham Club website (opens in new tab)"
              >
                Hurlingham Club
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
