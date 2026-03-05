import Link from 'next/link'
import React from 'react'

const FinalSection = () => {
  return (
    <>
     <section
          data-aos="fade-up"
          data-aos-delay="100"
          className="px-6 py-28 text-center border-t border-white/5"
        >
          <h2 className="text-4xl font-bold mb-6">
            Ready to Win More Clients?
          </h2>
          <p className="text-slate-400 mb-10">
            Start generating powerful proposals today.
          </p>
          <Link
            href="/generate"
            className="px-10 py-4 rounded-xl bg-linear-to-r from-cyan-500 to-indigo-500 font-semibold shadow-lg shadow-cyan-500/20 hover:scale-[1.03] transition"
          >
            Try It Now
          </Link>
        </section> 
    </>
  )
}

export default FinalSection
