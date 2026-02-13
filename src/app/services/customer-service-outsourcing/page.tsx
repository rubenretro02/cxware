import ServicePageTemplate from "@/components/ServicePageTemplate";

const data = {
  breadcrumb: "Customer Service Outsourcing",
  label: "Solution",
  title: "Customer Service",
  titleHighlight: "Outsourcing",
  subtitle: "Deliver exceptional customer experiences at scale",
  stats: [
    { value: "15-25%", label: "CSAT Improvement" },
    { value: "90%+", label: "First Contact Resolution" },
    { value: "4.8/5", label: "Average Quality Rating" },
    { value: "200K+", label: "Available Agents" },
  ],
  overviewTitle: "Deliver exceptional customer experiences at scale",
  overviewText: "Your customers deserve the best support experience every time they reach out. CXware's customer service outsourcing connects your brand with expert remote agents who provide empathetic, efficient, and brand-aligned support across every channel. From first contact resolution to complex escalations, our agents handle it all while maintaining the highest quality standards.",
  capabilities: [
    { title: "Omnichannel Support", description: "Seamless support across phone, email, live chat, and social media from a unified agent experience." },
    { title: "Brand-Aligned Training", description: "Every agent completes comprehensive certification on your brand voice, products, and processes before going live." },
    { title: "Performance Analytics", description: "Real-time dashboards track CSAT, FCR, AHT, and custom KPIs to ensure continuous improvement." },
    { title: "Dedicated Account Management", description: "A dedicated team monitors performance, handles escalations, and optimizes your program continuously." },
  ],
  benefits: [
    "Improve CSAT scores by 15-25% with expert agents",
    "Achieve 90%+ first contact resolution rates",
    "Reduce average handle time while improving quality",
    "Eliminate hiring, training, and retention headaches",
    "Scale seasonally without long-term staffing commitments",
    "Access multilingual support capabilities",
  ],
  useCases: [
    { text: "Full-service customer support programs" },
    { text: "Seasonal and surge coverage support" },
    { text: "After-hours and weekend customer service" },
    { text: "Multilingual customer support teams" },
    { text: "Customer retention and loyalty programs" },
  ],
  relatedServices: [
    { title: "Call Center Outsourcing", type: "Solution", description: "Scale your contact center operations without the overhead", href: "/services/call-center-outsourcing" },
    { title: "Live Chat Support", type: "Solution", description: "Respond to customers in real time via web chat", href: "/services/live-chat-support" },
    { title: "24/7 Help Desk", type: "Solution", description: "Round-the-clock technical support and issue resolution", href: "/services/24-7-help-desk" },
    { title: "Tax Support", type: "Solution", description: "Expert seasonal tax support agents ready when you need them", href: "/services/tax-support" },
  ],
  ctaTitle: "Elevate Your Customer Experience",
  ctaText: "Let CXware connect you with top-tier agents who deliver exceptional service at a fraction of the cost.",
};

export default function CustomerServiceOutsourcingPage() {
  return <ServicePageTemplate data={data} />;
}
