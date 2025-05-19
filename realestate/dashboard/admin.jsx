import { useSelector } from "react-redux";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function AdminDashboard() {
  const listings = useSelector((state) => state.listings.all);
  const users = useSelector((state) => state.users.all);
  const visits = useSelector((state) => state.visits.list);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <Tabs defaultValue="listings" className="space-y-4">
        <TabsList>
          <TabsTrigger value="listings">All Listings</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="visits">Visits</TabsTrigger>
        </TabsList>

        <TabsContent value="listings">
          {listings.length ? listings.map((l) => (
            <Card key={l.id} className="mb-4">
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">{l.title}</h3>
                <p className="text-sm">Owner: {l.ownerName || l.ownerId}</p>
                <p className="text-sm">${l.price}</p>
              </CardContent>
            </Card>
          )) : <p>No listings available.</p>}
        </TabsContent>

        <TabsContent value="users">
          {users.length ? users.map((u) => (
            <Card key={u.id} className="mb-4">
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">{u.name}</h3>
                <p className="text-sm">Email: {u.email}</p>
              </CardContent>
            </Card>
          )) : <p>No users found.</p>}
        </TabsContent>

        <TabsContent value="visits">
          {visits.length ? visits.map((v, i) => (
            <Card key={i} className="mb-4">
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">{v.name} - {v.date}</h3>
                <p className="text-sm">{v.message}</p>
              </CardContent>
            </Card>
          )) : <p>No visits scheduled.</p>}
        </TabsContent>
      </Tabs>
    </div>
  );
}
