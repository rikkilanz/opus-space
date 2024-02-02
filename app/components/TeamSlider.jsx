"use client";
import TeamCard from "./TeamCard";
import { teamData } from "../constants/index";
import Slider from "react-slick";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/solid";

export default function TeamSlider() {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      id="previous"
      {...props}
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      <ArrowLongLeftIcon className="hidden md:block right-[24%] bottom-[25px] w-[50px] cursor-pointer absolute lg:bottom-0 z-[99] lg:right-[30%]" />
    </button>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      id="next"
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    >
      <ArrowLongRightIcon className="hidden md:block right-[16%] bottom-[25px] w-[50px] cursor-pointer absolute lg:bottom-0 z-[99] lg:right-[25%]" />
    </button>
  );

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
    nextArrow: <SlickArrowRight />,
    prevArrow: <SlickArrowLeft />,
  };

  return (
    <Slider
      {...settings}
      className="sm:translate-x-[-300px] md:translate-x-[-200px]"
    >
      {teamData.map((data) => (
        <TeamCard key={data.id} profileData={data} />
      ))}
    </Slider>
  );
}
