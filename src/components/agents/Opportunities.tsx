import Link from "next/link";

export default function Opportunities() {
  const jobs = [
    {
      title: "USA - Remote Work From Home Call Center Agents",
      type: "Independent Contractor",
      pay: "$14 to $20 per hour",
      description: "Say goodbye to long commutes, fixed schedules, and micromanagement. Our trusted partners are looking for Independent Contractors to deliver virtual support across customer service, sales, healthcare, and more.",
    },
    {
      title: "Spanish Bilingual USA - Remote WFH Call Center Agents",
      type: "Independent Contractor",
      pay: "$17 to $20 USD per hour",
      description: "Work with CXware Agent as an Independent Contractor and unlock flexible remote opportunities. Choose contracts that match your skills, set your own schedule, and take control of your time and income.",
    },
    {
      title: "Dominican Republic - Remote WFH Freelancer",
      type: "Customer Service Rep",
      pay: "$5 to $7 USD per hour",
      description: "Skip the traffic. Keep the paycheck. Support U.S.-based clients from the comfort of your home—no parking spot required.",
    },
  ];

  return (
    <section id="opportunities" className="py-24" style={{ background: 'var(--bg-muted)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label mb-4 block">All Opportunities</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#FFFFFF]">Apply to be a Self-Employed </span>
            <span className="gradient-text">Agent or Freelancer</span>
          </h2>
          <p className="text-lg text-[#8B92A5]">
            Businesses across multiple industries trust CXware Agent to deliver exceptional virtual support services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div key={job.title} className="card-light p-6 flex flex-col hover:shadow-xl transition-all">
              <div className="flex-1">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-gradient-to-r from-[#2047FF]/10 to-[#C873E5]/10 text-[#C873E5] rounded-full mb-4">
                  {job.type}
                </span>
                <h3 className="text-lg font-semibold text-[#FFFFFF] mb-3">{job.title}</h3>
                <p className="text-[#8B92A5] text-sm mb-4">{job.description}</p>
              </div>
              <div className="pt-4 border-t border-white/10">
                <p className="text-[#C873E5] font-bold mb-4">{job.pay}</p>
                <Link href="#apply" className="btn-primary w-full justify-center text-sm py-3">
                  Apply Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
