// src/App.jsx
import React, { useEffect, useRef } from "react";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import WhatIDo from "./components/sections/WhatIDo";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Certifications from "./components/sections/Certifications";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import scrollToHash from "./utils/scroll";

export default function App() {
  const progressRef = useRef(null);

  useEffect(() => {
    scrollToHash();
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const pct = (scrollTop / docHeight) * 100;
      progressRef.current.style.width = `${pct}%`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-bg)] relative">
      <div id="scroll-progress" ref={progressRef} />
      <Header />
      <main className="flex-grow">
        <Hero />
        <WhatIDo />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
