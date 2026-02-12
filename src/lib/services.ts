export interface Service {
  slug: string;
  title: string;
  category: "solution" | "industry";
  heroTitle: string;
  heroSubtitle: string;
  description: string;
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  benefits: string[];
  stats: {
    value: string;
    label: string;
  }[];
  useCases: string[];
  ctaTitle: string;
  ctaDescription: string;
}

export const services: Service[] = [
  // ===== BY SOLUTION =====
  {
    slug: "call-center-outsourcing",
    title: "Call Center Outsourcing",
    category: "solution",
    heroTitle: "Call Center Outsourcing",
    heroSubtitle: "Scale your contact center operations without the overhead",
    description:
      "Handle inbound and outbound calls for billing, account help, and customer service with CXware's fully managed call center outsourcing. Our credentialed agents deliver enterprise-grade support at a fraction of the cost of traditional BPOs. Whether you need 10 agents or 1,000, we match you with top-performing remote agents who are trained, certified, and ready to represent your brand from day one.",
    features: [
      {
        title: "Rapid Agent Deployment",
        description: "Go live in as little as 30 days with fully certified agents trained on your specific processes and brand guidelines.",
        icon: "rocket",
      },
      {
        title: "Flexible Scaling",
        description: "Ramp 3-5x agents on demand for seasonal peaks, product launches, or unexpected surges without long-term commitments.",
        icon: "scale",
      },
      {
        title: "Quality Assurance",
        description: "Built-in QA monitoring and real-time performance tracking ensure consistent, high-quality customer interactions.",
        icon: "shield",
      },
      {
        title: "Cost Optimization",
        description: "Pay only for productive hours. Eliminate shrinkage, idle time, and traditional BPO overhead markups.",
        icon: "dollar",
      },
    ],
    benefits: [
      "Reduce operating costs by 25-55% compared to traditional BPOs",
      "Eliminate expenses from idle time, shrinkage, and attrition",
      "Scale up or down instantly based on call volume forecasts",
      "Access a vetted pool of 200,000+ credentialed agents",
      "Maintain 98%+ quality scores across all interactions",
      "Full compliance with PCI-DSS, HIPAA, SOC II standards",
    ],
    stats: [
      { value: "25-55%", label: "Cost Reduction" },
      { value: "30 Days", label: "Time to Launch" },
      { value: "98%+", label: "Quality Score" },
      { value: "24/7", label: "Coverage Available" },
    ],
    useCases: [
      "Inbound customer support and billing inquiries",
      "Outbound follow-up calls and appointment confirmations",
      "Technical support and product troubleshooting",
      "Order processing and account management",
      "Overflow and after-hours call handling",
    ],
    ctaTitle: "Ready to Transform Your Call Center?",
    ctaDescription: "See how CXware can boost your CX and cut costs in as little as 30 days.",
  },
  {
    slug: "customer-service-outsourcing",
    title: "Customer Service Outsourcing",
    category: "solution",
    heroTitle: "Customer Service Outsourcing",
    heroSubtitle: "Deliver exceptional customer experiences at scale",
    description:
      "Your customers deserve the best support experience every time they reach out. CXware's customer service outsourcing connects your brand with expert remote agents who provide empathetic, efficient, and brand-aligned support across every channel. From first contact resolution to complex escalations, our agents handle it all while maintaining the highest quality standards.",
    features: [
      {
        title: "Omnichannel Support",
        description: "Seamless support across phone, email, live chat, and social media from a unified agent experience.",
        icon: "channels",
      },
      {
        title: "Brand-Aligned Training",
        description: "Every agent completes comprehensive certification on your brand voice, products, and processes before going live.",
        icon: "training",
      },
      {
        title: "Performance Analytics",
        description: "Real-time dashboards track CSAT, FCR, AHT, and custom KPIs to ensure continuous improvement.",
        icon: "analytics",
      },
      {
        title: "Dedicated Account Management",
        description: "A dedicated team monitors performance, handles escalations, and optimizes your program continuously.",
        icon: "team",
      },
    ],
    benefits: [
      "Improve CSAT scores by 15-25% with expert agents",
      "Achieve 90%+ first contact resolution rates",
      "Reduce average handle time while improving quality",
      "Eliminate hiring, training, and retention headaches",
      "Scale seasonally without long-term staffing commitments",
      "Access multilingual support capabilities",
    ],
    stats: [
      { value: "15-25%", label: "CSAT Improvement" },
      { value: "90%+", label: "First Contact Resolution" },
      { value: "4.8/5", label: "Average Quality Rating" },
      { value: "200K+", label: "Available Agents" },
    ],
    useCases: [
      "Full-service customer support programs",
      "Seasonal and surge coverage support",
      "After-hours and weekend customer service",
      "Multilingual customer support teams",
      "Customer retention and loyalty programs",
    ],
    ctaTitle: "Elevate Your Customer Experience",
    ctaDescription: "Let CXware connect you with top-tier agents who deliver exceptional service at a fraction of the cost.",
  },
  {
    slug: "live-chat-support",
    title: "Live Chat Support",
    category: "solution",
    heroTitle: "Live Chat Support",
    heroSubtitle: "Respond to customers in real time via web chat",
    description:
      "Modern customers expect instant answers. CXware's live chat support connects your website visitors with trained agents who respond in real time, guiding customers through purchases, resolving issues, and providing personalized assistance. Our chat agents are skilled at handling multiple conversations simultaneously while maintaining quality and personal touch.",
    features: [
      {
        title: "Real-Time Response",
        description: "Sub-30-second average response times keep customers engaged and reduce abandonment rates.",
        icon: "clock",
      },
      {
        title: "Multi-Chat Handling",
        description: "Agents efficiently manage 2-4 concurrent chat conversations without sacrificing quality.",
        icon: "channels",
      },
      {
        title: "Proactive Engagement",
        description: "Trigger-based chat invitations engage visitors at key moments in the customer journey.",
        icon: "target",
      },
      {
        title: "Seamless Integration",
        description: "Works with your existing chat platform (Zendesk, Intercom, LiveChat, and more).",
        icon: "integration",
      },
    ],
    benefits: [
      "Increase conversion rates by 20-40% with real-time assistance",
      "Reduce support costs per interaction by up to 50% vs. phone",
      "Handle 2-4x more interactions per agent hour",
      "Capture leads and sales opportunities in real time",
      "Provide 24/7 chat coverage without staffing headaches",
      "Improve customer satisfaction with instant responses",
    ],
    stats: [
      { value: "<30s", label: "Avg Response Time" },
      { value: "20-40%", label: "Conversion Lift" },
      { value: "50%", label: "Lower Cost vs Phone" },
      { value: "24/7", label: "Available Coverage" },
    ],
    useCases: [
      "E-commerce pre-sales and checkout assistance",
      "Website visitor engagement and lead capture",
      "Technical support via live chat",
      "Order tracking and account inquiries",
      "Proactive customer engagement campaigns",
    ],
    ctaTitle: "Launch Live Chat Support Today",
    ctaDescription: "Connect with customers the moment they need help. Get started with CXware's live chat agents.",
  },
  {
    slug: "help-desk",
    title: "24/7 Help Desk",
    category: "solution",
    heroTitle: "24/7 Help Desk Support",
    heroSubtitle: "Round-the-clock technical support and issue resolution",
    description:
      "Your customers don't stop needing help at 5 PM. CXware's 24/7 help desk support ensures your users always have access to knowledgeable agents who can troubleshoot issues, answer questions, and resolve problems quickly. Our agents are trained on your products and systems, providing consistent, reliable support around the clock.",
    features: [
      {
        title: "Always-On Coverage",
        description: "True 24/7/365 support coverage including holidays and weekends with consistent quality.",
        icon: "clock",
      },
      {
        title: "Tiered Support Model",
        description: "L1, L2, and L3 support tiers with intelligent escalation paths for complex issues.",
        icon: "scale",
      },
      {
        title: "Ticket Management",
        description: "Full ticket lifecycle management with SLA tracking, prioritization, and resolution reporting.",
        icon: "ticket",
      },
      {
        title: "Knowledge Base Integration",
        description: "Agents leverage your knowledge base and documentation for faster, more accurate resolutions.",
        icon: "knowledge",
      },
    ],
    benefits: [
      "Provide true 24/7 support without overnight staffing costs",
      "Reduce ticket resolution time by 30-50%",
      "Improve customer satisfaction with faster response times",
      "Scale support team during product launches or incidents",
      "Maintain SLA compliance across all support tiers",
      "Reduce escalation rates with well-trained L1 agents",
    ],
    stats: [
      { value: "24/7", label: "Coverage" },
      { value: "30-50%", label: "Faster Resolution" },
      { value: "99%", label: "SLA Compliance" },
      { value: "35%+", label: "Cost Savings" },
    ],
    useCases: [
      "Technical product support and troubleshooting",
      "IT help desk and internal support",
      "SaaS customer support and onboarding",
      "After-hours and weekend support coverage",
      "Incident response and escalation management",
    ],
    ctaTitle: "Never Miss a Support Request Again",
    ctaDescription: "Provide your customers with reliable, round-the-clock support. Talk to us about 24/7 help desk coverage.",
  },
  {
    slug: "tax-support",
    title: "Tax Support",
    category: "solution",
    heroTitle: "Tax Support Services",
    heroSubtitle: "Expert seasonal tax support agents ready when you need them",
    description:
      "Tax season creates massive demand spikes that are nearly impossible to staff with traditional models. CXware provides certified tax support agents who are trained on tax software, IRS procedures, and customer service best practices. Our agents help callers navigate tax preparation, filing questions, software troubleshooting, and deadline-related concerns with expertise and patience.",
    features: [
      {
        title: "Seasonal Surge Ready",
        description: "Ramp hundreds of agents for tax season and scale back when volume drops - no year-round commitments.",
        icon: "scale",
      },
      {
        title: "Tax-Certified Agents",
        description: "Agents complete specialized tax support certification including software training and IRS guidelines.",
        icon: "shield",
      },
      {
        title: "Multi-Software Proficiency",
        description: "Support for major tax platforms including TurboTax, H&R Block, TaxAct, and more.",
        icon: "training",
      },
      {
        title: "Compliance First",
        description: "All agents trained on data privacy, PCI compliance, and sensitive financial information handling.",
        icon: "lock",
      },
    ],
    benefits: [
      "Scale 100s of agents during peak tax season within weeks",
      "Eliminate year-round staffing costs for seasonal demand",
      "Maintain high CSAT during high-volume periods",
      "Reduce average handle time with trained specialists",
      "Full PCI-DSS and data privacy compliance",
      "Seamless integration with your existing support infrastructure",
    ],
    stats: [
      { value: "100s", label: "Agents Deployed" },
      { value: "2-3x", label: "Seasonal Flex" },
      { value: "95%+", label: "Customer Satisfaction" },
      { value: "Weeks", label: "Time to Ramp" },
    ],
    useCases: [
      "Tax software customer support and troubleshooting",
      "IRS filing and deadline assistance",
      "Tax return status inquiries",
      "Seasonal peak coverage for tax companies",
      "Overflow support during filing deadlines",
    ],
    ctaTitle: "Prepare for Tax Season Now",
    ctaDescription: "Don't scramble when tax season hits. Get CXware's tax support agents certified and ready to go.",
  },
  {
    slug: "healthcare-support",
    title: "Healthcare Support",
    category: "solution",
    heroTitle: "Healthcare Support Services",
    heroSubtitle: "Compassionate patient support with full HIPAA compliance",
    description:
      "Healthcare customers need empathetic, knowledgeable support from people who understand their concerns. CXware provides HIPAA-compliant healthcare support agents who assist patients with insurance navigation, appointment scheduling, prescription inquiries, and more. Our agents combine medical knowledge with compassionate communication to deliver the patient experience your organization demands.",
    features: [
      {
        title: "HIPAA Compliant",
        description: "Full HIPAA compliance with secure data handling, encrypted communications, and regular audits.",
        icon: "shield",
      },
      {
        title: "Patient-First Approach",
        description: "Agents trained in healthcare communication, empathy, and patient engagement best practices.",
        icon: "heart",
      },
      {
        title: "Insurance Navigation",
        description: "Expert agents help patients understand benefits, verify coverage, and navigate complex insurance processes.",
        icon: "knowledge",
      },
      {
        title: "Appointment Management",
        description: "Scheduling, rescheduling, and reminder services integrated with your existing systems.",
        icon: "calendar",
      },
    ],
    benefits: [
      "Full HIPAA, HITRUST, and SOC II compliance built in",
      "Improve patient satisfaction and NPS scores",
      "Reduce call abandonment with adequate staffing",
      "Handle sensitive healthcare data with certified protocols",
      "Scale for open enrollment, flu season, and other peaks",
      "Multilingual support for diverse patient populations",
    ],
    stats: [
      { value: "HIPAA", label: "Fully Compliant" },
      { value: "20%+", label: "CSAT Improvement" },
      { value: "2-3x", label: "Peak Season Flex" },
      { value: "24/7", label: "Patient Support" },
    ],
    useCases: [
      "Patient intake and appointment scheduling",
      "Insurance verification and benefits explanation",
      "Prescription support and pharmacy navigation",
      "Medical records coordination and follow-up",
      "Health plan enrollment and member services",
    ],
    ctaTitle: "Improve Your Patient Experience",
    ctaDescription: "Deliver compassionate, HIPAA-compliant patient support with CXware. Let's talk about your healthcare needs.",
  },

  // ===== BY INDUSTRY =====
  {
    slug: "insurance",
    title: "Insurance",
    category: "industry",
    heroTitle: "Insurance Industry Solutions",
    heroSubtitle: "Claims support, policy service, and sales for insurance companies",
    description:
      "Insurance companies face unique challenges: seasonal claim surges from natural disasters, complex policy questions, strict regulatory requirements, and the need for empathetic customer interactions during stressful events. CXware delivers specialized insurance support agents who handle everything from policy service to claims intake to sales conversions, all while maintaining compliance with industry regulations.",
    features: [
      {
        title: "Claims Support",
        description: "Trained agents handle claims intake, status updates, and first notice of loss with accuracy and empathy.",
        icon: "shield",
      },
      {
        title: "Policy Service",
        description: "Expert support for policy changes, billing inquiries, coverage questions, and renewal processing.",
        icon: "knowledge",
      },
      {
        title: "Licensed Sales Agents",
        description: "Access to licensed insurance sales agents who convert warm leads and handle upselling.",
        icon: "dollar",
      },
      {
        title: "Catastrophe Response",
        description: "Rapid deployment of 300+ agents for hurricane, flood, and disaster-related claims surges.",
        icon: "scale",
      },
    ],
    benefits: [
      "Deploy 300+ agents rapidly for catastrophe events",
      "Maintain compliance with state insurance regulations",
      "Improve claims handling speed and accuracy",
      "Convert more inbound leads with licensed agents",
      "Reduce costs while maintaining service quality",
      "Handle seasonal enrollment and renewal peaks",
    ],
    stats: [
      { value: "300+", label: "Agents for Surges" },
      { value: "35%+", label: "Cost Savings" },
      { value: "98%", label: "Compliance Rate" },
      { value: "48hrs", label: "Rapid Deployment" },
    ],
    useCases: [
      "Property and casualty claims support",
      "Health insurance enrollment and member services",
      "Life insurance policy service and retention",
      "Auto insurance claims and customer service",
      "Disaster/catastrophe claims surge support",
    ],
    ctaTitle: "Modernize Your Insurance Operations",
    ctaDescription: "From claims surges to sales conversions, CXware has the agents your insurance company needs.",
  },
  {
    slug: "telecommunications",
    title: "Telecommunications",
    category: "industry",
    heroTitle: "Telecommunications Solutions",
    heroSubtitle: "Customer support and technical assistance for telecom providers",
    description:
      "Telecommunications companies deal with high volumes of technical support, billing inquiries, and service activation requests. CXware provides trained agents who understand telecom products, billing systems, and technical troubleshooting. Our agents help reduce churn, improve customer satisfaction, and handle the complex multi-step processes that telecom support requires.",
    features: [
      {
        title: "Technical Support",
        description: "Agents trained on common telecom issues: connectivity, device setup, service activation, and troubleshooting.",
        icon: "training",
      },
      {
        title: "Billing & Account Support",
        description: "Handle billing inquiries, payment processing, plan changes, and account management.",
        icon: "dollar",
      },
      {
        title: "Retention & Win-Back",
        description: "Specialized agents focused on customer retention, churn prevention, and win-back campaigns.",
        icon: "heart",
      },
      {
        title: "New Service Activation",
        description: "Streamlined onboarding for new customers including plan selection, device setup, and activation.",
        icon: "rocket",
      },
    ],
    benefits: [
      "Reduce customer churn with specialized retention agents",
      "Save 30%+ in operating costs vs. traditional staffing",
      "Handle seasonal demand spikes for product launches",
      "Improve first call resolution rates for technical issues",
      "Scale support for new market launches and promotions",
      "Multilingual support for diverse customer bases",
    ],
    stats: [
      { value: "30%+", label: "Cost Savings" },
      { value: "15%", label: "Churn Reduction" },
      { value: "90%+", label: "FCR Rate" },
      { value: "10x", label: "Surge Capacity" },
    ],
    useCases: [
      "Fiber and broadband customer support",
      "Mobile plan activation and device support",
      "Billing and payment processing",
      "Customer retention and loyalty programs",
      "Network outage communication and support",
    ],
    ctaTitle: "Elevate Your Telecom CX",
    ctaDescription: "Reduce churn and improve satisfaction with CXware's specialized telecom support agents.",
  },
  {
    slug: "utilities",
    title: "Utilities",
    category: "industry",
    heroTitle: "Utilities Industry Solutions",
    heroSubtitle: "Reliable customer support for energy and utility providers",
    description:
      "Utility companies serve millions of customers who rely on essential services every day. CXware provides trained customer support agents who handle billing inquiries, service requests, outage reporting, and energy assistance programs with professionalism and accuracy. Our agents help utility companies maintain high customer satisfaction while managing costs during peak demand periods.",
    features: [
      {
        title: "Outage Support",
        description: "Handle surge volumes during weather events and outages with rapid agent deployment.",
        icon: "scale",
      },
      {
        title: "Billing & Payments",
        description: "Process payments, set up payment plans, and resolve billing disputes efficiently.",
        icon: "dollar",
      },
      {
        title: "Service Requests",
        description: "Manage new service activations, transfers, disconnections, and service modifications.",
        icon: "training",
      },
      {
        title: "Energy Programs",
        description: "Assist customers with energy assistance programs, rebates, and conservation initiatives.",
        icon: "heart",
      },
    ],
    benefits: [
      "Increase support capacity by 10x during outages",
      "Maintain SLA compliance during peak demand events",
      "Reduce average handle time with trained specialists",
      "Handle seasonal program enrollment surges",
      "Improve customer satisfaction and reduce complaints",
      "Full PCI compliance for payment processing",
    ],
    stats: [
      { value: "10x", label: "Surge Capacity" },
      { value: "99%", label: "SLA Compliance" },
      { value: "40%", label: "Cost Reduction" },
      { value: "24/7", label: "Outage Support" },
    ],
    useCases: [
      "Customer billing and payment processing",
      "Storm and outage response support",
      "New service activation and transfers",
      "Energy assistance program enrollment",
      "Conservation program outreach",
    ],
    ctaTitle: "Power Up Your Customer Support",
    ctaDescription: "Keep your customers informed and supported with CXware's utility-focused agents.",
  },
  {
    slug: "finance-banking",
    title: "Finance & Banking",
    category: "industry",
    heroTitle: "Finance & Banking Solutions",
    heroSubtitle: "Secure, compliant customer support for financial institutions",
    description:
      "Financial services require the highest levels of security, compliance, and customer trust. CXware provides agents trained in financial services regulations, PCI-DSS compliance, and secure data handling. Our agents help banks, credit unions, and fintech companies deliver exceptional customer experiences while maintaining the strict security standards the industry demands.",
    features: [
      {
        title: "PCI-DSS Compliant",
        description: "Full PCI-DSS Level 1 compliance with encrypted systems and secure agent workspaces.",
        icon: "shield",
      },
      {
        title: "Account Services",
        description: "Handle account inquiries, transaction disputes, balance questions, and account maintenance.",
        icon: "knowledge",
      },
      {
        title: "Fraud Prevention",
        description: "Trained agents identify and escalate potential fraud, protecting customers and institutions.",
        icon: "lock",
      },
      {
        title: "Loan & Card Support",
        description: "Assist with loan applications, credit card inquiries, and financial product information.",
        icon: "dollar",
      },
    ],
    benefits: [
      "Full PCI-DSS and SOC II compliance built in",
      "Reduce operational costs while maintaining security",
      "Handle seasonal peaks for tax refunds and year-end",
      "Improve customer trust with knowledgeable agents",
      "Scale for product launches and marketing campaigns",
      "Multilingual support for diverse customer bases",
    ],
    stats: [
      { value: "PCI-DSS", label: "Level 1 Compliant" },
      { value: "35%", label: "Cost Reduction" },
      { value: "98%", label: "Security Score" },
      { value: "SOC II", label: "Certified" },
    ],
    useCases: [
      "Account inquiries and transaction support",
      "Credit card and loan customer service",
      "Fraud alert response and investigation support",
      "New account onboarding and verification",
      "Financial product information and sales",
    ],
    ctaTitle: "Secure Your Customer Experience",
    ctaDescription: "Deliver exceptional financial services support with CXware's compliant, trained agents.",
  },
  {
    slug: "travel-transportation",
    title: "Travel & Transportation",
    category: "industry",
    heroTitle: "Travel & Transportation Solutions",
    heroSubtitle: "Support travelers and passengers when they need it most",
    description:
      "Travel and transportation companies face unpredictable demand swings from weather events, holiday seasons, and disruptions. CXware provides flexible customer support that scales instantly to handle booking changes, cancellations, rebooking, and travel assistance. Our agents help keep travelers informed and supported, turning potential frustrations into positive experiences.",
    features: [
      {
        title: "Disruption Support",
        description: "Rapid deployment for weather delays, cancellations, and travel disruptions with empathetic agents.",
        icon: "scale",
      },
      {
        title: "Booking Management",
        description: "Handle reservations, modifications, cancellations, and rebooking across systems.",
        icon: "calendar",
      },
      {
        title: "Loyalty Programs",
        description: "Support frequent travelers with rewards inquiries, upgrades, and loyalty program management.",
        icon: "heart",
      },
      {
        title: "24/7 Travel Assistance",
        description: "Round-the-clock support for travelers in different time zones and emergency situations.",
        icon: "clock",
      },
    ],
    benefits: [
      "Scale instantly for weather events and travel disruptions",
      "Reduce call abandonment during peak travel periods",
      "Improve traveler satisfaction and loyalty",
      "Handle multilingual support for international travelers",
      "Reduce rebooking costs with efficient agent handling",
      "24/7 coverage across all time zones",
    ],
    stats: [
      { value: "5x", label: "Surge Capacity" },
      { value: "24/7", label: "Travel Support" },
      { value: "25%", label: "Cost Savings" },
      { value: "95%+", label: "CSAT Score" },
    ],
    useCases: [
      "Airline booking and rebooking support",
      "Hotel reservation management",
      "Ground transportation customer service",
      "Travel disruption and emergency support",
      "Loyalty program and rewards management",
    ],
    ctaTitle: "Support Travelers At Every Step",
    ctaDescription: "From booking to arrival, CXware ensures your travelers always have expert support.",
  },
  {
    slug: "retail",
    title: "Retail",
    category: "industry",
    heroTitle: "Retail Industry Solutions",
    heroSubtitle: "Exceptional customer support for retail and e-commerce brands",
    description:
      "Retail brands live and die by customer experience. CXware provides trained agents who handle the full spectrum of retail support: order inquiries, returns and exchanges, product recommendations, and loyalty programs. Our agents represent your brand with professionalism, turning every interaction into an opportunity to build loyalty and drive revenue.",
    features: [
      {
        title: "Order Support",
        description: "Handle order tracking, modifications, cancellations, and delivery inquiries with efficiency.",
        icon: "training",
      },
      {
        title: "Returns & Exchanges",
        description: "Process returns, exchanges, and refunds while maximizing customer retention.",
        icon: "knowledge",
      },
      {
        title: "Sales Support",
        description: "Convert inquiries into sales with product recommendations and personalized assistance.",
        icon: "dollar",
      },
      {
        title: "Holiday Surge Coverage",
        description: "Scale 3-5x for Black Friday, Cyber Monday, and holiday season peak volumes.",
        icon: "scale",
      },
    ],
    benefits: [
      "Scale 3-5x for holiday season and flash sales",
      "Increase conversion rates with proactive sales support",
      "Reduce returns by solving issues before they escalate",
      "Improve customer lifetime value with excellent service",
      "Omnichannel support: phone, chat, email, and social",
      "Reduce cost per interaction while improving quality",
    ],
    stats: [
      { value: "3-5x", label: "Holiday Scaling" },
      { value: "20%", label: "Conversion Lift" },
      { value: "35%", label: "Cost Savings" },
      { value: "4.8/5", label: "Quality Rating" },
    ],
    useCases: [
      "E-commerce order and shipping support",
      "In-store customer service overflow",
      "Product inquiry and recommendations",
      "Returns, exchanges, and refund processing",
      "Holiday and flash sale surge coverage",
    ],
    ctaTitle: "Scale Your Retail Support",
    ctaDescription: "From everyday support to holiday surges, CXware has the agents your retail brand needs.",
  },
  {
    slug: "healthcare-industry",
    title: "Healthcare",
    category: "industry",
    heroTitle: "Healthcare Industry Solutions",
    heroSubtitle: "HIPAA-compliant support for healthcare organizations",
    description:
      "Healthcare organizations need support partners who understand the unique requirements of the industry: HIPAA compliance, empathetic patient communication, insurance complexity, and the critical importance of accuracy. CXware's healthcare agents are certified in HIPAA protocols and trained to handle sensitive patient interactions with the care and professionalism your patients deserve.",
    features: [
      {
        title: "HIPAA & HITRUST",
        description: "Full HIPAA and HITRUST compliance with secure workspaces, encrypted data, and regular audits.",
        icon: "shield",
      },
      {
        title: "Patient Engagement",
        description: "Compassionate agents trained in healthcare communication and patient engagement best practices.",
        icon: "heart",
      },
      {
        title: "Benefits Navigation",
        description: "Help patients understand insurance coverage, copays, deductibles, and out-of-pocket costs.",
        icon: "knowledge",
      },
      {
        title: "Open Enrollment Support",
        description: "Scale for open enrollment periods with agents trained on plan options and enrollment processes.",
        icon: "scale",
      },
    ],
    benefits: [
      "Full HIPAA, HITRUST, and SOC II compliance",
      "Improve patient satisfaction and NPS scores",
      "Scale for open enrollment and seasonal peaks",
      "Reduce no-show rates with proactive outreach",
      "Handle multilingual patient populations",
      "Maintain data security and privacy at every step",
    ],
    stats: [
      { value: "HIPAA", label: "Compliant" },
      { value: "20%+", label: "CSAT Improvement" },
      { value: "3x", label: "Enrollment Scaling" },
      { value: "99.9%", label: "Data Security" },
    ],
    useCases: [
      "Patient scheduling and appointment management",
      "Insurance and benefits support",
      "Prescription and pharmacy assistance",
      "Health plan enrollment services",
      "Post-care follow-up and patient surveys",
    ],
    ctaTitle: "Transform Your Patient Experience",
    ctaDescription: "Deliver compassionate, HIPAA-compliant patient support with CXware's healthcare agents.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: "solution" | "industry"): Service[] {
  return services.filter((s) => s.category === category);
}

export function getOtherServices(currentSlug: string): Service[] {
  return services.filter((s) => s.slug !== currentSlug).slice(0, 4);
}
