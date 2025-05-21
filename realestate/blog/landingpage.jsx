import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const blogPosts = [
  {
    id: "1",
    title: "Top Tips for First-Time Homebuyers",
    summary: "Get the best advice before making your first home purchase...",
    date: "2025-05-01",
    author: "Admin",
  },
  {
    id: "2",
    title: "5 Home Improvements That Boost Property Value",
    summary: "Learn the top upgrades that can increase your resale price...",
    date: "2025-05-10",
    author: "Jane Realty",
  },
  {
    id: "3",
    title: "Navigating the Real Estate Market in 2025",
    summary:
      "Trends, tips, and data on where the market is headed this year.....",
    date: "2025-05-14",
    author: "Market Watch",
  },
];

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="mb-10 text-center text-3xl font-bold">
        Latest Blog Posts
      </h1>
      <div className="grid gap-6 md:grid-cols-2">
        {blogPosts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`} className="block">
            <Card className="transition-shadow duration-200 hover:shadow-lg">
              <CardContent className="p-6">
                <h2 className="mb-2 text-xl font-semibold">{post.title}</h2>
                <p className="mb-1 text-sm text-gray-500">
                  {post.date} • {post.author}
                </p>
                <p className="text-gray-700">{post.summary}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
