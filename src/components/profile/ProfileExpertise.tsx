import { Shield } from "lucide-react";
import React from "react";

import AnimatedSection from "@/components/AnimatedSection";

const ProfileExpertise: React.FC = () => {
  return (
    <AnimatedSection
      className="bg-white rounded-xl shadow-sm p-8 md:p-12 mb-8 md:mb-12"
      delay={100}
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Areas of Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Shield className="text-primary mt-1 shrink-0" size={20} />
              <span className="text-gray-700">Hotel Security Management</span>
            </li>
            <li className="flex items-start gap-3">
              <Shield className="text-primary mt-1 shrink-0" size={20} />
              <span className="text-gray-700">High-Profile Event Security</span>
            </li>
            <li className="flex items-start gap-3">
              <Shield className="text-primary mt-1 shrink-0" size={20} />
              <span className="text-gray-700">Risk Assessment & Mitigation</span>
            </li>
            <li className="flex items-start gap-3">
              <Shield className="text-primary mt-1 shrink-0" size={20} />
              <span className="text-gray-700">Security Staff Training & Development</span>
            </li>
            <li className="flex items-start gap-3">
              <Shield className="text-primary mt-1 shrink-0" size={20} />
              <span className="text-gray-700">Crisis Management & Response</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Specialized Services</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Shield className="text-primary mt-1 shrink-0" size={20} />
              <span className="text-gray-700">VIP Protection & Close Protection</span>
            </li>
            <li className="flex items-start gap-3">
              <Shield className="text-primary mt-1 shrink-0" size={20} />
              <span className="text-gray-700">Threat Intelligence & Analysis</span>
            </li>
            <li className="flex items-start gap-3">
              <Shield className="text-primary mt-1 shrink-0" size={20} />
              <span className="text-gray-700">Counterterrorism Strategies</span>
            </li>
          </ul>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ProfileExpertise;
