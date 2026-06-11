import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service - WingCX Agent Solutions",
  description:
    "The terms and conditions that govern your use of the WingCX website, platform, and workforce services.",
};

type LegalSection = {
  id?: string;
  title: string;
  body: string[];
};

const sections: LegalSection[] = [
  {
    title: "1. Acceptance of Terms",
    body: [
      "These Terms of Service (\"Terms\") govern your access to and use of the websites, platform, and services operated by WingCX Agent Solutions (\"WingCX,\" \"we,\" \"us,\" or \"our\"), including wingcx.com, its subdomains, and any related applications, tools, and content (collectively, the \"Services\").",
      "By accessing or using the Services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy, which is incorporated by reference. If you are using the Services on behalf of an organization, you represent that you have authority to bind that organization, and \"you\" refers to both you and the organization. If you do not agree to these Terms, you must not access or use the Services.",
      "We may modify these Terms at any time. The current version will always be posted on this page with its effective date. Your continued use of the Services after changes become effective constitutes acceptance of the revised Terms.",
    ],
  },
  {
    title: "2. Eligibility",
    body: [
      "You must be at least 18 years of age and have the legal capacity and authority to enter into these Terms, whether on your own behalf or on behalf of the organization you represent. By using the Services you represent and warrant that you meet these requirements, that any registration information you submit is truthful and accurate, and that your use of the Services complies with all laws and regulations applicable to you.",
      "The Services are not directed to, and may not be used by, any person under the age of 13 under any circumstances.",
    ],
  },
  {
    title: "3. Services Provided",
    body: [
      "WingCX provides workforce operations solutions for contact centers, including flexible staffing, demand forecasting, precision scheduling, agent matching and certification, quality assurance, performance analytics, and related support services. The specific services delivered to a business client are described in the applicable service agreement, statement of work, or order form (each, a \"Service Agreement\").",
      "Where these Terms conflict with an executed Service Agreement, the Service Agreement controls with respect to the services it covers.",
      "We are continuously improving the Services and may update, enhance, modify, or discontinue any component at our discretion. Where a change materially reduces functionality covered by an active Service Agreement, that agreement governs your remedies.",
    ],
  },
  {
    title: "4. Permission to Use the Services",
    body: [
      "Subject to your compliance with these Terms, WingCX grants you a limited, non-exclusive, non-transferable, revocable right to access and use the Services for their intended purpose. Unless expressly authorized in a Service Agreement, the Services are made available for your internal business or personal use only and not for resale or commercial redistribution.",
      "This permission automatically terminates if you violate these Terms. We reserve all rights not expressly granted to you.",
    ],
  },
  {
    title: "5. Accounts, Passwords & Security",
    body: [
      "Certain features require an account. You agree to provide accurate, current, and complete information during registration and to keep it updated. You may not use another person's account, impersonate any person or entity, or misrepresent your affiliation with any person or entity.",
      "You are responsible for maintaining the confidentiality of your credentials and for all activity that occurs under your account, whether or not authorized by you. You agree to notify us promptly at contact@wingcx.com of any suspected unauthorized access to or use of your account.",
      "While we maintain safeguards designed to protect accounts, WingCX cannot and does not guarantee that unauthorized access will never occur, and we are not liable for losses arising from unauthorized use of your account caused by your failure to safeguard your credentials. You may be held liable for losses incurred by WingCX or others due to unauthorized use of your account where attributable to your negligence.",
    ],
  },
  {
    title: "6. Acceptable Use",
    body: [
      "You agree not to, and not to permit any third party to: (a) use the Services for any unlawful, fraudulent, or malicious purpose; (b) interfere with or disrupt the integrity, performance, or availability of the Services; (c) attempt to gain unauthorized access to the Services, other users' accounts, or related systems or networks; (d) probe, scan, or test the vulnerability of the Services without our written authorization; (e) decompile, disassemble, reverse engineer, or otherwise attempt to derive the source code of any software component of the Services; (f) frame, mirror, scrape, or use robots, spiders, or other automated means to access or collect data from the Services; (g) misrepresent your identity or affiliation; (h) resell, sublicense, rent, or lease the Services without our written consent; (i) transmit viruses, worms, or other harmful code; (j) send unsolicited commercial communications through the Services; or (k) post or transmit content that is illegal, infringing, defamatory, obscene, threatening, or harassing, or that exploits or harms minors.",
      "We may investigate suspected violations, remove content, and suspend or terminate access for violations of this section, in each case without prior notice. We may also report unlawful activity to law enforcement.",
    ],
  },
  {
    title: "7. Text Message & Email Communications",
    body: [
      "By providing your phone number, you consent to receive informational, transactional, and marketing text messages from WingCX, including messages sent via automated technology. Consent to marketing messages is not a condition of any purchase. Message frequency varies, and message and data rates may apply. You may opt out of text messages at any time by replying \"STOP\" to any message; account and service notifications may continue where permitted by law.",
      "By creating an account or providing your email address, you consent to receive communications from us electronically, and you agree that all agreements, notices, disclosures, and other communications we provide electronically satisfy any legal requirement that such communications be in writing. Marketing emails include an unsubscribe link.",
    ],
  },
  {
    title: "8. Fees & Payment",
    body: [
      "Fees for business services are set out in your Service Agreement or order form. Unless otherwise stated there, fees are quoted and payable in U.S. dollars and invoices are due upon the terms specified in that agreement. You are responsible for all applicable taxes other than taxes on our net income.",
      "Late payments may accrue interest at the lesser of 1.5% per month or the maximum rate permitted by law, plus reasonable costs of collection. We may suspend Services for accounts that are materially past due after notice. Except as expressly stated in a Service Agreement or required by law, fees are non-refundable.",
    ],
  },
  {
    title: "9. Intellectual Property",
    body: [
      "All content, software, technology, designs, text, graphics, logos, trademarks, service marks, and other materials provided through the Services (collectively, \"WingCX Content\") are the property of WingCX or its licensors and are protected by copyright, trademark, trade secret, and other intellectual property laws.",
      "Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use WingCX Content solely as needed to use the Services for their intended purpose. No ownership rights are transferred to you, and you acquire no right to use any WingCX name, logo, or trademark without our prior written consent.",
      "You may not copy, republish, upload, post, transmit, distribute, publicly display, create derivative works from, or otherwise exploit any part of the Services or WingCX Content without our prior written consent. Permission is granted to view, download, and print materials we make expressly available for that purpose, provided you do not remove proprietary notices and use them only for your internal evaluation of the Services.",
    ],
  },
  {
    title: "10. User Content",
    body: [
      "\"User Content\" means any information, text, files, feedback, reviews, or other materials you submit, upload, or transmit through the Services. You retain ownership of your User Content.",
      "By submitting User Content, you grant WingCX a worldwide, non-exclusive, royalty-free, sublicensable license to host, store, use, reproduce, modify (for formatting purposes), display, and distribute that content as needed to operate, improve, market, and provide the Services. This license continues for as long as needed to fulfill those purposes and survives termination with respect to copies retained in routine backups and as required by law.",
      "You are solely responsible for your User Content. You represent and warrant that you own or have all rights necessary to grant the license above, and that your User Content does not infringe or misappropriate any third party's rights, violate any law, breach any confidentiality or contractual obligation, or contain anything unlawful, defamatory, or harmful.",
      "We do not undertake to review User Content and we do not endorse or guarantee its accuracy. We assume no responsibility or liability for User Content, and we may remove or refuse any User Content at our discretion, without notice, including content we believe violates these Terms.",
      "Do not submit anything you consider confidential through public-facing features of the Services. Except as described in our Privacy Policy or a Service Agreement, we assume no obligation to keep User Content confidential.",
    ],
  },
  {
    title: "11. Feedback",
    body: [
      "If you provide suggestions, ideas, improvements, or other feedback about the Services, you agree that we may use them without restriction or compensation to you, and you hereby assign to WingCX all rights in such feedback.",
    ],
  },
  {
    title: "12. Copyright Complaints (DMCA)",
    body: [
      "We respect intellectual property rights and will respond to notices of alleged copyright infringement that comply with applicable law. To report claimed infringement, send a written notice to contact@wingcx.com including: (a) your physical or electronic signature; (b) identification of the copyrighted work claimed to be infringed; (c) identification of the material claimed to be infringing and its location on the Services; (d) your name, address, telephone number, and email address; (e) a statement that you have a good-faith belief that the use is not authorized by the copyright owner, its agent, or the law; and (f) a statement, made under penalty of perjury, that the information in your notice is accurate and that you are the copyright owner or authorized to act on the owner's behalf.",
      "We may remove or disable access to allegedly infringing material without prior notice and without liability. It is our policy to terminate, in appropriate circumstances, the accounts of repeat infringers — including users about whom we receive multiple valid infringement notices.",
    ],
  },
  {
    title: "13. Confidentiality",
    body: [
      "\"Confidential Information\" means non-public, proprietary, or sensitive information disclosed by one party to the other in connection with the Services that is marked confidential or that a reasonable person would understand to be confidential, including business plans, pricing, customer data, and technical information.",
      "Each party agrees to: (a) protect the other party's Confidential Information using at least the same degree of care it uses for its own similar information, and no less than reasonable care; (b) use it only as needed to perform under these Terms or the applicable Service Agreement; and (c) not disclose it to third parties except to employees, contractors, and advisors with a need to know who are bound by confidentiality obligations at least as protective, or as required by law (with prompt notice to the disclosing party where legally permitted).",
      "Confidentiality obligations survive termination of these Terms for five (5) years, and indefinitely with respect to trade secrets.",
    ],
  },
  {
    title: "14. Data Privacy",
    body: [
      "Your use of the Services is also governed by our Privacy Policy, which describes how we collect, use, share, and protect personal information, including our use of cookies and similar technologies. By using the Services, you consent to the collection and processing of information as described there.",
      "Where WingCX processes personal data on behalf of a business client, the parties' respective obligations are set out in the applicable Service Agreement and any data processing addendum.",
    ],
  },
  {
    title: "15. Third-Party Websites, Products & Services",
    body: [
      "The Services may contain links to third-party websites, or integrate with third-party platforms and tools, that we do not own or control. Links and integrations are provided for convenience only and do not constitute endorsement. We are not responsible for the content, accuracy, availability, or privacy practices of third parties, and your use of third-party services is governed solely by their own terms and policies.",
      "If you purchase products or services from a third-party vendor through or in connection with the Services, the transaction is between you and that vendor. WingCX is not a party to, and assumes no responsibility for, such transactions unless WingCX is expressly identified as the vendor.",
    ],
  },
  {
    title: "16. Storage & Availability",
    body: [
      "We do not promise to store or make available on the Services any User Content for any length of time. You are solely responsible for maintaining backup copies of anything you submit through the Services.",
      "We may, with or without notice, interrupt, limit, suspend, or cease operation of all or part of the Services for maintenance, upgrades, security, or any other reason. While we target high availability, the Services may be unavailable from time to time, and WingCX is not liable for any unavailability, interruption, or loss of data except as expressly provided in an applicable Service Agreement.",
    ],
  },
  {
    title: "17. International Users & Export Control",
    body: [
      "The Services are operated from the United States and are intended for users located in the United States unless otherwise agreed in a Service Agreement. If you access the Services from other locations, you do so on your own initiative and are responsible for compliance with local laws.",
      "You may not use, export, re-export, or transfer the Services or any related software or technology in violation of applicable export control and sanctions laws, including those of the United States. You represent that you are not located in, or a resident of, any country or on any list to which such restrictions apply.",
    ],
  },
  {
    title: "18. Disclaimers",
    body: [
      "THE SERVICES AND ALL CONTENT ARE PROVIDED \"AS IS\" AND \"AS AVAILABLE,\" WITHOUT WARRANTIES OF ANY KIND, EXPRESS, IMPLIED, OR STATUTORY, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT, AND ANY WARRANTIES ARISING FROM COURSE OF DEALING OR USAGE OF TRADE.",
      "WITHOUT LIMITING THE FOREGOING, WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE; THAT DEFECTS WILL BE CORRECTED; THAT THE SERVICES ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS; OR THAT ANY CONTENT, FORECAST, OR ANALYTIC OUTPUT IS ACCURATE, COMPLETE, OR RELIABLE. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES, SO SOME OF THE ABOVE EXCLUSIONS MAY NOT APPLY TO YOU.",
    ],
  },
  {
    title: "19. Limitation of Liability",
    body: [
      "TO THE MAXIMUM EXTENT PERMITTED BY LAW, WINGCX AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, AND LICENSORS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR LOST PROFITS, REVENUE, DATA, GOODWILL, OR BUSINESS INTERRUPTION, ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE SERVICES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES AND REGARDLESS OF THE THEORY OF LIABILITY.",
      "OUR TOTAL AGGREGATE LIABILITY ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICES SHALL NOT EXCEED THE AMOUNTS PAID BY YOU TO WINGCX FOR THE SERVICES IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM, OR ONE HUNDRED U.S. DOLLARS ($100) IF YOU HAVE PAID NO SUCH AMOUNTS.",
      "THE LIMITATIONS IN THIS SECTION APPLY EVEN IF ANY LIMITED REMEDY FAILS OF ITS ESSENTIAL PURPOSE. SOME JURISDICTIONS DO NOT ALLOW THE LIMITATION OF LIABILITY FOR CERTAIN DAMAGES, SO SOME OF THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU.",
    ],
  },
  {
    title: "20. Indemnification",
    body: [
      "You agree to indemnify, defend, and hold harmless WingCX and its officers, directors, employees, agents, and licensors from and against any claims, demands, actions, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising out of or related to: (a) your use of the Services; (b) your User Content; (c) your violation of these Terms; or (d) your violation of any law or any rights of a third party. We reserve the right, at your expense, to assume the exclusive defense and control of any matter subject to indemnification by you, in which case you agree to cooperate with our defense. This obligation survives termination of these Terms.",
    ],
  },
  {
    title: "21. Termination & Suspension",
    body: [
      "You may stop using the Services at any time. Termination of an active Service Agreement is governed by that agreement.",
      "We may suspend or terminate your access to all or part of the Services at any time, with or without cause and with or without notice, including for violation of these Terms, non-payment, suspected fraudulent or illegal activity, or conduct that poses risk to the Services, other users, or third parties. Termination for cause is effective immediately, and fees paid are not refunded.",
      "Upon termination, your right to use the Services ceases immediately. Provisions concerning intellectual property, confidentiality, feedback, disclaimers, limitation of liability, indemnification, dispute resolution, and any other provision that by its nature should survive, survive termination.",
    ],
  },
  {
    title: "22. Governing Law & Dispute Resolution",
    body: [
      "These Terms are governed by the laws of the State of Florida, without regard to its conflict-of-laws principles. The United Nations Convention on Contracts for the International Sale of Goods does not apply.",
      "Before filing any formal dispute, you agree to first contact us at contact@wingcx.com and attempt in good faith to resolve the matter informally for at least thirty (30) days.",
      "Any dispute arising out of or relating to these Terms or the Services that cannot be resolved informally shall be settled by binding arbitration conducted in Florida before a single arbitrator, on an individual basis and not as a plaintiff or class member in any purported class or representative proceeding. Judgment on the award may be entered in any court of competent jurisdiction. Either party may seek injunctive or equitable relief in a court of competent jurisdiction to protect its intellectual property or Confidential Information, and either party may bring qualifying claims in small-claims court.",
      "ANY CLAIM ARISING OUT OF OR RELATED TO THE SERVICES MUST BE FILED WITHIN ONE (1) YEAR AFTER THE EVENT GIVING RISE TO THE CLAIM; OTHERWISE THE CLAIM IS PERMANENTLY BARRED.",
    ],
  },
  {
    title: "23. Changes to These Terms",
    body: [
      "We may revise these Terms from time to time to reflect changes in the Services, our business, or applicable law. The most current version will always be posted on this page with an updated effective date. If a change is material, we will provide notice by email, by a notice on the website, or by other reasonable means before it takes effect. Continued use of the Services after changes take effect constitutes acceptance of the revised Terms; if you do not agree, you must stop using the Services.",
    ],
  },
  {
    title: "24. Notices",
    body: [
      "We may provide notices to you by email to the address associated with your account, by posting on the Services, or by other reasonable means. Notices are deemed effective upon posting or, if sent by email, when sent. You are responsible for keeping your contact information current.",
      "Legal notices to WingCX must be sent to contact@wingcx.com with a copy by mail to our registered business address, and are effective upon receipt.",
    ],
  },
  {
    title: "25. Force Majeure",
    body: [
      "WingCX is not liable for any delay or failure to perform resulting from causes beyond its reasonable control, including acts of God, natural disasters, pandemic, war, terrorism, riots, labor disputes, governmental action, internet or utility failures, or failures of third-party hosting or communication providers.",
    ],
  },
  {
    title: "26. Additional Terms",
    body: [
      "Certain features, programs, or promotions may be subject to additional posted terms (for example, agent program policies or beta-feature terms). Those additional terms are incorporated into these Terms with respect to the applicable feature, and control in the event of a direct conflict with respect to that feature.",
    ],
  },
  {
    title: "27. Miscellaneous",
    body: [
      "These Terms, together with the Privacy Policy, any applicable Service Agreement, and any additional posted terms, constitute the entire agreement between you and WingCX regarding the Services and supersede all prior or contemporaneous understandings.",
      "If any provision of these Terms is held invalid or unenforceable, that provision will be enforced to the maximum extent permissible and the remaining provisions will remain in full force and effect. Our failure to enforce any right or provision is not a waiver of that right or provision.",
      "You may not assign or transfer these Terms or any rights hereunder without our prior written consent, and any attempted assignment in violation of this section is void. We may assign these Terms without restriction, including in connection with a merger, acquisition, or sale of assets. These Terms do not create any agency, partnership, joint venture, or employment relationship between you and WingCX.",
    ],
  },
  {
    title: "28. Contact Us",
    body: [
      "Questions about these Terms? Contact us at contact@wingcx.com. We respond to most inquiries within two business days.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="relative pt-32 pb-24 overflow-hidden bg-[var(--bg)]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="aurora-blob w-[440px] h-[440px] -top-32 -right-32" style={{ opacity: 0.16 }} />
        </div>

        <div className="relative max-w-4xl mx-auto px-6">
          <span className="eyebrow-brand"><span>LEGAL</span></span>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--fg)] mt-4 mb-3 leading-[1.05]">
            Terms of <span className="gradient-text">Service</span>
          </h1>
          <p className="mono text-[12px] text-[var(--fg-faint)] uppercase tracking-[0.14em] mb-10">
            Effective date: June 11, 2026
          </p>

          {/* Quick table of contents */}
          <nav aria-label="Sections" className="panel-inset p-5 mb-12">
            <p className="label mb-3">On this page</p>
            <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5">
              {sections.map((s) => (
                <li key={s.title}>
                  <a
                    href={`#${slugify(s.title)}`}
                    className="text-[13px] text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors duration-200"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="space-y-10">
            {sections.map((s) => (
              <div key={s.title} id={s.id ?? slugify(s.title)} className="scroll-mt-28">
                <h2 className="text-[20px] font-semibold tracking-[-0.01em] mb-3">{s.title}</h2>
                {s.body.map((p) => (
                  <p key={p.slice(0, 40)} className="text-[15px] text-[var(--fg-muted)] leading-[1.7] mb-3 text-pretty">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-14 panel p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-[14.5px] text-[var(--fg-muted)]">
              See also our{" "}
              <Link href="/privacy" className="gradient-text font-semibold hover:underline underline-offset-4">
                Privacy Policy
              </Link>
              .
            </p>
            <Link href="/contact" className="btn btn-ghost">
              Contact us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}
