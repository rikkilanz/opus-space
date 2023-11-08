import Image from "next/image";
import Link from "next/link";
import { brandLogoHorizontalWhite } from "../../assets/index";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Header() {
  return (
    <header className="flex justify-between items-center max-w-[1440px] mx-auto py-6 px-4 font-opensauce text-[1em] sticky top-0 w-full lg:bg-transparent bg-black">
      <Image
        className="max-w-[150px] order-1 lg:mr-[30%]"
        src={brandLogoHorizontalWhite}
        alt="opus space logo in white with opus space text wordmark"
      />
      <div className="flex items-center gap-[1em] order-2 lg:order-3">
        <Link
          href={"#"}
          className="bg-primary py-2 md:py-4 px-8 md:rounded-full md:relative md:w-[170px] absolute w-full left-0 top-[89px] text-center md:top-0"
        >
          Contact Us
        </Link>
        <Bars3Icon className="h-10 w-10 p-1 lg:hidden cursor-pointer" />
      </div>
      <nav className="flex flex-col items-end lg:block bg-white lg:bg-transparent absolute lg:relative top-0 right-0 lg:order-2 lg:w-full h-screen lg:h-[24px] w-[60vw] sm:w-[40vw] text-right text-black lg:text-white">
        <XMarkIcon className="h-10 w-10 lg:hidden mt-8 mr-8" />
        <ul className="flex lg:gap-[2em] flex-col lg:flex-row w-full">
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
    </header>
  );
}
