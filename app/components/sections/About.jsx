export default function About() {
  return (
    <section className="bg-gradient-to-b from-[rgba(199,70,231,1)] to-[rgba(10,6,218,0.1)] to-70%">
      <div className="max-w-[1440px] mx-auto pt-6 px-4 pb-[200px] flex items-center">
        <div className="basis-[30%]">
          <h4 className="font-epilogue font-medium text-[150px]">o.pus</h4>
          <p className="font-epilogue font-light text-[32px]">/'ōpəs/</p>
          <div className="h-1 bg-white my-[16px] max-w-[415px]" />
          <p className="font-opensaucelight text-[28px]">
            artistic creation or body of work
          </p>
        </div>
        <div className="basis-[70%] ml-[135px]">
          <h3 className="font-epilogue font-medium text-[64px] mb-[16px]">
            Who are we?
          </h3>
          <p className="font-opensauce text-[26px] leading-[1.2em]">
            We are an innovative agency that specializes in the creation of
            visual brand identities and brand development. We collaborate with
            businesses and organizations during transformative periods, guiding
            them to uncover the essence of their future identity.
          </p>
        </div>
      </div>
    </section>
  );
}
