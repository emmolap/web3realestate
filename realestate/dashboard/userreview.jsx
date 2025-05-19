import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";

export default function UserReviews({ propertyId }) {
  const [reviews, setReviews] = useState([
    {
      propertyId: "123",
      name: "Jane Doe",
      content: "Fantastic service! Found my dream home easily.",
      rating: 5,
    },
    {
      propertyId: "123",
      name: "John Smith",
      content: "Great experience, very intuitive and smooth process.",
      rating: 4,
    },
  ]);
  const [form, setForm] = useState({ name: "", content: "", rating: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRatingChange = (value) => {
    setForm({ ...form, rating: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.content || !form.rating) return;
    const newReview = { ...form, propertyId };
    setReviews((prev) => [...prev, newReview]);
    setForm({ name: "", content: "", rating: "" });
  };

  const filteredReviews = reviews.filter((review) => review.propertyId === propertyId);

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">User Reviews</h2>
      <div className="space-y-4 mb-10">
        {filteredReviews.map((review, idx) => (
          <Card key={idx}>
            <CardContent className="p-4">
              <p className="font-semibold">{review.name}</p>
              <p className="text-yellow-500">{"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}</p>
              <p className="text-gray-600">{review.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input name="name" value={form.name} onChange={handleChange} required />
        </div>
        <div>
          <Label htmlFor="content">Your Review</Label>
          <Textarea name="content" value={form.content} onChange={handleChange} required />
        </div>
        <div>
          <Label htmlFor="rating">Rating</Label>
          <Select value={form.rating} onValueChange={handleRatingChange} required>
            <SelectTrigger>
              <span>{form.rating ? `${form.rating} Stars` : "Select rating"}</span>
            </SelectTrigger>
            <SelectContent>
              {[5, 4, 3, 2, 1].map((star) => (
                <SelectItem key={star} value={String(star)}>{star} Star{star > 1 && "s"}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button type="submit">Submit Review</Button>
      </form>
    </div>
  );
}
