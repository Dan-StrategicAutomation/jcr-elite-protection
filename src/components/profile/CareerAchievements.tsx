import React from "react";
import { Briefcase } from "lucide-react";

import AnimatedSection from "@/components/AnimatedSection";

const CareerAchievements: React.FC = () => {
  return (
    <AnimatedSection className="bg-white rounded-xl shadow-sm p-8 md:p-12 mb-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Career Experience</h2>
      <div className="space-y-8">
        <div className="flex gap-4">
          <div className="shrink-0">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Briefcase className="text-primary" size={20} />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Director of Security, Four Seasons Hotels and Resorts
            </h3>
            <p className="text-gray-500 mb-2">2015 - 2020</p>
            <p className="text-gray-700">
              Oversaw and opened the iconic Four Seasons London at Ten Trinity Square in the City of
              London. Led the security team and implemented comprehensive security protocols for
              this luxury property.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="shrink-0">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Briefcase className="text-primary" size={20} />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Deputy Head of Security, Claridge's Hotel
            </h3>
            <p className="text-gray-500 mb-2">2010 - 2015</p>
            <p className="text-gray-700">
              Served as Deputy Head of Security for the world-famous Claridge's Hotel in Mayfair,
              London. Responsible for maintaining the highest security standards for this
              prestigious luxury hotel and its VIP guests.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="shrink-0">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Briefcase className="text-primary" size={20} />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Security Team, The Savoy Hotel</h3>
            <p className="text-gray-500 mb-2">2005 - 2010</p>
            <p className="text-gray-700">
              Worked in the security team at the world-famous Savoy Hotel in London. Gained
              extensive experience in luxury hotel security operations and VIP protection.
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default CareerAchievements;
