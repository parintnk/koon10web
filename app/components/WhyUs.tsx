import Image from "next/image";

const reasons = [
  {
    number: "01",
    title: "Developers, Not Account Managers",
    description:
      "You work directly with the people building your product. No middlemen, no briefing chains — just direct conversations with engineers and designers who care.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "We Think Like Founders",
    description:
      "We've built products ourselves. We understand scope creep, tight budgets, and launch pressure — so we help you prioritize what ships vs. what can wait.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Clean Code, Built to Last",
    description:
      "No WordPress bloat or template hacks. We write maintainable, documented code that your in-house team can take over anytime without a rewrite.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Fast Iterations, Real Feedback",
    description:
      "We ship in short sprints and show you working software early and often. You see progress every week, not just a reveal at the end of the project.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
];

export default function WhyUs() {
  return (
    <section id="whyus" className="relative py-24 lg:py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="glow-red w-[400px] h-[400px] bottom-0 left-0 -translate-x-1/4 translate-y-1/4 opacity-12" />
      <div className="glow-blue w-[400px] h-[400px] top-0 right-0 translate-x-1/4 -translate-y-1/4 opacity-12" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <div className="section-label w-fit">
              <span className="w-2 h-2 rounded-full gradient-bg inline-block" />
              Why Work With Us
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 mb-6 leading-tight">
              A Dev Studio That
              <br />
              Thinks About Your
              <br />
              <span className="gradient-text">Business, Not Billables</span>
            </h2>
            <p className="text-white/55 text-lg leading-relaxed mb-8">
              We're a small, focused team of developers and designers.
              We don't upsell retainers or pad timelines.
              We build what you need, ship it fast, and make sure it works.
            </p>

            <div className="rounded-2xl overflow-hidden border border-white/8 shadow-2xl shadow-black/40">
              <Image
                src="https://yeswebdesignstudio.com/wp-content/uploads/2025/03/390_314-1536x1237.png"
                alt="Koon10 — Our work"
                width={1536}
                height={1237}
                className="w-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason) => (
              <div key={reason.number} className="gradient-border-card p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center text-white flex-shrink-0">
                    {reason.icon}
                  </div>
                  <div>
                    <span className="text-xs font-bold gradient-text mb-1 block">{reason.number}</span>
                    <h3 className="text-white font-bold text-sm mb-2 leading-snug">{reason.title}</h3>
                    <p className="text-white/50 text-xs leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="sm:col-span-2 p-[1px] rounded-2xl gradient-bg">
              <div className="bg-[#111] rounded-2xl p-6 flex items-center justify-between gap-4">
                <div>
                  <p className="text-white font-bold text-base">Have an idea? Let's talk.</p>
                  <p className="text-white/45 text-sm">Free scoping call, no commitment.</p>
                </div>
                <a
                  href="#contact"
                  className="flex-shrink-0 px-6 py-3 rounded-xl gradient-bg text-white font-bold text-sm hover:opacity-90 transition-opacity"
                >
                  Book a Call →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
