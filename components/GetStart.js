import Link from "next/link";
import React from "react";

const GetStart = ({ setPage }) => {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center relative z-2">
        <div className="flex flex-col items-center gap-10">
          <h1 data-aos="fade-down" className="text-5xl font-bold bg-linear-to-r from-emerald-300 via-green-300 to-teal-300 bg-clip-text text-transparent">
            Proposal Generator
          </h1>
          <p data-aos="fade-down" className="text-slate-300 text-lg">
            Transform job descriptions into winning proposals instantly
          </p>
          <Link
          data-aos="fade-up"
          href={"/generate"}
            onClick={() => setPage("generator")}
            className="w-fit px-6 py-2 bg-white rounded-full shadow-lg text-lg cursor-pointer hover:bg-emerald-500 hover:text-white transition-all duration-150"
          >
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
};

export default GetStart;
