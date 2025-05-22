import { Card, CardContent } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6 sm:p-10 dark:bg-black dark:text-white"
    >
      <Heading level={1} className="mb-4 text-center">
        Privacy Policy
      </Heading>
      <Separator className="mb-8" />

      <Card className="dark:bg-gray-900">
        <CardContent className="space-y-6 text-justify">
          <section>
            <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
            <p>
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
            <p>
              We may collect personal information such as your name, email address, phone number, and other data you voluntarily provide. We also collect usage data such as IP address, browser type, and device identifiers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">3. How We Use Your Information</h2>
            <p>
              We use your information to:
              <ul className="list-disc pl-5 mt-2">
                <li>Provide and maintain our services</li>
                <li>Improve user experience</li>
                <li>Send updates and promotional content</li>
                <li>Comply with legal obligations</li>
              </ul>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">4. Sharing Your Information</h2>
            <p>
              We do not sell your personal information. We may share your data with third-party service providers only to help us operate the site and provide services to you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">5. Data Security</h2>
            <p>
              We implement reasonable measures to protect your personal information, but no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
            <p>
              You have the right to access, correct, delete, or restrict the use of your personal data. You can also opt out of marketing communications at any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">7. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised effective date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">8. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy, please contact us at privacy@example.com.
            </p>
          </section>
        </CardContent>
      </Card>
    </motion.main>
  );
}
