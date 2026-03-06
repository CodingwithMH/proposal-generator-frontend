import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <>
      <section className="relative flex items-center justify-center px-6 py-28 text-center min-h-screen">
        <div className="max-w-4xl">
          <span className="mb-6 inline-block px-4 py-1 text-xs tracking-wider uppercase rounded-full bg-green-100 text-green-600 font-medium">
            AI Powered Freelance Tool
          </span>

          <h1
            data-aos="fade-left"
            className="text-5xl md:text-6xl font-bold leading-tight"
          >
            Win More Clients With
            <span className="bg-linear-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              {" "}
              AI
            </span>
          </h1>

          <p
            data-aos="fade-right"
            className="mt-6 text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Instantly generate persuasive, high-converting proposals tailored to
            any job description.
          </p>

          <div
            data-aos="fade-up"
            className="mt-10 flex justify-center gap-4 flex-wrap"
          >
            <Link
              href="/generate"
              className="px-8 py-3 rounded-lg bg-linear-to-r from-green-600 to-emerald-600 text-white font-semibold shadow-md hover:shadow-lg hover:scale-[1.03] transition"
            >
              Get Started Free
            </Link>

            <Link
              href="#features"
              className="px-8 py-3 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
