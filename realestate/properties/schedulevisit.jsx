import { useState } from "react";
import { useDispatch } from "react-redux";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DatePicker } from "@/components/ui/datepicker";
import { scheduleVisit } from "@/redux/visitSlice";

export default function ScheduleVisitPage({ listingId }) {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: null,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date) => {
    setForm((prev) => ({ ...prev, date }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.date) {
      alert("Please, fill all required fields");
      return;
    }
    dispatch(scheduleVisit({ listingId, ...form }));
    alert("Visit scheduled successfully");
  };

  return (
    <Card className="mx-auto my-6 max-w-2xl">
      <CardContent className="space-y-6 p-6">
        <h2 className="text-xl font-bold">Schedule a Property Visit</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Label htmlFor="date">Select Date</Label>
            <DatePicker selected={form.date} onChange={handleDateChange} />
          </div>

          <div>
            <Label htmlFor="message">Message (optional)</Label>
            <Input
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <Button type="submit" className="w-full">
            Schedule Visit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
