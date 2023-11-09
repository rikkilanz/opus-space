"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { brandLogoHorizontalWhite } from "../../assets/index";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const handleMenuButton = (e) => {
    setMenuOpen(e);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsDesktop(event.matches);
      // Set mobile menu off if screen changes to desktop
      if (!isDesktop) {
        setMenuOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <header className="flex justify-between items-center max-w-[1440px] mx-auto py-6 px-4 font-opensauce text-[1em] sticky top-0 w-full lg:bg-transparent bg-black">
      <Image
        className="max-w-[150px] order-1"
        src={brandLogoHorizontalWhite}
        alt="opus space logo in white with opus space text wordmark"
      />
      {/* Check if screen is laptop size. If true, display this and centered */}
      {isDesktop && (
        <nav className="bg-transparent order-2 hidden lg:block">
          <XMarkIcon className="h-10 w-10 lg:hidden mt-8 mr-8 cursor-pointer" />
          <ul
            className="flex lg:gap-[2em] flex-col lg:flex-row w-full"
            onClick={() => handleMenuButton(false)}
          >
            <li className="hover:border-b-2 py-6 px-8 lg:p-0">
              <Link href={"#"}>Service</Link>
            </li>
            <li className="hover:border-b-2 py-6 px-8 lg:p-0">
              <Link href={"#"}>Team</Link>
            </li>
            <li className="hover:border-b-2 py-6 px-8 lg:p-0">
              <Link href={"#"}>Projects</Link>
            </li>
          </ul>
        </nav>
      )}
      <div className="flex items-center gap-[1em] order-2 lg:order-3">
        <Link
          href={"#"}
          className="bg-primary py-2 md:py-4 px-8 md:rounded-full md:relative md:w-[170px] absolute w-full left-0 top-[89px] text-center md:top-0"
        >
          Contact Us
        </Link>
        <Bars3Icon
          className="h-10 w-10 p-1 lg:hidden cursor-pointer"
          onClick={() => handleMenuButton(true)}
        />
      </div>
      {/* Mobile navigation slider. Appears when screen is mobile AND if menu button is clicked*/}
      {menuOpen && !isDesktop && (
        <nav className="flex flex-col items-end bg-white absolute lg:hidden top-0 right-0 h-screen w-[60vw] sm:w-[40vw] text-right text-black">
          <XMarkIcon
            className="h-10 w-10 lg:hidden mt-8 mr-4 cursor-pointer"
            onClick={() => handleMenuButton(false)}
          />
          <ul className="flex lg:gap-[2em] flex-col lg:flex-row w-full">
            <li className="hover:border-b-2 py-4 px-8 lg:p-0">
              <Link href={"#"}>Service</Link>
            </li>
            <li className="hover:border-b-2 py-4 px-8 lg:p-0">
              <Link href={"#"}>Team</Link>
            </li>
            <li className="hover:border-b-2 py-4 px-8 lg:p-0">
              <Link href={"#"}>Projects</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
