import Link from "next/link";
import React from "react";
import Pricing from "./Pricing";
import Working from "./Working";
import Features from "./Features";
import Trust from "./Trust";
import Hero from "./Hero";
import FinalSection from "./FinalSection";

const GetStart = () => {
  return (
    <>
      <div className="text-white">
        <Hero />

        <Trust />

        <Features />

        <Working />

        <Pricing />

        <FinalSection />

        <footer className="px-6 py-10 text-center border-t border-white/5 text-slate-500 text-sm">
          © {new Date().getFullYear()} AI Proposal Generator. All rights
          reserved.
        </footer>
      </div>
    </>
  );
};

export default GetStart;
