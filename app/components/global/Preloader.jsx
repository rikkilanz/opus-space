import { brandWordmarkWhite } from "@/app/assets";
import Image from "next/image";

export default function Preloader() {
  return (
    <div className="absolute w-screen h-screen left-0 right-0 bg-black top-0 z-[999] flex justify-center items-center  py-6 px-4">
      <Image src={brandWordmarkWhite} className="animate-pulse" />
    </div>
  );
}
