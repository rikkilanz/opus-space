import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamically import Logo3D, disabling SSR for this component
const Logo3D = dynamic(() => import("./components/Logo3D"), { ssr: false });

export default function NotFoundPage() {
  return (
    <section id="hero-section">
      <div className="max-w-[1440px] mx-auto pt-[50px] md:py-[50px] lg:pt-0 text-center">
        <div className="relative">
          <h1 className="text-[100px] sm:text-[120px] lg:text-[190px] 2xl:text-[227px] font-epilogue font-medium leading-[1em] tracking-[-0.05em] py-6 px-4">
            404 Page
          </h1>
          <div className="z-[-2] absolute top-[9rem] right-0 left-0 mx-auto opacity-[50%] blur-xl orb" />
        </div>
        <div className="block absolute top-20 left-0 right-0 z-[-1] h-[500px] w-full">
          <Logo3D />
        </div>
        <h2 className="font-opensauce text-[2.25em] leading-[1em] tracking-[-0.05em] py-6 px-4 mb-[32px]">
          Sorry the page you were looking for doesn't exist!
        </h2>
        <Link
          href="/"
          className="bg-primary mx-4 py-6 px-8 rounded-full w-[170px] text-center font-epilogue hover:font-bold hover:bg-[#424FFF] duration-[2] transition-all ease-in-out"
        >
          Go Home
        </Link>
      </div>
    </section>
  );
}
