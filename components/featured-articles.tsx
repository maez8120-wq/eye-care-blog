import { getFeaturedArticles } from "@/lib/articles";
import { ArticleCard } from "./article-card";
import { Sparkles } from "lucide-react";

export function FeaturedArticles() {
  const featuredArticles = getFeaturedArticles();

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="h-5 w-5 text-accent" />
          <span className="text-sm font-medium text-accent">Featured</span>
        </div>
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          Must-Read Articles
        </h2>
        <p className="mt-2 text-muted-foreground max-w-2xl">
          Our most popular and helpful articles for parents concerned about
          their children&apos;s eye health.
        </p>

        <div className="mt-8 grid gap-6">
          {featuredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} featured />
          ))}
        </div>
      </div>
    </section>
  );
}
