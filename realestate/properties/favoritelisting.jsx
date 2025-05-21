import { useSelector, useDispatch } from "react-redux";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { removeFromFavorites } from "@/redux/favoritesSlice";

export default function FavoritesPage() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  return (
    <div className="mx-auto max-w-4xl p-6">
      <h2 className="mb-6 text-2xl font-bold">Saved Listings</h2>
      {favorites.length === 0 ? (
        <p className="text-gray-500">You haven't saved any listings yet. ???</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {favorites.map((listing) => (
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
                <Button
                  variant="destructive"
                  onClick={() => dispatch(removeFromFavorites(listing.id))}
                >
                  Remove
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
