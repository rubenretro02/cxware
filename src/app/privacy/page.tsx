import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy - WingCX Agent Solutions",
  description:
    "How WingCX collects, uses, shares, and protects personal information across our website, platform, and workforce services — including our cookie policy.",
};

type LegalSection = {
  id?: string;
  title: string;
  body: string[];
  list?: string[];
};

const sections: LegalSection[] = [
  {
    title: "1. Scope of This Policy",
    body: [
      "This Privacy Policy applies to personal information processed by WingCX Agent Solutions (\"WingCX,\" \"we,\" \"us,\" or \"our\") through our websites, platform, and services (collectively, the \"Services\"), whether you interact with us as a business client, a prospective or active independent agent, a job applicant, or a website visitor.",
      "Where WingCX processes personal information on behalf of a business client (for example, information about the client's customers handled by agents on a program), the client controls that data and this Policy applies only to the extent of our role as a processor; the client's own privacy policy governs how that data is used. Requests concerning such data should be directed to the relevant business.",
    ],
  },
  {
    title: "2. Information You Provide Directly",
    body: [
      "We collect personal information you choose to give us, depending on how you interact with the Services:",
    ],
    list: [
      "Contact and identity data — name, email address, phone number, mailing address, and company when you request a consultation, subscribe to communications, or contact us.",
      "Agent application and onboarding data — work history, skills, certifications, language proficiency, government-issued identification used for identity verification, the results of background checks conducted by authorized vendors, and tax and payment information needed to pay you for completed work.",
      "Account data — credentials, profile details, scheduling preferences, and program selections.",
      "Communications — the contents of messages, support requests, surveys, and feedback you send us.",
      "Recruiting data — résumés and related materials if you apply for a corporate role with us.",
    ],
  },
  {
    title: "3. Information Collected Automatically",
    body: [
      "When you use the Services, we and our service providers automatically collect certain information using cookies, web beacons, pixels, software development kits, and similar technologies:",
    ],
    list: [
      "Device and connection data — IP address, browser type and version, operating system, device identifiers, and screen characteristics.",
      "Usage data — pages viewed, links clicked, referring URLs, search terms, session duration, and timestamps.",
      "Approximate location — inferred from IP address, used for security, localization, and analytics.",
      "Performance data — load times, errors, and diagnostic information that help us keep the Services fast and reliable.",
    ],
  },
  {
    title: "4. Information From Third Parties",
    body: [
      "We may receive information about you from third parties, including: analytics providers (such as Google Analytics) that help us evaluate how visitors use the Services; identity-verification and background-check vendors used during agent onboarding, to the extent permitted by law and with required consents; business partners with whom we run co-branded programs or events; publicly available professional sources; and service providers that help us prevent fraud and secure the Services. We may combine this information with information we collect directly.",
    ],
  },
  {
    title: "5. Call Recordings & Quality Monitoring",
    body: [
      "It is our general practice to monitor, and in some cases record, calls, chats, and other interactions handled through our programs for training, quality assurance, compliance, and dispute-resolution purposes. Where required by law, participants are notified that an interaction may be recorded. Recordings are retained according to documented retention schedules, access is restricted to personnel with a need to know, and recordings handled on behalf of a business client are governed by that client's instructions and applicable law.",
      "We do not use recordings to make automated decisions that produce legal or similarly significant effects about individuals without human review.",
    ],
  },
  {
    title: "6. How We Use Your Information",
    body: ["We use personal information for the following purposes:"],
    list: [
      "Providing the Services — operating the platform, matching and scheduling agents, running programs for business clients, and providing support.",
      "Transactions — processing payments to agents and invoicing clients.",
      "Agent qualification — evaluating applications, verifying identity, administering certifications, and managing program performance.",
      "Communications — responding to inquiries, sending service and account notices, and sending marketing communications you have not opted out of.",
      "Improvement and analytics — understanding how the Services are used, measuring performance, developing new features, and improving forecasting and quality models.",
      "Personalization — remembering preferences and tailoring content to your interests.",
      "Security and fraud prevention — detecting, investigating, and preventing fraudulent, unauthorized, or illegal activity, and protecting the Services and their users.",
      "Legal compliance — complying with applicable laws, regulations, and legal processes, and enforcing our agreements.",
    ],
  },
  {
    title: "7. How We Share Your Information",
    body: [
      "WingCX does not sell your personal information, and we do not share it with third parties for cross-context behavioral advertising. We share personal information only in the following circumstances:",
    ],
    list: [
      "Service providers — vendors that process data on our behalf (hosting, analytics, communications, payment processing, identity verification, background checks) under contracts that restrict their use of the data to our instructions.",
      "Business clients — where you work as an agent on a client's program, we share the information that program reasonably requires, such as certification status and performance metrics.",
      "Co-branded programs — where you knowingly submit information through a promotion run with an identified partner, that partner receives it and their privacy policy also applies.",
      "Legal requirements — courts, regulators, and law enforcement where required by law, subpoena, or other legal process, or where necessary to protect rights, safety, or property.",
      "Corporate transactions — in connection with a merger, acquisition, financing, or sale of assets, in which case this Policy will continue to apply to your information until a successor policy takes effect with notice to you.",
      "Affiliates — entities under common ownership with WingCX, who handle it consistently with this Policy.",
    ],
  },
  {
    id: "cookies",
    title: "8. Cookie Policy",
    body: [
      "Cookies are small text files placed on your device that allow a website to recognize your browser. We use the following categories of cookies and similar technologies:",
    ],
    list: [
      "Strictly necessary cookies — required for core functionality such as security, session management, and remembering your cookie preferences. These cannot be switched off through our banner.",
      "Performance and analytics cookies — help us understand how visitors use the Services (pages visited, errors, load times) so we can improve them. We use providers such as Google Analytics for this purpose.",
      "Functional cookies — remember choices you make (such as region or saved preferences) to provide a more personalized experience.",
      "Marketing cookies — measure the effectiveness of our campaigns and limit how often you see a message. We do not permit third parties to use our Services to build advertising profiles of you across unrelated sites.",
    ],
  },
  {
    title: "9. Your Cookie Choices",
    body: [
      "When you first visit our website, a consent banner lets you accept all cookies or limit them to those that are strictly necessary. You can change your choice at any time by clearing the site's stored data in your browser, after which the banner will appear again.",
      "Most browsers also allow you to refuse or delete cookies through their settings. Doing so may limit some functionality of the Services. At this time, our Services respond to applicable opt-out preference signals (such as Global Privacy Control) where required by law; like most websites, we do not otherwise respond to \"Do Not Track\" browser signals because no common industry standard exists for them.",
    ],
  },
  {
    title: "10. How We Protect Personal Information",
    body: [
      "We maintain administrative, technical, and physical safeguards designed to protect personal information, appropriate to the sensitivity of the data, including: encryption of data in transit and at rest; least-privilege, role-based access controls with periodic access reviews; identity verification of all agents before they access program systems; hardened endpoint requirements for remote workstations; continuous monitoring and logging; vendor security assessments; and documented incident-response procedures that we exercise on a schedule.",
      "Despite our efforts, no security program can eliminate all possible risk, and we cannot promise that information transmitted to or stored by us will always remain secure. If we determine that a breach of security has compromised your personal information, we will notify you as required by applicable law.",
    ],
  },
  {
    title: "11. Data Retention",
    body: [
      "We retain personal information only as long as reasonably necessary for the purposes described in this Policy, including providing the Services, complying with legal, tax, and accounting obligations, resolving disputes, and enforcing agreements.",
      "Retention periods vary by data type: account data is generally retained for the life of the account plus a limited wind-down period; agent onboarding records are retained as required by employment, tax, and contractor regulations; interaction recordings follow program-specific schedules agreed with the relevant business client; and analytics data is aggregated or de-identified where feasible. When retention ends, data is deleted or irreversibly de-identified in accordance with our disposal procedures.",
    ],
  },
  {
    title: "12. Your Choices & Rights",
    body: [
      "You may access, correct, update, or request deletion of your personal information by contacting us at privacy@wingcx.com. We will verify your identity before acting on a request — typically by confirming control of the email address or account associated with the data — and will respond within the timeframe required by applicable law, and in any event within thirty (30) days for most requests. You may authorize another person to submit a request on your behalf; we will require proof of that authorization.",
      "Marketing emails include an unsubscribe link, and you can opt out of marketing at any time without affecting service communications. If you receive text messages from us, reply \"STOP\" to opt out; transactional and account notifications may continue where permitted.",
    ],
  },
  {
    title: "13. California Privacy Rights",
    body: [
      "If you are a California resident, the California Consumer Privacy Act as amended (CCPA/CPRA) gives you the right to: know the categories and specific pieces of personal information we have collected about you, the categories of sources, the business purposes for collection, and the categories of third parties with whom it is shared; access a portable copy of that information; correct inaccurate information; delete information, subject to legal exceptions; opt out of the \"sale\" or \"sharing\" of personal information (WingCX does not sell or share personal information as those terms are defined by the CCPA); and limit the use of sensitive personal information (we use it only for purposes permitted without a right to limit).",
      "In the preceding twelve months, we have collected the categories of personal information described in Sections 2–4: identifiers, professional information, commercial information, internet activity, audio recordings, and inferences for service quality. We collect them from the sources, for the purposes, and share them with the recipients described in this Policy.",
      "To exercise these rights, email privacy@wingcx.com with the subject \"California Privacy Request.\" We will not discriminate against you for exercising any privacy right — we will not deny services, charge different prices, or provide a different level of quality because you exercised a right.",
    ],
  },
  {
    title: "14. Other U.S. State Privacy Rights",
    body: [
      "Residents of states with comprehensive privacy laws — including Colorado, Connecticut, Texas, Oregon, Virginia, Utah, and others — may have similar rights of access, correction, deletion, portability, and opt-out of targeted advertising, sale, or certain profiling. We honor these rights regardless of which state's law applies to you. If we decline a request, you may appeal by replying to our decision email with \"Appeal\" in the subject line; we will respond to appeals within the period required by your state's law.",
      "Nevada residents: we do not sell covered information as defined by Nevada law; you may nonetheless register your preference by emailing privacy@wingcx.com.",
    ],
  },
  {
    title: "15. EU, UK & Other International Visitors",
    body: [
      "Our Services are operated from the United States and are directed primarily to U.S. audiences. If you visit from the European Economic Area, the United Kingdom, or another jurisdiction with data protection laws, please note that your information will be transferred to, stored, and processed in the United States, where laws may differ from those of your jurisdiction.",
      "Where the GDPR or UK GDPR applies to specific processing we undertake, our legal bases are: performance of a contract (operating programs and accounts), legitimate interests (security, analytics, service improvement), consent (marketing and non-essential cookies, which you may withdraw at any time), and legal obligation. You may have rights to access, rectify, erase, restrict, or object to processing and to data portability, and to lodge a complaint with your supervisory authority. Contact privacy@wingcx.com to exercise them, and we will apply appropriate safeguards to any restricted international transfer.",
    ],
  },
  {
    title: "16. Privacy of Minors",
    body: [
      "The Services are not directed to children under the age of 13 (or under 16 where applicable law sets a higher threshold), and we do not knowingly collect personal information from children. If you believe a child has provided us personal information, contact us at privacy@wingcx.com and we will promptly delete it.",
    ],
  },
  {
    title: "17. Third-Party Websites",
    body: [
      "Our websites may link to third-party sites whose privacy practices we do not control, and this Policy does not apply to them. We encourage you to review the privacy policy of every site you visit. The presence of a link does not imply endorsement.",
    ],
  },
  {
    title: "18. Changes to This Privacy Policy",
    body: [
      "We may update this Policy from time to time to reflect changes in our practices, technology, or legal requirements. The current version will always be posted on this page with an updated effective date. If a change materially affects how we handle previously collected personal information, we will provide prominent notice on the website or by email before it takes effect. Your continued use of the Services after a revised Policy becomes effective indicates your agreement to it.",
    ],
  },
  {
    title: "19. Contact Us",
    body: [
      "If you have questions, concerns, or complaints about this Privacy Policy or how your information is handled, contact our privacy team at privacy@wingcx.com or contact@wingcx.com. We take every inquiry seriously and respond to most within two business days.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="relative pt-32 pb-24 overflow-hidden bg-[var(--bg)]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="aurora-blob w-[440px] h-[440px] -top-32 -left-32" style={{ opacity: 0.16 }} />
        </div>

        <div className="relative max-w-4xl mx-auto px-6">
          <span className="eyebrow-brand"><span>LEGAL</span></span>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--fg)] mt-4 mb-3 leading-[1.05]">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="mono text-[12px] text-[var(--fg-faint)] uppercase tracking-[0.14em] mb-10">
            Effective date: June 11, 2026
          </p>

          <p className="text-[15px] text-[var(--fg-muted)] leading-[1.7] mb-10 text-pretty">
            WingCX Agent Solutions respects your privacy. This Privacy Policy describes how we
            collect, use, share, and protect personal information when you use our websites,
            platform, and services, whether as a business client, an independent agent, a job
            applicant, or a visitor. It also explains the choices and rights available to you.
          </p>

          {/* Quick table of contents */}
          <nav aria-label="Sections" className="panel-inset p-5 mb-12">
            <p className="label mb-3">On this page</p>
            <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5">
              {sections.map((s) => (
                <li key={s.title}>
                  <a
                    href={`#${s.id ?? slugify(s.title)}`}
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
                {s.list && (
                  <ul className="space-y-2.5 mt-1 mb-3">
                    {s.list.map((item) => (
                      <li key={item.slice(0, 40)} className="flex items-start gap-3 text-[15px] text-[var(--fg-muted)] leading-[1.65]">
                        <span
                          className="mt-[9px] w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: "var(--grad)" }}
                        />
                        <span className="text-pretty">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="mt-14 panel p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-[14.5px] text-[var(--fg-muted)]">
              See also our{" "}
              <Link href="/terms" className="gradient-text font-semibold hover:underline underline-offset-4">
                Terms of Service
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
