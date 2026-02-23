import Image from "next/image";

const BASE = "https://yeswebdesignstudio.com/wp-content/uploads/2025/11";

const logos = [
  `${BASE}/client-logo1-1.webp`,
  `${BASE}/client-logo2-1.webp`,
  `${BASE}/client-logo3-1.webp`,
  `${BASE}/client-logo4-1.webp`,
  `${BASE}/client-logo5-1.webp`,
  `${BASE}/client-logo6-1.webp`,
  `${BASE}/client-logo7-1.webp`,
  `${BASE}/client-logo8-1.webp`,
  `${BASE}/client-logo9-1.webp`,
  `${BASE}/client-logo10-1.webp`,
  `${BASE}/client-logo11-1.webp`,
  `${BASE}/client-logo12-1.webp`,
  `${BASE}/client-logo13-1.webp`,
  `${BASE}/client-logo14-1.webp`,
  `${BASE}/client-logo15-1.webp`,
  `${BASE}/client-logo16-1.webp`,
  `${BASE}/client-logo17-1.webp`,
  `${BASE}/client-logo18-1.webp`,
  `${BASE}/client-logo19-1.webp`,
  `${BASE}/client-logo20-1.webp`,
  `${BASE}/client-logo21-1.webp`,
];

/* Duplicate for seamless loop */
const allLogos = [...logos, ...logos];

export default function ClientLogos() {
  return (
    <section className="py-14 border-y border-white/5 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <p className="text-center text-white/30 text-sm font-semibold uppercase tracking-widest">
          Trusted by 300+ businesses
        </p>
      </div>

      {/* Scrolling marquee */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee gap-10 w-max">
          {allLogos.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-28 h-10 relative opacity-50 hover:opacity-90 transition-opacity duration-300"
              style={{ mixBlendMode: "screen" }}
            >
              <Image
                src={src}
                alt={`Client logo ${(i % logos.length) + 1}`}
                fill
                className="object-contain"
                sizes="112px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
