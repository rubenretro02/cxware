import ServicePageTemplate from "@/components/ServicePageTemplate";

const data = {
  breadcrumb: "24/7 Help Desk",
  label: "Solution",
  title: "24/7",
  titleHighlight: "Help Desk",
  subtitle: "Round-the-clock technical support and issue resolution",
  stats: [
    { value: "24/7", label: "Always On" },
    { value: "<2min", label: "Avg Response Time" },
    { value: "95%+", label: "Resolution Rate" },
    { value: "50%", label: "Cost Savings" },
  ],
  overviewTitle: "Round-the-clock technical support and issue resolution",
  overviewText: "Your customers don't stop needing help at 5pm. CXware's 24/7 help desk ensures your business is always available with trained agents ready to resolve technical issues, answer product questions, and provide expert support at any hour. Whether it's a weekend, holiday, or 3am, your customers get the same high-quality experience every time they reach out.",
  capabilities: [
    { title: "Always-On Coverage", description: "True 24/7/365 coverage with trained agents available across all time zones and holidays." },
    { title: "Tiered Support", description: "Multi-tier support model with Level 1 through Level 3 agents to handle everything from basic queries to complex technical issues." },
    { title: "Ticket Management", description: "Full ticket lifecycle management with escalation paths, SLA tracking, and resolution documentation." },
    { title: "Knowledge Base Integration", description: "Agents leverage your existing knowledge base and documentation for consistent, accurate responses." },
  ],
  benefits: [
    "Never miss a customer inquiry with 24/7/365 availability",
    "Reduce wait times with agents always standing by",
    "Cut support costs by up to 50% vs. in-house night shifts",
    "Improve customer satisfaction with fast resolution times",
    "Scale coverage for product launches and peak periods",
    "Maintain consistent quality across all shifts and time zones",
  ],
  useCases: [
    { text: "After-hours and overnight technical support" },
    { text: "Weekend and holiday customer assistance" },
    { text: "IT help desk and troubleshooting" },
    { text: "Escalation management and follow-up" },
    { text: "Emergency response and critical issue handling" },
  ],
  relatedServices: [
    { title: "Call Center Outsourcing", type: "Solution", description: "Scale your contact center operations without the overhead", href: "/services/call-center-outsourcing" },
    { title: "Customer Service Outsourcing", type: "Solution", description: "Deliver exceptional customer experiences at scale", href: "/services/customer-service-outsourcing" },
    { title: "Live Chat Support", type: "Solution", description: "Respond to customers in real time via web chat", href: "/services/live-chat-support" },
    { title: "Tax Support", type: "Solution", description: "Expert seasonal tax support agents ready when you need them", href: "/services/tax-support" },
  ],
  ctaTitle: "Get 24/7 Support Coverage",
  ctaText: "Ensure your customers always have someone to turn to. Launch your help desk with CXware.",
};

export default function HelpDeskPage() {
  return <ServicePageTemplate data={data} />;
}
