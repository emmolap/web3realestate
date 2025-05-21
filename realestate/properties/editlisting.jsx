import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import dynamic from "next/dynamic";
import { updateListing } from "@/redux/listingSlice";

const MapPicker = dynamic(() => import("@/components/map-picker"), {
  ssr: false,
});

export default function EditListingForm() {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const listings = useSelector((state) => state.listings);
  const listing = listings.find((item) => item.id === id);

  const [form, setForm] = useState(null);

  useEffect(() => {
    if (listing) setForm({ ...listing });
  }, [listing]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setForm((prev) => ({ ...prev, images: files }));
  };

  const handleLocationSelect = (coordinates) => {
    setForm((prev) => ({ ...prev, location: coordinates }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateListing(form));
    router.push(`/property/${id}`);
  };

  if (!form) return <p className="mt-10 text-center">Loading listing...</p>;

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-2xl space-y-6 p-6">
      <h2 className="text-2xl font-semibold">Edit Listing</h2>

      <div>
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          name="title"
          value={form.title}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <Label htmlFor="price">Price</Label>
        <Input
          id="price"
          name="price"
          value={form.price}
          onChange={handleChange}
          type="number"
          required
        />
      </div>

      <div>
        <Label htmlFor="address">Address</Label>
        <Input
          id="address"
          name="address"
          value={form.address}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          value={form.description}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <Label htmlFor="images">Upload Images</Label>
        <Input
          id="images"
          name="images"
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageUpload}
        />
      </div>

      <div>
        <Label>Pick Location on Map</Label>
        <div className="h-[300px] overflow-hidden rounded-lg border">
          <MapPicker
            onSelect={handleLocationSelect}
            defaultLocation={form.location}
          />
        </div>
      </div>

      <Button type="submit" className="w-full">
        Update Listing...
      </Button>
    </form>
  );
}
