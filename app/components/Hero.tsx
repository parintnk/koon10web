const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "300+", label: "Happy Clients" },
  { value: "10+", label: "Years Experience" },
  { value: "98%", label: "Satisfaction Rate" },
];

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">

      {/* Full-bleed YouTube background */}
      <div className="absolute inset-0 z-0 bg-black overflow-hidden">
        <iframe
          className="yt-bg"
          src="https://www.youtube.com/embed/xNX0cVKXAkE?autoplay=1&mute=1&loop=1&playlist=xNX0cVKXAkE&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&disablekb=1&iv_load_policy=3"
          allow="autoplay; encrypted-media"
          title="Background video"
        />
        <div className="absolute inset-0 bg-[#080808]/72" />
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="glow-red  w-[700px] h-[700px] -top-48 -left-48 opacity-30" />
        <div className="glow-blue w-[600px] h-[600px] -bottom-32 -right-32 opacity-25" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">

          <div className="section-label mx-auto w-fit mb-6 mt-16">
            <span className="w-2 h-2 rounded-full gradient-bg inline-block" />
            Web &amp; App Development Studio
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.08] tracking-tight mb-6">
            <span className="text-white">We Build Websites,</span>
            <br />
            <span className="text-white">Web Apps &amp;</span>
            <br />
            <span className="gradient-text">Startup Products</span>
          </h1>

          <p className="text-white/65 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            From landing pages to full-scale web applications and startup MVPs —
            we turn your idea into a real, working digital product.
            No agency fluff. Just clean code and great products.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#contact"
              className="w-full sm:w-auto px-9 py-4 rounded-full gradient-bg-animated text-white font-bold text-base shadow-2xl shadow-red-500/30 hover:opacity-90 transition-all hover:scale-105 active:scale-95"
            >
              Start Building →
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto px-9 py-4 rounded-full border border-white/20 text-white/85 font-semibold text-base hover:bg-white/8 hover:border-white/35 transition-all backdrop-blur-sm"
            >
              What We Build
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/8 rounded-2xl overflow-hidden">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-[#080808]/70 backdrop-blur-md px-4 py-6 flex flex-col items-center gap-1.5 hover:bg-[#080808]/90 transition-colors"
              >
                <span className="text-3xl sm:text-4xl font-extrabold gradient-text">{stat.value}</span>
                <span className="text-white/45 text-xs sm:text-sm text-center leading-tight">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#080808] to-transparent z-10 pointer-events-none" />
    </section>
  );
}
