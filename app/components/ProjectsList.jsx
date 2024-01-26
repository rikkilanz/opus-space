import Image from "next/image";
import { projectContent } from "../constants/projectContent";
import Link from "next/link";
export default function ProjectsList() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      {projectContent.map((project) => {
        return (
          <Link
            key={project.id}
            href={{
              pathname: "/projects/",
              query: { slug: project.slug },
            }}
          >
            <div className="group relative">
              <Image
                className="w-full group-hover:bg-slate-900 group-hover:opacity-50 cursor-pointer"
                src={project.imageContent[0]}
                alt="project thumbnail for forward 2023"
              />
              <div className="absolute font-opensaucebold text-white font-bold inset-0 ml-2 opacity-0 group-hover:opacity-100 md:text-[36px] lg:text-[40px]">
                {project.name}
              </div>
              <div className="absolute font-opensauceitalic text-white bottom-0 right-0 mr-2 opacity-0 group-hover:opacity-100 md:text-[22px] lg:text-[34px]">
                {project.tags.map((tag, index) => {
                  return (
                    <span key={tag}>
                      {tag}
                      {index !== project.tags.length - 1 && " | "}
                    </span>
                  );
                })}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
