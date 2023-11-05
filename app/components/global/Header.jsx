import Image from "next/image";
import { brandLogoHorizontalWhite } from "@/assets";

export default function Header() {
  return (
    <header>
      <Image src={brandLogoHorizontalWhite} alt="" />
      <nav></nav>
    </header>
  );
}
