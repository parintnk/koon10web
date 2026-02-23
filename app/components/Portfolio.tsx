import Image from "next/image";

const BASE = "https://yeswebdesignstudio.com/wp-content/uploads/2025/11";
const BASE2 = "https://yeswebdesignstudio.com/wp-content/uploads/2024/11";

const projects = [
  {
    image: `${BASE}/gallery1-5.jpg`,
    title: "E-Commerce Platform",
    category: "E-Commerce",
    result: "+280% Sales",
  },
  {
    image: `${BASE}/gallery2-3.jpg`,
    title: "Corporate Website",
    category: "Corporate",
    result: "+150% Leads",
  },
  {
    image: `${BASE}/gallery3-3.jpg`,
    title: "Healthcare App",
    category: "Web App",
    result: "40K+ Users",
  },
  {
    image: `${BASE}/gallery4-3.jpg`,
    title: "Restaurant Chain",
    category: "Landing Page",
    result: "+320% Bookings",
  },
  {
    image: `${BASE}/gallery5-3.jpg`,
    title: "EdTech Platform",
    category: "Web App",
    result: "120K+ Students",
  },
  {
    image: `${BASE}/gallery6-3.jpg`,
    title: "Fintech Dashboard",
    category: "Web App",
    result: "500+ Companies",
  },
];

// Extra showcase row using Frame images
const showcaseImages = [
  { src: `${BASE2}/Frame-1000006196.webp`, alt: "Project showcase 1" },
  { src: `${BASE2}/Frame-1000006197.webp`, alt: "Project showcase 2" },
  { src: `${BASE2}/Frame-1000006198.webp`, alt: "Project showcase 3" },
  { src: `${BASE2}/Frame-1000006199.webp`, alt: "Project showcase 4" },
];

const filters = ["All", "Corporate", "E-Commerce", "Landing Page", "Web App"];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 lg:py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="glow-red w-[400px] h-[400px] top-0 right-0 translate-x-1/4 -translate-y-1/4 opacity-12" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="section-label mx-auto w-fit">
            <span className="w-2 h-2 rounded-full gradient-bg inline-block" />
            Our Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 mb-5">
            Work We're{" "}
            <span className="gradient-text">Proud Of</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Real projects. Real results. Every site built to drive business growth.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter, i) => (
            <button
              key={filter}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                i === 0
                  ? "gradient-bg text-white shadow-lg shadow-red-500/20"
                  : "bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="gradient-border-card overflow-hidden card-hover group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-[#080808]/0 group-hover:bg-[#080808]/40 transition-all duration-300" />

                {/* Badges */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white text-xs font-semibold border border-white/20">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white text-xs font-bold border border-white/20">
                    {project.result}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex items-center justify-between">
                <h3 className="text-white font-bold text-base">{project.title}</h3>
                <svg
                  className="w-5 h-5 text-white/30 group-hover:text-white/70 group-hover:translate-x-1 transition-all"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Showcase strip — Frame images */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {showcaseImages.map((img) => (
            <div key={img.src} className="relative rounded-xl overflow-hidden border border-white/8 card-hover aspect-video">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>

        {/* View more */}
        <div className="text-center">
          <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/15 text-white/70 font-semibold hover:bg-white/5 hover:border-white/30 transition-all">
            View All Projects
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
