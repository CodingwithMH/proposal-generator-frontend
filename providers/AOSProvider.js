"use client";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function AOSProvider({ children }) {
  useEffect(() => {
    Aos.init({
      duration: 400,
      once: true,
    });
  }, []);

  return children;
}