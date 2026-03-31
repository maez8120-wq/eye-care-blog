import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { FeaturedArticles } from "@/components/featured-articles";
import { ArticlesGrid } from "@/components/articles-grid";
import { AboutSection } from "@/components/about-section";
import { NewsletterSection } from "@/components/newsletter-section";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturedArticles />
        <ArticlesGrid />
        <AboutSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}
