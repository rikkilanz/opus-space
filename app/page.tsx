import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import CTACarousel from "./components/sections/CTACarousel"
import Services from "./components/sections/Services";
import OurTeam from "./components/sections/OurTeam";
import Projects from "./components/sections/Projects";
import Footer from "./components/global/Footer";

export default function Home() {
  return (
    <main className="antialiased">
      <Hero />
      <About />
      <CTACarousel />
      <Services/>
      <OurTeam/>
      <Projects/>
      <Footer/>
    </main>
  );
}
