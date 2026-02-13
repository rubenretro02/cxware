import OpportunityPageTemplate from "@/components/OpportunityPageTemplate";

const data = {
  slug: "bilingual-spanish",
  title: "Bilingual Spanish Agent",
  roleName: "Remote Bilingual Spanish Agent",
  tagline: "Leverage your bilingual skills for premium pay",
  pay: "$17 to $20+ per hour",
  type: "Independent Contractor",
  location: "Remote - USA",
  aboutText: "Your bilingual abilities are in high demand. As a CXware Bilingual Spanish Agent, you'll provide customer support, sales assistance, and healthcare navigation to both English and Spanish-speaking customers. Companies across industries need agents who can seamlessly switch between languages to serve their diverse customer base. Earn premium pay rates while working from home and using your unique language skills to make a real difference.",
  skillsIntro: "Bilingual Spanish opportunities are perfect for fluent English-Spanish speakers who want to earn premium rates by serving both English and Spanish-speaking customers. If you're a skilled communicator in both languages, this opportunity unlocks higher pay and more program options.",
  skills: [
    "English and Spanish customer support",
    "Bilingual inbound sales and consultations",
    "Healthcare patient support in both languages",
    "Insurance inquiries and enrollment assistance",
    "Cross-cultural communication and brand representation",
    "Multi-channel support (phone, chat, email)",
  ],
  whatYouDo: [
    "Provide seamless support in English and Spanish as needed",
    "Handle customer inquiries across multiple industries and programs",
    "Assist with sales, healthcare navigation, or customer service depending on the program",
    "Represent top brands with professionalism in both languages",
    "Meet quality and performance standards across all interactions",
  ],
  greatIfYou: [
    "Fluent in both English and Spanish (written and spoken)",
    "Culturally sensitive with strong cross-cultural communication skills",
    "Empathetic, patient, and professional in both languages",
    "Confident multitasker who adapts quickly to different callers",
    "Strong desire to help diverse communities",
    "Self-motivated and comfortable working independently from home",
  ],
  quickOverview: {
    payRange: "$17 to $20+ per hour",
    type: "Independent Contractor",
    location: "Remote - USA",
    hoursNote: [
      "Recommended: 20+ hours/week",
      "Hours subject to change based on client availability and business needs",
      "Calls typically available 7 days a week, various shifts",
    ],
  },
  techLevel: "Medium",
  techRequirements: [
    "Fluent in English and Spanish (reading, writing, and speaking)",
    "USB headset required",
    "Operating system: Windows 10 or 11",
    "Reliable high-speed internet connection",
    "Minimum download speed: 20.0 Mbps+",
    "Minimum upload speed: 5.0 Mbps+",
    "Quiet, distraction-free workspace",
  ],
  benefits: [
    {
      title: "Premium Pay",
      items: [
        "Performance bonuses and incentive opportunities",
        "Access to exclusive bilingual-only programs and contracts",
        "Earn higher rates than English-only programs ($17-$20+/hr)",
      ],
    },
    {
      title: "Freedom",
      items: [
        "Be your own boss as an independent contractor",
        "Set your own schedule and choose your programs",
        "Work from home anywhere in the US",
      ],
    },
    {
      title: "High Demand",
      items: [
        "Recession-resistant skill that companies value highly",
        "More program options and flexibility in choosing work",
        "Bilingual agents are always in demand across all industries",
      ],
    },
  ],
  relatedOpportunities: [
    { title: "Customer Service", tagline: "Be the customer care voice of top brands", pay: "$14 to $20 per hour", href: "/agents/opportunities/customer-service" },
    { title: "Inbound Sales", tagline: "Enjoy the thrill of the sale from home", pay: "$14 to $20+ per hour", href: "/agents/opportunities/inbound-sales" },
    { title: "Healthcare Support", tagline: "Help patients navigate their healthcare", pay: "$15 to $20 per hour", href: "/agents/opportunities/healthcare-support" },
    { title: "Insurance Sales", tagline: "Sell top insurance coverage from home", pay: "$16 to $25+ per hour", href: "/agents/opportunities/insurance-sales" },
  ],
  ctaTitle: "Ready to get started as a Bilingual Spanish Agent?",
  ctaText: "Apply today and start your flexible, remote career with CXware. Set your own schedule, work from home, and earn competitive pay.",
};

export default function BilingualSpanishPage() {
  return <OpportunityPageTemplate data={data} />;
}
