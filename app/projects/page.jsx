"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projectContent } from "../constants/projectContent";
import ProjectsList from "../components/ProjectsList";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

async function fetchData(slug) {
  // Simulating an API call or any asynchronous data fetching
  return new Promise((resolve) => {
    setTimeout(() => {
      const project = projectContent.find((proj) => proj.slug === slug);
      resolve(project);
    }, 1000); // Simulating a 1-second delay
  });
}

export default function ProjectPage({ searchParams }) {
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProjectData = async () => {
      if (searchParams) {
        const data = await fetchData(searchParams.slug);
        setProject(data);
      }
    };

    fetchProjectData();
  }, [searchParams]);

  if (!project) {
    // You can render a loading state or return null
    return null;
  }
  return (
    <div>
      {projectContent.map((project) => {
        if (searchParams.slug === project.slug) {
          return (
            <section>
              <div>
                <Image
                  className="w-full h-auto object-cover"
                  src={project.imageContent[0].src}
                  alt="Forward thumbnail"
                />
              </div>
              <div className="flex flex-col mt-[32px] lg:mt-[150px]">
                <h1 className="text-left lg:text-center text-[40px] md:text-[60px] lg:text-[100px] font-epilogue font-medium leading-[1em] tracking-[-0.05em] py-6 px-4">
                  {project.name}
                </h1>
                <p className="text-[16px] md:text-[20px] lg:text-[32px] text-left leading lg:text-center font-epilogue font-medium mt-[20px] leading-[1em] tracking-[-0.05em] px-4">
                  {project.blurb}
                </p>
              </div>
              <div className="flex flex-col items-center max-w-[1440px] mx-auto">
                <div className="flex flex-col lg:flex-row px-4 lg:mt-[120px] lg:items-center">
                  <div className="lg:basis-[60%] order-2 lg:order-1">
                    <h3 className="font-opensauce text-[16px] lg:text-[26px] leading-[1.2em] tracking-[-0.05em] lg:pr-[80px] xl:pr-[136px] mt-[32px] lg:mt-0">
                      {project.description}
                    </h3>
                  </div>
                  <div className="flex flex-col lg:basis-[40%] order-1 lg:order-2 mt-[32px] lg:mt-0">
                    <h2 className="text-[24px] md:text-[30px] lg:text-[70px] text-primary border-b-4 border-white font-epilogue font-medium tracking-[-0.05em] leading-[1em] py-6">
                      Project Tags
                    </h2>
                    <ul className="mt-[20px]">
                      {project.tags.map((tag, i) => {
                        return (
                          <li
                            key={project.tags[i]}
                            className="text-[20px] lg:text-[30px] font-epilogue leading-[1.2em] tracking-[-0.05em]"
                          >
                            {tag}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <div className="basis-full">
                  {project.projectUrl !== "" && (
                    <div className="text-center mt-[32px]">
                      <Link
                        className="leading-[1em] tracking-[-0.05em] bg-primary hover:bg-[#424FFF] duration-[2] transition-all ease-in-out font-epilogue hover:font-bold py-4 px-6 rounded-full m-6 lg:m-0 text-center lg:mt-[20px] flex items-center"
                        href={project.projectUrl}
                      >
                        View Live Project{" "}
                        <span>
                          <ArrowTopRightOnSquareIcon className="ml-2 h-4 w-4" />
                        </span>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
              <div className="relative lg:mt-[32px]">
                <div className="absolute top-0 w-full bg-gradient-to-b from-black to-[rgba(5,10,17,0) lg:h-[200px] h-[80px]" />
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-[rgba(5,10,17,0) lg:h-[200px] h-[80px]" />

                <Image
                  src={project.imageContent[1].src}
                  alt={project.imageContent[1].alt}
                  className="w-full h-auto object-cover"
                />
              </div>
            </section>
          );
        }
      })}
      <div className="mt-[32px] max-w-[1440px] mx-auto lg:mb-[50px] mb-[8px]">
        <h2 className="lg:text-[24px] font-epilogue font-bold text-primary text-[18px] px-4 py-6 leading-[1em] tracking-[-0.05em] ">
          More of our projects
        </h2>
      </div>
      <ProjectsList />
    </div>
  );
}
