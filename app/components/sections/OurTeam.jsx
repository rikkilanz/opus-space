import TeamSlider from "../TeamSlider";

export default function OurTeam() {
  return (
    <section id="team-section" className=" max-w-[1440px] mx-auto">
      <h3 className="lg:text-[24px] font-epilogue font-bold text-primary text-[18px] px-4 py-6 leading-[1em] tracking-[-0.05em]">
        Our Team
      </h3>
      <div className="overflow-hidden relative">
        <TeamSlider />
      </div>
    </section>
  );
}