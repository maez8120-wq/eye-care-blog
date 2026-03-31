"use client";

import { useState } from "react";
import { articles, getAllCategories } from "@/lib/articles";
import { ArticleCard } from "./article-card";
import { Button } from "@/components/ui/button";

export function ArticlesGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = getAllCategories();

  const filteredArticles = selectedCategory
    ? articles.filter((article) => article.category === selectedCategory)
    : articles;

  return (
    <section id="articles" className="py-16 bg-secondary/50">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            All Articles
          </h2>
        </div>

        {/* Category Filter */}
        <div
          id="categories"
          className="mt-8 flex flex-wrap items-center justify-center gap-2"
        >
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(null)}
          >
            All
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="mt-10 text-center">
            <p className="text-muted-foreground">
              No articles found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
