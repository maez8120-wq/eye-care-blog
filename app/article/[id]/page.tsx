import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, User, Calendar, Share2 } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { articles, getArticleById } from "@/lib/articles";
import { ArticleCard } from "@/components/article-card";

interface ArticlePageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    id: article.id,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { id } = await params;
  const article = getArticleById(id);

  if (!article) {
    return {
      title: "Article Not Found | Eye Care Kids",
    };
  }

  return {
    title: `${article.title} | Eye Care Kids`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { id } = await params;
  const article = getArticleById(id);

  if (!article) {
    notFound();
  }

  // Get related articles (same category, excluding current)
  const relatedArticles = articles
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 2);

  const formattedDate = new Date(article.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Article Header */}
        <section className="bg-secondary py-12 md:py-16">
          <div className="container mx-auto max-w-4xl px-4">
            <Button variant="ghost" size="sm" asChild className="mb-6 -ml-2">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Articles
              </Link>
            </Button>

            <Badge
              variant="secondary"
              className="mb-4 bg-primary/10 text-primary"
            >
              {article.category}
            </Badge>

            <h1 className="text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
              {article.title}
            </h1>

            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              {article.excerpt}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="flex justify-end mb-8">
              <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                Share Article
              </Button>
            </div>

            <article
              className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Author Box */}

          </div>
        </section>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="py-12 bg-secondary/50">
            <div className="container mx-auto max-w-6xl px-4">
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                Related Articles
              </h2>
              <p className="mt-2 text-muted-foreground">
                More articles in {article.category}
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {relatedArticles.map((relatedArticle) => (
                  <ArticleCard key={relatedArticle.id} article={relatedArticle} />
                ))}
              </div>

              <div className="mt-8 text-center">
                <Button variant="outline" asChild>
                  <Link href="/#articles">View All Articles</Link>
                </Button>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
