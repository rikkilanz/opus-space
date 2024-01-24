"use client";

import React from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const SERVICE_KEY = process.env.NEXT_PUBLIC_SERVICE_KEY;
  const TEMPLATE_KEY = process.env.NEXT_PUBLIC_TEMPLATE_KEY;
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  function sendEmail(e) {
    e.preventDefault();
    let content = {
      from_name: e.target.name.value,
      from_email: e.target.email.value,
      message: e.target.message.value,
      budget: e.target.budget.value,
    };

    emailjs.send(SERVICE_KEY, TEMPLATE_KEY, content, API_KEY).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
      },
      (err) => {
        console.log("FAILED...", err);
      }
    );
    // try {
    //   // await delay(5000);
    //   await fetch(
    //     "https://funcapp-cavallo-technologies.azurewebsites.net/api/emailtrigger?",
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(content),
    //     }
    //   );
    //   successState(true);
    // } catch (error) {
    //   if (error) {
    //     successState(false);
    //   }
    // }
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
        <form onSubmit={sendEmail}>
          <div className="mb-5">
            <div>
              <label
                className="mb-2 font-opensaucebold text-white block"
                htmlFor="for_name"
              >
                Your Name <span className="text-red-500">*</span>
              </label>
            </div>
            <input
              type="text"
              name="name"
              id="from_name"
              placeholder="Your Name Here"
              className="w-full md:w-[330px] lg:w-[400px] border border-white bg-transparent p-4 text-[12px] font-opensauce text-white outline-none focus:border-primary focus:shadow-md"
              required
              // value={name}
              // onChange={(e) => setName(e.target.value)}
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
              className="w-full md:w-[330px] lg:w-[400px] border border-white bg-transparent p-4 text-[12px] font-opensauce text-white outline-none focus:border-primary focus:shadow-md"
              required
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
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
              type="text"
              name="project"
              id="message"
              placeholder="Tell us about the project your working on!"
              className="w-full md:w-[330px] lg:w-[400px] h-[200px] border border-white bg-transparent p-4 text-[12px] font-opensauce text-white outline-none focus:border-primary focus:shadow-md"
              required
              // value={message}
              // onChange={(e) => setMessage(e.target.value)}
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
              className="w-full md:w-[330px] lg:w-[400px] border border-white bg-transparent p-4 text-[12px] font-opensauce text-white outline-none focus:border-primary focus:shadow-md"
              // value={budget}
              // onChange={(e) => setBudget(e.target.value)}
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-primary md:w-[150px] p-[15px] rounded-full text-[15px] text-center w-full font-opensauce"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
