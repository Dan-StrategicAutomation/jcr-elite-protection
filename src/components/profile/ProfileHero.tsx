import React from "react";
import { Linkedin, Twitter, Mail } from "lucide-react";

import AnimatedSection from "@/components/AnimatedSection";

const ProfileHero: React.FC = () => {
  return (
    <AnimatedSection className="bg-slate-900 text-white rounded-2xl p-8 md:p-12 mb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-20 profile-hero-bg"></div>
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Christopher Willoughby</h1>
        <p className="text-xl text-gray-300">Managing Director at JCR Elite Protection</p>
        <div className="h-1 w-20 bg-primary my-6"></div>
        <p className="text-lg text-gray-200">
          With over 25 years of experience in the security industry, Chris Willoughby brings
          unparalleled expertise in hotel and event security management across London and the UK.
        </p>

        {/* Social Sharing */}
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="https://www.linkedin.com/share?url=https://secureprofilehub-904157548786.us-central1.run.app/profile"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#0077B5] text-white rounded-md hover:bg-opacity-90 transition"
            aria-label="Share on LinkedIn"
          >
            <Linkedin size={18} />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a
            href="https://twitter.com/intent/tweet?url=https://secureprofilehub-904157548786.us-central1.run.app/profile&text=Meet Christopher Willoughby, London's premier security expert"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#1DA1F2] text-white rounded-md hover:bg-opacity-90 transition"
            aria-label="Share on Twitter"
          >
            <Twitter size={18} />
            <span className="hidden sm:inline">Twitter</span>
          </a>
          <a
            href="mailto:?subject=Enquiry&body=I am interested in your services and would like to discuss my requirements."
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-opacity-90 transition"
            aria-label="Share via Email"
          >
            <Mail size={18} />
            <span className="hidden sm:inline">Email</span>
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ProfileHero;
