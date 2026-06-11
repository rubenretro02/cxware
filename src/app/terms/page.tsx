import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service - WingCX Agent Solutions",
  description:
    "The terms and conditions that govern your use of the WingCX website, platform, and workforce services.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: [
      "These Terms of Service (\"Terms\") govern your access to and use of the websites, platform, and services operated by WingCX Agent Solutions (\"WingCX,\" \"we,\" \"us,\" or \"our\"), including wingcx.com and any related applications (collectively, the \"Services\").",
      "By accessing or using the Services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree, do not use the Services. We may modify these Terms at any time; your continued use of the Services after changes become effective constitutes acceptance of the revised Terms.",
    ],
  },
  {
    title: "2. Eligibility",
    body: [
      "You must be at least 18 years of age and have the legal authority to enter into these Terms, whether on your own behalf or on behalf of the organization you represent. By using the Services you represent that you meet these requirements and that your use complies with all laws applicable to you.",
    ],
  },
  {
    title: "3. Services Provided",
    body: [
      "WingCX provides workforce operations solutions for contact centers, including flexible staffing, demand forecasting, scheduling, agent certification, quality assurance, and related support services. The specific services delivered to a business client are described in the applicable service agreement, statement of work, or order form.",
      "We may update, improve, or discontinue any component of the Services at our discretion. Where a change materially reduces functionality covered by an active service agreement, that agreement controls.",
    ],
  },
  {
    title: "4. Accounts, Passwords & Security",
    body: [
      "Certain features require an account. You agree to provide accurate, current, and complete information and to keep it updated. You are responsible for maintaining the confidentiality of your credentials and for all activity that occurs under your account.",
      "Notify us promptly at contact@wingcx.com if you suspect unauthorized access to your account. WingCX is not liable for losses arising from unauthorized use of your account caused by your failure to safeguard your credentials.",
    ],
  },
  {
    title: "5. Acceptable Use",
    body: [
      "You agree not to: (a) use the Services for any unlawful purpose; (b) interfere with or disrupt the integrity or performance of the Services; (c) attempt to gain unauthorized access to the Services or related systems; (d) decompile, reverse engineer, or disassemble any software component of the Services; (e) misrepresent your identity or affiliation; (f) resell or sublicense the Services without our written consent; (g) transmit malware or other harmful code; or (h) post or transmit content that is illegal, infringing, defamatory, obscene, or harassing.",
      "We may remove content and suspend or terminate access for violations of this section without prior notice.",
    ],
  },
  {
    title: "6. Text Message Communications",
    body: [
      "By providing your phone number, you consent to receive informational and marketing text messages from WingCX, including via automated technology. Consent is not a condition of purchase. Message and data rates may apply. You may opt out at any time by replying \"STOP\" to any message. See our Privacy Policy for details on how we handle your contact information.",
    ],
  },
  {
    title: "7. Fees & Payment",
    body: [
      "Fees for business services are set out in your service agreement or order form. Unless otherwise stated there, invoices are due upon the terms specified in that agreement. Late payments may accrue interest at the lesser of 1.5% per month or the maximum rate permitted by law, and we may suspend Services for accounts that are materially past due.",
    ],
  },
  {
    title: "8. Intellectual Property",
    body: [
      "All content, software, technology, trademarks, and materials provided through the Services are the property of WingCX or its licensors and are protected by intellectual property laws. Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to use the Services for their intended purpose. No ownership rights are transferred to you.",
      "You may not copy, republish, distribute, or create derivative works from any part of the Services without our prior written consent.",
    ],
  },
  {
    title: "9. User Content",
    body: [
      "You retain ownership of content you submit through the Services (\"User Content\"). By submitting User Content, you grant WingCX a worldwide, non-exclusive, royalty-free license to use, host, reproduce, and display that content as needed to operate and improve the Services.",
      "You are solely responsible for your User Content and represent that it does not infringe third-party rights, violate any law, or breach any confidentiality obligation. We do not review or endorse User Content and assume no responsibility for it.",
    ],
  },
  {
    title: "10. Copyright Complaints",
    body: [
      "We respect intellectual property rights and will remove infringing material when properly notified. To report claimed infringement, send a notice to contact@wingcx.com including: your signature; identification of the copyrighted work; the location of the allegedly infringing material; your contact information; a good-faith statement that the use is unauthorized; and a statement, under penalty of perjury, that the information in your notice is accurate. We may terminate the accounts of repeat infringers.",
    ],
  },
  {
    title: "11. Confidentiality",
    body: [
      "Each party agrees to protect the other party's non-public, proprietary, or sensitive information disclosed in connection with the Services, to use it only as needed to perform under these Terms or the applicable service agreement, and not to disclose it to third parties except as required by law.",
    ],
  },
  {
    title: "12. Data Privacy",
    body: [
      "Your use of the Services is also governed by our Privacy Policy, which describes how we collect, use, and share personal information. By using the Services, you consent to the collection and processing of information as described there.",
    ],
  },
  {
    title: "13. Third-Party Websites & Services",
    body: [
      "The Services may contain links to third-party websites or integrate with third-party services that we do not control. Links are provided for convenience only; we are not responsible for the content, accuracy, or privacy practices of third parties. Your use of third-party services is governed by their own terms.",
    ],
  },
  {
    title: "14. Disclaimers",
    body: [
      "THE SERVICES ARE PROVIDED \"AS IS\" AND \"AS AVAILABLE,\" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE, OR THAT ANY DEFECTS WILL BE CORRECTED.",
    ],
  },
  {
    title: "15. Limitation of Liability",
    body: [
      "TO THE MAXIMUM EXTENT PERMITTED BY LAW, WINGCX SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR LOST PROFITS, REVENUE, DATA, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.",
      "OUR TOTAL AGGREGATE LIABILITY ARISING OUT OF OR RELATING TO THESE TERMS SHALL NOT EXCEED THE AMOUNTS PAID BY YOU TO WINGCX FOR THE SERVICES IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM, OR ONE HUNDRED U.S. DOLLARS ($100) IF YOU HAVE PAID NO SUCH AMOUNTS.",
    ],
  },
  {
    title: "16. Indemnification",
    body: [
      "You agree to indemnify, defend, and hold harmless WingCX and its officers, directors, employees, and agents from any claims, damages, losses, and expenses (including reasonable attorneys' fees) arising out of your use of the Services, your User Content, or your violation of these Terms. This obligation survives termination of the Services.",
    ],
  },
  {
    title: "17. Termination & Suspension",
    body: [
      "You may stop using the Services at any time. We may suspend or terminate your access to the Services at any time for violation of these Terms, non-payment, suspected illegal activity, or risk to the Services or other users, with or without notice. Provisions concerning intellectual property, confidentiality, disclaimers, limitation of liability, indemnification, and dispute resolution survive termination.",
    ],
  },
  {
    title: "18. Governing Law & Dispute Resolution",
    body: [
      "These Terms are governed by the laws of the State of Florida, without regard to its conflict-of-laws principles. Any dispute arising out of or relating to these Terms or the Services that cannot be resolved informally shall be settled by binding arbitration conducted in Florida, on an individual basis and not as part of any class proceeding. Either party may seek injunctive relief in a court of competent jurisdiction to protect its intellectual property or confidential information.",
      "Any claim must be filed within one (1) year after the event giving rise to it, or it is permanently barred.",
    ],
  },
  {
    title: "19. Changes to These Terms",
    body: [
      "We may revise these Terms from time to time. The most current version will always be posted on this page with an updated effective date. Material changes will be communicated by email or a notice on the website. Continued use of the Services after changes take effect constitutes acceptance.",
    ],
  },
  {
    title: "20. Miscellaneous",
    body: [
      "These Terms, together with the Privacy Policy and any applicable service agreement, constitute the entire agreement between you and WingCX regarding the Services. If any provision is found unenforceable, the remaining provisions remain in full effect. Our failure to enforce any right is not a waiver. We may assign our rights and obligations under these Terms; you may not assign yours without our written consent.",
    ],
  },
  {
    title: "21. Contact Us",
    body: [
      "Questions about these Terms? Contact us at contact@wingcx.com.",
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
          <p className="mono text-[12px] text-[var(--fg-faint)] uppercase tracking-[0.14em] mb-12">
            Effective date: June 11, 2026
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
