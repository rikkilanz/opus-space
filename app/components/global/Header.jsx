"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { brandLogoHorizontalWhite } from "../../assets/index";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [breakpoint, setBreakpointState] = useState(false);

  const handleMenuButton = (e) => {
    setMenuOpen(e);
  };

  useEffect(() => {
    const calculateBreakpoint = () => {
      const width = window.innerWidth;
      if (width <= 640) {
        setBreakpointState("sm");
      } else if (width <= 767) {
        setBreakpointState("md");
      } else if (width <= 1023) {
        setBreakpointState("lg");
      } else if (width <= 1279) {
        setBreakpointState("xl");
      } else if (width <= 1535) {
        setBreakpointState("2xl");
      }
    };

    window.addEventListener("resize", calculateBreakpoint);
    calculateBreakpoint();

    return () => window.removeEventListener("resize", calculateBreakpoint);
  }, [breakpoint]);

  return (
    <header className="z-[10] sticky top-0 w-full bg-gradient-to-b from-black md:to-[rgba(5,10,17,0)] to-black">
      <div className="flex justify-between items-center max-w-[1440px] mx-auto py-6 px-4 font-opensauce text-[1em]">
        <Link className="max-w-[150px] order-1" href={"/"}>
          <Image
            src={brandLogoHorizontalWhite}
            alt="opus space logo in white with opus space text wordmark"
          />
        </Link>
        {/* Check if screen is laptop size. If true, display this and centered */}
        <nav className="bg-transparent order-2 hidden lg:block">
          <ul
            className="flex lg:gap-[2em] flex-col lg:flex-row w-full"
            onClick={() => handleMenuButton(false)}
          >
            <li className="hover:underline py-6 px-8 lg:p-0 font-epilogue hover:font-bold transition-all duration-[2] ease-in-out">
              <Link href={"#services-section"}>Service</Link>
            </li>
            <li className="hover:underline py-6 px-8 lg:p-0 font-epilogue hover:font-bold transition-all duration-[2] ease-in-out">
              <Link href={"#team-section"}>Team</Link>
            </li>
            <li className="hover:underline py-6 px-8 lg:p-0 font-epilogue hover:font-bold transition-all duration-[2] ease-in-out">
              <Link href={"#projects-section"}>Projects</Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-[1em] order-2 lg:order-3">
          <Link
            href={"#contact-section"}
            className="bg-primary py-2 md:py-4 px-8 underline md:no-underline md:rounded-full md:relative md:w-[170px] absolute w-full left-0 top-[89px] text-center md:top-0 hover:bg-[#424FFF] duration-[2] transition-all ease-in-out font-epilogue hover:font-bold"
          >
            {breakpoint === "sm" || breakpoint === "md"
              ? "Contact us and get started now!"
              : "Contact Us"}
          </Link>
          <Bars3Icon
            className="h-10 w-10 p-1 lg:hidden cursor-pointer"
            onClick={() => handleMenuButton(true)}
          />
        </div>
        {/* Mobile navigation slider. Appears when screen is mobile AND if menu button is clicked*/}
        {menuOpen && (
          <nav className="flex flex-col items-end bg-white absolute lg:hidden top-0 right-0 h-screen w-[60vw] sm:w-[40vw] text-right text-black">
            <XMarkIcon
              className="h-10 w-10 lg:hidden mt-8 mr-4 cursor-pointer"
              onClick={() => handleMenuButton(false)}
            />
            <ul className="flex lg:gap-[2em] flex-col lg:flex-row w-full">
              <li className="hover:border-b-2 py-4 px-8 lg:p-0 cursor-pointer font-epilogue hover:font-bold transition-all duration-[2] ease-in-out">
                <Link href={"#services-section"}>Service</Link>
              </li>
              <li className="hover:border-b-2 py-4 px-8 lg:p-0 cursor-pointer font-epilogue hover:font-bold transition-all duration-[2] ease-in-out">
                <Link href={"#team-section"}>Team</Link>
              </li>
              <li className="hover:border-b-2 py-4 px-8 lg:p-0 cursor-pointer font-epilogue hover:font-bold transition-all duration-[2] ease-in-out">
                <Link href={"#projects-section"}>Projects</Link>
              </li>
            </ul>
            <Link
              href="#contact-section"
              className="py-8 px-8 md:hidden text-white bg-primary w-full mt-auto"
            >
              Contact Us
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
