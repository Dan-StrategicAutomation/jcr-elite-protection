import React from "react";

import AnimatedSection from "@/components/AnimatedSection";

const ProfileBio: React.FC = () => {
  return (
    <AnimatedSection className="bg-white rounded-xl shadow-sm p-8 md:p-12 mb-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Professional Background</h2>
      <p className="text-gray-700 mb-6 leading-relaxed">
        Chris Willoughby began his career in retail security in the early nineties before moving
        into hotel security. He spent many years working security for some of the finest hotels,
        serving as Deputy Head of Security for the world-famous Claridge's Hotel in Mayfair before
        embarking on a new challenge as Director of Security for Four Seasons Hotels and Resorts.
      </p>
      <p className="text-gray-700 mb-6 leading-relaxed">
        Chris oversaw and opened the iconic Four Seasons London at Ten Trinity Square in the City of
        London, after several years in the world-famous Savoy Hotel. His extensive experience in
        luxury hotel security has made him a trusted authority in the field.
      </p>
      <p className="text-gray-700 leading-relaxed">
        Today, Chris leads our team with a commitment to excellence, combining traditional British
        values of discretion and professionalism with cutting-edge security methodologies. His
        hands-on approach ensures that every client receives a security solution that is both robust
        and perfectly tailored to their unique requirements.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">Security Philosophy</h3>
      <p className="text-gray-700 mb-6 leading-relaxed">
        "Security is not just about physical presence or technology," explains Chris. "It's about
        creating an integrated system where human expertise and technological solutions work
        seamlessly together to anticipate and prevent potential threats before they materialize."
      </p>
      <p className="text-gray-700 mb-6 leading-relaxed">
        This philosophy has guided JCR Elite Protection's approach to securing some of London's most
        prestigious venues. Under Chris's leadership, the company has pioneered a holistic security
        methodology that balances robust protection with guest comfort, a particularly crucial
        balance in the luxury hospitality sector.
      </p>
      <blockquote className="border-l-4 border-primary pl-4 italic text-gray-600 my-6">
        "The best security is the security you don't notice. In high-end establishments, our teams
        become an integral part of the hospitality experience, providing peace of mind without
        intruding on guests' enjoyment."
      </blockquote>
    </AnimatedSection>
  );
};

export default ProfileBio;
