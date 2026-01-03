import LazyFooter from "@/components/LazyFooter";
import Navbar from "@/components/Navbar";
import { Separator } from "@/components/ui/separator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | JCR Elite Protection",
  description:
    "Read our terms of service to understand the agreement between you and JCR Elite Protection for using our website and services.",
};

export default function TermsOfServicePage() {
  return (
    <main id="main-content" className="min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Terms of Service</h1>
            <p className="text-gray-600 mb-8">
              Last updated: {new Date().toLocaleDateString("en-GB")}
            </p>

            <Separator className="my-8" />

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
                <p className="text-gray-700">
                  By accessing our website, you are agreeing to be bound by these Terms of Service
                  and agree that you are responsible for compliance with any applicable local laws.
                  If you do not agree with any of these terms, you are prohibited from using or
                  accessing this site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Services</h2>
                <p className="text-gray-700">
                  JCR Elite Protection provides security services as described on our website. We
                  reserve the right to modify, suspend or discontinue any aspect of our services at
                  any time without notice. We make no guarantees about the availability of our
                  services, and we may impose limits on certain features or restrict your access to
                  parts or all of the service without notice or liability.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Use Licence</h2>
                <p className="text-gray-700 mb-4">
                  Permission is granted to temporarily download one copy of the materials on JCR
                  Elite Protection's website for personal, non-commercial transitory viewing only.
                  This is the grant of a licence, not a transfer of title, and under this licence
                  you may not:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose</li>
                  <li>
                    Attempt to decompile or reverse engineer any software contained on JCR Elite
                    Protection's website
                  </li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>
                    Transfer the materials to another person or "mirror" the materials on any other
                    server
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Disclaimer</h2>
                <p className="text-gray-700">
                  The materials on JCR Elite Protection's website are provided on an 'as is' basis.
                  JCR Elite Protection makes no warranties, expressed or implied, and hereby
                  disclaims and negates all other warranties including, without limitation, implied
                  warranties or conditions of merchantability, fitness for a particular purpose, or
                  non-infringement of intellectual property or other violation of rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Limitations</h2>
                <p className="text-gray-700">
                  In no event shall JCR Elite Protection or its suppliers be liable for any damages
                  (including, without limitation, damages for loss of data or profit, or due to
                  business interruption) arising out of the use or inability to use the materials on
                  JCR Elite Protection's website, even if JCR Elite Protection or a JCR Elite
                  Protection authorized representative has been notified orally or in writing of the
                  possibility of such damage.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
                <p className="text-gray-700">
                  If you have any questions about these Terms, please contact us at:
                </p>
                <div className="mt-4">
                  <p className="font-medium">JCR Elite Protection</p>
                  <p>Riverbank House</p>
                  <p>1 Putney Bridge Approach</p>
                  <p>London</p>
                  <p>SW6 3JD</p>
                  <p>Email: legal@jcreliteprotection.com</p>
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
