"use client";
import TeamCard from "./TeamCard";
import { teamData } from "../constants/index";
import Slider from "react-slick";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/solid";

export default function TeamSlider() {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    infinte: true,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
    nextArrow: (
      <button id="next">
        <ArrowLongRightIcon className="hidden md:block right-[16%] bottom-[25px] w-[50px] cursor-pointer absolute lg:bottom-0 z-[99] lg:right-[25%]" />
      </button>
    ),
    prevArrow: (
      <button id="previous">
        <ArrowLongLeftIcon className="hidden md:block right-[24%] bottom-[25px] w-[50px] cursor-pointer absolute lg:bottom-0 z-[99] lg:right-[30%]" />
      </button>
    ),
  };

  return (
    <Slider {...settings} className="sm:translate-x-[-300px] md:translate-x-[-200px]">
      {teamData.map((data) => (
        <TeamCard key={data.id} profileData={data} />
      ))}
    </Slider>
  );
}

