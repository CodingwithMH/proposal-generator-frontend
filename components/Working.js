import React from 'react'

const Working = () => {
  return (
    <>
     <section className="px-6 py-24 bg-white/5 border-y border-white/5">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-16">How It Works</h2>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                "Paste the job description",
                "Add your portfolio link",
                "Generate and send proposal",
              ].map((step, i) => (
                <div data-aos="fade-up" data-aos-delay={(i+1)*100} key={i} className="space-y-4">
                  <div className="w-12 h-12 mx-auto rounded-full bg-linear-to-r from-cyan-500 to-indigo-500 flex items-center justify-center font-bold">
                    {i + 1}
                  </div>
                  <p className="text-slate-400">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section> 
    </>
  )
}

export default Working
