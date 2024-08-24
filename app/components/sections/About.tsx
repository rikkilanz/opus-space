export default function About() {
  return (
    <section id="about-section" className="bg-gradient-to-b from-[rgba(199,70,231,1)] via-[rgba(10,6,218,0.1)] via-80% to-black">
      <div className="max-w-[1440px] mx-auto px-4 pb-[32px] md:pb-[200px] flex flex-col md:flex-row items-center">
        <div className="md:basis-[30%]">
          <h4 className="font-epilogue font-medium md:text-[90px] text-[120px] flex items-center">
            o<div className="rounded-full h-2 w-2 bg-white mx-4" />
            pus
          </h4>
          <p className="font-epilogue font-light text-[32px]">/'ōpəs/</p>
          <div className="h-2 bg-white my-[16px] max-w-[415px]" />
          <p className="font-opensaucelight text-[28px] leading-[1em] tracking-[-0.05em]">
            artistic creation or body of work
          </p>
        </div>
        <div className="md:basis-[70%] mt-[64px] md:mt-0 md:ml-[135px]">
          <h3 className="font-epilogue font-medium text-[48px] md:text-[64px] mb-[16px] leading-[1em] tracking-[-0.05em]">
            Who are we?
          </h3>
          <p className="font-opensauce text-[16px] lg:text-[26px] leading-[1em] tracking-[-0.05em] mb-[32px]">
            We are an innovative agency that specializes in the creation of
            visual brand identities and brand development.
          </p>
          <p className="font-opensauce text-[16px] lg:text-[26px] leading-[1em] tracking-[-0.05em]">
            We collaborate with businesses and organizations during
            transformative periods, guiding them to uncover the essence of their
            future identity.
          </p>
        </div>
      </div>
    </section>
  );
}
