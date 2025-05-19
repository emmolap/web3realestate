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
    summary: "Trends, tips, and data on where the market is headed this year...",
    date: "2025-05-14",
    author: "Market Watch",
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-10">Latest Blog Posts</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {blogPosts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`} className="block">
            <Card className="hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-500 text-sm mb-1">{post.date} • {post.author}</p>
                <p className="text-gray-700">{post.summary}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
