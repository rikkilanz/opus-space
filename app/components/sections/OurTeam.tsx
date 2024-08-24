import TeamSlider from "../TeamSlider";
import { teamData } from "@/app/constants";
import Image from "next/image";

export default function OurTeam() {
  return (
    <section id="team-section" className=" max-w-[1440px] mx-auto">
      <h3 className="lg:text-[24px] font-epilogue font-bold text-primary text-[18px] px-4 py-6 leading-[1em] tracking-[-0.05em]">
        Our Team
      </h3>
      <div className="overflow-hidden relative">
        <TeamSlider />
      </div>
      {/* <ul className="flex gap-4">
        {teamData.map((team) => {
          return (
            <li key={team.id} className="basis-[33%]">
              <Image
                height={500}
                width={500}
                className="rounded-full h-full w-auto grayscale hover:grayscale-0 transition-all blur-[1px] hover:blur-0"
                src={team.imageUrl}
                alt={`a profile photo of ${team.name}`}
              />
            </li>
          );
        })}
      </ul> */}
    </section>
  );
}
