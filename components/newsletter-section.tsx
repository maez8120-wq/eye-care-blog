"use client";

import { useState } from "react";
import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-foreground/20">
            <Mail className="h-7 w-7 text-primary-foreground" />
          </div>
          <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">
            Stay Updated
          </h2>
          <p className="mt-3 text-primary-foreground/80">
            Subscribe to our newsletter for the latest tips, research, and
            resources on children&apos;s eye health delivered to your inbox.
          </p>

          {submitted ? (
            <div className="mt-8 rounded-xl bg-primary-foreground/20 p-6">
              <p className="text-lg font-medium text-primary-foreground">
                Thank you for subscribing!
              </p>
              <p className="mt-1 text-sm text-primary-foreground/80">
                We&apos;ll send you our best content on children&apos;s eye care.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 bg-primary-foreground text-foreground placeholder:text-muted-foreground border-0 sm:w-80"
              />
              <Button
                type="submit"
                size="lg"
                variant="secondary"
                className="h-12"
              >
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          )}

          <p className="mt-4 text-xs text-primary-foreground/60">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
