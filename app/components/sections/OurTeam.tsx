import { teamData } from "@/app/constants";
import Image from "next/image";

export default function OurTeam() {
  console.log("debgging");

  return (
    <section id="team-section" className=" max-w-[1440px] mx-auto">
      <h3 className="lg:text-[24px] font-epilogue font-bold text-primary text-[18px] px-4 py-6 leading-[1em] tracking-[-0.05em]">
        Our Team
      </h3>
      {/* <div className="overflow-hidden relative">
        <TeamSlider />
      </div> */}
      <ul className="flex flex-col md:flex-row gap-4 px-4">
        {teamData.map((team) => {
          return (
            <li key={team.id} className="md:basis-[33%] group relative">
              <Image
                className="rounded-md h-full w-auto grayscale group-hover:grayscale-0 transition-all blur-[1px] group-hover:blur-0"
                src={team.imageUrl}
                alt={`a profile photo of ${team.name}`}
              />
              <a href={team.href} target="_blank" className="overflow-hidden">
                <div className="absolute font-opensaucebold leading-[1em] tracking-[-0.05em] text-white font-bold inset-0 ml-2 mt-2 md:opacity-0 group-hover:opacity-100 text-[36px] lg:text-[40px] 2xl:text-[60px] uppercase transition-all ease-in-out duration-[2]">
                  {team.name}
                </div>
                <div className="absolute font-opensauceitalic leading-[1em] tracking-[-0.05em] text-white bottom-0 right-0 mr-2  mb-2 md:opacity-0 group-hover:opacity-100 text-[22px] lg:text-[34px] 2xl:text-[34px] transition-all ease-in-out duration-[2]">
                  {team.title}
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
