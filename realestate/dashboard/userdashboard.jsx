import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import {
  User,
  CalendarDays,
  Home,
  Heart,
  MessageSquare,
  Bell,
  Settings,
  Lock,
  Shield,
} from "lucide-react";

const profileSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Phone number is too short"),
});

const TabCard = ({ title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
  >
    <Card>
      <CardContent className="space-y-4 p-6 dark:bg-gray-900 dark:text-white">
        <h2 className="mb-4 text-xl font-semibold">{title}</h2>
        {children}
      </CardContent>
    </Card>
  </motion.div>
);

export default function UserDashboard() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: "John Doe",
      email: "john@example.com",
      phone: "08012345678",
    },
  });

  const onSubmit = (data) => {
    toast.success("Profile updated successfully!");
    console.log(data);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 dark:bg-black dark:text-white">
      <Toaster position="top-right" />

      <div className="mb-6 flex flex-col justify-between sm:flex-row sm:items-center">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src="/avatar.jpg" alt="User avatar" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold sm:text-3xl">Welcome, John</h1>
            <p className="text-sm text-gray-500">
              Manage your real estate activities
            </p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="mb-6 grid w-full grid-cols-2 gap-2 sm:grid-cols-5 lg:grid-cols-10">
          <TabsTrigger value="profile">
            <User className="mr-2 h-4 w-4" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="saved">
            <Heart className="mr-2 h-4 w-4" />
            Saved
          </TabsTrigger>
          <TabsTrigger value="visits">
            <CalendarDays className="mr-2 h-4 w-4" />
            Visits
          </TabsTrigger>
          <TabsTrigger value="myListings">
            <Home className="mr-2 h-4 w-4" />
            Listings
          </TabsTrigger>
          <TabsTrigger value="messages">
            <MessageSquare className="mr-2 h-4 w-4" />
            Messages
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Bell className="mr-2 h-4 w-4" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="settings">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </TabsTrigger>
          <TabsTrigger value="chat">
            <MessageSquare className="mr-2 h-4 w-4" />
            Chat
          </TabsTrigger>
          <TabsTrigger value="auth">
            <Lock className="mr-2 h-4 w-4" />
            Auth
          </TabsTrigger>
          <TabsTrigger value="admin">
            <Shield className="mr-2 h-4 w-4" />
            Admin
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <TabCard title="Your Profile">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <Input placeholder="Name" {...register("name")} />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <Input
                  placeholder="Email"
                  type="email"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <Input placeholder="Phone" type="tel" {...register("phone")} />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.phone.message}
                  </p>
                )}
              </div>
              <Button type="submit">Update Profile</Button>
            </form>
          </TabCard>
        </TabsContent>

        <TabsContent value="visits">
          <TabCard title="Your Scheduled Visits">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border shadow"
            />
          </TabCard>
        </TabsContent>

        <TabsContent value="settings">
          <TabCard title="Preferences & Settings">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Open Preferences</Button>
              </DialogTrigger>
              <DialogContent>
                <p className="text-sm">
                  Dark mode, notification toggle, email updates, etc.
                </p>
              </DialogContent>
            </Dialog>
          </TabCard>
        </TabsContent>

        <TabsContent value="myListings">
          <TabCard title="My Listings">
            <p className="text-muted-foreground text-sm">
              You currently have no active listings.
            </p>
            <Button className="mt-4">Add New Listing</Button>
          </TabCard>
        </TabsContent>
      </Tabs>
    </div>
  );
}
