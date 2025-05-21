import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add submission logic here (e.g., API call)
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-lg mx-auto my-10 text-center">
        <h2 className="text-2xl font-bold">Thank you!</h2>
        <p className="text-gray-600 mt-2">Your message has been received. We will get back to you as soon as possible.</p>
      </div>
    );
  }

  return (
    <Card className="max-w-xl mx-auto my-10">
      <CardContent className="p-6 space-y-6">
        <h2 className="text-xl font-bold">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" value={form.name} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" value={form.message} onChange={handleChange} required />
          </div>
          <Button type="submit" className="w-full">Send Message</Button>
        </form>
      </CardContent>
    </Card>
  );
}
