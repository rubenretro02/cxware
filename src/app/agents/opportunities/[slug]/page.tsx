import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OpportunityPageContent from "@/components/agents/OpportunityPageContent";
import { getOpportunityBySlug, opportunities } from "@/lib/opportunities";

export function generateStaticParams() {
  return opportunities.map((opp) => ({
    slug: opp.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const opportunity = getOpportunityBySlug(params.slug);
  if (!opportunity) return { title: "Opportunity Not Found" };

  return {
    title: `${opportunity.title} - Remote Opportunities | CXware Agent Solutions`,
    description: opportunity.description.slice(0, 160),
  };
}

export default function OpportunityPage({ params }: { params: { slug: string } }) {
  const opportunity = getOpportunityBySlug(params.slug);

  if (!opportunity) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Header />
      <OpportunityPageContent opportunity={opportunity} />
      <Footer />
    </main>
  );
}
