import Image from "next/image";

const BASE = "https://yeswebdesignstudio.com/wp-content/uploads";

const services = [
  {
    icon: `${BASE}/2025/11/fi_18522004-1.svg`,
    title: "Website Development",
    description:
      "Corporate sites, landing pages, and marketing websites built fast and clean. Optimized for performance, SEO, and conversion from day one.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    gradient: "from-[#F11712] to-[#FF6B6B]",
  },
  {
    icon: `${BASE}/2025/11/fi_15047576-1.svg`,
    title: "Web Application",
    description:
      "Custom web apps with real functionality — dashboards, booking systems, CRMs, portals, and anything that needs a backend and database.",
    tags: ["React", "Node.js", "PostgreSQL"],
    gradient: "from-[#9B4FE8] to-[#6366F1]",
  },
  {
    icon: `${BASE}/2025/11/fi_3128208-1.svg`,
    title: "Startup MVP",
    description:
      "Got an idea? We'll help you build a lean, working MVP fast so you can validate, raise funding, or start acquiring users — without burning time.",
    tags: ["MVP", "Product Strategy", "Fast Launch"],
    gradient: "from-[#0099F7] to-[#2452FD]",
  },
  {
    icon: `${BASE}/2025/11/fi_51812.svg`,
    title: "E-Commerce",
    description:
      "Full-featured online stores with smooth checkout, inventory management, and payment integration. Built to sell from day one.",
    tags: ["WooCommerce", "Shopify", "Stripe"],
    gradient: "from-[#F11712] to-[#FF9500]",
  },
  {
    icon: `${BASE}/2025/11/fi_9001771-1.svg`,
    title: "SaaS Product",
    description:
      "End-to-end SaaS development — subscription billing, user auth, multi-tenancy, admin panels, and all the infrastructure you need to scale.",
    tags: ["SaaS", "Auth", "Billing"],
    gradient: "from-[#9B4FE8] to-[#F11712]",
  },
  {
    icon: `${BASE}/2025/11/fi_483921.svg`,
    title: "UI/UX Design",
    description:
      "Clean, modern interfaces that users actually enjoy. We design in Figma and hand off pixel-perfect specs — or build it ourselves.",
    tags: ["Figma", "UI/UX", "Prototyping"],
    gradient: "from-[#0099F7] to-[#9B4FE8]",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="glow-purple w-[500px] h-[500px] top-1/2 right-0 translate-x-1/4 -translate-y-1/2 opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="section-label mx-auto w-fit">
            <span className="w-2 h-2 rounded-full gradient-bg inline-block" />
            What We Build
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 mb-5 leading-tight">
            We Build Digital Products,
            <br />
            <span className="gradient-text">Not Just Websites</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto leading-relaxed">
            From a simple landing page to a full SaaS platform — we scope it, design it, and ship it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="gradient-border-card p-6 card-hover group cursor-pointer"
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300 overflow-hidden p-3`}
              >
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={32}
                  height={32}
                  className="object-contain invert"
                />
              </div>

              <h3 className="text-white font-bold text-xl mb-3">{service.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed mb-5">{service.description}</p>

              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 text-xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-1.5 text-white/30 group-hover:text-white/70 transition-colors text-sm font-semibold">
                Learn more
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
