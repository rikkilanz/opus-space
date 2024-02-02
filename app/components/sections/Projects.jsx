import ProjectsList from "../ProjectsList";

export default function Projects() {
  return (
    <section id="projects-section">
      <div className="max-w-[1440px] mx-auto mt-10 px-4 pt-6 pb-[50px]">
        <h2 className="lg:text-[24px] font-epilogue font-bold text-primary text-[18px] leading-[1em] tracking-[-0.05em]">
          Our Projects
        </h2>
        <h3 className="font-opensaucelight text-[36px] mt-[20px] leading-[1em] tracking-[-0.05em]">
          How can we produce work that you are interested in
        </h3>
      </div>
      <ProjectsList />
    </section>
  );
}
