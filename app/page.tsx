import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ClientLogos from "./components/ClientLogos";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Process from "./components/Process";
import TechStack from "./components/TechStack";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ClientLogos />
      <Services />
      <WhyUs />
      <Process />
      <TechStack />
      <Testimonials />
      <FAQ />
      <ContactCTA />
      <Footer />
    </main>
  );
}
