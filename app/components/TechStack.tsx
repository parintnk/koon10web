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
    <section className="relative py-28 overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-[#050505]" aria-hidden />
      <div className="absolute inset-0 bg-grid opacity-25" aria-hidden />
      <div
        className="absolute inset-x-0 -top-[320px] h-[720px] bg-[radial-gradient(circle,_rgba(155,79,232,0.25),_transparent_70%)] opacity-70"
        aria-hidden
      />
      <div className="glow-blue w-[520px] h-[520px] -top-1/4 left-1/2 -translate-x-1/2 opacity-25" aria-hidden />
      <div className="glow-red w-[460px] h-[460px] bottom-0 right-0 translate-x-1/4 translate-y-1/4 opacity-25" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 h-[300px] bg-gradient-to-t from-black via-black/60 to-transparent opacity-80" aria-hidden />
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" aria-hidden />
      <div className="absolute left-[10%] top-[25%] w-56 h-56 rounded-full border border-white/15 opacity-40 rotate-6" aria-hidden />
      <div className="absolute right-[12%] top-[15%] w-64 h-64 rounded-full border border-white/10 opacity-30 -rotate-6" aria-hidden />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 px-4 py-6 sm:px-10 sm:py-10 backdrop-blur-2xl">
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,153,247,0.15),_transparent_65%)]"
            aria-hidden
          />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent" aria-hidden />
          <div className="absolute -top-20 -right-16 w-72 h-72 rounded-full border border-white/5 opacity-40" aria-hidden />
          <div className="absolute -bottom-24 -left-8 w-64 h-64 rounded-full border border-white/5 opacity-30" aria-hidden />

          <div className="relative flex flex-wrap justify-center gap-3">
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
      </div>
    </section>
  );
}
