import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy - WingCX Agent Solutions",
  description:
    "How WingCX collects, uses, shares, and protects personal information across our website, platform, and workforce services.",
};

const sections = [
  {
    title: "1. Information We Collect",
    body: [
      "Information you provide directly. When you request a consultation, apply to become an agent, create an account, or contact us, we may collect identifiers such as your name, email address, phone number, mailing address, and company; professional information such as work history, skills, and certifications; and, for agents completing onboarding, information needed for identity verification, background checks, and payment.",
      "Information collected automatically. When you visit our websites we automatically collect usage data such as IP address, browser type, device identifiers, pages viewed, referring URLs, and timestamps, using cookies, web beacons, and similar technologies. This helps us operate, secure, and improve the Services.",
      "Information from third parties. We may receive information from vendors that support our operations — for example, analytics providers, identity-verification and background-check services used during agent onboarding, and business partners with whom we run co-branded programs.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    body: [
      "We use personal information to: provide and operate the Services; process transactions and payments; evaluate agent applications and qualifications; communicate with you about the Services, including support and service notices; send marketing communications you have not opted out of; personalize your experience; monitor, secure, and improve the Services; prevent fraud and abuse; and comply with legal obligations.",
      "We retain personal information only as long as necessary for the purposes described in this Policy or as required by law, after which it is disposed of in accordance with our retention practices.",
    ],
  },
  {
    title: "3. How We Share Your Information",
    body: [
      "WingCX does not sell your personal information. We share personal information only as described in this Policy: with service providers who process data on our behalf (hosting, analytics, communications, background checks, payments) under contractual confidentiality obligations; with business clients, where you work as an agent on their program, limited to what the program requires; with legal and law enforcement authorities when required by law, subpoena, or to protect rights, safety, or property; and in connection with a merger, acquisition, or sale of assets, in which case this Policy will continue to apply to your information.",
    ],
  },
  {
    title: "4. Cookies & Tracking Technologies",
    body: [
      "We and our analytics partners (such as Google Analytics) use cookies and similar technologies to remember your preferences, measure site performance, and understand how visitors use the Services. Most browsers allow you to refuse or delete cookies through their settings; doing so may limit some functionality. Where required, we honor applicable opt-out signals.",
    ],
  },
  {
    title: "5. Service Quality Monitoring",
    body: [
      "It is our general practice to monitor, and in some cases record, calls and other interactions handled through our programs for training, quality assurance, and compliance purposes. Where recording occurs, access and retention follow documented policy and applicable law.",
    ],
  },
  {
    title: "6. How We Protect Personal Information",
    body: [
      "We use commercially reasonable administrative, technical, and physical safeguards designed to protect personal information, including encryption in transit and at rest, least-privilege access controls, and continuous monitoring. No security program can eliminate all risk, and despite our efforts we cannot guarantee the absolute security of information transmitted to or stored by us.",
    ],
  },
  {
    title: "7. Your Choices & Rights",
    body: [
      "You may access, update, or request deletion of your personal information by contacting us at privacy@wingcx.com. We will verify your identity before acting on a request and will respond within the timeframe required by applicable law (and in any event within thirty days for most requests).",
      "Marketing emails include an unsubscribe link. If you receive text messages from us, reply \"STOP\" to opt out; transactional and account notifications may continue where permitted.",
    ],
  },
  {
    title: "8. California & Other U.S. State Privacy Rights",
    body: [
      "Residents of California and other states with comprehensive privacy laws may have rights to: know the categories of personal information we collect and the purposes for which it is used; access a copy of their personal information; correct inaccurate information; request deletion; and opt out of the sale or sharing of personal information for targeted advertising. We do not sell personal information. To exercise these rights, contact privacy@wingcx.com. We will not discriminate against you for exercising any privacy right.",
    ],
  },
  {
    title: "9. International Data Transfers",
    body: [
      "We operate primarily in the United States. If you access the Services from another jurisdiction, you understand that your information may be transferred to, stored, and processed in countries where data protection laws may differ from those of your jurisdiction. Where required, we use appropriate safeguards for such transfers.",
    ],
  },
  {
    title: "10. Privacy of Minors",
    body: [
      "The Services are not directed to children under the age of 13 (or the age of 16 where applicable), and we do not knowingly collect personal information from children. If you believe a child has provided us personal information, contact us at privacy@wingcx.com and we will delete it.",
    ],
  },
  {
    title: "11. Third-Party Websites",
    body: [
      "Our websites may link to third-party sites whose privacy practices we do not control. This Policy does not apply to those sites, and we encourage you to review their privacy policies. For co-branded promotions, information you submit may also be shared with the identified partner, whose use is governed by their own policy.",
    ],
  },
  {
    title: "12. Changes to This Privacy Policy",
    body: [
      "We may update this Policy from time to time. The current version will always be posted on this page with an updated effective date, and material changes will be highlighted by notice on the website or by email. Your continued use of the Services after a revised Policy becomes effective indicates your agreement to it.",
    ],
  },
  {
    title: "13. Contact Us",
    body: [
      "If you have questions about this Privacy Policy or how your information is handled, contact us at privacy@wingcx.com or contact@wingcx.com.",
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
          <p className="mono text-[12px] text-[var(--fg-faint)] uppercase tracking-[0.14em] mb-12">
            Effective date: June 11, 2026
          </p>

          <p className="text-[15px] text-[var(--fg-muted)] leading-[1.7] mb-12 text-pretty">
            WingCX Agent Solutions (&quot;WingCX,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your
            privacy. This Privacy Policy describes how we collect, use, share, and protect personal
            information when you use our websites, platform, and services (collectively, the
            &quot;Services&quot;), whether as a business client, an independent agent, or a visitor.
          </p>

          <div className="space-y-10">
            {sections.map((s) => (
              <div key={s.title}>
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
