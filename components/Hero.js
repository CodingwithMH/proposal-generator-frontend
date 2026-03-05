import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <>
     <section className="relative flex items-center justify-center px-6 py-28 text-center h-screen">
          <div  className="max-w-4xl">
            <span className="mb-6 inline-block px-4 py-1 text-xs tracking-wider uppercase rounded-full bg-white/5 border border-white/10 text-cyan-300">
              AI Powered Freelance Tool
            </span>

            <h1 data-aos="fade-left" className="text-6xl md:text-7xl font-bold bg-linear-to-r from-cyan-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent leading-tight">
              Win More Clients With AI
            </h1>

            <p data-aos="fade-right" className="mt-6 text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
              Instantly generate persuasive, high-converting proposals tailored
              to any job description.
            </p>

            <div data-aos="fade-up" className="mt-10 flex justify-center gap-4 flex-wrap">
              <Link
                href="/generate"
                className="px-8 py-3 rounded-xl bg-linear-to-r from-cyan-500 to-indigo-500 font-semibold shadow-lg shadow-cyan-500/20 hover:scale-[1.03] transition"
              >
                Get Started Free
              </Link>

              <Link
                href="#features"
                className="px-8 py-3 rounded-xl border border-white/10 text-slate-300 hover:bg-white/5 transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section> 
    </>
  )
}

export default Hero
