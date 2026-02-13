import OpportunityPageTemplate from "@/components/OpportunityPageTemplate";

const data = {
  slug: "insurance-sales",
  title: "Insurance Sales",
  roleName: "Remote Insurance Sales Agent",
  tagline: "Sell top insurance coverage from home",
  pay: "$16 to $25+ per hour",
  type: "Independent Contractor",
  location: "Remote - USA",
  aboutText: "You don't have to spend your time traveling and chasing leads to build an insurance business. CXware connects you with some of the largest and most respected insurance companies in the nation, so you can feel proud to offer products customers can rely on. As an Independent Insurance Sales Agent, you'll convert warm, inbound calls to sales for well-known insurance brands. With no earning caps, the sky's the limit for your earning potential.",
  skillsIntro: "Insurance Sales is ideal for agents who are comfortable with inbound sales, calling warm outbound leads, and upselling. If you thrive in a sales environment and are skilled at building rapport and providing tailored insurance solutions, this is the opportunity for you.",
  skills: [
    "Inbound insurance sales and consultation",
    "Warm lead outbound follow-up",
    "Upselling and cross-selling insurance products",
    "Policy explanation and benefits presentation",
    "Customer objection handling and negotiation",
    "Account management and retention",
  ],
  whatYouDo: [
    "Convert warm inbound calls into insurance sales",
    "Educate customers on insurance products, coverage, and benefits",
    "Build rapport and trust to guide purchase decisions",
    "Overcome objections and negotiate tailored solutions",
    "Maintain compliance with insurance regulations and standards",
  ],
  greatIfYou: [
    "Goal-oriented with excellent sales skills and a passion for insurance",
    "Charismatic and able to connect with people quickly",
    "Drive to learn products and be a trustworthy expert",
    "Strong communication skills, capable of overcoming objections",
    "Finds it rewarding to help people understand complex problems",
    "Self-sufficient and autonomous, enjoys being your own boss",
  ],
  quickOverview: {
    payRange: "$16 to $25+ per hour",
    type: "Independent Contractor",
    location: "Remote - USA",
    hoursNote: [
      "Recommended commitment: 10+ hours per week",
      "Availability required: Monday - Saturday, 8:00am - 10:00pm ET",
      "Hours may vary based on client availability and business needs",
    ],
  },
  techLevel: "Low",
  techRequirements: [
    "Valid Life & Health insurance license in your home state required",
    "Life & Health Insurance License in at least 4 additional states preferred",
    "USB headset required",
    "Operating system: Windows 10 or 11",
    "Minimum download speed: 20.0 Mbps+",
    "Minimum upload speed: 5.0 Mbps+",
  ],
  benefits: [
    {
      title: "Uncapped Earnings",
      items: [
        "Top agents consistently exceed $25/hour",
        "Commission-based bonuses on top of competitive base pay",
        "No earning caps - your income reflects your effort and skill",
      ],
    },
    {
      title: "Freedom",
      items: [
        "Represent trusted household-name insurance brands",
        "Warm leads provided - no cold calling or door knocking",
        "Work from home with a schedule you set",
      ],
    },
    {
      title: "Growth",
      items: [
        "Build a long-term, scalable home-based business",
        "Access to ongoing training and product education",
        "Expand your insurance business by adding state licenses",
      ],
    },
  ],
  relatedOpportunities: [
    { title: "Customer Service", tagline: "Be the customer care voice of top brands", pay: "$14 to $20 per hour", href: "/agents/opportunities/customer-service" },
    { title: "Inbound Sales", tagline: "Enjoy the thrill of the sale from home", pay: "$14 to $20+ per hour", href: "/agents/opportunities/inbound-sales" },
    { title: "Healthcare Support", tagline: "Help patients navigate their healthcare", pay: "$15 to $20 per hour", href: "/agents/opportunities/healthcare-support" },
    { title: "Bilingual Spanish Agent", tagline: "Leverage your bilingual skills for premium pay", pay: "$17 to $20+ per hour", href: "/agents/opportunities/bilingual-spanish" },
  ],
  ctaTitle: "Ready to get started as an Insurance Sales Agent?",
  ctaText: "Apply today and start your flexible, remote career with CXware. Set your own schedule, work from home, and earn competitive pay.",
};

export default function InsuranceSalesPage() {
  return <OpportunityPageTemplate data={data} />;
}
