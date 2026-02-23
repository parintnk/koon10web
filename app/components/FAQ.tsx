"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What kind of projects do you take on?",
    answer:
      "We work on websites, web applications, startup MVPs, SaaS products, e-commerce stores, and internal tools. If it runs in a browser and needs a real engineering team to build it, we can help.",
  },
  {
    question: "How long does it take to build a web application?",
    answer:
      "A simple website takes 2–3 weeks. A web app with backend and database typically takes 4–8 weeks. A full SaaS product or startup MVP with multiple features is usually 2–4 months. We'll give you a precise timeline after scoping.",
  },
  {
    question: "Do you take startup projects with limited budget?",
    answer:
      "Yes. We've worked with early-stage startups and understand that budget is tight before product-market fit. We help you prioritize the right features for an MVP and avoid over-building things you don't need yet.",
  },
  {
    question: "Can you join as a development partner, not just a vendor?",
    answer:
      "Absolutely. Many of our clients treat us as their tech team — we join Slack, attend standups, and stay involved past launch. We're open to long-term partnerships, not just one-off projects.",
  },
  {
    question: "What tech stack do you use?",
    answer:
      "Primarily React / Next.js on the frontend, Node.js or Python on the backend, and PostgreSQL or MongoDB for data. We also work with cloud infrastructure (AWS, GCP, Vercel) and can adapt to your existing stack if you have one.",
  },
  {
    question: "Will I own the code after the project?",
    answer:
      "Yes, 100%. All source code is yours from day one. We push to your GitHub repository and you have full access throughout the project. No lock-in, no holding code hostage.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. We offer post-launch support packages covering bug fixes, feature additions, infrastructure monitoring, and ongoing development. Many clients keep us on a monthly retainer as their ongoing dev team.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-24 lg:py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="glow-blue w-[400px] h-[400px] bottom-0 left-0 -translate-x-1/3 translate-y-1/3 opacity-12" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="section-label mx-auto w-fit">
            <span className="w-2 h-2 rounded-full gradient-bg inline-block" />
            FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 mb-5">
            Questions We Get
            <br />
            <span className="gradient-text">All The Time</span>
          </h2>
          <p className="text-white/50 text-lg">
            Can't find your answer? Just reach out — we're happy to chat.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`gradient-border-card overflow-hidden transition-all duration-300 ${
                openIndex === index ? "bg-[#161616]" : ""
              }`}
            >
              <button
                className="w-full flex items-center justify-between gap-4 p-6 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-white font-semibold text-base">{faq.question}</span>
                <div
                  className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300 ${
                    openIndex === index
                      ? "gradient-bg text-white rotate-45"
                      : "bg-white/8 text-white/50"
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="h-px bg-white/8 mb-4" />
                  <p className="text-white/60 text-base leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/45 mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full gradient-bg text-white font-bold hover:opacity-90 transition-opacity"
          >
            Talk to Our Team
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
