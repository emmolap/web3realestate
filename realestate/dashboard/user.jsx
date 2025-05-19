import { useSelector } from "react-redux";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

export default function UserDashboard() {
  const user = useSelector((state) => state.auth.user);
  const favorites = useSelector((state) => state.favorites.items);
  const visits = useSelector((state) => state.visits.list);
  const listings = useSelector((state) => state.listings.all).filter(l => l.ownerId === user?.id);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user?.name || "User"}</h1>
      <Tabs defaultValue="listings" className="space-y-4">
        <TabsList>
          <TabsTrigger value="listings">My Listings</TabsTrigger>
          <TabsTrigger value="favorites">Favorites</TabsTrigger>
          <TabsTrigger value="visits">Scheduled Visits</TabsTrigger>
        </TabsList>

        <TabsContent value="listings">
          {listings.length ? listings.map((l) => (
            <Card key={l.id} className="mb-4">
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">{l.title}</h3>
                <p className="text-sm">{l.address}</p>
                <p className="text-sm">${l.price}</p>
                <Button variant="outline" className="mt-2">Edit Listing</Button>
              </CardContent>
            </Card>
          )) : <p>You have no listings yet.</p>}
        </TabsContent>

        <TabsContent value="favorites">
          {favorites.length ? favorites.map((f) => (
            <Card key={f.id} className="mb-4">
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="text-sm">{f.address}</p>
              </CardContent>
            </Card>
          )) : <p>No saved listings.</p>}
        </TabsContent>

        <TabsContent value="visits">
          {visits.length ? visits.map((v, idx) => (
            <Card key={idx} className="mb-4">
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">{v.name} - {v.date}</h3>
                <p className="text-sm">{v.message}</p>
              </CardContent>
            </Card>
          )) : <p>No scheduled visits yet.</p>}
        </TabsContent>
      </Tabs>
    </div>
  );
}
