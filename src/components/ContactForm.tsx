"use client";

import { useState } from "react";

// Comprehensive list of free email domains to block
const FREE_EMAIL_DOMAINS = [
  // Major providers
  "gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "aol.com",
  "icloud.com", "mail.com", "protonmail.com", "zoho.com", "yandex.com",
  "gmx.com", "gmx.net", "live.com", "msn.com", "me.com", "mac.com",
  // International
  "yahoo.co.uk", "yahoo.co.jp", "yahoo.fr", "yahoo.de", "yahoo.es",
  "yahoo.it", "yahoo.com.br", "yahoo.com.mx", "yahoo.com.ar",
  "hotmail.co.uk", "hotmail.fr", "hotmail.de", "hotmail.es", "hotmail.it",
  "outlook.es", "outlook.fr", "outlook.de", "outlook.co.uk",
  "live.co.uk", "live.fr", "live.de", "live.com.mx",
  // Other popular free providers
  "fastmail.com", "tutanota.com", "mailfence.com", "inbox.com",
  "mail.ru", "rambler.ru", "list.ru", "bk.ru",
  "web.de", "t-online.de", "freenet.de",
  "libero.it", "virgilio.it", "tin.it",
  "laposte.net", "orange.fr", "free.fr", "sfr.fr",
  "terra.com.br", "uol.com.br", "bol.com.br",
  "rediffmail.com", "sify.com",
  "163.com", "126.com", "qq.com", "sina.com", "sohu.com",
  "naver.com", "daum.net", "hanmail.net",
  "cox.net", "sbcglobal.net", "att.net", "verizon.net", "comcast.net",
  "charter.net", "earthlink.net", "optonline.net", "juno.com",
  "bellsouth.net", "roadrunner.com", "windstream.net",
  "hushmail.com", "lavabit.com", "rocketmail.com",
];

// Comprehensive list of temporary/disposable email domains
const TEMP_EMAIL_DOMAINS = [
  "tempmail.com", "throwaway.email", "guerrillamail.com", "guerrillamail.net",
  "guerrillamail.org", "guerrillamail.de", "sharklasers.com", "guerrillamailblock.com",
  "grr.la", "mailinator.com", "maildrop.cc", "dispostable.com",
  "yopmail.com", "yopmail.fr", "cool.fr.nf", "jetable.fr.nf",
  "nospam.ze.tc", "nomail.xl.cx", "mega.zik.dj", "speed.1s.fr",
  "courriel.fr.nf", "moncourrier.fr.nf", "monemail.fr.nf",
  "tempail.com", "tempr.email", "temp-mail.org", "temp-mail.io",
  "10minutemail.com", "10minutemail.net", "minutemail.com",
  "mailnesia.com", "mailcatch.com", "mailnull.com", "mailsac.com",
  "trashmail.com", "trashmail.net", "trashmail.org", "trashmail.me",
  "trashemail.de", "trashymail.com", "trashymail.net",
  "getnada.com", "abyssmail.com", "emailable.rocks",
  "mailhazard.com", "mailhazard.us", "mailtemp.info",
  "fakeinbox.com", "fakemail.fr", "fakemail.net",
  "disposableemailaddresses.emailmiser.com",
  "spambox.us", "spamfree24.org", "spamgourmet.com",
  "spamherelots.com", "spamhereplease.com", "spamthisplease.com",
  "harakirimail.com", "mailexpire.com", "tempinbox.com",
  "tmpmail.org", "tmpmail.net", "boun.cr", "discard.email",
  "discardmail.com", "discardmail.de", "emailondeck.com",
  "emailsensei.com", "firemailbox.club", "getairmail.com",
  "mailnator.com", "mohmal.com", "cuvox.de", "armyspy.com",
  "dayrep.com", "einrot.com", "fleckens.hu", "gustr.com",
  "jourrapide.com", "rhyta.com", "superrito.com", "teleworm.us",
  "tempmail.ninja", "tempmailo.com", "tempmailaddress.com",
  "tmpmail.com", "wegwerfmail.de", "wegwerfmail.net",
  "mailtemp.net", "emailfake.com", "burner.kiwi", "burnermail.io",
  "inboxbear.com", "mailpoof.com", "nada.email", "spamwc.de",
  "tmail.ws", "disposableaddress.com", "33mail.com",
];

const CONTACT_REASONS = [
  "Customer Service Outsourcing",
  "Call Center Solutions",
  "Live Chat Support",
  "24/7 Help Desk",
  "Healthcare Support",
  "Tax Support",
  "Back Office Support",
  "Content Moderation / Trust & Safety",
  "Other",
];

const TEAM_SIZE_OPTIONS = [
  "1-10 agents",
  "11-50 agents",
  "51-100 agents",
  "101-500 agents",
  "500+ agents",
  "Not sure yet",
];

