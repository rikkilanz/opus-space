import Image from "next/image";
import Link from "next/link";
import { brandLogoHorizontalWhite } from "../../assets/index";

export default function Header() {
  return (
    <header className="flex justify-between items-center max-w-[1440px] mx-auto py-6 px-4 font-opensauce text-[1em]">
      <Image className="max-w-[150px]" src={brandLogoHorizontalWhite} alt="" />
      <nav>
        <ul className="flex gap-[2em] items-center">
          <li><Link href={'#'}>Service</Link></li>
          <li><Link href={'#'}>Team</Link></li>
          <li><Link href={'#'}>Projects</Link></li>
        </ul>
      </nav>
      <Link href={'#'} className="bg-primary py-4 px-8 rounded-full">
        Contact Us
      </Link>
    </header>
  );
}
