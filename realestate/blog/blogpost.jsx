import { useRouter } from "next/router";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Facebook, Twitter, Linkedin, Share2, Copy, MessageSquare, ThumbsUp } from "lucide-react";

const blogContent = {
  "1": {
    title: "Top Tips for First-Time Homebuyers",
    content:
      "Buying your first home can be daunting. In this article, we cover the most important things you need to know, including budgeting, choosing the right location, and working with trusted agents...",
    date: "2025-05-01",
    author: "Admin",
  },
  "2": {
    title: "5 Home Improvements That Boost Property Value",
    content:
      "Not all renovations are equal. We dive into the top 5 home improvements that give you the best return on investment, from kitchen remodels to landscaping...",
    date: "2025-05-10",
    author: "Jane Realty",
  },
  "3": {
    title: "Navigating the Real Estate Market in 2025",
    content:
      "Real estate trends in 2025 are shifting. Learn what to expect, which cities are booming, and how to stay ahead in a competitive market...",
    date: "2025-05-14",
    author: "Market Watch",
  },
};

export default function BlogPostPage() {
  const router = useRouter();
  const { id } = router.query;
  const post = blogContent[id as keyof typeof blogContent];

  const [comments, setComments] = useState([]);
  const [commentForm, setCommentForm] = useState({ name: "", text: "" });
  const [likes, setLikes] = useState(0);

  const handleChange = (e) => {
    setCommentForm({ ...commentForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!commentForm.name || !commentForm.text) return;
    setComments([...comments, { ...commentForm, date: new Date().toLocaleDateString() }]);
    setCommentForm({ name: "", text: "" });
  };

  const handleLike = () => {
    setLikes(likes + 1);
  };

  if (!post) {
    return <p className="text-center py-20">Loading...</p>;
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : "";
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${post.title} ${shareUrl}`)}`;

  const handleCopy = async () => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(shareUrl);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Card>
        <CardContent className="p-6">
          <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
          <p className="text-sm text-gray-500 mb-4">{post.date} • {post.author}</p>
          <p className="text-gray-800 leading-relaxed whitespace-pre-line mb-6">{post.content}</p>

          <div className="flex items-center gap-4 mt-6 mb-10 flex-wrap">
            <span className="font-semibold">Share:</span>
            <a href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${post.title}`} target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5 text-blue-500 hover:opacity-75" />
            </a>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer">
              <Facebook className="w-5 h-5 text-blue-600 hover:opacity-75" />
            </a>
            <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${post.title}`} target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 text-blue-700 hover:opacity-75" />
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageSquare className="w-5 h-5 text-green-500 hover:opacity-75" />
            </a>
            <button onClick={handleCopy} title="Copy link">
              <Copy className="w-5 h-5 text-gray-500 hover:opacity-75" />
            </button>
          </div>

          <div className="flex items-center gap-2 mb-10">
            <Button variant="ghost" onClick={handleLike} className="flex items-center gap-1">
              <ThumbsUp className="w-4 h-4" /> Like
            </Button>
            <span className="text-sm text-gray-600">{likes} {likes === 1 ? "like" : "likes"}</span>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-semibold mb-4">Leave a Comment</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input name="name" placeholder="Your name" value={commentForm.name} onChange={handleChange} required />
              <Textarea name="text" placeholder="Your comment" value={commentForm.text} onChange={handleChange} required />
              <Button type="submit">Submit</Button>
            </form>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-semibold mb-4">Comments</h3>
            {comments.length === 0 ? (
              <p className="text-sm text-gray-500">No comments yet.</p>
            ) : (
              comments.map((comment, idx) => (
                <div key={idx} className="border-t pt-4 mt-4">
                  <p className="font-semibold">{comment.name}</p>
                  <p className="text-sm text-gray-500 mb-1">{comment.date}</p>
                  <p className="text-gray-700">{comment.text}</p>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