const HOW_HEARD_OPTIONS = [
  "Google Search",
  "LinkedIn",
  "Referral",
  "Social Media",
  "Industry Event",
  "Other",
];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  jobTitle: string;
  contactReason: string;
  teamSize: string;
  howHeard: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    contactReason: "",
    teamSize: "",
    howHeard: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function validateEmail(email: string): string | null {
    if (!email) return "Business email is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Please enter a valid email address";

    const domain = email.split("@")[1]?.toLowerCase();
    if (!domain) return "Please enter a valid email address";

    if (FREE_EMAIL_DOMAINS.includes(domain)) {
      return "Please use your corporate email. Free email providers (Gmail, Yahoo, etc.) are not accepted.";
    }

    if (TEMP_EMAIL_DOMAINS.includes(domain)) {
      return "Temporary or disposable email addresses are not accepted. Please use your corporate email.";
    }

    // Check for patterns common in disposable emails
    const suspiciousPatterns = [
      /^temp/i, /^trash/i, /^spam/i, /^fake/i, /^disposable/i,
      /^throwaway/i, /^junk/i, /^guerrilla/i, /^mailinator/i,
    ];
    if (suspiciousPatterns.some((pattern) => pattern.test(domain))) {
      return "This email domain is not accepted. Please use your corporate email.";
    }

    return null;
  }

  function validate(): FormErrors {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";

    const emailError = validateEmail(formData.email);
    if (emailError) newErrors.email = emailError;

    if (!formData.company.trim()) newErrors.company = "Company name is required";
    if (!formData.jobTitle.trim()) newErrors.jobTitle = "Job title is required";
    if (!formData.contactReason) newErrors.contactReason = "Please select a contact reason";
    if (!formData.teamSize) newErrors.teamSize = "Please select a team size";
    if (!formData.message.trim()) newErrors.message = "Please tell us about your needs";

    return newErrors;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <div className="card-light p-12 text-center space-y-6">
        <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#2047FF]/20 to-[#C873E5]/20 flex items-center justify-center">
          <svg className="w-10 h-10 text-[#C873E5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white">Thank you for reaching out!</h3>
        <p className="text-[#8B92A5] max-w-md mx-auto">
          {"We've received your inquiry and our team will get back to you within one business day. We look forward to helping you scale your CX operations."}
        </p>
        <button
          type="button"
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              firstName: "", lastName: "", email: "", phone: "",
              company: "", jobTitle: "", contactReason: "",
              teamSize: "", howHeard: "", message: "",
            });
          }}
          className="btn-secondary text-sm py-3 px-6"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-light p-8 md:p-10 space-y-6" noValidate>
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">
          {"To talk with our team, please complete this short form."}
        </h2>
        <p className="text-sm text-[#8B92A5]">
          {"We'll get back to you within one business day."}
        </p>
      </div>

      {/* Name Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="firstName" className="block text-sm font-semibold text-white mb-2">
            First Name <span className="text-[#C873E5]">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="John"
            className={`w-full bg-[#0D1120] border rounded-lg px-4 py-3 text-white placeholder-[#5A6178] focus:outline-none focus:ring-2 transition-all text-sm ${
              errors.firstName
                ? "border-red-500/50 focus:ring-red-500/30"
                : "border-white/10 focus:ring-[#2047FF]/30 focus:border-[#2047FF]/50"
            }`}
          />
          {errors.firstName && (
            <p className="mt-1.5 text-xs text-red-400">{errors.firstName}</p>
          )}
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-semibold text-white mb-2">
            Last Name <span className="text-[#C873E5]">*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Smith"
            className={`w-full bg-[#0D1120] border rounded-lg px-4 py-3 text-white placeholder-[#5A6178] focus:outline-none focus:ring-2 transition-all text-sm ${
              errors.lastName
                ? "border-red-500/50 focus:ring-red-500/30"
                : "border-white/10 focus:ring-[#2047FF]/30 focus:border-[#2047FF]/50"
            }`}
          />
          {errors.lastName && (
            <p className="mt-1.5 text-xs text-red-400">{errors.lastName}</p>
          )}
        </div>
      </div>

      {/* Email & Phone Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
            Business Email <span className="text-[#C873E5]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@yourcompany.com"
            className={`w-full bg-[#0D1120] border rounded-lg px-4 py-3 text-white placeholder-[#5A6178] focus:outline-none focus:ring-2 transition-all text-sm ${
              errors.email
                ? "border-red-500/50 focus:ring-red-500/30"
                : "border-white/10 focus:ring-[#2047FF]/30 focus:border-[#2047FF]/50"
            }`}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
            className="w-full bg-[#0D1120] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#5A6178] focus:outline-none focus:ring-2 focus:ring-[#2047FF]/30 focus:border-[#2047FF]/50 transition-all text-sm"
          />
        </div>
      </div>

      {/* Company & Job Title Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-white mb-2">
            Company <span className="text-[#C873E5]">*</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your Company Inc."
            className={`w-full bg-[#0D1120] border rounded-lg px-4 py-3 text-white placeholder-[#5A6178] focus:outline-none focus:ring-2 transition-all text-sm ${
              errors.company
                ? "border-red-500/50 focus:ring-red-500/30"
                : "border-white/10 focus:ring-[#2047FF]/30 focus:border-[#2047FF]/50"
            }`}
          />
          {errors.company && (
            <p className="mt-1.5 text-xs text-red-400">{errors.company}</p>
          )}
        </div>
        <div>
          <label htmlFor="jobTitle" className="block text-sm font-semibold text-white mb-2">
            Job Title <span className="text-[#C873E5]">*</span>
          </label>
          <input
            id="jobTitle"
            name="jobTitle"
            type="text"
            value={formData.jobTitle}
            onChange={handleChange}
            placeholder="VP of Customer Experience"
            className={`w-full bg-[#0D1120] border rounded-lg px-4 py-3 text-white placeholder-[#5A6178] focus:outline-none focus:ring-2 transition-all text-sm ${
              errors.jobTitle
                ? "border-red-500/50 focus:ring-red-500/30"
                : "border-white/10 focus:ring-[#2047FF]/30 focus:border-[#2047FF]/50"
            }`}
          />
          {errors.jobTitle && (
            <p className="mt-1.5 text-xs text-red-400">{errors.jobTitle}</p>
          )}
        </div>
      </div>

      {/* Contact Reason */}
      <div>
        <label htmlFor="contactReason" className="block text-sm font-semibold text-white mb-2">
          Contact Reason <span className="text-[#C873E5]">*</span>
        </label>
        <select
          id="contactReason"
          name="contactReason"
          value={formData.contactReason}
          onChange={handleChange}
          className={`w-full bg-[#0D1120] border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all appearance-none ${
            formData.contactReason ? "text-white" : "text-[#5A6178]"
          } ${
            errors.contactReason
              ? "border-red-500/50 focus:ring-red-500/30"
              : "border-white/10 focus:ring-[#2047FF]/30 focus:border-[#2047FF]/50"
          }`}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%235A6178'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 12px center",
            backgroundSize: "20px",
          }}
        >
          <option value="">Please Select One</option>
          {CONTACT_REASONS.map((reason) => (
            <option key={reason} value={reason}>
              {reason}
            </option>
          ))}
        </select>
        {errors.contactReason && (
          <p className="mt-1.5 text-xs text-red-400">{errors.contactReason}</p>
        )}
      </div>

      {/* Team Size & How Heard Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="teamSize" className="block text-sm font-semibold text-white mb-2">
            How many agents do you need? <span className="text-[#C873E5]">*</span>
          </label>
          <select
            id="teamSize"
            name="teamSize"
            value={formData.teamSize}
            onChange={handleChange}
            className={`w-full bg-[#0D1120] border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all appearance-none ${
              formData.teamSize ? "text-white" : "text-[#5A6178]"
            } ${
              errors.teamSize
                ? "border-red-500/50 focus:ring-red-500/30"
                : "border-white/10 focus:ring-[#2047FF]/30 focus:border-[#2047FF]/50"
            }`}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%235A6178'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 12px center",
              backgroundSize: "20px",
            }}
          >
            <option value="">Please Select</option>
            {TEAM_SIZE_OPTIONS.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          {errors.teamSize && (
            <p className="mt-1.5 text-xs text-red-400">{errors.teamSize}</p>
          )}
        </div>
        <div>
          <label htmlFor="howHeard" className="block text-sm font-semibold text-white mb-2">
            How did you hear about us?
          </label>
          <select
            id="howHeard"
            name="howHeard"
            value={formData.howHeard}
            onChange={handleChange}
            className={`w-full bg-[#0D1120] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2047FF]/30 focus:border-[#2047FF]/50 transition-all appearance-none ${
              formData.howHeard ? "text-white" : "text-[#5A6178]"
            }`}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%235A6178'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 12px center",
              backgroundSize: "20px",
            }}
          >
            <option value="">Please Select</option>
            {HOW_HEARD_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
          Tell Us About Your Needs <span className="text-[#C873E5]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          placeholder="Describe your customer service needs, current challenges, and what you're looking for..."
          className={`w-full bg-[#0D1120] border rounded-lg px-4 py-3 text-white placeholder-[#5A6178] focus:outline-none focus:ring-2 transition-all text-sm resize-none ${
            errors.message
              ? "border-red-500/50 focus:ring-red-500/30"
              : "border-white/10 focus:ring-[#2047FF]/30 focus:border-[#2047FF]/50"
          }`}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary text-base py-4 justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Submitting...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            {"Submit Inquiry"}
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        )}
      </button>

      <p className="text-xs text-[#5A6178] text-center">
        {"By submitting this form, you agree to our "}
        <a href="#" className="text-[#C873E5] hover:underline">Privacy Policy</a>
        {" and "}
        <a href="#" className="text-[#C873E5] hover:underline">Terms of Service</a>.
      </p>
    </form>
  );
}
