import Link from "next/link";
import React from "react";

import AnimatedSection from "@/components/AnimatedSection";

const ContactCTA: React.FC = () => {
  return (
    <AnimatedSection className="bg-primary/10 rounded-xl p-8 md:p-12 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Elevate Your Security?</h2>
      <p className="text-gray-700 max-w-2xl mx-auto mb-8">
        Chris and his team are available to discuss your hotel or event security needs. With decades
        of experience protecting London's most prestigious establishments, we're uniquely positioned
        to understand and address your security concerns.
      </p>
      <Link href="/contact" className="button-primary">
        Schedule a Consultation
      </Link>
    </AnimatedSection>
  );
};

export default ContactCTA;
