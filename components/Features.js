import React from 'react'

const Features = () => {
    const features = [
    {
      title: "Smart Personalization",
      desc: "Understands job requirements and tailors proposals accordingly.",
    },
    {
      title: "High Conversion Structure",
      desc: "Built using proven persuasion frameworks.",
    },
    {
      title: "Instant Generation",
      desc: "Generate detailed proposals in seconds.",
    },
    {
      title: "Client Name Targeting",
      desc: "Personalize proposals for higher response rates.",
    },
    {
      title: "Clean Formatting",
      desc: "Structured and readable proposals every time.",
    },
    {
      title: "Portfolio Integration",
      desc: "Automatically integrates your portfolio link.",
    },
  ];
  return (
    <>
     <section id="features" className="px-6 py-24">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-4xl font-bold text-center mb-16">
      Why Choose Our AI?
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      {features.map((feature, i) => (
        <div
          key={i}
          data-aos="fade-up"
          data-aos-delay={(i + 1) * 100}
          className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm hover:shadow-md transition"
        >
          <h3 className="text-xl font-semibold mb-4 text-green-600">
            {feature.title}
          </h3>

          <p className="text-slate-600 leading-relaxed">
            {feature.desc}
          </p>
        </div>
      ))}

    </div>
  </div>
</section> 
    </>
  )
}

export default Features
