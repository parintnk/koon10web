"use client";

import { useState } from "react";

const plans = [
  {
    name: "Starter",
    nameTH: "เริ่มต้น",
    monthly: 15000,
    yearly: 12000,
    description: "เหมาะสำหรับธุรกิจ SME ที่ต้องการเว็บไซต์สวยงาม มืออาชีพ",
    features: [
      "เว็บไซต์สูงสุด 8 หน้า",
      "Responsive Design (Mobile-friendly)",
      "SSL Certificate ฟรี",
      "ติดตั้ง Google Analytics",
      "ฟอร์มติดต่อ",
      "SEO พื้นฐาน",
      "Support 1 เดือนหลังส่งมอบ",
      "ระยะเวลา 2–3 สัปดาห์",
    ],
    cta: "เริ่มต้นเลย",
    popular: false,
    gradient: "from-[#1a1a1a] to-[#1a1a1a]",
    accent: "from-white/10 to-white/5",
  },
  {
    name: "Pro",
    nameTH: "มืออาชีพ",
    monthly: 35000,
    yearly: 28000,
    description: "สำหรับธุรกิจที่ต้องการเว็บไซต์ครบครัน พร้อมระบบ E-Commerce",
    features: [
      "เว็บไซต์ไม่จำกัดหน้า",
      "Custom UI/UX Design",
      "ระบบ E-Commerce ครบครัน",
      "ระบบชำระเงินออนไลน์",
      "SEO On-Page ครบถ้วน",
      "ระบบ CMS บริหารจัดการง่าย",
      "Speed Optimization",
      "Support 3 เดือนหลังส่งมอบ",
      "ระยะเวลา 4–6 สัปดาห์",
    ],
    cta: "เลือกแพ็กเกจนี้",
    popular: true,
    gradient: "from-[#F11712] via-[#9B4FE8] to-[#0099F7]",
    accent: "from-[#F11712]/20 to-[#0099F7]/20",
  },
  {
    name: "Enterprise",
    nameTH: "องค์กร",
    monthly: null,
    yearly: null,
    description: "สำหรับองค์กรขนาดใหญ่ที่ต้องการโซลูชันเฉพาะทาง",
    features: [
      "ทุกอย่างใน Pro",
      "Custom Features & Integrations",
      "API Development",
      "Multi-language Support",
      "Advanced Security",
      "Priority Support 24/7",
      "Dedicated Project Manager",
      "SLA 99.9% Uptime",
      "ฝึกอบรมทีม",
    ],
    cta: "ติดต่อรับราคา",
    popular: false,
    gradient: "from-[#1a1a1a] to-[#1a1a1a]",
    accent: "from-white/10 to-white/5",
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const formatPrice = (price: number | null) => {
    if (price === null) return null;
    return price.toLocaleString("th-TH");
  };

  return (
    <section id="pricing" className="relative py-24 lg:py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="glow-purple w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="section-label mx-auto w-fit">
            <span className="w-2 h-2 rounded-full gradient-bg inline-block" />
            ราคาและแพ็กเกจ
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 mb-5">
            ราคา<span className="gradient-text">ชัดเจน</span>
            <br />
            ไม่มีค่าใช้จ่ายซ่อนเร้น
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto mb-8">
            เลือกแพ็กเกจที่เหมาะกับธุรกิจของคุณ หรือติดต่อเพื่อรับราคาเฉพาะทาง
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-3 bg-[#111] border border-white/10 rounded-full p-1">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                !isYearly ? "gradient-bg text-white shadow-lg" : "text-white/50 hover:text-white"
              }`}
            >
              รายโปรเจกต์
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                isYearly ? "gradient-bg text-white shadow-lg" : "text-white/50 hover:text-white"
              }`}
            >
              รายปี{" "}
              <span className={`text-xs ${isYearly ? "text-white/80" : "text-green-400"}`}>
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative ${plan.popular ? "md:-mt-4 md:mb-4" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <span className="px-5 py-1.5 rounded-full gradient-bg text-white text-xs font-bold shadow-lg shadow-red-500/30 whitespace-nowrap">
                    ยอดนิยมที่สุด ⭐
                  </span>
                </div>
              )}

              {/* Wrapper for gradient border on popular */}
              <div
                className={
                  plan.popular
                    ? "p-[1px] rounded-2xl bg-gradient-to-br from-[#F11712] via-[#9B4FE8] to-[#0099F7] shadow-2xl shadow-purple-500/20"
                    : ""
                }
              >
                <div className="bg-[#111] rounded-2xl p-7 h-full">
                  {/* Plan header */}
                  <div className="mb-6">
                    <h3 className="text-white font-bold text-xl">{plan.nameTH}</h3>
                    <p className="text-sm text-white/50 mt-0.5">{plan.name}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    {plan.monthly !== null ? (
                      <div className="flex items-end gap-2">
                        <span className="text-4xl font-extrabold text-white">
                          ฿{formatPrice(isYearly ? plan.yearly : plan.monthly)}
                        </span>
                        <span className="text-white/40 text-sm mb-1">/โปรเจกต์</span>
                      </div>
                    ) : (
                      <div className="text-3xl font-extrabold gradient-text">ราคาพิเศษ</div>
                    )}
                    <p className="text-white/45 text-sm mt-2">{plan.description}</p>
                  </div>

                  {/* CTA */}
                  <a
                    href="#contact"
                    className={`w-full flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-sm transition-all mb-7 ${
                      plan.popular
                        ? "gradient-bg text-white hover:opacity-90 shadow-lg shadow-red-500/25"
                        : "bg-white/8 border border-white/10 text-white hover:bg-white/12"
                    }`}
                  >
                    {plan.cta}
                  </a>

                  {/* Divider */}
                  <div className="border-t border-white/8 mb-6" />

                  {/* Features */}
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <svg
                          className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.popular ? "text-[#9B4FE8]" : "text-white/40"}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-white/65 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-white/30 text-sm mt-10">
          ราคายังไม่รวม VAT 7% • สอบถามเพิ่มเติมได้ทุกวัน 09:00 – 18:00 น.
        </p>
      </div>
    </section>
  );
}
