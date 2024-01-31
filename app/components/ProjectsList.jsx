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
            href="/project/[projects]"
            as={`/project/${project.slug}`}
          >
            <div className="group relative overflow-hidden">
              <Image
                className="w-full group-hover:bg-slate-900 group-hover:opacity-50 cursor-pointer transition-all ease-in-out duration-[2] group-hover:transform group-hover:scale-[1.03]"
                src={project.imageContent[0].src}
                alt={project.imageContent[0].alt}
              />
              <div className="absolute font-opensaucebold leading-[1em] tracking-[-0.05em] text-white font-bold inset-0 ml-2 opacity-0 group-hover:opacity-100 md:text-[36px] lg:text-[40px] 2xl:text-[60px] uppercase transition-all ease-in-out duration-[2]">
                {project.name}
              </div>
              <div className="absolute font-opensauceitalic leading-[1em] tracking-[-0.05em] text-white bottom-0 right-0 mr-2 opacity-0 group-hover:opacity-100 md:text-[22px] lg:text-[34px] 2xl:text-[34px] transition-all ease-in-out duration-[2]">
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
