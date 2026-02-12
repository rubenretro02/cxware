export interface Opportunity {
  slug: string;
  title: string;
  heroTitle: string;
  heroSubtitle: string;
  description: string;
  image: string;
  type: string;
  pay: string;
  hoursLabel: string;
  hours: string[];
  skillsIntro: string;
  skills: string[];
  traits: string[];
  technicalRequirements: string[];
  channels?: string[];
  whatYouDo: string[];
  perks: {
    title: string;
    items: string[];
  }[];
}

export const opportunities: Opportunity[] = [
  {
    slug: "customer-service",
    title: "Customer Service",
    heroTitle: "Remote Customer Service Agent Opportunities",
    heroSubtitle: "Be the customer care voice of top brands",
    description:
      "Customer service is the foundation of every successful business. As a CXware Remote Customer Service Agent, you'll be the first point of contact for customers who need help with orders, account inquiries, billing questions, product support, and more. You'll represent leading brands and deliver exceptional experiences that keep customers coming back. Equipped with comprehensive training, real-time support tools, and the freedom to work from home, you'll build a rewarding career that fits your life.",
    image: "/images/opp-customer-service.jpg",
    type: "Independent Contractor",
    pay: "$14 to $20 per hour",
    hoursLabel: "Calls Typically Available:",
    hours: [
      "Calls typically available 7 days a week, various shifts",
      "Hours subject to change based on client availability and business needs",
      "Recommended: 20+ hours/week",
    ],
    skillsIntro:
      "Customer Service is perfect for remote professionals who excel at building rapport, resolving issues quickly, and delivering best-in-class support. If you thrive in helping people and creating positive interactions, this opportunity is a great fit.",
    skills: [
      "Tier 1 & Tier 2 customer care",
      "Order support and account management",
      "Billing and payment inquiries",
      "Product and service troubleshooting",
      "Escalation management",
      "Multi-channel support (phone, chat, email)",
    ],
    traits: [
      "Nurturing, empathetic, and patient demeanor",
      "Passionate about excellent customer service and brand loyalty",
      "Calm, confident multitasker who puts people at ease",
      "Friendly, professional persona across phone, email, and chat",
      "Strong desire to follow a problem through to resolution",
      "Self-sufficient and autonomous in a remote setting",
    ],
    technicalRequirements: [
      "Technology skill level: Medium",
      "USB headset required",
      "Operating system: Windows 10 or 11 (Mac may be accepted for some programs)",
      "Reliable high-speed internet connection",
      "Minimum download speed: 20.0 Mbps+",
      "Minimum upload speed: 5.0 Mbps+",
      "Quiet, distraction-free workspace",
    ],
    channels: ["Phone", "Chat", "Email", "Text"],
    whatYouDo: [
      "Handle inbound customer inquiries with professionalism and care",
      "Resolve issues related to orders, billing, accounts, and products",
      "Navigate multiple systems to find solutions efficiently",
      "Document customer interactions and outcomes accurately",
      "Meet performance standards for quality and customer satisfaction",
    ],
    perks: [
      {
        title: "Freedom",
        items: [
          "Be your own boss and decide how much or how little you work",
          "Set your own schedule and maximize your earning potential",
          "Work from the comfort of your own home, anywhere in the US",
        ],
      },
      {
        title: "Support",
        items: [
          "Onboarding team to help you get started quickly and confidently",
          "Live, instructor-led certification before handling customer contacts",
          "On-demand access to a team of Resource Specialists in real-time",
        ],
      },
      {
        title: "Cost Savings",
        items: [
          "Save an average of $4,800/year on commuting costs",
          "No professional attire expenses - work in your casual clothes",
          "Qualify for home office tax deductions as an independent contractor",
        ],
      },
    ],
  },
  {
    slug: "inbound-sales",
    title: "Inbound Sales",
    heroTitle: "Remote Inbound Sales Agent Opportunities",
    heroSubtitle: "Enjoy the thrill of the sale from home",
    description:
      "Sales is so much more than taking an order - it's understanding the caller's needs, overcoming challenges, and dazzling them with enthusiasm for products they'll love. As a CXware Inbound Sales Agent, you'll be the voice of top brands, achieving sales goals and strengthening customer loyalty. You'll assist inbound callers who have already expressed interest in products or services, guiding them to make confident purchase decisions. These are fast-paced, high-energy calls with incentives that can quickly increase your earning potential.",
    image: "/images/opp-inbound-sales.jpg",
    type: "Independent Contractor",
    pay: "$14 to $20+ per hour",
    hoursLabel: "Calls Typically Available:",
    hours: [
      "7 days a week, 24 hours a day",
      "Hours may vary based on client availability and business needs",
      "Recommended: 5+ hours/week",
    ],
    skillsIntro:
      "Inbound Sales is ideal for agents who are comfortable engaging with potential customers, upselling, and guiding callers toward smart purchase decisions. If you're energetic, persuasive, and love closing deals, this is for you.",
    skills: [
      "Business-to-Consumer inbound sales",
      "Upselling and cross-selling",
      "Consultative sales approach",
      "Customer retention and anti-churn",
      "Product education and recommendations",
      "Order processing and account setup",
    ],
    traits: [
      "High-energy and enthusiastic with an engaging demeanor",
      "Confident and polished with a pleasant voice and attitude",
      "Sales-oriented problem solver who thrives on overcoming objections",
      "Independent and driven, goal-oriented and self-sufficient",
      "Passionate about helping customers make great decisions",
      "Resilient, positive, and upbeat communicator",
    ],
    technicalRequirements: [
      "Technology skill level: Low",
      "USB headset required",
      "Operating system: Windows 10 or 11 (Mac may be accepted for some programs)",
      "Reliable high-speed internet connection",
      "Minimum download speed: 20.0 Mbps+",
      "Minimum upload speed: 5.0 Mbps+",
      "Quiet, distraction-free workspace",
    ],
    whatYouDo: [
      "Convert inbound interest into completed sales with enthusiasm",
      "Educate callers about products and services they've expressed interest in",
      "Overcome objections with confidence and professionalism",
      "Identify upselling and cross-selling opportunities to maximize revenue",
      "Achieve and exceed sales performance targets consistently",
    ],
    perks: [
      {
        title: "High Earning Potential",
        items: [
          "Top agents consistently earn over $20/hour with incentives",
          "Performance bonuses and commission-based earning opportunities",
          "No earning caps - the more you sell, the more you earn",
        ],
      },
      {
        title: "Freedom",
        items: [
          "Be your own boss and set your own schedule",
          "Work from anywhere in the US with total flexibility",
          "Choose programs that match your interests and strengths",
        ],
      },
      {
        title: "Support",
        items: [
          "Comprehensive sales certification and training",
          "Real-time support from experienced Resource Specialists",
          "Access to proven scripts, tools, and product information",
        ],
      },
    ],
  },
  {
    slug: "healthcare",
    title: "Healthcare Support",
    heroTitle: "Remote Healthcare Support Agent Opportunities",
    heroSubtitle: "Help patients navigate their healthcare",
    description:
      "Healthcare concerns can make people feel vulnerable and overwhelmed. As a CXware Remote Healthcare Support Agent, you can provide relief and understanding by offering a sympathetic ear and compassionate, patient service. You'll help patients navigate insurance or pharmacy protocols, connect with critical resources, update records, and resolve their questions and concerns - all in a rewarding day's work from the comfort of your home.",
    image: "/images/opp-healthcare.jpg",
    type: "Independent Contractor",
    pay: "$15 to $20 per hour",
    hoursLabel: "Calls Typically Available:",
    hours: [
      "Hours may vary based on client availability and business needs",
      "Availability required: 7 days a week, 9:00am - 9:00pm ET",
      "Recommended commitment: 20+ hours per week",
    ],
    skillsIntro:
      "Healthcare Support is perfect for empathetic individuals who excel at providing compassionate assistance to patients. You'll be the comforting voice on the other end of the line, offering guidance and support with prescription medication needs, appointment scheduling, and insurance inquiries.",
    skills: [
      "Patient intake and appointment scheduling",
      "Insurance verification and benefits explanation",
      "Pharmacy support and prescription inquiries",
      "Medical records coordination",
      "Patient follow-up and care management",
      "HIPAA-compliant communication",
    ],
    traits: [
      "Nurturing, empathetic, and patient demeanor",
      "Calm, compassionate multitasker who connects quickly and puts people at ease",
      "Excellent listening and communication skills with a friendly, professional phone persona",
      "Strong desire to follow a problem through to a solution",
      "Self-sufficient and autonomous in a remote setting",
      "Comfortable handling sensitive healthcare information",
    ],
    technicalRequirements: [
      "Technology skill level: Medium",
      "USB headset required",
      "Operating system: Windows 10 or 11 (Mac not compatible for most healthcare programs)",
      "Dual monitors recommended",
      "Minimum download speed: 20.0 Mbps+",
      "Minimum upload speed: 5.0 Mbps+",
      "Private, quiet workspace (HIPAA compliance)",
    ],
    whatYouDo: [
      "Assist patients with prescription medication questions and support",
      "Help callers navigate insurance protocols and benefits",
      "Schedule and manage patient appointments",
      "Update and maintain accurate patient records",
      "Connect patients with critical healthcare resources",
    ],
    perks: [
      {
        title: "Meaningful Work",
        items: [
          "Make a real difference in patients' lives every single day",
          "Provide compassionate care and guidance to those who need it most",
          "Work with leading healthcare organizations and providers",
        ],
      },
      {
        title: "Freedom",
        items: [
          "Work from home with a flexible schedule you control",
          "Be your own boss as an independent contractor",
          "Build a sustainable home business in a growing industry",
        ],
      },
      {
        title: "Support",
        items: [
          "Comprehensive healthcare-specific certification and training",
          "HIPAA compliance training included",
          "Real-time support from experienced team members",
        ],
      },
    ],
  },
  {
    slug: "insurance-sales",
    title: "Insurance Sales",
    heroTitle: "Remote Insurance Sales Agent Opportunities",
    heroSubtitle: "Sell top insurance coverage from home",
    description:
      "You don't have to spend your time traveling and chasing leads to build an insurance business. CXware connects you with some of the largest and most respected insurance companies in the nation, so you can feel proud to offer products customers can rely on. As an Independent Insurance Sales Agent, you'll convert warm, inbound calls to sales for well-known insurance brands. With no earning caps, the sky's the limit for your earning potential.",
    image: "/images/opp-insurance.jpg",
    type: "Independent Contractor",
    pay: "$16 to $25+ per hour",
    hoursLabel: "Calls Typically Available:",
    hours: [
      "Hours may vary based on client availability and business needs",
      "Availability required: Monday - Saturday, 8:00am - 10:00pm ET",
      "Recommended commitment: 10+ hours per week",
    ],
    skillsIntro:
      "Insurance Sales is ideal for agents who are comfortable with inbound sales, calling warm outbound leads, and upselling. If you thrive in a sales environment and are skilled at building rapport and providing tailored insurance solutions, this is the opportunity for you.",
    skills: [
      "Inbound insurance sales and consultation",
      "Warm lead outbound follow-up",
      "Upselling and cross-selling insurance products",
      "Policy explanation and benefits presentation",
      "Customer objection handling and negotiation",
      "Account management and retention",
    ],
    traits: [
      "Goal-oriented with excellent sales skills and a passion for insurance",
      "Charismatic and able to connect with people quickly",
      "Drive to learn products and be a trustworthy expert",
      "Strong communication skills, capable of overcoming objections",
      "Finds it rewarding to help people understand complex problems",
      "Self-sufficient and autonomous, enjoys being your own boss",
    ],
    technicalRequirements: [
      "Technology skill level: Low",
      "Valid Life & Health insurance license in your home state required",
      "Life & Health Insurance License in at least 4 additional states preferred",
      "USB headset required",
      "Operating system: Windows 10 or 11",
      "Minimum download speed: 20.0 Mbps+",
      "Minimum upload speed: 5.0 Mbps+",
    ],
    whatYouDo: [
      "Convert warm inbound calls into insurance sales",
      "Educate customers on insurance products, coverage, and benefits",
      "Build rapport and trust to guide purchase decisions",
      "Overcome objections and negotiate tailored solutions",
      "Maintain compliance with insurance regulations and standards",
    ],
    perks: [
      {
        title: "Uncapped Earnings",
        items: [
          "No earning caps - your income reflects your effort and skill",
          "Commission-based bonuses on top of competitive base pay",
          "Top agents consistently exceed $25/hour",
        ],
      },
      {
        title: "Freedom",
        items: [
          "Work from home with a schedule you set",
          "Warm leads provided - no cold calling or door knocking",
          "Represent trusted household-name insurance brands",
        ],
      },
      {
        title: "Growth",
        items: [
          "Expand your insurance business by adding state licenses",
          "Access to ongoing training and product education",
          "Build a long-term, scalable home-based business",
        ],
      },
    ],
  },
  {
    slug: "bilingual-spanish",
    title: "Bilingual Spanish Agent",
    heroTitle: "Remote Bilingual Spanish Agent Opportunities",
    heroSubtitle: "Leverage your bilingual skills for premium pay",
    description:
      "Your bilingual abilities are in high demand. As a CXware Bilingual Spanish Agent, you'll provide customer support, sales assistance, and healthcare navigation to both English and Spanish-speaking customers. Companies across industries need agents who can seamlessly switch between languages to serve their diverse customer base. Earn premium pay rates while working from home and using your unique language skills to make a real difference.",
    image: "/images/opp-bilingual.jpg",
    type: "Independent Contractor",
    pay: "$17 to $20+ per hour",
    hoursLabel: "Calls Typically Available:",
    hours: [
      "Calls typically available 7 days a week, various shifts",
      "Hours subject to change based on client availability and business needs",
      "Recommended: 20+ hours/week",
    ],
    skillsIntro:
      "Bilingual Spanish opportunities are perfect for fluent English-Spanish speakers who want to earn premium rates by serving both English and Spanish-speaking customers. If you're a skilled communicator in both languages, this opportunity unlocks higher pay and more program options.",
    skills: [
      "English and Spanish customer support",
      "Bilingual inbound sales and consultations",
      "Healthcare patient support in both languages",
      "Insurance inquiries and enrollment assistance",
      "Cross-cultural communication and brand representation",
      "Multi-channel support (phone, chat, email)",
    ],
    traits: [
      "Fluent in both English and Spanish (written and spoken)",
      "Culturally sensitive with strong cross-cultural communication skills",
      "Empathetic, patient, and professional in both languages",
      "Confident multitasker who adapts quickly to different callers",
      "Strong desire to help diverse communities",
      "Self-motivated and comfortable working independently from home",
    ],
    technicalRequirements: [
      "Technology skill level: Medium",
      "Fluent in English and Spanish (reading, writing, and speaking)",
      "USB headset required",
      "Operating system: Windows 10 or 11",
      "Reliable high-speed internet connection",
      "Minimum download speed: 20.0 Mbps+",
      "Minimum upload speed: 5.0 Mbps+",
      "Quiet, distraction-free workspace",
    ],
    whatYouDo: [
      "Provide seamless support in English and Spanish as needed",
      "Handle customer inquiries across multiple industries and programs",
      "Assist with sales, healthcare navigation, or customer service depending on the program",
      "Represent top brands with professionalism in both languages",
      "Meet quality and performance standards across all interactions",
    ],
    perks: [
      {
        title: "Premium Pay",
        items: [
          "Earn higher rates than English-only programs ($17-$20+/hr)",
          "Access to exclusive bilingual-only programs and contracts",
          "Performance bonuses and incentive opportunities",
        ],
      },
      {
        title: "Freedom",
        items: [
          "Work from home anywhere in the US",
          "Set your own schedule and choose your programs",
          "Be your own boss as an independent contractor",
        ],
      },
      {
        title: "High Demand",
        items: [
          "Bilingual agents are always in demand across all industries",
          "More program options and flexibility in choosing work",
          "Recession-resistant skill that companies value highly",
        ],
      },
    ],
  },
];

export function getOpportunityBySlug(slug: string): Opportunity | undefined {
  return opportunities.find((opp) => opp.slug === slug);
}

export function getOtherOpportunities(currentSlug: string): Opportunity[] {
  return opportunities.filter((opp) => opp.slug !== currentSlug);
}
