import { useState } from "react";
import { useSelector } from "react-redux";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function SearchListingsPage() {
  const listings = useSelector((state) => state.listings);
  const [query, setQuery] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const filtered = listings.filter((listing) => {
    const matchesQuery =
      listing.title.toLowerCase().includes(query.toLowerCase()) ||
      listing.description.toLowerCase().includes(query.toLowerCase());
    const price = parseFloat(listing.price);
    const min = parseFloat(minPrice) || 0;
    const max = parseFloat(maxPrice) || Infinity;
    const inPriceRange = price >= min && price <= max;
    return matchesQuery && inPriceRange;
  });

  return (
    <div className="mx-auto max-w-4xl p-6">
      <h2 className="mb-4 text-2xl font-bold">Search Listings</h2>
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Input
          placeholder="Search by title or description"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Input
          placeholder="Min price"
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <Input
          placeholder="Max price"
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      {filtered.length === 0 ? (
        <p className="text-gray-500">No listings found.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {filtered.map((listing) => (
            <Card
              key={listing.id}
              className="transition-shadow hover:shadow-lg"
            >
              <CardContent className="space-y-2 p-4">
                <Link href={`/property/${listing.id}`} className="block">
                  <img
                    src={URL.createObjectURL(listing.images[0])}
                    alt={listing.title}
                    className="h-40 w-full rounded object-cover"
                  />
                  <h3 className="mt-2 text-lg font-semibold">
                    {listing.title}
                  </h3>
                  <p className="text-sm text-gray-500">{listing.address}</p>
                  <p className="text-primary font-bold">${listing.price}</p>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
