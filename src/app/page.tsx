import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import HowItWorks from "@/components/HowItWorks";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import WhyCXware from "@/components/WhyCXware";
import ExpertAgents from "@/components/ExpertAgents";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <Stats />
      <Services />
      <WhyCXware />
      <ExpertAgents />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
