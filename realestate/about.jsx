import { Card, CardContent } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto p-6 sm:p-10 dark:bg-black dark:text-white"
    >
      <Heading level={1} className="mb-4 text-center">
        About Our Real Estate Platform
      </Heading>
      <Separator className="mb-8" />
      <Card className="dark:bg-gray-900">
        <CardContent className="space-y-6">
          <p className="text-lg leading-relaxed">
            Welcome to our real estate platform — your trusted destination for
            finding your dream home or investment property. We aim to simplify
            the real estate journey with a seamless user experience, powerful
            search features, and personalized service.
          </p>
          <p className="text-lg leading-relaxed">
            Our platform integrates advanced tools such as interactive maps,
            real-time property status updates, and direct communication with
            agents to ensure you have the most up-to-date information at your
            fingertips.
          </p>
          <p className="text-lg leading-relaxed">
            Whether you’re a first-time buyer, an experienced investor, or a
            real estate professional, we’re here to support you every step of
            the way.
          </p>
          <div className="text-center mt-8">
            <Button size="lg" variant="outline" onClick={() => alert("Contact us feature coming soon!")}>
              Contact Us
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.main>
  );
}
