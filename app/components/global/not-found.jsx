import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";


export default function NotFoundPage() {

    const router = useRouter();

    useEffect(() =>  {
        router.replace("/")
    })

    return (
        <div className="flex flex-col items-center gap-5">
            <h1 className="text-primary font-epilogue font-bold text-[40px]">404: This page can not be found</h1>
            <Link href={'#'} className="leading-[1em] tracking-[-0.05em] bg-primary hover:bg-[#424FFF] duration-[2] transition-all ease-in-out font-epilogue hover:font-bold py-4 px-6 rounded-full m-6 lg:m-0 text-center lg:mt-[20px] flex items-center">Return to home</Link>
        </div>
    )
}