import Link from "next/link";
import React from "react";

// SEO-optimized area links that are hidden from regular users but visible to search engines
const SEOAreaLinks: React.FC = () => {
  const londonAreas = [
    {
      name: "Mayfair",
      hotelPath: "/mayfair-hotel-security",
      servicesPath: "/mayfair-security-services",
    },
    {
      name: "Knightsbridge",
      hotelPath: "/knightsbridge-hotel-security",
      servicesPath: "/knightsbridge-security-services",
    },
    {
      name: "Belgravia",
      hotelPath: "/belgravia-hotel-security",
      servicesPath: "/belgravia-security-services",
    },
    {
      name: "Chelsea",
      hotelPath: "/chelsea-hotel-security",
      servicesPath: "/chelsea-security-services",
    },
    {
      name: "Marylebone",
      hotelPath: "/marylebone-hotel-security",
      servicesPath: "/marylebone-security-services",
    },
    {
      name: "South Kensington",
      hotelPath: "/south-kensington-hotel-security",
      servicesPath: "/south-kensington-security-services",
    },
    {
      name: "Canary Wharf",
      hotelPath: "/canary-wharf-corporate-security",
      servicesPath: "/canary-wharf-corporate-security",
    },
  ];

  return (
    <div
      className="sr-only"
      aria-hidden="true"
      style={{
        position: "absolute",
        left: "-9999px",
        width: "1px",
        height: "1px",
        overflow: "hidden",
      }}
    >
      <h2>Security Services Across London Areas</h2>
      <p>
        JCR Elite Protection provides professional security services across Central London,
        including hotel security, event security, and corporate security solutions.
      </p>

      {londonAreas.map(area => (
        <div key={area.name}>
          <h3>{area.name} Security Services</h3>
          <p>
            Professional security services in {area.name}, London. Contact JCR Elite Protection for
            reliable security solutions tailored to {area.name} businesses and venues.
          </p>
          <Link href={area.hotelPath}>{area.name} Hotel Security Services</Link>
          <Link href={area.servicesPath}>{area.name} Security Services</Link>
        </div>
      ))}

      <div>
        <h3>Additional Security Services</h3>
        <Link href="/london-security-services">London Security Services</Link>
        <Link href="/london-event-security">London Event Security</Link>
        <Link href="/vip-protection-services">VIP Protection Services</Link>
        <Link href="/24-7-security-services-london">24/7 Security Services London</Link>
        <Link href="/corporate-security-london">Corporate Security London</Link>
        <Link href="/luxury-event-security-london">Luxury Event Security London</Link>
      </div>
    </div>
  );
};

export default SEOAreaLinks;
