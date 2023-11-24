import TeamSlider from "../TeamSlider";

export default function OurTeam() {
  return (
    <section className=" max-w-[1440px] mx-auto">
      <h3 className="lg:text-[24px] font-epilogue font-bold text-primary text-[18px] px-4 py-6 leading-[1em] tracking-[-0.05em]">
        Our Team
      </h3>
      <div className="overflow-hidden relative">
        <TeamSlider />
      </div>
    </section>
  );
}

// [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-30px),transparent_100%)] lg:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] md:pb-[32px]