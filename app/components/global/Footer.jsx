import Image from "next/image";
import Link from "next/link";
import { brandLogoHorizontalWhite } from "../../assets/index";

export default function Footer() {
  return (
    <footer className="max-w-[1440px] mx-auto">
      <div className="lg:flex lg:flex-row lg:justify-between mt-20 mb-20 px-4">
        <div className="mb-[30px]">
          <Image
            className="lg:w-[190px] lg:mb-[24px] lg:mt-[24px] hidden lg:block"
            src={brandLogoHorizontalWhite}
            alt="opus space logo in white with opus space text wordmark"
          />
          <h3 className="leading-[1em] tracking-[-0.05em] font-epilogue font-semibold lg:font-semibold lg:text-[50px] text-[40px] lg:w-[800px] text-center lg:text-left">
            Would you like to work with us? Let's work together.
          </h3>
          <Link
            className="leading-[1em] tracking-[-0.05em] bg-primary py-4 px-6 rounded-full m-6 lg:m-0 lg:w-[150px] text-center font-epilogue block lg:mt-[20px] font-opensauce"
            href={"#"}
          >
            Get Started
          </Link>
        </div>

        <div className="lg:flex lg:flex-col flex flex-col text-center lg:text-left lg:justify-center lg:items-start items-center">
          <div className="mb-[24px]">
            <h3 className="font-epilogue font-semibold text-[30px] mt-[26px] leading-[1em] tracking-[-0.05em]">
              Connect with us at:
            </h3>
          </div>
          <div className="lg:flex lg:flex-wrap lg:gap-5 lg:w-[300px] flex flex-col lg:flex-row gap-4">
            {/* <Link
              href={"#"}
              className="lg:underline font-epilogue leading-[1em] tracking-[-0.05em]"
            >
              Instagram
            </Link> */}
            <Link
              href="https://www.linkedin.com/company/opus-space"
              target="_blank"
              className="lg:underline font-epilogue leading-[1em] tracking-[-0.05em]"
            >
              LinkedIn
            </Link>
            <Link
              href="mailto:hello@opusspace.ca"
              className="lg:underline font-epilogue leading-[1em] tracking-[-0.05em]"
            >
              hello@opusspace.ca
            </Link>
          </div>
        </div>
      </div>
      <p className="font-opensauce text-center text-gray-100 opacity-50 mb-[24px]">
        &copy; Opus-Space - All Rights Reserved
      </p>
    </footer>
  );
}
