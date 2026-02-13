import OpportunityPageTemplate from "@/components/OpportunityPageTemplate";

const data = {
  slug: "healthcare-support",
  title: "Healthcare Support",
  roleName: "Remote Healthcare Support Agent",
  tagline: "Help patients navigate their healthcare",
  pay: "$15 to $20 per hour",
  type: "Independent Contractor",
  location: "Remote - USA",
  aboutText: "Healthcare concerns can make people feel vulnerable and overwhelmed. As a CXware Remote Healthcare Support Agent, you can make a real difference in people's lives by helping them navigate complex healthcare systems, schedule appointments, verify insurance, and access the care they need. Your empathetic, knowledgeable support helps patients feel heard and cared for during their most important moments.",
  skillsIntro: "Healthcare Support is ideal for agents who are compassionate, detail-oriented, and comfortable navigating healthcare systems. If you're passionate about helping patients and have a knack for clear communication, this is a rewarding opportunity.",
  skills: [
    "Patient intake and appointment scheduling",
    "Insurance verification and benefits explanation",
    "Pharmacy support and prescription inquiries",
    "Medical terminology knowledge",
    "HIPAA-compliant communication",
    "Empathetic patient interaction",
  ],
  whatYouDo: [
    "Assist patients with appointment scheduling and intake processes",
    "Verify insurance coverage and explain benefits clearly",
    "Handle pharmacy and prescription-related inquiries",
    "Navigate healthcare systems to connect patients with the right resources",
    "Maintain HIPAA compliance in all patient interactions",
  ],
  greatIfYou: [
    "Empathetic and patient with a genuine desire to help others",
    "Detail-oriented with strong organizational skills",
    "Comfortable with medical terminology and healthcare processes",
    "Clear communicator who can explain complex information simply",
    "Calm under pressure and able to handle sensitive situations",
    "Self-motivated and reliable in a remote work environment",
  ],
  quickOverview: {
    payRange: "$15 to $20 per hour",
    type: "Independent Contractor",
    location: "Remote - USA",
    hoursNote: [
      "Recommended: 20+ hours/week",
      "Hours subject to change based on client availability and business needs",
      "Calls typically available Monday-Friday, various shifts",
    ],
    channels: ["Phone", "Chat", "Email"],
  },
  techLevel: "Medium",
  techRequirements: [
    "USB headset required",
    "Operating system: Windows 10 or 11",
    "Reliable high-speed internet connection",
    "Minimum download speed: 20.0 Mbps+",
    "Minimum upload speed: 5.0 Mbps+",
    "Quiet, distraction-free workspace",
    "HIPAA compliance training (provided)",
  ],
  benefits: [
    {
      title: "Meaningful Work",
      items: [
        "Make a real difference in patients' lives every day",
        "Support people during their most vulnerable moments",
        "Build a career in the growing healthcare industry",
      ],
    },
    {
      title: "Freedom",
      items: [
        "Work from home with flexible scheduling options",
        "Choose programs that match your interests and expertise",
        "Be your own boss as an independent contractor",
      ],
    },
    {
      title: "Growth",
      items: [
        "Develop valuable healthcare industry skills and knowledge",
        "Access to comprehensive HIPAA and healthcare training",
        "Expand into specialized healthcare programs over time",
      ],
    },
  ],
  relatedOpportunities: [
    { title: "Customer Service", tagline: "Be the customer care voice of top brands", pay: "$14 to $20 per hour", href: "/agents/opportunities/customer-service" },
    { title: "Inbound Sales", tagline: "Enjoy the thrill of the sale from home", pay: "$14 to $20+ per hour", href: "/agents/opportunities/inbound-sales" },
    { title: "Insurance Sales", tagline: "Sell top insurance coverage from home", pay: "$16 to $25+ per hour", href: "/agents/opportunities/insurance-sales" },
    { title: "Bilingual Spanish Agent", tagline: "Leverage your bilingual skills for premium pay", pay: "$17 to $20+ per hour", href: "/agents/opportunities/bilingual-spanish" },
  ],
  ctaTitle: "Ready to get started as a Healthcare Support Agent?",
  ctaText: "Apply today and start your flexible, remote career with CXware. Set your own schedule, work from home, and earn competitive pay.",
};

export default function HealthcareSupportPage() {
  return <OpportunityPageTemplate data={data} />;
}
