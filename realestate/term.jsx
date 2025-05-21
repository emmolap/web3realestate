import { Card, CardContent } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-4xl p-6 dark:bg-black dark:text-white sm:p-10"
    >
      <Heading level={1} className="mb-4 text-center">
        Terms and Conditions
      </Heading>
      <Separator className="mb-8" />
      <Card className="dark:bg-gray-900">
        <CardContent className="space-y-6 text-justify">
          <section>
            <h2 className="mb-2 text-xl font-semibold">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using this website, you accept and agree to be
              bound by the terms and provision of this agreement. In addition,
              when using these particular services, you shall be subject to any
              posted guidelines or rules applicable to such services.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold">2. Use of Site</h2>
            <p>
              You agree to use the site only for lawful purposes and in a way
              that does not infringe the rights of, restrict or inhibit anyone
              else’s use and enjoyment of the site.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold">
              3. Intellectual Property
            </h2>
            <p>
              All content included on this site, such as text, graphics, logos,
              images, and software, is the property of the company or its
              content suppliers and is protected by copyright laws.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold">
              4. Limitation of Liability
            </h2>
            <p>
              The company shall not be liable for any damages arising out of or
              in connection with the use of this website.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold">5. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Your
              continued use of the site following any changes constitutes your
              acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold">
              6. Contact Information
            </h2>
            <p>
              For any questions about these Terms, please contact us at
              support@example.com.
            </p>
          </section>
        </CardContent>
      </Card>
    </motion.main>
  );
}
