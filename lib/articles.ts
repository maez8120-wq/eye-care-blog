export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  featured: boolean;
}

// You can manually add or modify articles here
export const articles: Article[] = [
  {
    id: "signs-child-needs-glasses",
    title: "The Sunburn Risk Many Australians Don't Realises",
    excerpt: "",
    content: `
      <p>We all know how to lather on sunscreen and pop a hat on the kids before a day outside. But it’s just as important to think about their eyes—because the sun can hurt them too.</p>

      <br>

      <p>Sunlight contains invisible ultraviolet (UV) rays that can bother and even injure the surface of the eye. When UV exposure is intense, this can lead to a condition similar to sunburn—but on the eyes instead of the skin. This can feel like grittiness, watering, soreness or being overly sensitive to bright light.</p>
      
      <br>

      <p>Kids often spend a lot of time outdoors laughing, running around or playing sport. They might not speak up when their eyes feel uncomfortable, so it's up to us as parents to make sure they're properly shielded from harmful rays.</p>
      
      <br>
      
      <p>In Australia, UV exposure can be strong even when it's not blazing hot or it's cloudy, and light can reflect off things like water, sand and concrete. Little eyes are more vulnerable to cumulative UV exposure over time, which can increase the risk of issues later in life—from glare sensitivity to more serious conditions that develop slowly with repeated sun exposure.
      </p>
      
      <br>
      
      <p>Eyecare Kids optometrist Dr Christine Do states, "You may not see the affects of sun damage straight away, but cumulative UV exposure can cause irreversible damage many years later including cataracts, cancers, pyteriums and macula degeneration."
      </p>     
      
    `,
    category: "Vision Health",
    author: "",
    date: "2026-03-30",
    readTime: "",
    featured: true,
  },
  {
    id: "screen-time-guidelines",
    title: "Choosing sunglasses that actually protect",
    excerpt: "",
    content: `
      <p className="mb-4">
        Not all sunglasses protect eyes equally. When you’re picking sunnies for the family, look for ones labelled under the Australian and New Zealand Standard with a <strong>lens category rating of 2, 3 or 4</strong>. Sunglasses in these categories meet the standard for good UV protection and help block a high level of harmful UV radiation.
      </p>

      <br>

      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>
          <strong>Category 2</strong> offers good protection for everyday outdoor activities.
        </li>
        <li>
          <strong>Category 3</strong> provides stronger protection and is ideal for bright conditions.
        </li>
        <li>
          <strong>Category 4</strong> offers very high protection but is not suitable for driving.
        </li>
      </ul>

      <br>

      <p>
        Wraparound styles and well-fitting frames help stop UV rays sneaking in around the edges, and pairing sunglasses with a broad-brimmed hat gives even better coverage.
      </p>
    `,
    category: "Eyewear",
    author: "",
    date: "2026-03-30",
    readTime: "",
    featured: true,
  },
  {
    id: "eye-safety-sports",
    title: "Everyday habits build better eye health",
    excerpt: "",
    content: `
      <p>Protecting children's eyes shouldn't be something you only think about on beach days or during summer holidays. Making quality sunglasses part of everyday life—for school drop-offs, sport, park visits and weekends outdoors—can help protect their eyesight long term.</p>

      <br>

      <p>If you're looking for sunglasses that meet these standards, Eyecare Kids has a wide range of options for both children and adults. We also have a special interest in customising sunglasses to suit individual prescriptions, so your family can enjoy clear vision and reliable UV protection every day.</p>
    `,
    category: "Vision Health",
    author: "",
    date: "2026-03-30",
    readTime: "",
    featured: false,
  }
];

export function getArticleById(id: string): Article | undefined {
  return articles.find(article => article.id === id);
}

export function getFeaturedArticles(): Article[] {
  return articles.filter(article => article.featured);
}

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter(article => article.category === category);
}

export function getAllCategories(): string[] {
  return [...new Set(articles.map(article => article.category))];
}
