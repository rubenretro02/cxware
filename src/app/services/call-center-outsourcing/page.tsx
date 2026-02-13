import ServicePageTemplate from "@/components/ServicePageTemplate";

const data = {
  breadcrumb: "Call Center Outsourcing",
  label: "Solution",
  title: "Call Center",
  titleHighlight: "Outsourcing",
  subtitle: "Scale your contact center operations without the overhead",
  stats: [
    { value: "25-55%", label: "Cost Reduction" },
    { value: "30 Days", label: "Time to Launch" },
    { value: "98%+", label: "Quality Score" },
    { value: "24/7", label: "Coverage Available" },
  ],
  overviewTitle: "Scale your contact center operations without the overhead",
  overviewText: "Handle inbound and outbound calls for billing, account help, and customer service with CXware's fully managed call center outsourcing. Our credentialed agents deliver enterprise-grade support at a fraction of the cost of traditional BPOs. Whether you need 10 agents or 1,000, we match you with top-performing remote agents who are trained, certified, and ready to represent your brand from day one.",
  capabilities: [
    { title: "Rapid Agent Deployment", description: "Go live in as little as 30 days with fully certified agents trained on your specific processes and brand guidelines." },
    { title: "Flexible Scaling", description: "Ramp 3-5x agents on demand for seasonal peaks, product launches, or unexpected surges without long-term commitments." },
    { title: "Quality Assurance", description: "Built-in QA monitoring and real-time performance tracking ensure consistent, high-quality customer interactions." },
    { title: "Cost Optimization", description: "Pay only for productive hours. Eliminate shrinkage, idle time, and traditional BPO overhead markups." },
  ],
  benefits: [
    "Reduce operating costs by 25-55% compared to traditional BPOs",
    "Eliminate expenses from idle time, shrinkage, and attrition",
    "Scale up or down instantly based on call volume forecasts",
    "Access a vetted pool of 200,000+ credentialed agents",
    "Maintain 98%+ quality scores across all interactions",
    "Full compliance with PCI-DSS, HIPAA, SOC II standards",
  ],
  useCases: [
    { text: "Inbound customer support and billing inquiries" },
    { text: "Outbound follow-up calls and appointment confirmations" },
    { text: "Technical support and product troubleshooting" },
    { text: "Order processing and account management" },
    { text: "Overflow and after-hours call handling" },
  ],
  relatedServices: [
    { title: "Customer Service Outsourcing", type: "Solution", description: "Deliver exceptional customer experiences at scale", href: "/services/customer-service-outsourcing" },
    { title: "Live Chat Support", type: "Solution", description: "Respond to customers in real time via web chat", href: "/services/live-chat-support" },
    { title: "24/7 Help Desk", type: "Solution", description: "Round-the-clock technical support and issue resolution", href: "/services/24-7-help-desk" },
    { title: "Tax Support", type: "Solution", description: "Expert seasonal tax support agents ready when you need them", href: "/services/tax-support" },
  ],
  ctaTitle: "Ready to Transform Your Call Center?",
  ctaText: "See how CXware can boost your CX and cut costs in as little as 30 days.",
};

export default function CallCenterOutsourcingPage() {
  return <ServicePageTemplate data={data} />;
}
