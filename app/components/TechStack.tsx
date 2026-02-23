const technologies = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Framework" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Redis", category: "Cache" },
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "Figma", category: "Design" },
  { name: "WordPress", category: "CMS" },
  { name: "Shopify", category: "E-Commerce" },
  { name: "Stripe", category: "Payment" },
  { name: "Firebase", category: "Backend" },
  { name: "Vercel", category: "Deploy" },
  { name: "Cloudflare", category: "CDN" },
];

export default function TechStack() {
  return (
    <section className="py-20 bg-[#080808] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="section-label mx-auto w-fit">
            <span className="w-2 h-2 rounded-full gradient-bg inline-block" />
            Technology Stack
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-4">
            World-Class <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-white/45 mt-3 max-w-md mx-auto text-sm">
            We use the best modern tools to build fast, secure, and scalable digital products.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#111] border border-white/8 hover:border-white/20 transition-all cursor-default card-hover"
            >
              <div className="w-2 h-2 rounded-full gradient-bg group-hover:scale-125 transition-transform" />
              <span className="text-white/65 group-hover:text-white text-sm font-semibold transition-colors">
                {tech.name}
              </span>
              <span className="text-white/25 text-xs">{tech.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
