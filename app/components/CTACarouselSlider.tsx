"use client";

import { useEffect } from "react";
import Image from "next/image";
import { brandLogoSymbolWhite } from "../assets/index";

export default function CTACarouselSlider() {
  useEffect(() => {
    const ulElement = document.querySelector(".carousel-slider");

    if (ulElement) {
      const handleCloneAndAnimate = () => {
        if (ulElement instanceof HTMLElement) {
          const clonedUl = ulElement.cloneNode(true) as HTMLElement;
          clonedUl.setAttribute("aria-hidden", "true");
          ulElement.insertAdjacentElement("afterend", clonedUl);
          ulElement.style.display = "flex"; // Accessing the style property safely
        }
      };

      handleCloneAndAnimate();

      // Set up a MutationObserver to watch for changes and re-clone if necessary
      const observer = new MutationObserver(handleCloneAndAnimate);
      observer.observe(ulElement, {
        attributes: true,
        childList: true,
        subtree: true,
      });

      return () => {
        observer.disconnect(); // Cleanup the observer on component unmount
      };
    }
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <div className="w-full inline-flex flex-nowrap whitespace-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-30px),transparent_100%)] lg:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] py-4 md:py-6 bg-transparent">
      <ul className="carousel-slider items-center animate-infinite-scroll [&_li]:mr-4 md:[&_li]:mr-8 [&_img]:max-w-none font-epilogue font-medium leading-[1em] tracking-[-0.05em] md:text-[60px] text-[32px] text-primary hidden">
        <li className="flex items-center">
          <p className="mr-4 md:mr-8">Let's build your brand</p>
          <Image
            src={brandLogoSymbolWhite}
            alt="a symbol image of opus space logo in white"
            className="h-10 w-10 md:h-14 md:w-14"
          />
        </li>
        <li className="flex items-center">
          <p className="mr-4 md:mr-8">Let's build your website</p>
          <Image
            src={brandLogoSymbolWhite}
            alt="a symbol image of opus space logo in white"
            className="h-10 w-10 md:h-14 md:w-14"
          />
        </li>
        <li className="flex items-center">
          <p className="mr-4 md:mr-8">Let's build your project</p>
          <Image
            src={brandLogoSymbolWhite}
            alt="a symbol image of opus space logo in white"
            className="h-10 w-10 md:h-14 md:w-14"
          />
        </li>
      </ul>
    </div>
  );
}
