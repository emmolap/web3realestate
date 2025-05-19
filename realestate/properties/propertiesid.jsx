import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PropertyDetails() {
  const router = useRouter();
  const { id } = router.query;
  const listing = useSelector((state) =>
    state.listings.find((item) => item.id === id)
  );

  if (!listing) {
    return <p className="mt-10 text-center">Loading listing details...</p>;
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-4 text-3xl font-bold">{listing.title}</h1>
      <p className="mb-2 text-xl font-semibold text-green-700">
        ${listing.price}
      </p>
      <p className="mb-4 text-gray-600">{listing.address}</p>

      <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {listing.images.map((file, index) => (
          <img
            key={index}
            src={typeof file === "string" ? file : URL.createObjectURL(file)}
            alt={`property-${index}`}
            className="h-40 w-full rounded-lg object-cover"
          />
        ))}
      </div>

      <Card>
        <CardContent className="space-y-4 p-6">
          <h2 className="text-2xl font-semibold">Property Description</h2>
          <p>{listing.description}</p>

          {listing.location && (
            <div>
              <h3 className="mb-2 mt-6 text-xl font-medium">Location</h3>
              <iframe
                src={`https://maps.google.com/maps?q=${listing.location.lat},${listing.location.lng}&z=15&output=embed`}
                width="100%"
                height="300"
                className="rounded-lg border"
                loading="lazy"
              ></iframe>
            </div>
          )}

          <Button className="mt-6 w-full sm:w-auto">Schedule a Visit</Button>
        </CardContent>
      </Card>
    </div>
  );
}
