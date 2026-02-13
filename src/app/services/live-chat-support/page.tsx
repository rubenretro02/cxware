import ServicePageTemplate from "@/components/ServicePageTemplate";

const data = {
  breadcrumb: "Live Chat Support",
  label: "Solution",
  title: "Live Chat",
  titleHighlight: "Support",
  subtitle: "Respond to customers in real time via web chat",
  stats: [
    { value: "<30s", label: "Avg Response Time" },
    { value: "20-40%", label: "Conversion Lift" },
    { value: "50%", label: "Lower Cost vs Phone" },
    { value: "24/7", label: "Available Coverage" },
  ],
  overviewTitle: "Respond to customers in real time via web chat",
  overviewText: "Modern customers expect instant answers. CXware's live chat support connects your website visitors with trained agents who respond in real time, guiding customers through purchases, resolving issues, and providing personalized assistance. Our chat agents are skilled at handling multiple conversations simultaneously while maintaining quality and personal touch.",
  capabilities: [
    { title: "Real-Time Response", description: "Sub-30-second average response times keep customers engaged and reduce abandonment rates." },
    { title: "Multi-Chat Handling", description: "Agents efficiently manage 2-4 concurrent chat conversations without sacrificing quality." },
    { title: "Proactive Engagement", description: "Trigger-based chat invitations engage visitors at key moments in the customer journey." },
    { title: "Seamless Integration", description: "Works with your existing chat platform (Zendesk, Intercom, LiveChat, and more)." },
  ],
  benefits: [
    "Increase conversion rates by 20-40% with real-time assistance",
    "Reduce support costs per interaction by up to 50% vs. phone",
    "Handle 2-4x more interactions per agent hour",
    "Capture leads and sales opportunities in real time",
    "Provide 24/7 chat coverage without staffing headaches",
    "Improve customer satisfaction with instant responses",
  ],
  useCases: [
    { text: "E-commerce pre-sales and checkout assistance" },
    { text: "Website visitor engagement and lead capture" },
    { text: "Technical support via live chat" },
    { text: "Order tracking and account inquiries" },
    { text: "Proactive customer engagement campaigns" },
  ],
  relatedServices: [
    { title: "Call Center Outsourcing", type: "Solution", description: "Scale your contact center operations without the overhead", href: "/services/call-center-outsourcing" },
    { title: "Customer Service Outsourcing", type: "Solution", description: "Deliver exceptional customer experiences at scale", href: "/services/customer-service-outsourcing" },
    { title: "24/7 Help Desk", type: "Solution", description: "Round-the-clock technical support and issue resolution", href: "/services/24-7-help-desk" },
    { title: "Tax Support", type: "Solution", description: "Expert seasonal tax support agents ready when you need them", href: "/services/tax-support" },
  ],
  ctaTitle: "Launch Live Chat Support Today",
  ctaText: "Connect with customers the moment they need help. Get started with CXware's live chat agents.",
};

export default function LiveChatSupportPage() {
  return <ServicePageTemplate data={data} />;
}
