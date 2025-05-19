import { useSelector, useDispatch } from "react-redux";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { removeFromFavorites } from "@/redux/favoritesSlice";

export default function FavoritesPage() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Saved Listings</h2>
      {favorites.length === 0 ? (
        <p className="text-gray-500">You haven't saved any listings yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {favorites.map((listing) => (
            <Card key={listing.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4 space-y-2">
                <Link href={`/property/${listing.id}`} className="block">
                  <img
                    src={URL.createObjectURL(listing.images[0])}
                    alt={listing.title}
                    className="h-40 w-full object-cover rounded"
                  />
                  <h3 className="text-lg font-semibold mt-2">{listing.title}</h3>
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
