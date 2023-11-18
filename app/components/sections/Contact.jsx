import Image from "next/image";
import Link from "next/link";
import { brandLogoSymbolWhite } from "../../assets/";
import React from "react";

export default function Contact() {
    return (
        <section className="">
            <div className="max-w-[680px] mx-auto mt-20">
                <h1 className="font-opensaucebold text-[50px] lg:text-[80px] text-center">Let's <span className="text-primary">Work</span> together and create your <span className="text-secondary">Opus.</span></h1>
            </div>
            <div className="mt-[85px] p-6 grid-cols-2 md:flex md:justify-center md:items-center lg:flex lg:justify-center lg:items-center gap-40 bg-gradient-to-b from-black via-[rgba(10,6,218,0.1)] via-20% to-[rgba(199,70,231,1)]">
                <div>
                    <Image
                    className="lg:w-[500px] mb-10" 
                    src={brandLogoSymbolWhite}

                    />
                </div>
                <div className="">
                    <div className="mb-5">
                        <form method="POST">
                            <label
                            className="mb-2 font-opensaucelight text-white block"
                            for="name"
                            >Your Name</label>
                        </form>
                        <input 
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Your Name Here"
                            className="w-[330px] lg:w-[400px] border border-slate-400 bg-transparent py-3 px-6 text-[12px] font-opensaucelight text-gray-400 outline-none focus:border-primary focus:shadow-md"
                        />
                    </div>
                    <div className="mb-5">
                        <form method="POST">
                            <label
                            className="mb-2 font-opensaucelight text-white block"
                            for="email"
                            >Email Address</label>
                        </form>
                        <input 
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Your Email Here"
                            className="w-[330px] lg:w-[400px] border border-slate-400 bg-transparent py-3 px-6 text-[12px] font-opensaucelight text-gray-400 outline-none focus:border-primary focus:shadow-md"
                        />
                    </div>
                    <div className="mb-5">
                        <form method="POST">
                            <label
                            className="mb-2 font-opensaucelight text-white block"
                            for="project"
                            >About Your Project</label>
                        </form>
                        <textarea 
                            type="text"
                            name="project"
                            id="project"
                            placeholder="Tell us about the project your working on!"
                            className="w-[330px] lg:w-[400px] h-[200px] border border-slate-400 bg-transparent py-3 px-6 text-[12px] font-opensaucelight text-gray-400 outline-none focus:border-primary focus:shadow-md"
                        />
                    </div>
                    <div className="mb-5">
                        <form method="POST">
                            <label
                            className="mb-2 font-opensaucelight text-white block"
                            for="budget"
                            >Estimated Budget</label>
                        </form>
                        <input 
                            type="text"
                            name="budget"
                            id="budget"
                            placeholder="Give us a general sense of your budget"
                            className="w-[330px] lg:w-[400px] border border-slate-400 bg-transparent py-3 px-6 text-[12px] font-opensaucelight text-gray-400 outline-none focus:border-primary focus:shadow-md"
                        />
                    </div>
                    <div>
                        <Link type="submit" href={'#'} className="bg-primary w-[150px] p-[15px] rounded-full text-[15px] text-center">Send Message</Link>
                    </div>
                </div>
            </div>





        </section>
    )
}