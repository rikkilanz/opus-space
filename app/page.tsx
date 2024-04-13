"use client";
import React from "react";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import CTACarousel from "./components/sections/CTACarousel";
import Services from "./components/sections/Services";
import OurTeam from "./components/sections/OurTeam";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

import { useEffect, useState } from "react";

import Preloader from "./components/global/Preloader";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <main className="antialiased">
      {loading ? (
        <Preloader />
      ) : (
        <div>
          <Hero />
          <About />
          <CTACarousel />
          <Services />
          <OurTeam />
          <Projects />
          <Contact />
        </div>
      )}
    </main>
  );
}
