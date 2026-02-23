import Image from "next/image";

const BASE = "https://yeswebdesignstudio.com/wp-content/uploads/2025/11";

const testimonials = [
  {
    name: "Somchai Wongcharoen",
    role: "CEO",
    company: "ABC Retail Group",
    avatar: `${BASE}/1493a030b332a1ad096b3aba4b98416bf7ab26a9.jpg`,
    rating: 5,
    review:
      "YES Web Design transformed our online presence. Our e-commerce site now generates 280% more sales than our old one. The team understood our brand deeply and delivered beyond expectations.",
  },
  {
    name: "Wanna Sirichoke",
    role: "Marketing Director",
    company: "XYZ Brand Thailand",
    avatar: `${BASE}/641ab9073c8cb84313f3f7b9fc9cb639a5a04401.jpg`,
    rating: 5,
    review:
      "Incredibly professional team. They grasped exactly what we needed and our new site makes our brand look like a global company. Lead generation is up 150% in just two months.",
  },
  {
    name: "Pimjai Thongdee",
    role: "Founder",
    company: "PimJai Handmade",
    avatar: `${BASE}/794ff0f433eb0f4bbc4a4315d787392729addd49.jpg`,
    rating: 5,
    review:
      "As a first-time online seller, I was nervous. The YES team guided me through everything and trained me to manage my shop independently. Customers constantly compliment how beautiful it looks!",
  },
  {
    name: "Thanaphol Raksadee",
    role: "CTO",
    company: "HealthTech Startup",
    avatar: `${BASE}/fcb3ac8a3c4305df81e9c3a3823a6ba198ecb204.webp`,
    rating: 5,
    review:
      "We needed a complex platform with telemedicine features. YES delivered a technically flawless product with beautiful UX. Our app has 40,000+ active users and counting. Best investment we've made.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="glow-purple w-[500px] h-[500px] top-1/2 right-0 translate-x-1/4 -translate-y-1/2 opacity-12" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label mx-auto w-fit">
            <span className="w-2 h-2 rounded-full gradient-bg inline-block" />
            Client Stories
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 mb-5">
            300+ Clients Trust Us to
            <br />
            <span className="gradient-text">Grow Their Business</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Hear from the businesses we've helped dominate in the digital space.
          </p>
        </div>

        {/* Overall rating */}
        <div className="flex items-center justify-center gap-6 mb-14">
          <div className="text-center">
            <div className="text-5xl font-extrabold gradient-text">4.9</div>
            <StarRating count={5} />
            <div className="text-white/40 text-sm mt-1">From 300+ reviews</div>
          </div>
          <div className="w-px h-16 bg-white/10" />
          <div className="flex flex-col gap-1.5">
            {[
              { star: 5, pct: "92%" },
              { star: 4, pct: "6%" },
              { star: 3, pct: "2%" },
            ].map(({ star, pct }) => (
              <div key={star} className="flex items-center gap-2">
                <span className="text-white/40 text-xs w-3">{star}</span>
                <svg className="w-3 h-3 text-yellow-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <div className="w-24 h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full gradient-bg rounded-full" style={{ width: pct }} />
                </div>
                <span className="text-white/30 text-xs">{pct}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="gradient-border-card p-7 card-hover">
              <div className="mb-4">
                <StarRating count={t.rating} />
              </div>

              <p className="text-white/70 text-base leading-relaxed mb-6">
                &ldquo;{t.review}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full overflow-hidden border border-white/10 flex-shrink-0 relative">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="44px"
                  />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">{t.name}</div>
                  <div className="text-white/40 text-xs">
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
