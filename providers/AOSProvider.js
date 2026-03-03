"use client";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function AOSProvider({ children }) {
  useEffect(() => {
    Aos.init({
      duration: 300,
      once: true,
    });
  }, []);

  return children;
}