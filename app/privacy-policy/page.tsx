import LazyFooter from "@/components/LazyFooter";
import Navbar from "@/components/Navbar";
import { Separator } from "@/components/ui/separator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | JCR Elite Protection",
  description:
    "Read our privacy policy to understand how JCR Elite Protection collects, uses, and safeguards your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen overflow-x-hidden">
        <div className="pt-20 pb-16">
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>
              {/* Note: In a real server component, we'd probably use a static string or a date from a DB 
                  to avoid hydration mismatch if the user is in a different timezone than the server.
                  However, for a simple migration, we'll stick to a static or formatted date. */}
              <p className="text-gray-600 mb-8">
                Last updated: {new Date().toLocaleDateString("en-GB")}
              </p>

              <Separator className="my-8" />

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                  <p className="text-gray-700">
                    At JCR Elite Protection, we take your privacy seriously. This Privacy Policy
                    explains how we collect, use, disclose, and safeguard your information when you
                    visit our website or use our services. Please read this privacy policy
                    carefully. If you do not agree with the terms of this privacy policy, please do
                    not access the site.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
                  <p className="text-gray-700 mb-4">
                    We may collect personal information that you voluntarily provide to us when you
                    express an interest in obtaining information about us or our products and
                    services, when you participate in activities on the site, or otherwise when you
                    contact us.
                  </p>
                  <p className="text-gray-700">
                    The personal information that we collect depends on the context of your
                    interactions with us and the site, the choices you make, and the products and
                    features you use. The personal information we collect may include names, email
                    addresses, phone numbers, and other contact information.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
                  <p className="text-gray-700 mb-4">
                    We use personal information collected via our site for a variety of business
                    purposes described below. We process your personal information for these
                    purposes in reliance on our legitimate business interests, in order to enter
                    into or perform a contract with you, with your consent, and/or for compliance
                    with our legal obligations.
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>To send you marketing and promotional communications</li>
                    <li>
                      To respond to your inquiries and solve any potential issues you might have
                    </li>
                    <li>To facilitate and process transactions</li>
                    <li>To request feedback and contact you about your use of our services</li>
                    <li>To protect our services from malicious users</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">4. Cookies and Web Beacons</h2>
                  <p className="text-gray-700">
                    We may use cookies and similar tracking technologies to access or store
                    information. Specific information about how we use such technologies and how you
                    can refuse certain cookies is set out in our Cookie Policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">5. Contact Us</h2>
                  <p className="text-gray-700">
                    If you have questions or comments about this policy, you may contact us at:
                  </p>
                  <div className="mt-4">
                    <p className="font-medium">JCR Elite Protection</p>
                    <p>Riverbank House</p>
                    <p>1 Putney Bridge Approach</p>
                    <p>London</p>
                    <p>SW6 3JD</p>
                    <p>Email: privacy@jcreliteprotection.co.uk</p>
                    <p>Phone: 02080874233</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
        <LazyFooter />
      </main>
    </>
  );
}
