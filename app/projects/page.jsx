import ProjectsList from "../components/ProjectsList";

export default function ProjectsPage() {
  return (
    <div>
      <div className="max-w-[1440px] mx-auto">
        <h1 className=" text-[100px] sm:text-[120px] lg:text-[190px] 2xl:text-[227px] max-w-[760px] md:max-w-[750px] lg:max-w-[1180px] 2xl:max-w-[1397px] font-epilogue font-medium leading-[1em] tracking-[-0.05em] py-6 px-4">
          Our Projects
        </h1>
      </div>
      <ProjectsList />
    </div>
  );
}
