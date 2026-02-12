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

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const opportunity = getOpportunityBySlug(slug);
  if (!opportunity) return { title: "Opportunity Not Found" };

  return {
    title: `${opportunity.title} - Remote Opportunities | CXware Agent Solutions`,
    description: opportunity.description.slice(0, 160),
  };
}

export default async function OpportunityPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  console.log("[v0] Rendering opportunity page for slug:", slug);
  const opportunity = getOpportunityBySlug(slug);

  if (!opportunity) {
    console.log("[v0] Opportunity not found for slug:", slug);
    notFound();
  }

  console.log("[v0] Found opportunity:", opportunity.title);

  return (
    <main className="min-h-screen">
      <Header />
      <OpportunityPageContent opportunity={opportunity} />
      <Footer />
    </main>
  );
}
