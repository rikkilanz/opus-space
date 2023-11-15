import { profile } from "console";
import Image from "next/image";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/solid";

export default function TeamCard({ profileData }) {
  return (
    <div
      className={`${
        profileData.id !== 2
          ? "min-w-[200px] md:w-[300px] mt-[24px]"
          : "min-w-[300px] md:w-[400px]"
      } flex flex-row flex-wrap justify-center md:justify-start items-center gap-y-[8px] px-4 py-6 relative`}
    >
      <h4 className="font-epilogue font-medium text-[30px] md:text-[24px] lg:text-[28px] leading-[-1.6px] order-1 md:basis-[50%] md:text-left whitespace-no-wrap">
        {profileData.id === 2 ? profileData.name : ""}
      </h4>
      <p className="font-opensauce order-3 md:order-2 md:basis-[50%] text-[20px] md:text-[22px] lg:text-[26px] md:text-right leading-[-1.6px]">
        {profileData.id === 2 ? profileData.title : ""}
      </p>
      {profileData.id === 3 && (
        <div className="md:flex gap-x-6 order-4 hidden absolute bottom-0">
          <ArrowLongLeftIcon className="w-[50px] cursor-pointer"/> <ArrowLongRightIcon className="w-[50px] cursor-pointer"/>
        </div>
      )}
      <Image
        className={`${
          profileData.id !== 2 ? "grayscale blur-[1px]" : "grayscale-0"
        } rounded-lg order-2 md:order-3 basis-full`}
        src={profileData.imageUrl}
      />
    </div>
  );
}
