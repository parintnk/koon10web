import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Web & App Development Studio | Koon10",
  description:
    "Koon10 — We build websites, web applications, and startup products. From idea to launch, we turn your vision into a real digital product.",
  keywords: "web development, web application, startup, MVP, SaaS, e-commerce, Koon10, Thailand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
