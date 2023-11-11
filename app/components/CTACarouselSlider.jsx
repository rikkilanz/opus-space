import Image from "next/image";
import { brandLogoSymbolWhite } from "../assets/index";

export default function CTACarouselSlider() {
  return (
    <div>
      <ul className="flex gap-x-4">
        <li className="flex gap-x-4 items-center">
          <p className="font-epilogue font-medium text-[32px]">
            Let's build your brand.
          </p>
          <Image src={brandLogoSymbolWhite} className="h-10 w-10" />
        </li>
        <li className="flex gap-x-4 items-center">
          <p className="font-epilogue font-medium text-[32px]">
            Let's build your brand.
          </p>
          <Image src={brandLogoSymbolWhite} className="h-10 w-10" />
        </li>
        <li className="flex gap-x-4 items-center">
          <p className="font-epilogue font-medium text-[32px]">
            Let's build your brand.
          </p>
          <Image src={brandLogoSymbolWhite} className="h-10 w-10" />
        </li>
      </ul>
    </div>
  );
}
