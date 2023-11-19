import Image from "next/image";
import Link from "next/link";
import { brandLogoHorizontalWhite } from "../../assets/index";


export default function Footer() {
    return (
        <footer>
            <div className="max-w-[1440px] mx-auto lg:flex lg:flex-row lg:justify-evenly mt-20 mb-20">



                <div className="mb-[30px]">
                    <Image 
                        className="lg:w-[190px] lg:mb-[24px] lg:mt-[24px] invisible lg:visible"
                        src={brandLogoHorizontalWhite}
                    />
                    <h3 className="font-epilogue font-semibold lg:font-semibold lg:text-[35px] text-[40px] lg:w-[500px] text-center lg:text-left">Would you like to work with us? Let's! work together.</h3>
                    <Link className="bg-primary py-4 px-6 rounded-full m-6 lg:m-0 lg:w-[150px] text-center font-epilogue block lg:mt-[20px]" href={'#'}>Get Started</Link>
                </div>


                {/* <div className="w-[180px]">
                    <h3 className="font-epilogue text-[30px] mb-[16px]">Studio</h3>
                    <p className="font-epilogue">555 Seymour St, Vancouver, BC V6B 3HB</p>
                    <p className="font-epilogue mt-[12px]">+1 604 - 222 - 2211</p>
                </div> */}


                <div className="lg:flex lg:flex-col flex flex-col text-center lg:text-left">
                    <div className="mb-[24px]">
                        <h3 className="font-epilogue font-semibold text-[30px] mt-[26px]">Connect</h3>
                    </div>
                    <div className="lg:flex lg:flex-wrap lg:gap-5 lg:w-[300px] flex flex-col md:flex-row gap-2">
                        <Link href={'#'} className="lg:underline font-epilogue">Instagram</Link>
                        <Link href={'#'} className="lg:underline font-epilogue">LinkedIn</Link>
                        <Link href={'#'} className="lg:underline font-epilogue">Email us at: hello@opusspace.ca</Link>
                    </div>
                </div>


            </div>
            <p className="font-opensauce text-center text-gray-100 opacity-50 mb-[24px]">&copy; Opus-Space - All Rights Reserved</p>
        </footer>
    );
}