"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { brandLogoSymbolWhite } from "../assets/index";

export default function CTACarouselSlider() {
  const [ul, setUl] = useState(null);

  useEffect(() => {
    const ulElement = document.querySelector(".carousel-slider");
    setUl(ulElement);
    if (ulElement) {
      const clonedUl = ulElement.cloneNode(true);
      clonedUl.setAttribute("aria-hidden", "true");
      ulElement.insertAdjacentElement("afterend", clonedUl);
      ulElement.style.display = "flex";
    }
  }, []);

  return (
    <div className="w-full inline-flex flex-nowrap whitespace-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-30px),transparent_100%)] lg:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] py-4 md:py-6 bg-transparent">
      <ul className="carousel-slider items-center animate-infinite-scroll [&_li]:mr-4 md:[&_li]:mr-8 [&_img]:max-w-none font-epilogue font-medium leading-[1em] tracking-[-0.05em] md:text-[60px] text-[32px] text-primary hidden">
        <li className="flex items-center">
          <p className="mr-4 md:mr-8">Let's build your brand</p>
          <Image src={brandLogoSymbolWhite} alt="a symbol image of opus space logo in white" className="h-10 w-10 md:h-14  md:w-14" />
        </li>
        <li className="flex items-center">
          <p className="mr-4 md:mr-8">Let's build your website</p>
          <Image src={brandLogoSymbolWhite} alt="a symbol image of opus space logo in white" className="h-10 w-10 md:h-14  md:w-14" />
        </li>
        <li className="flex items-center">
          <p className="mr-4 md:mr-8">Let's build your project</p>
          <Image src={brandLogoSymbolWhite} alt="a symbol image of opus space logo in white" className="h-10 w-10 md:h-14  md:w-14" />
        </li>
      </ul>
    </div>
  );
}
