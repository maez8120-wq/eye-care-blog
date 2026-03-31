import Link from "next/link";
import { Clock, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Article } from "@/lib/articles";

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export function ArticleCard({ article, featured = false }: ArticleCardProps) {
  if (featured) {
    return (
      <Link href={`/article/${article.id}`}>
        <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full">
          <div className="grid md:grid-cols-2 h-full">
            <div className="relative aspect-[16/10] md:aspect-auto bg-muted">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <span className="text-6xl">👁️</span>
              </div>
            </div>
            <CardContent className="flex flex-col justify-center p-6 md:p-8">
              <Badge
                variant="secondary"
                className="w-fit mb-3 bg-primary/10 text-primary hover:bg-primary/20"
              >
                {article.category}
              </Badge>
              <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                {article.title}
              </h3>
              <p className="mt-3 text-muted-foreground line-clamp-3 leading-relaxed">
                {article.excerpt}
              </p>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <User className="h-4 w-4" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  <span>{article.readTime}</span>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
      </Link>
    );
  }

  return (
    <Link href={`/article/${article.id}`}>
      <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full">
        <div className="relative aspect-[16/10] bg-muted">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
            <span className="text-4xl">👁️</span>
          </div>
        </div>
        <CardContent className="p-5">
          <Badge
            variant="secondary"
            className="w-fit mb-3 bg-primary/10 text-primary hover:bg-primary/20"
          >
            {article.category}
          </Badge>
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {article.title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {article.excerpt}
          </p>
          <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <User className="h-3.5 w-3.5" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
