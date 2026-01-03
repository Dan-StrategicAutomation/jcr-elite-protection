import type { Metadata } from "next";

import LazyFooter from "@/components/LazyFooter";
import Navbar from "@/components/Navbar";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Cookie Policy | JCR Elite Protection",
  description:
    "Read about how JCR Elite Protection uses cookies to improve your experience on our website.",
};

export default function CookiePolicyPage() {
  const lastUpdated = "3 January 2026"; // Static date as per best practice for policy pages

  return (
    <main id="main-content" className="min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Cookie Policy</h1>
            <p className="text-gray-600 mb-8">Last updated: {lastUpdated}</p>

            <Separator className="my-8" />

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. What Are Cookies</h2>
                <p className="text-gray-700">
                  Cookies are small text files that are placed on your computer or mobile device
                  when you visit a website. They are widely used in order to make websites work more
                  efficiently, as well as to provide information to the owners of the site. Cookies
                  enhance user experience by allowing websites to remember your preferences and
                  understand how you use different parts of a website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. How We Use Cookies</h2>
                <p className="text-gray-700 mb-4">
                  We use cookies for a variety of reasons detailed below. Unfortunately, in most
                  cases, there are no industry standard options for disabling cookies without
                  completely disabling the functionality and features they add to this site.
                </p>
                <p className="text-gray-700">We use cookies for the following purposes:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-4">
                  <li>
                    <strong>Essential Cookies:</strong> These are cookies that are required for the
                    operation of our website.
                  </li>
                  <li>
                    <strong>Functionality Cookies:</strong> These are used to recognize you when you
                    return to our website.
                  </li>
                  <li>
                    <strong>Analytical Cookies:</strong> These allow us to recognize and count the
                    number of visitors and to see how visitors move around our website when they are
                    using it.
                  </li>
                  <li>
                    <strong>Targeting Cookies:</strong> These cookies record your visit to our
                    website, the pages you have visited and the links you have followed.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Disabling Cookies</h2>
                <p className="text-gray-700 mb-4">
                  You can prevent the setting of cookies by adjusting the settings on your browser.
                  Be aware that disabling cookies will affect the functionality of this and many
                  other websites that you visit. Disabling cookies will usually result in also
                  disabling certain functionality and features of this site.
                </p>
                <p className="text-gray-700">
                  Most modern browsers allow you to control your cookie settings for all websites
                  through the browser settings. To find out more about cookies, including how to see
                  what cookies have been set and how to manage and delete them, visit
                  www.allaboutcookies.org.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. The Cookies We Set</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-4">
                  <li>
                    <strong>Account related cookies</strong>
                    <p>
                      If you create an account with us then we will use cookies for the management
                      of the signup process and general administration. These cookies will usually
                      be deleted when you log out however in some cases they may remain afterwards
                      to remember your site preferences when logged out.
                    </p>
                  </li>
                  <li>
                    <strong>Login related cookies</strong>
                    <p>
                      We use cookies when you are logged in so that we can remember this fact. This
                      prevents you from having to log in every single time you visit a new page.
                      These cookies are typically removed or cleared when you log out to ensure that
                      you can only access restricted features and areas when logged in.
                    </p>
                  </li>
                  <li>
                    <strong>Site preferences cookies</strong>
                    <p>
                      In order to provide you with a great experience on this site we provide the
                      functionality to set your preferences for how this site runs when you use it.
                      In order to remember your preferences we need to set cookies so that this
                      information can be called whenever you interact with a page is affected by
                      your preferences.
                    </p>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Contact Us</h2>
                <p className="text-gray-700">
                  If you have any questions about our Cookie Policy, please contact us at:
                </p>
                <div className="mt-4">
                  <p className="font-medium">JCR Elite Protection</p>
                  <p>Riverbank House</p>
                  <p>1 Putney Bridge Approach</p>
                  <p>London</p>
                  <p>SW6 3JD</p>
                  <p>Email: privacy@jcreliteprotection.com</p>
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
