"use client"
import React from "react";
import { useRouter } from "next/navigation";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import CTACarousel from "./components/sections/CTACarousel"
import Services from "./components/sections/Services";
import OurTeam from "./components/sections/OurTeam";
import Projects from "./components/sections/Projects";
import Footer from "./components/global/Footer";
import NotFoundPage from "./components/global/not-found.jsx";
import Contact from "./components/sections/Contact";


export default function Home() {

  const router = useRouter();

  // Check if the router is not found 
  

  return (
    <main className="antialiased">
      <Hero />
      <About />
      <CTACarousel />
      <Services/>
      <OurTeam/>
      <Projects/>
      <Contact/>
    </main>
  );
}
