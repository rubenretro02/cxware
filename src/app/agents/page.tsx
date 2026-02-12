import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AgentsHero from "@/components/agents/AgentsHero";
import WhyJoin from "@/components/agents/WhyJoin";
import HowToStart from "@/components/agents/HowToStart";
import WhatYouDo from "@/components/agents/WhatYouDo";
import AgentTestimonials from "@/components/agents/AgentTestimonials";
import Requirements from "@/components/agents/Requirements";
import AgentFAQ from "@/components/agents/AgentFAQ";
import AgentCTA from "@/components/agents/AgentCTA";

export const metadata = {
  title: "Become an Agent | CXware Agent Solutions",
  description: "Start your remote career with CXware. Work from home, choose your schedule, and earn competitive pay as an independent contractor.",
};

export default function AgentsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AgentsHero />
      <WhyJoin />
      <HowToStart />
      <WhatYouDo />
      <AgentTestimonials />
      <Requirements />
      <AgentFAQ />
      <AgentCTA />
      <Footer />
    </main>
  );
}
