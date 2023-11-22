"use client";
import Image from "next/image";

export default function TeamCard({ profileData }) {

  return (
    <div
    className="flex flex-row flex-wrap justify-center md:justify-start items-center gap-y-[8px] px-4 py-6 relative"
    >
      <h4 className="font-epilogue font-medium text-[30px] md:text-[24px] lg:text-[30px] leading-[-1.6px] order-1 md:basis-[70%] md:text-left whitespace-no-wrap self-end">
        {profileData.name}
      </h4>
      <p className="font-opensauce order-3 md:order-2 md:basis-[30%] text-[16px] md:text-right leading-[-1.6px] self-end">
        {profileData.title}
      </p>
      <Image
        className="rounded-lg order-2 md:order-3 basis-full"
        src={profileData.imageUrl}
        alt={profileData.alt}
      />
    </div>
  );
}
