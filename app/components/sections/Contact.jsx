import Image from "next/image";
import Link from "next/link";
import { brandLogoSymbolWhite, brandLogoHorizontalWhite } from "../../assets/";
import React from "react";

export default function Contact() {
  return (
    <section id="contact-section" className="">
      <div className="max-w-[1440px] mx-auto mt-20">
        <h1 className="font-epilogue font-medium text-[80px] lg:text-[160px] leading-[1em] tracking-[-0.05em] text-center px-4">
          Let's <span className="text-primary">Work</span> together and create
          your <span className="text-primary">Opus.</span>
        </h1>
      </div>
      <div className="mt-10 p-6 grid-cols-2 md:flex md:justify-center md:items-center lg:flex lg:justify-center lg:items-center gap-40 bg-gradient-to-b from-black via-[rgba(10,6,218,0.1)] via-20% to-[rgba(199,70,231,1)]">
        <div className="">
          <div className="mb-5">
            <form method="POST">
              <label
                className="mb-2 font-opensaucebold text-white block"
                htmlFor="name"
              >
                Your Name
              </label>
            </form>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name Here"
              className="w-full md:w-[330px] lg:w-[400px] border border-slate-400 bg-transparent p-4 text-[12px] font-opensauce text-gray-400 outline-none focus:border-primary focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <form method="POST">
              <label
                className="mb-2 font-opensaucebold text-white block"
                htmlFor="email"
              >
                Email Address
              </label>
            </form>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Your Email Here"
              className="w-full md:w-[330px] lg:w-[400px] border border-slate-400 bg-transparent p-4 text-[12px] font-opensauce text-gray-400 outline-none focus:border-primary focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <form method="POST">
              <label
                className="mb-2 font-opensaucebold text-white block"
                htmlFor="project"
              >
                About Your Project
              </label>
            </form>
            <textarea
              type="text"
              name="project"
              id="project"
              placeholder="Tell us about the project your working on!"
              className="w-full md:w-[330px] lg:w-[400px] h-[200px] border border-slate-400 bg-transparent p-4 text-[12px] font-opensauce text-gray-400 outline-none focus:border-primary focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <form method="POST">
              <label
                className="mb-2 font-opensaucebold text-white block"
                htmlFor="budget"
              >
                Estimated Budget
              </label>
            </form>
            <input
              type="text"
              name="budget"
              id="budget"
              placeholder="Give us a general sense of your budget"
              className="w-full md:w-[330px] lg:w-[400px] border border-slate-400 bg-transparent p-4 text-[12px] font-opensauce text-gray-400 outline-none focus:border-primary focus:shadow-md"
            />
          </div>
          <div>
            <Link
              type="submit"
              href={"#"}
              className="bg-primary md:w-[150px] p-[15px] rounded-full text-[15px] text-center w-full"
            >
              Send Message
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
