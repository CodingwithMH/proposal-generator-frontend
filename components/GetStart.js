import React from "react";
import Working from "./Working";
import Features from "./Features";
import Trust from "./Trust";
import Hero from "./Hero";
import FinalSection from "./FinalSection";

const GetStart = () => {
  return (
    <>
      <div className="bg-linear-to-b from-slate-50 via-white to-blue-50 text-slate-800">
        <Hero />

        <Trust />

        <Features />

        <Working />


        <FinalSection />

        <footer className="px-6 py-10 text-center border-t border-slate-200 text-slate-500 text-sm">
  © {new Date().getFullYear()} AI Proposal Generator. All rights reserved.
</footer>
      </div>
    </>
  );
};

export default GetStart;
