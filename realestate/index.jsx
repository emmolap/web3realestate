import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Sparkles, Home, MapPin, Building2, Sun, Moon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const Map = dynamic(() => import("@/components/map"), { ssr: false }); // Custom map component

export default function LandingPage() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <main className="min-h-screen w-full bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors">
      {/* Toggle */}
      <div className="absolute top-4 right-4 z-50">
        <Button onClick={() => setDarkMode(!darkMode)} variant="outline" size="icon">
          {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </div>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-16 px-4 sm:px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <Badge className="mb-4 px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-white rounded-full">
            <Sparkles className="mr-2 h-4 w-4" /> Find Your Dream Home
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold max-w-2xl mx-auto">
            Discover, Search and Book the Perfect Property
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-xl mx-auto">
            Buy, rent or list a property effortlessly with our modern real estate platform.
          </p>
          <div className="mt-6 w-full max-w-md flex flex-col sm:flex-row gap-2 mx-auto">
            <Input type="text" placeholder="Search by city or address..." className="flex-1" />
            <Button className="w-full sm:w-auto">Search</Button>
          </div>
        </motion.div>
      </section>

      {/* Featured Properties Section */}
      <section className="px-4 sm:px-8 md:px-16 py-12 bg-gray-50 dark:bg-gray-900">
        <h2 className="text-2xl font-semibold mb-8 text-center">Featured Properties</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="transition-all"
            >
              <Card className="overflow-hidden rounded-2xl shadow-md">
                <Image
                  src={`/images/property${i}.jpg`}
                  alt="Property"
                  width={400}
                  height={250}
                  className="w-full h-52 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold">Modern 3-Bedroom Apartment</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Lekki Phase 1, Lagos</p>
                  <Separator className="my-2" />
                  <div className="flex justify-between text-sm">
                    <span>$1,200/month</span>
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-4 sm:px-8 md:px-16 py-16 bg-white dark:bg-black">
        <h2 className="text-2xl font-semibold mb-10 text-center">How It Works</h2>
        <div className="grid gap-8 sm:grid-cols-3">
          <motion.div whileHover={{ y: -5 }} className="text-center">
            <Home className="mx-auto mb-4 h-8 w-8 text-primary" />
            <h4 className="font-semibold">Browse Listings</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Explore properties in your area with ease and filter by what matters most.</p>
          </motion.div>
          <motion.div whileHover={{ y: -5 }} className="text-center">
            <Building2 className="mx-auto mb-4 h-8 w-8 text-primary" />
            <h4 className="font-semibold">View Property Details</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Check photos, features, location, and schedule a visit online or in person.</p>
          </motion.div>
          <motion.div whileHover={{ y: -5 }} className="text-center">
            <Sparkles className="mx-auto mb-4 h-8 w-8 text-primary" />
            <h4 className="font-semibold">Secure Your Deal</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Contact an agent or place an offer directly. It's fast, easy and secure.</p>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-4 sm:px-8 md:px-16 py-12 bg-gray-100 dark:bg-gray-800">
        <h2 className="text-2xl font-semibold text-center mb-8">Explore on the Map</h2>
        <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
          <Map />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white px-4 sm:px-8 md:px-16 py-12 text-center">
        <h2 className="text-3xl font-semibold">Ready to find your next home?</h2>
        <p className="mt-2 mb-6 text-blue-100">Start browsing thousands of listings or list your property with us.</p>
        <Button variant="secondary" className="bg-white text-blue-600 hover:bg-blue-100">
          Get Started
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-8 md:px-16">
        <div className="text-center text-sm">&copy; {new Date().getFullYear()} RealEstateHub. All rights reserved.</div>
      </footer>
    </main>
  );
}
