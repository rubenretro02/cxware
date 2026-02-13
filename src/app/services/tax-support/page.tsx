import ServicePageTemplate from "@/components/ServicePageTemplate";

const data = {
  breadcrumb: "Tax Support",
  label: "Solution",
  title: "Tax",
  titleHighlight: "Support",
  subtitle: "Expert seasonal tax support agents ready when you need them",
  stats: [
    { value: "3-5x", label: "Seasonal Scaling" },
    { value: "30 Days", label: "Ramp-Up Time" },
    { value: "98%+", label: "Accuracy Rate" },
    { value: "IRS", label: "Compliance Ready" },
  ],
  overviewTitle: "Expert seasonal tax support agents ready when you need them",
  overviewText: "Tax season demands surge staffing that traditional hiring can't deliver. CXware provides pre-certified tax support agents who can handle taxpayer inquiries, filing assistance, refund status checks, and general tax guidance. Scale up fast for tax season, then scale down when volume drops. No long-term commitments, no idle agents, just expert support when you need it.",
  capabilities: [
    { title: "Rapid Seasonal Scaling", description: "Scale from 10 to 1,000+ tax support agents in as little as 30 days for peak tax season demand." },
    { title: "Pre-Certified Agents", description: "Agents complete IRS-specific training and certification before handling any taxpayer interactions." },
    { title: "Compliance Assurance", description: "All agents trained on IRS guidelines, data privacy requirements, and secure handling of sensitive tax information." },
    { title: "Multi-Channel Support", description: "Handle tax inquiries via phone, chat, and email with consistent quality across all channels." },
  ],
  benefits: [
    "Scale 3-5x for tax season without permanent hiring",
    "Access pre-certified tax support agents in 30 days",
    "Maintain IRS compliance standards across all interactions",
    "Reduce cost per interaction vs. traditional seasonal staffing",
    "Handle taxpayer inquiries across phone, chat, and email",
    "Eliminate training overhead with ready-to-work agents",
  ],
  useCases: [
    { text: "Taxpayer inquiry and filing assistance" },
    { text: "Refund status checks and payment inquiries" },
    { text: "Tax document and form guidance" },
    { text: "Seasonal surge support for tax preparation companies" },
    { text: "IRS-compliant customer service for financial institutions" },
  ],
  relatedServices: [
    { title: "Call Center Outsourcing", type: "Solution", description: "Scale your contact center operations without the overhead", href: "/services/call-center-outsourcing" },
    { title: "Customer Service Outsourcing", type: "Solution", description: "Deliver exceptional customer experiences at scale", href: "/services/customer-service-outsourcing" },
    { title: "Healthcare Support", type: "Solution", description: "Specialized healthcare customer support agents", href: "/services/healthcare-support" },
    { title: "24/7 Help Desk", type: "Solution", description: "Round-the-clock technical support and issue resolution", href: "/services/24-7-help-desk" },
  ],
  ctaTitle: "Ready for Tax Season?",
  ctaText: "Get expert tax support agents deployed fast. Scale up for peak season and down when it ends.",
};

export default function TaxSupportPage() {
  return <ServicePageTemplate data={data} />;
}
