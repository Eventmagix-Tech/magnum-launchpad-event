import { useEffect, useState } from "react";
import { supabase, type BlogPost } from "@/lib/supabase";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { format } from "date-fns";

const LatestNewsSection = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data, error } = await supabase
          .from("blog_posts")
          .select("id, title, content, image_url, created_at")
          .order("created_at", { ascending: false });

        if (error) throw error;
        setPosts(data ?? []);
      } catch (err: any) {
        console.error("Error fetching blog posts:", err);
        setError(err.message ?? "Failed to load news.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const truncate = (text: string, max = 100) =>
    text.length > max ? text.slice(0, max) + "…" : text;

  return (
    <section id="news" className="py-20 bg-secondary/30">
      <div className="section-container">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Latest News
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Stay up to date with the latest announcements and stories from the event.
        </p>

        {error && (
          <p className="text-center text-destructive">{error}</p>
        )}

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <Skeleton className="h-48 w-full rounded-none" />
                <CardHeader>
                  <Skeleton className="h-5 w-3/4" />
                </CardHeader>
                <CardContent className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                  <Skeleton className="h-3 w-1/3 mt-4" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : posts.length === 0 && !error ? (
          <p className="text-center text-muted-foreground">No news posts yet. Check back soon!</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden card-elegant transition-transform duration-300 hover:-translate-y-1"
              >
                <img
                  src={post.image_url ?? "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <CardHeader>
                  <CardTitle className="text-lg leading-snug line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    {truncate(post.content)}
                  </p>
                  <time
                    dateTime={post.created_at}
                    className="text-xs text-muted-foreground/70"
                  >
                    {format(new Date(post.created_at), "MMMM d, yyyy")}
                  </time>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestNewsSection;
