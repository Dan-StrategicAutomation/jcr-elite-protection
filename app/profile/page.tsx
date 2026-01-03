import LazyFooter from "@/components/LazyFooter";
import Navbar from "@/components/Navbar";
import CareerAchievements from "@/components/profile/CareerAchievements";
import ContactCTA from "@/components/profile/ContactCTA";
import ProfileBio from "@/components/profile/ProfileBio";
import ProfileExpertise from "@/components/profile/ProfileExpertise";
import ProfileHero from "@/components/profile/ProfileHero";
import RelatedServices from "@/components/profile/RelatedServices";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christopher Willoughby - Security Director | JCR Elite Protection",
  description:
    "Meet Christopher Willoughby, Director of Operations at JCR Elite Protection with 25+ years of experience in hotel and event security management across London.",
  keywords: [
    "JCR Elite Protection",
    "London security",
    "hotel security",
    "event security",
    "security management",
  ],
  authors: [{ name: "JCR Elite Protection" }],
  openGraph: {
    title: "JCR Elite Protection",
    description:
      "JCR Elite Protection with 25+ years of experience in hotel and event security management across London.",
    images: ["https://jcreliteprotection.co.uk/assets/christopher-willoughby.jpg"],
    url: "https://jcreliteprotection.co.uk/profile",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "JCR Elite Protection",
    description:
      "JCR Elite Protection with 25+ years of experience in hotel and event security management.",
    images: ["https://jcreliteprotection.co.uk/assets/christopher-willoughby.jpg"],
  },
  alternates: {
    canonical: "https://jcreliteprotection.co.uk/profile",
  },
};

export default function ProfilePage() {
  return (
    <div className="bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Christopher Willoughby",
            jobTitle: "Director of Operations",
            worksFor: {
              "@type": "Organisation",
              name: "JCR Elite Protection",
              url: "https://jcreliteprotection.co.uk",
            },
            description:
              "Security professional with 25+ years of experience in hotel and event security management across London. Member of the Worshipful Company of Security Professionals (WCoSP).",
            image: "https://jcreliteprotection.co.uk/assets/christopher-willoughby.jpg",
            url: "https://jcreliteprotection.co.uk/profile",
            sameAs: ["https://www.linkedin.com/in/christopher-willoughby-security"],
          }),
        }}
      />

      <Navbar />

      <main id="main-content" className="pt-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 pb-20">
          <article>
            <ProfileHero />
            <ProfileBio />
            <ProfileExpertise />
            <CareerAchievements />
            <RelatedServices />
            <ContactCTA />
          </article>
        </div>
      </main>

      <LazyFooter />
    </div>
  );
}
