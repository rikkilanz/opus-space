import Link from "next/link";

export default function Hero() {
  return (
    <section className="max-w-[1440px] mx-auto mt-[50px] lg:mt-0">
      <h1 className="text-[95px] md:text-[120px] lg:text-[140px] 2xl:text-[227px] max-w-[600px] md:max-w-[750px] lg:max-w-[875px] 2xl:max-w-[1397px] font-epilogue font-medium leading-[1em] tracking-[-0.05em] py-6 px-4">
        We are Opus-Space.
      </h1>
      <h2 className="font-opensauce text-[2.25em] leading-[1em] tracking-[-0.05em] py-6 px-4 mb-[32px] max-w-[600px]">
        Here to help you create your visions come to life, your great opus.
      </h2>
      <Link
        href={"#"}
        className="bg-primary mx-4 py-4 px-8 rounded-full w-[170px] text-center font-epilogue"
      >
        Let's Get Started
      </Link>
    </section>
  );
}
