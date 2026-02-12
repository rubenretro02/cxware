import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OpportunitiesListing from "@/components/agents/OpportunitiesListing";

export const metadata = {
  title: "All Opportunities | CXware Agent Solutions",
  description:
    "Explore all remote customer service, sales, healthcare, and bilingual opportunities with CXware. Work from home, choose your schedule, and earn competitive pay.",
};

export default function OpportunitiesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <OpportunitiesListing />
      <Footer />
    </main>
  );
}
