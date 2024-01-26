import React, { Button } from "react";
import Link from "next/link";
import Image from "next/image";
import { projectContent } from "../constants/projectContent";
import { forwardThumb } from "../assets";
import Footer from "../components/global/Footer";

export default function ProjectPage() {
    return (
        <section>

            <div>
                <Image className="w-full h-auto object-cover mb-20" src={forwardThumb} alt="Forward thumbnail"/>
            </div>

            <div className="flex flex-col ml-20">
                <h1 className="text-[150px] font-epilogue">Forward Platform</h1>
                <p className="text-[30px] font-epilogue">A Mentoring Web Application</p>
            </div>

            <div className="flex mt-20 justify-evenly items-center font-epilogue">
                <div className="w-[800px] items-center">
                    <h3 className="text-[36px]">Forward connects local mentors and mentees by matching them based on compatibility using user-entered survey information. Forward also offers a Community Hub where users could post their work and join their peers in discussions about their specialties and interests.</h3>
                </div>
                <div className="flex flex-col">
                    <h2 className="text-[70px] text-secondary underline underline-offset-8 decoration-white ">Project Roles</h2>
                    <p className="text-[40px]">Web Developer</p>
                    <p className="text-[40px]">UI/UX Designer</p>
                    <p className="text-[40px]">Graphic Designer</p>
                    <p className="text-[40px]">Copywriter</p>
                </div>
            </div>
            <div className="text-center m-20"> 
                <button className="rounded-full bg-primary p-8 font-epilogue w-[400px] text-[26px]">
                View Forward's Website
                </button>
            </div>
            <div>
                <h2 className="text-[36px] ml-32 text-secondary font-epilogue font-bold mb-20">More of our projects</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {projectContent.map((project) => {
                return (
                <Link key={project.id} href="/project">
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
            <Footer/>
        </section>

    )
}