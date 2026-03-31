import Link from "next/link";
import { Eye } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <Eye className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-foreground">
                  Eye Care Kids
                </span>
                <span className="text-xs text-muted-foreground">
                  vision & learning
                </span>
              </div>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Our team strongly believes that vision is more than just seeing clearly. Our eyes care
              people endeavour to 'improve your quality of life through quality of vision'.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#articles"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Articles
                </Link>
              </li>
              <li>
                <Link
                  href="/#categories"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground">Categories</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/#articles"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Vision Health
                </Link>
              </li>
              <li>
                <Link
                  href="/#articles"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Digital Wellness
                </Link>
              </li>
              <li>
                <Link
                  href="/#articles"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Eye Exams
                </Link>
              </li>
              <li>
                <Link
                  href="/#articles"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Prevention
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Eye Care Kids. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
