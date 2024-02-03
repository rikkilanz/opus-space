'use client'
import React, {useEffect} from "react";
import { useRouter } from "next/navigation";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import CTACarousel from "./components/sections/CTACarousel"
import Services from "./components/sections/Services";
import OurTeam from "./components/sections/OurTeam";
import Projects from "./components/sections/Projects";
import NotFoundPage from "./components/global/NotFoundPage";
import Footer from "./components/global/Footer";
import Contact from "./components/sections/Contact";


export default function Home() {

  // const router = useRouter();

  // useEffect(() => {

  //   const { asPath } = router;

  //   // Check if the route is not found or is still being generated
  //   if (router.isFallback || typeof window !== 'undefined' && !router.asPath.startsWith('/v')) {
  //     // Redirect to the 404 page
  //     router.replace("/not-found");
  //   }
  // }, [router.isFallback, router.asPath]);

  return (
    <main className="antialiased">
      <Hero />
      <About />
      <CTACarousel />
      <Services/>
      <NotFoundPage/>
      <OurTeam/>
      <Projects/>   
      <Contact/>
    </main>
  );
}
