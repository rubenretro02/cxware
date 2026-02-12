import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicePageContent from "@/components/ServicePageContent";
import { getServiceBySlug, services } from "@/lib/services";

export function generateStaticParams() {
  return services.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} - CXware Agent Solutions`,
    description: service.heroSubtitle + ". " + service.description.slice(0, 120),
  };
}

export default async function ServicePage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Header />
      <ServicePageContent service={service} />
      <Footer />
    </main>
  );
}
