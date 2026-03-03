"use client";
import Generator from "@/components/Generator";
import GetStart from "@/components/GetStart";
import { useState } from "react";

export default function Home() {
  return (
    <>
      <div className="absolute inset-0 bg-cover bg-center blur-lg scale-105 z-1 h-screen w-screen"></div>
        <div className="relative z-10 h-full overflow-y-auto">
        <GetStart />
      </div>
    </>
  );
}
