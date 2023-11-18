import Image from "next/image";
import Link from "next/link";
import { brandLogoHorizontalWhite } from "../../assets/index";


export default function Footer() {
    return (
        <footer>
            <div className="max-w-[1440px] mx-auto flex flex-row justify-evenly mt-20 mb-20">
                <div className="">
                    <Image 
                        className="w-[190px] mb-3"
                        src={brandLogoHorizontalWhite}
                    />
                    <h3 className="font-epilogue text-[35px] w-[500px]">Would you like to work with us? Let's work together.</h3>
                    <Link className="bg-primary py-4 px-6 rounded-full w-[150px] text-center font-epilogue block mt-[20px]" href={'#'}>Get Started</Link>
                </div>
                <div className="w-[180px]">
                    <h3 className="font-epilogue text-[30px] mb-[16px]">Studio</h3>
                    <p className="font-epilogue">555 Seymour St, Vancouver, BC V6B 3HB</p>
                    <p className="font-epilogue mt-[12px]">+1 604 - 222 - 2211</p>
                </div>
                <div className="flex flex-col">
                    <div className="mb-[16px]">
                        <h3 className="font-epilogue text-[30px]">Connect</h3>
                    </div>
                    <div className="flex flex-wrap gap-5 w-[300px]">
                        <Link href={'#'} className="underline font-epilogue">Instagram</Link>
                        <Link href={'#'} className="underline font-epilogue">Facebook</Link>
                        <Link href={'#'} className="underline font-epilogue">LinkedIn</Link>
                        <Link href={'#'} className="underline font-epilogue">Behance</Link>
                        <Link href={'#'} className="underline font-epilogue">Dribble</Link>
                        <Link href={'#'} className="underline font-epilogue">hello@opusspace.ca</Link>
                    </div>
                </div>
            </div>
            <p className="font-opensauce text-center text-gray-100 opacity-50 mb-[24px]">&copy; Opus-Space - All Rights Reserved</p>
        </footer>
    );
}