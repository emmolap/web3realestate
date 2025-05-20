import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export default function UserDashboard() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="mb-6 text-3xl font-bold">My Dashboard</h1>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="mb-6 grid w-full grid-cols-7">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="saved">Saved Listings</TabsTrigger>
          <TabsTrigger value="visits">Scheduled Visits</TabsTrigger>
          <TabsTrigger value="myListings">My Listings</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card>
            <CardContent className="space-y-4 p-6">
              <h2 className="mb-4 text-xl font-semibold">Your Profile</h2>
              <Input placeholder="Name" />
              <Input placeholder="Email" type="email" />
              <Input placeholder="Phone" type="tel" />
              <Button>Update Profile</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="saved">
          <Card>
            <CardContent className="p-6">
              <h2 className="mb-4 text-xl font-semibold">Saved Listings</h2>
              <p>You haven't saved any properties yet.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="visits">
          <Card>
            <CardContent className="p-6">
              <h2 className="mb-4 text-xl font-semibold">Scheduled Visits</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <p className="mb-2 font-medium">Select a date:</p>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-md border"
                  />
                </div>
                <div>
                  <p className="mb-2 font-medium">
                    Your scheduled visits will appear here.
                  </p>
                  <p className="text-sm text-gray-500">No visits scheduled.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="myListings">
          <Card>
            <CardContent className="p-6">
              <h2 className="mb-4 text-xl font-semibold">Your Listings</h2>
              <p>You have not posted any listings yet.</p>
              <Button className="mt-4">Create New Listing</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="messages">
          <Card>
            <CardContent className="space-y-4 p-6">
              <h2 className="text-xl font-semibold">Messages</h2>
              <p>No messages yet. Start a conversation with an agent.</p>
              <Button>Start New Chat</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardContent className="space-y-4 p-6">
              <h2 className="text-xl font-semibold">Notifications</h2>
              <ul className="list-inside list-disc text-sm text-gray-700">
                <li>You have a new visit scheduled.</li>
                <li>Your listing "Cozy Apartment" was approved.</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card>
            <CardContent className="space-y-4 p-6">
              <h2 className="text-xl font-semibold">Settings & Preferences</h2>
              <label className="font-medium">Notification Preferences</label>
              <Input
                type="email"
                placeholder="Enter alternate email for alerts"
              />
              <Button>Save Preferences</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-10">
        <h2 className="mb-4 text-2xl font-semibold">Admin Tools</h2>
        <Card>
          <CardContent className="p-6">
            <p>Moderate user listings and manage users.</p>
            <Button className="mt-4">Go to Admin Panel</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
