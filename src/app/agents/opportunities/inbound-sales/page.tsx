import OpportunityPageTemplate from "@/components/OpportunityPageTemplate";

const data = {
  slug: "inbound-sales",
  title: "Inbound Sales",
  roleName: "Remote Inbound Sales Agent",
  tagline: "Enjoy the thrill of the sale from home",
  pay: "$14 to $20+ per hour",
  type: "Independent Contractor",
  location: "Remote - USA",
  aboutText: "Sales is so much more than taking an order - it's understanding the caller's needs, overcoming challenges, and dazzling them with enthusiasm for products they'll love. As a CXware Inbound Sales Agent, you'll be the voice of top brands, achieving sales goals and strengthening customer loyalty. You'll assist inbound callers who have already expressed interest in products or services, guiding them to make confident purchase decisions. These are fast-paced, high-energy calls with incentives that can quickly increase your earning potential.",
  skillsIntro: "Inbound Sales is ideal for agents who are comfortable engaging with potential customers, upselling, and guiding callers toward smart purchase decisions. If you're energetic, persuasive, and love closing deals, this is for you.",
  skills: [
    "Business-to-Consumer inbound sales",
    "Upselling and cross-selling",
    "Consultative sales approach",
    "Customer retention and anti-churn",
    "Product education and recommendations",
    "Order processing and account setup",
  ],
  whatYouDo: [
    "Convert inbound interest into completed sales with enthusiasm",
    "Educate callers about products and services they've expressed interest in",
    "Overcome objections with confidence and professionalism",
    "Identify upselling and cross-selling opportunities to maximize revenue",
    "Achieve and exceed sales performance targets consistently",
  ],
  greatIfYou: [
    "High-energy and enthusiastic with an engaging demeanor",
    "Confident and polished with a pleasant voice and attitude",
    "Sales-oriented problem solver who thrives on overcoming objections",
    "Independent and driven, goal-oriented and self-sufficient",
    "Passionate about helping customers make great decisions",
    "Resilient, positive, and upbeat communicator",
  ],
  quickOverview: {
    payRange: "$14 to $20+ per hour",
    type: "Independent Contractor",
    location: "Remote - USA",
    hoursNote: [
      "Recommended: 5+ hours/week",
      "Hours may vary based on client availability and business needs",
      "7 days a week, 24 hours a day",
    ],
  },
  techLevel: "Low",
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
      title: "High Earning Potential",
      items: [
        "No earning caps - the more you sell, the more you earn",
        "Performance bonuses and commission-based earning opportunities",
        "Top agents consistently earn over $20/hour with incentives",
      ],
    },
    {
      title: "Freedom",
      items: [
        "Choose programs that match your interests and strengths",
        "Work from anywhere in the US with total flexibility",
        "Be your own boss and set your own schedule",
      ],
    },
    {
      title: "Support",
      items: [
        "Access to proven scripts, tools, and product information",
        "Real-time support from experienced Resource Specialists",
        "Comprehensive sales certification and training",
      ],
    },
  ],
  relatedOpportunities: [
    { title: "Customer Service", tagline: "Be the customer care voice of top brands", pay: "$14 to $20 per hour", href: "/agents/opportunities/customer-service" },
    { title: "Healthcare Support", tagline: "Help patients navigate their healthcare", pay: "$15 to $20 per hour", href: "/agents/opportunities/healthcare-support" },
    { title: "Insurance Sales", tagline: "Sell top insurance coverage from home", pay: "$16 to $25+ per hour", href: "/agents/opportunities/insurance-sales" },
    { title: "Bilingual Spanish Agent", tagline: "Leverage your bilingual skills for premium pay", pay: "$17 to $20+ per hour", href: "/agents/opportunities/bilingual-spanish" },
  ],
  ctaTitle: "Ready to get started as an Inbound Sales Agent?",
  ctaText: "Apply today and start your flexible, remote career with CXware. Set your own schedule, work from home, and earn competitive pay.",
};

export default function InboundSalesPage() {
  return <OpportunityPageTemplate data={data} />;
}
