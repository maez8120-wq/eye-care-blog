import { Check, Heart, Shield, Users } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-medium text-primary">About Us</span>
            <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">
              Dedicated to Children&apos;s Vision Health
            </h2>

            <ul className="mt-6 space-y-3">
              {[
                "Evidence-based information from eye care professionals",
                "Practical tips for everyday vision protection",
                "Latest research on children's eye health",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: Shield,
                title: "Protection First",
                description:
                  "Learn how to protect your child's eyes.",
              },
              {
                icon: Heart,
                title: "Parent Support",
                description:
                  "We understand the challenges parents face and provide compassionate guidance.",
              },
              {
                icon: Users,
                title: "Expert Team",
                description:
                  "Our optometrists are highly experienced in managing childrens vision and myopia management.",
              },
              {
                icon: Check,
                title: "Trusted Info",
                description:
                  "All our articles are based on peer-reviewed research and clinical guidelines.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-card p-6 shadow-sm border border-border"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
