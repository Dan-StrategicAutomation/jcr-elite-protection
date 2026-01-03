import type { Metadata } from "next";

import LazyFooter from "@/components/LazyFooter";
import Navbar from "@/components/Navbar";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Licensing Information | JCR Elite Protection",
  description:
    "JCR Elite Protection holds all necessary licences and certifications required by UK law, including SIA Approved Contractor Scheme (ACS) and ISO certifications.",
};

export default function LicensingPage() {
  const lastUpdated = "3 January 2026";

  return (
    <main id="main-content" className="min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Licensing Information</h1>
            <p className="text-gray-600 mb-8">Last updated: {lastUpdated}</p>

            <Separator className="my-8" />

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">Security Industry Licensing</h2>
                <p className="text-gray-700 mb-4">
                  JCR Elite Protection holds all necessary licences and certifications required by
                  UK law to operate as a professional security services provider. We maintain the
                  highest standards of compliance with industry regulations and best practices.
                </p>
                <p className="text-gray-700">
                  Our company and all our security personnel are fully licensed by the Security
                  Industry Authority (SIA), the organisation responsible for regulating the UK's
                  private security industry.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Our Licences and Accreditations</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-4">
                  <li>
                    <strong>SIA Approved Contractor Scheme (ACS)</strong>
                    <p>
                      We are proud to be an SIA Approved Contractor, demonstrating our commitment to
                      quality and professionalism in everything we do.
                    </p>
                  </li>
                  <li>
                    <strong>ISO 9001:2015 Certification</strong>
                    <p>
                      Our quality management systems are certified to international standards,
                      ensuring consistent service delivery.
                    </p>
                  </li>
                  <li>
                    <strong>ISO 14001:2015 Environmental Management</strong>
                    <p>
                      We are committed to reducing our environmental impact through our certified
                      environmental management system.
                    </p>
                  </li>
                  <li>
                    <strong>SafeContractor Accreditation</strong>
                    <p>We are recognized for our high standards in health and safety management.</p>
                  </li>
                  <li>
                    <strong>Employers' Liability Insurance</strong>
                    <p>We maintain comprehensive insurance coverage as required by UK law.</p>
                  </li>
                  <li>
                    <strong>Public Liability Insurance</strong>
                    <p>
                      Our operations are covered by a robust public liability insurance policy with
                      coverage of up to £10 million.
                    </p>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Staff Licensing</h2>
                <p className="text-gray-700 mb-4">
                  All JCR Elite Protection security personnel hold valid SIA licences relevant to
                  their duties, including:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Door Supervision Licence</li>
                  <li>Security Guarding Licence</li>
                  <li>CCTV Operations Licence</li>
                  <li>Close Protection Licence</li>
                  <li>Key Holding Licence</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  In addition to mandatory SIA licensing, our staff undergo continuous professional
                  development and training to ensure they maintain the highest standards of service
                  delivery.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Licence Verification</h2>
                <p className="text-gray-700 mb-4">
                  Clients can request verification of our company licences and individual staff
                  licensing at any time. We maintain transparent records of all certifications and
                  accreditations.
                </p>
                <p className="text-gray-700">
                  For verification of SIA licences, you can also visit the official SIA website at{" "}
                  <a
                    href="https://www.sia.homeoffice.gov.uk/Pages/home.aspx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    www.sia.homeoffice.gov.uk
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                <p className="text-gray-700">
                  For any inquiries regarding our licensing or compliance, please contact our
                  compliance team at:
                </p>
                <div className="mt-4">
                  <p className="font-medium">JCR Elite Protection</p>
                  <p>Riverbank House</p>
                  <p>1 Putney Bridge Approach</p>
                  <p>London</p>
                  <p>SW6 3JD</p>
                  <p>Email: compliance@jcreliteprotection.com</p>
                  <p>Phone: 02080874233</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <LazyFooter />
    </main>
  );
}
