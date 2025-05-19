import { useState } from "react";
import { useDispatch } from "react-redux";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import dynamic from "next/dynamic";
import { addListing } from "@/redux/listingSlice";

const MapPicker = dynamic(() => import("@/components/map-picker"), {
  ssr: false,
});

export default function ListingForm() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    title: "",
    price: "",
    address: "",
    description: "",
    images: [],
    location: null,
  });

  const [previewMode, setPreviewMode] = useState(false);

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
    if (
      !form.title ||
      !form.price ||
      !form.address ||
      !form.description ||
      !form.location ||
      form.images.length === 0
    ) {
      alert("Please fill in all fields and upload at least one image.");
      return;
    }
    dispatch(addListing(form));
  };

  if (previewMode) {
    return (
      <Card className="mx-auto my-6 max-w-2xl">
        <CardContent className="space-y-4 p-6">
          <h2 className="text-xl font-bold">Listing Preview</h2>
          <p>
            <strong>Title:</strong> {form.title}
          </p>
          <p>
            <strong>Price:</strong> ${form.price}
          </p>
          <p>
            <strong>Address:</strong> {form.address}
          </p>
          <p>
            <strong>Description:</strong> {form.description}
          </p>
          <p>
            <strong>Location:</strong>{" "}
            {form.location
              ? `${form.location.lat}, ${form.location.lng}`
              : "N/A"}
          </p>
          <div className="flex gap-2 overflow-x-auto">
            {form.images.map((file, index) => (
              <img
                key={index}
                src={URL.createObjectURL(file)}
                alt={`preview-${index}`}
                className="h-24 w-24 rounded object-cover"
              />
            ))}
          </div>
          <div className="flex gap-2 pt-4">
            <Button variant="outline" onClick={() => setPreviewMode(false)}>
              Edit
            </Button>
            <Button onClick={handleSubmit}>Confirm & Submit</Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setPreviewMode(true);
      }}
      className="mx-auto max-w-2xl space-y-6 p-6"
    >
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
          <MapPicker onSelect={handleLocationSelect} />
        </div>
      </div>

      <Button type="submit" className="w-full">
        Preview Listing
      </Button>
    </form>
  );
}
