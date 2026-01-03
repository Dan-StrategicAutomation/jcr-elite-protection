import CareersSection from "@/components/CareersSection";
import LazyFooter from "@/components/LazyFooter";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | JCR Elite Protection",
  description:
    "Join the team at JCR Elite Protection. Explore career opportunities in professional security services in London.",
};

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="overflow-x-hidden">
        <div className="pt-20">
          <CareersSection />
        </div>
        <LazyFooter />
      </main>
    </>
  );
}
