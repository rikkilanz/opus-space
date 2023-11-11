import Link from "next/link";

export default function Hero() {
  return (
    <section>
      <div className="max-w-[1440px] mx-auto pt-[50px] md:py-[50px] lg:pt-0">
        <div className="relative">
          <h1 className="text-[100px] md:text-[120px] lg:text-[180px] 2xl:text-[227px] max-w-[600px] md:max-w-[750px] lg:max-w-[1100px] 2xl:max-w-[1397px] font-epilogue font-medium leading-[1em] tracking-[-0.05em] py-6 px-4">
            We are Opus-Space.
          </h1>
          <div className="w-[400px] h-[400px] lg:w-[500px]  lg:h-[500px] z-[-1] absolute top-0 right-0 left-0 mx-auto bg-gradient-radial from-[rgba(85,97,251,0.4)] to-[rgba(85,97,251,0)] rounded-full to-60%" />
        </div>
        <h2 className="font-opensauce text-[2.25em] leading-[1em] tracking-[-0.05em] py-6 px-4 mb-[32px] max-w-[800px]">
          Here to help you create your visions come to life, your great opus.
        </h2>
        <Link
          href={"#"}
          className="bg-primary mx-4 py-6 px-8 rounded-full w-[170px] text-center font-epilogue"
        >
          Let's Get Started
        </Link>
      </div>
      <div className="z-[-1] h-[164px] bg-gradient-to-t from-[rgba(199,70,231,1)] to-[rgba(10,6,218,0)]"/>
    </section>
  );
}