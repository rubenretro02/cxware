import OpportunityPageTemplate from "@/components/OpportunityPageTemplate";

const data = {
  slug: "customer-service",
  title: "Customer Service",
  roleName: "Remote Customer Service Agent",
  tagline: "Be the customer care voice of top brands",
  pay: "$14 to $20 per hour",
  type: "Independent Contractor",
  location: "Remote - USA",
  aboutText: "Customer service is the foundation of every successful business. As a CXware Remote Customer Service Agent, you'll be the first point of contact for customers who need help with orders, account inquiries, billing questions, product support, and more. You'll represent leading brands and deliver exceptional experiences that keep customers coming back. Equipped with comprehensive training, real-time support tools, and the freedom to work from home, you'll build a rewarding career that fits your life.",
  skillsIntro: "Customer Service is perfect for remote professionals who excel at building rapport, resolving issues quickly, and delivering best-in-class support. If you thrive in helping people and creating positive interactions, this opportunity is a great fit.",
  skills: [
    "Tier 1 & Tier 2 customer care",
    "Order support and account management",
    "Billing and payment inquiries",
    "Product and service troubleshooting",
    "Escalation management",
    "Multi-channel support (phone, chat, email)",
  ],
  whatYouDo: [
    "Handle inbound customer inquiries with professionalism and care",
    "Resolve issues related to orders, billing, accounts, and products",
    "Navigate multiple systems to find solutions efficiently",
    "Document customer interactions and outcomes accurately",
    "Meet performance standards for quality and customer satisfaction",
  ],
  greatIfYou: [
    "Nurturing, empathetic, and patient demeanor",
    "Passionate about excellent customer service and brand loyalty",
    "Calm, confident multitasker who puts people at ease",
    "Friendly, professional persona across phone, email, and chat",
    "Strong desire to follow a problem through to resolution",
    "Self-sufficient and autonomous in a remote setting",
  ],
  quickOverview: {
    payRange: "$14 to $20 per hour",
    type: "Independent Contractor",
    location: "Remote - USA",
    hoursNote: [
      "Recommended: 20+ hours/week",
      "Hours subject to change based on client availability and business needs",
      "Calls typically available 7 days a week, various shifts",
    ],
    channels: ["Phone", "Chat", "Email", "Text"],
  },
  techLevel: "Medium",
  techRequirements: [
    "USB headset required",
    "Operating system: Windows 10 or 11 (Mac may be accepted for some programs)",
    "Reliable high-speed internet connection",
    "Minimum download speed: 20.0 Mbps+",
    "Minimum upload speed: 5.0 Mbps+",
    "Quiet, distraction-free workspace",
  ],
  benefits: [
    {
      title: "Freedom",
      items: [
        "Work from the comfort of your own home, anywhere in the US",
        "Set your own schedule and maximize your earning potential",
        "Be your own boss and decide how much or how little you work",
      ],
    },
    {
      title: "Support",
      items: [
        "On-demand access to a team of Resource Specialists in real-time",
        "Live, instructor-led certification before handling customer contacts",
        "Onboarding team to help you get started quickly and confidently",
      ],
    },
    {
      title: "Cost Savings",
      items: [
        "Qualify for home office tax deductions as an independent contractor",
        "No professional attire expenses - work in your casual clothes",
        "Save an average of $4,800/year on commuting costs",
      ],
    },
  ],
  relatedOpportunities: [
    { title: "Inbound Sales", tagline: "Enjoy the thrill of the sale from home", pay: "$14 to $20+ per hour", href: "/agents/opportunities/inbound-sales" },
    { title: "Healthcare Support", tagline: "Help patients navigate their healthcare", pay: "$15 to $20 per hour", href: "/agents/opportunities/healthcare-support" },
    { title: "Insurance Sales", tagline: "Sell top insurance coverage from home", pay: "$16 to $25+ per hour", href: "/agents/opportunities/insurance-sales" },
    { title: "Bilingual Spanish Agent", tagline: "Leverage your bilingual skills for premium pay", pay: "$17 to $20+ per hour", href: "/agents/opportunities/bilingual-spanish" },
  ],
  ctaTitle: "Ready to get started as a Customer Service Agent?",
  ctaText: "Apply today and start your flexible, remote career with CXware. Set your own schedule, work from home, and earn competitive pay.",
};

export default function CustomerServicePage() {
  return <OpportunityPageTemplate data={data} />;
}
