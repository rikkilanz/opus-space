"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function Contact() {
  const [success, setSuccess] = useState(false);

  const SERVICE_KEY = process.env.NEXT_PUBLIC_SERVICE_KEY;
  const TEMPLATE_KEY = process.env.NEXT_PUBLIC_TEMPLATE_KEY;
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  function sendEmail(e: any) {
    e.preventDefault();
    if (!SERVICE_KEY || !TEMPLATE_KEY || !API_KEY) {
      console.error("EmailJS keys are not properly defined");
      return;
    }
    let content = {
      from_name: e.target.name.value,
      from_email: e.target.email.value,
      message: e.target.message.value,
      budget: e.target.budget.value,
    };

    emailjs.send(SERVICE_KEY, TEMPLATE_KEY, content, API_KEY).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setSuccess(true);
      },
      (err) => {
        console.log("FAILED...", err);
        setSuccess(false);
      }
    );
  }

  return (
    <section id="contact-section" className="">
      <div className="max-w-[1440px] mx-auto mt-20">
        <h1 className="font-epilogue font-medium text-[80px] lg:text-[160px] leading-[1em] tracking-[-0.05em] text-center px-4">
          Let's <span className="text-primary">Work</span> together and create
          your <span className="text-primary">Opus.</span>
        </h1>
      </div>
      <div className="mt-10 p-6 grid-cols-2 md:flex md:justify-center md:items-center lg:flex lg:justify-center lg:items-center gap-40 bg-gradient-to-b from-black via-[rgba(10,6,218,0.1)] via-20% to-[rgba(199,70,231,1)]">
        {success ? (
          <div className="text-white text-center min-h-[500px] flex flex-col items-center justify-center">
            <CheckCircleIcon className="h-12 w-12" />
            <h2 className="font-opensauce text-[2.25em] leading-[1em] tracking-[-0.05em] py-6 px-4 mb-[32px] max-w-[800px]">
              Thank you for submitting your request. We can't wait to work with
              you, we'll get back to you soon!
            </h2>
          </div>
        ) : (
          <form onSubmit={sendEmail}>
            <div className="mb-5">
              <div>
                <label
                  className="mb-2 font-opensaucebold text-white block"
                  htmlFor="from_name"
                >
                  Your Name <span className="text-red-500">*</span>
                </label>
              </div>
              <input
                type="text"
                name="name"
                id="from_name"
                placeholder="Your Name Here"
                className="w-full md:w-[330px] lg:w-[400px] border border-white bg-transparent p-4 text-[12px] font-opensauce text-white outline-none focus:border-primary focus:shadow-md focus:border-2 rounded-sm"
                required
              />
            </div>
            <div className="mb-5">
              <div>
                <label
                  className="mb-2 font-opensaucebold text-white block"
                  htmlFor="from_email"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
              </div>
              <input
                type="text"
                name="email"
                id="from_email"
                placeholder="Your Email Here"
                className="w-full md:w-[330px] lg:w-[400px] border border-white bg-transparent p-4 text-[12px] font-opensauce text-white outline-none focus:border-primary focus:shadow-md focus:border-2 rounded-sm"
                required
              />
            </div>
            <div className="mb-5">
              <div>
                <label
                  className="mb-2 font-opensaucebold text-white block"
                  htmlFor="message"
                >
                  About Your Project <span className="text-red-500">*</span>
                </label>
              </div>
              <textarea
                name="project"
                id="message"
                placeholder="Tell us about the project your working on!"
                className="w-full md:w-[330px] lg:w-[400px] h-[200px] border border-white bg-transparent p-4 text-[12px] font-opensauce text-white outline-none focus:border-primary focus:shadow-md focus:border-2 rounded-sm"
                required
              />
            </div>
            <div className="mb-5">
              <div>
                <label
                  className="mb-2 font-opensaucebold text-white block"
                  htmlFor="budget"
                >
                  Estimated Budget
                </label>
              </div>
              <input
                type="text"
                name="budget"
                id="budget"
                placeholder="Give us a general sense of your budget"
                className="w-full md:w-[330px] lg:w-[400px] border border-white bg-transparent p-4 text-[12px] font-opensauce text-white outline-none focus:border-primary focus:shadow-md focus:border-2 rounded-sm"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-primary py-4 px-6 rounded-full text-[15px] text-center w-full hover:bg-[#424FFF] duration-[2] transition-all ease-in-out font-epilogue hover:font-bold"
              >
                Send Message
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
