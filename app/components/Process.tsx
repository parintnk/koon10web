const steps = [
  {
    step: "01",
    title: "Discovery Pulse",
    description:
      "Stakeholder interviews, brand immersion, and competitor scans give us the context to define what success needs to feel like.",
    duration: "Days 1–2",
    deliverables: [
      "Project brief with goals, guardrails, and risks",
      "Shared Notion HQ containing the live timeline & owners",
    ],
    touchpoint:
      "45-minute kickoff workshop + Loom recap within 12 hours so every decision is documented.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Experience Blueprint",
    description:
      "We translate the brief into user journeys, moodboards, and prototype flows, so you can point at something tangible early.",
    duration: "Days 3–5",
    deliverables: [
      "Clickable low-fi prototype covering key paths",
      "UI direction board with interaction notes",
    ],
    touchpoint:
      "Async Loom walkthrough + live Figma file for unlimited comments until sign-off.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Build Sprints",
    description:
      "Engineers ship in weekly increments using modern React, Next.js, and performance budgets that keep things fast.",
    duration: "Weeks 1–3",
    deliverables: [
      "Staging link refreshed weekly with release notes",
      "Prioritized backlog + risk/decision log",
    ],
    touchpoint:
      "Twice-weekly Slack standups with screenshots plus a Monday ETA email for the upcoming sprint.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Quality Proof",
    description:
      "Performance, accessibility, and device coverage get validated with reproducible evidence before launch is scheduled.",
    duration: "2–3 days",
    deliverables: [
      "Cross-browser/user-agent QA sheet",
      "Accessibility + performance report with fixes",
    ],
    touchpoint:
      "Recorded test sessions + checklist sign-off shared in the status board for total visibility.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    step: "05",
    title: "Launch & Coaching",
    description:
      "Deploy, measure, and train. We stay close after go-live to tweak, coach, and make sure nothing falls through.",
    duration: "Ongoing",
    deliverables: [
      "Go-live runbook + DNS/analytics checklist",
      "Training videos + 14-day optimization log",
    ],
    touchpoint:
      "Launch-day war room chat (<30 min response) plus a scheduled retrospective call.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="glow-blue w-[500px] h-[500px] top-1/2 left-0 -translate-x-1/3 -translate-y-1/2 opacity-12" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-12 items-start">
          <div className="text-center lg:text-left">
            <div className="section-label mx-auto lg:mx-0 w-fit">
              <span className="w-2 h-2 rounded-full gradient-bg inline-block" />
              Our Process
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 mb-5">
              Every milestone is documented.
              <br />
              <span className="gradient-text">You always know the next move.</span>
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto lg:mx-0">
              We map each phase to deliverables, owners, and check-ins. No mystery emails, no vague promises — just a live plan you can trust.
            </p>

            <div className="mt-10 grid gap-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 text-left">
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">Status hub</p>
                <p className="text-white mt-3 text-base leading-relaxed">
                  Shared Notion workspace with gantt-style timeline, owners, and decision logs updated daily.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-3xl border border-white/10 bg-[#080808]/60 p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">Communication rhythm</p>
                  <p className="text-white/70 text-sm leading-relaxed mt-3">
                    Weekly live touchpoints, async Loom recaps, and Slack updates whenever something ships.
                  </p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-[#080808]/60 p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">Escalation ready</p>
                  <p className="text-white/70 text-sm leading-relaxed mt-3">
                    Dedicated channel monitored by product + engineering leads so blockers never wait a day.
                  </p>
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">Average response time</p>
                  <p className="text-white/70 text-sm mt-2">
                    Questions get a thoughtful response within 24 hours (often sooner) including weekends during launch.
                  </p>
                </div>
                <div className="text-4xl font-extrabold gradient-text">&lt; 24h</div>
              </div>
            </div>
          </div>

          <div>
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={step.step} className="flex gap-6 items-stretch">
                  <div className="flex flex-col items-center min-w-[3rem]">
                    <div className="w-12 h-12 rounded-full border border-white/20 bg-[#080808] text-white/70 text-xs font-semibold tracking-[0.2em] flex items-center justify-center">
                      {step.step}
                    </div>
                    {index !== steps.length - 1 && <div className="w-px flex-1 bg-white/10 mt-2" />}
                  </div>

                  <div className="flex-1">
                    <div className="rounded-3xl border border-white/10 bg-[#080808]/60 p-6 sm:p-8 backdrop-blur-sm shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-white/50">
                            <span className="px-3 py-1 rounded-full border border-white/15 bg-white/5 text-white/60">
                              Step {step.step}
                            </span>
                            <span className="px-2 py-1 rounded-full border border-white/10 text-white/60 tracking-normal">
                              {step.duration}
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold text-white mt-4">{step.title}</h3>
                          <p className="text-white/60 text-sm mt-2 leading-relaxed">{step.description}</p>
                        </div>
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl gradient-bg-animated flex items-center justify-center text-white shadow-lg shadow-red-500/20">
                          {step.icon}
                        </div>
                      </div>

                      <div className="mt-6 border-t border-white/10 pt-6 grid gap-5 sm:grid-cols-2">
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.3em] text-white/50">Handovers</p>
                          <ul className="mt-3 space-y-2 text-sm text-white/70">
                            {step.deliverables.map((item) => (
                              <li key={item} className="flex gap-2">
                                <span className="mt-2 w-1.5 h-1.5 rounded-full gradient-bg inline-block" />
                                <span className="flex-1 leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.3em] text-white/50">How we update you</p>
                          <p className="text-white/70 text-sm leading-relaxed mt-3">{step.touchpoint}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
