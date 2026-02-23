"use client";

import { useState } from "react";

const services = [
  "Website",
  "Web Application",
  "Startup MVP",
  "SaaS Product",
  "E-Commerce",
  "UI/UX Design",
  "Not Sure Yet",
];

const budgets = [
  "Under $1,000",
  "$1,000 – $5,000",
  "$5,000 – $15,000",
  "$15,000+",
];

export default function ContactCTA() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState("");
  const [form, setForm] = useState({ name: "", phone: "", email: "", detail: "" });
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (s: string) => {
    setSelectedServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="glow-red  w-[500px] h-[500px] top-0 left-0 -translate-x-1/4 -translate-y-1/4 opacity-18" />
      <div className="glow-blue w-[500px] h-[500px] bottom-0 right-0 translate-x-1/4 translate-y-1/4 opacity-18" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <div className="section-label w-fit">
              <span className="w-2 h-2 rounded-full gradient-bg inline-block" />
              Let's Build Together
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 mb-6 leading-tight">
              Tell Us About
              <br />
              <span className="gradient-text">Your Project</span>
            </h2>
            <p className="text-white/55 text-lg leading-relaxed mb-8">
              Drop us a message and we'll get back to you within a few hours.
              No sales pitch — just an honest conversation about what you're building.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  label: "Phone",
                  value: "+66-90-209-5813",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  label: "Email",
                  value: "support@koon10.com",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  label: "Location",
                  value: "Chiang mai, Thailand",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 p-4 rounded-xl bg-white/4 border border-white/8">
                  <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center text-white flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-white/40 text-xs mb-0.5">{item.label}</div>
                    <div className="text-white font-semibold text-sm">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              {/* <span className="text-white/40 text-sm">Find us on:</span>
              {["LINE", "Facebook", "LinkedIn", "GitHub"].map((s) => (
                <button
                  key={s}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 text-xs font-semibold transition-all"
                >
                  {s}
                </button>
              ))} */}
            </div>
          </div>

          {/* Right: Form */}
          <div className="p-[1px] rounded-2xl bg-gradient-to-br from-[#F11712]/30 via-[#9B4FE8]/30 to-[#0099F7]/30">
            <div className="bg-[#111] rounded-2xl p-7">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-white text-xl font-bold mb-2">Got it!</h3>
                  <p className="text-white/50">We'll be in touch within a few hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-white font-bold text-xl mb-1">Start a Project</h3>
                    <p className="text-white/40 text-sm">Tell us what you're building and we'll take it from there.</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-white/50 text-xs mb-1.5 block font-semibold">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Smith"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-white/30 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-white/50 text-xs mb-1.5 block font-semibold">Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-white/30 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-white/50 text-xs mb-2 block font-semibold">What are you building?</label>
                    <div className="flex flex-wrap gap-2">
                      {services.map((s) => (
                        <button
                          type="button"
                          key={s}
                          onClick={() => toggleService(s)}
                          className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                            selectedServices.includes(s)
                              ? "gradient-bg text-white border-transparent"
                              : "bg-white/5 border-white/10 text-white/50 hover:text-white"
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-white/50 text-xs mb-2 block font-semibold">Budget Range</label>
                    <div className="grid grid-cols-2 gap-2">
                      {budgets.map((b) => (
                        <button
                          type="button"
                          key={b}
                          onClick={() => setSelectedBudget(b)}
                          className={`px-3 py-2.5 rounded-xl text-xs font-semibold border transition-all text-left ${
                            selectedBudget === b
                              ? "gradient-bg text-white border-transparent"
                              : "bg-white/5 border-white/10 text-white/50 hover:text-white"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-white/50 text-xs mb-1.5 block font-semibold">Tell us more</label>
                    <textarea
                      rows={3}
                      placeholder="What's the problem you're solving? What stage are you at?"
                      value={form.detail}
                      onChange={(e) => setForm({ ...form, detail: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-white/30 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl gradient-bg-animated text-white font-bold text-base hover:opacity-90 transition-opacity shadow-lg shadow-red-500/20"
                  >
                    Send Message →
                  </button>

                  <p className="text-white/25 text-xs text-center">
                    No spam. We'll reply within a few hours.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
