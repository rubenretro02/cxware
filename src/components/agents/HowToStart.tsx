export default function HowToStart() {
  const steps = [
    {
      number: "01",
      title: "Apply Online",
      description: "Fill out our quick application and submit a short video interview so we can learn about your experience.",
    },
    {
      number: "02",
      title: "Get Certified",
      description: "Complete our selection and skills validation process. Upload your resume and complete your profile.",
    },
    {
      number: "03",
      title: "Pick Your Shifts",
      description: "Choose the project/opportunity that best fits you. Browse available shifts and claim the ones that work for your schedule.",
    },
    {
      number: "04",
      title: "Start Working",
      description: "Receive training, access the necessary tools, and start working. Earn money at your own pace.",
    },
  ];

  return (
    <section id="how-to-start" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#0C0227]">How to </span>
            <span className="gradient-text">Get Started</span>
          </h2>
          <p className="text-lg text-[#6b687a]">
            Here's a look at what you can expect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="relative group">
              <div className="card-light p-6 h-full transition-all group-hover:shadow-xl">
                <span className="big-number text-6xl mb-6 block">{step.number}</span>
                <span className="section-label mb-2 block">Step {index + 1}</span>
                <h3 className="text-xl font-semibold text-[#0C0227] mb-3">{step.title}</h3>
                <p className="text-[#6b687a] text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
