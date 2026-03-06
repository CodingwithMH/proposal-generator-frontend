import Link from 'next/link'
import React from 'react'

const FinalSection = () => {
  return (
    <>
     <section
  data-aos="fade-up"
  className="px-6 py-28 text-center"
>
  <h2 className="text-4xl font-bold mb-6">
    Ready to Win More Clients?
  </h2>

  <p className="text-slate-600 mb-10">
    Start generating powerful proposals today.
  </p>

  <Link
    href="/generate"
    className="px-10 py-4 rounded-lg bg-linear-to-r from-green-600 to-emerald-600 text-white font-semibold shadow-md hover:shadow-lg hover:scale-[1.03] transition"
  >
    Try It Now
  </Link>
</section>
    </>
  )
}

export default FinalSection
