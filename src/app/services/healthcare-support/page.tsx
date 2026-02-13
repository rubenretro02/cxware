import ServicePageTemplate from "@/components/ServicePageTemplate";

const data = {
  breadcrumb: "Healthcare Support",
  label: "Solution",
  title: "Healthcare",
  titleHighlight: "Support",
  subtitle: "Specialized healthcare customer support agents for your organization",
  stats: [
    { value: "HIPAA", label: "Fully Compliant" },
    { value: "95%+", label: "Patient Satisfaction" },
    { value: "24/7", label: "Available Coverage" },
    { value: "200K+", label: "Available Agents" },
  ],
  overviewTitle: "Specialized healthcare customer support agents for your organization",
  overviewText: "Healthcare organizations need agents who understand the sensitivity and complexity of patient interactions. CXware provides HIPAA-compliant healthcare support agents trained in patient intake, appointment scheduling, insurance verification, prescription inquiries, and more. Our agents deliver compassionate, accurate support that meets the highest healthcare industry standards.",
  capabilities: [
    { title: "HIPAA-Compliant Agents", description: "Every agent is trained and certified in HIPAA compliance, ensuring secure handling of protected health information." },
    { title: "Patient-Centric Support", description: "Agents trained in empathetic communication to help patients feel supported during vulnerable moments." },
    { title: "Insurance Navigation", description: "Expert assistance with insurance verification, benefits explanation, and claims support." },
    { title: "Multi-Channel Access", description: "Support patients via phone, secure chat, and email with consistent quality and compliance." },
  ],
  benefits: [
    "Maintain full HIPAA compliance across all patient interactions",
    "Achieve 95%+ patient satisfaction scores",
    "Reduce wait times for appointment scheduling and inquiries",
    "Handle insurance verification and benefits questions efficiently",
    "Scale for open enrollment periods and seasonal demand",
    "Access agents with healthcare-specific training and experience",
  ],
  useCases: [
    { text: "Patient intake and appointment scheduling" },
    { text: "Insurance verification and benefits explanation" },
    { text: "Pharmacy support and prescription inquiries" },
    { text: "Post-visit follow-up and patient satisfaction surveys" },
    { text: "Open enrollment support and benefits navigation" },
  ],
  relatedServices: [
    { title: "Call Center Outsourcing", type: "Solution", description: "Scale your contact center operations without the overhead", href: "/services/call-center-outsourcing" },
    { title: "Customer Service Outsourcing", type: "Solution", description: "Deliver exceptional customer experiences at scale", href: "/services/customer-service-outsourcing" },
    { title: "24/7 Help Desk", type: "Solution", description: "Round-the-clock technical support and issue resolution", href: "/services/24-7-help-desk" },
    { title: "Tax Support", type: "Solution", description: "Expert seasonal tax support agents ready when you need them", href: "/services/tax-support" },
  ],
  ctaTitle: "Elevate Your Healthcare Support",
  ctaText: "Provide compassionate, compliant patient support with CXware's specialized healthcare agents.",
};

export default function HealthcareSupportPage() {
  return <ServicePageTemplate data={data} />;
}
