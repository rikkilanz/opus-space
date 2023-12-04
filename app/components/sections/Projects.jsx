import {live2kThumb, forwardThumb} from "../../assets/index";
import Image from "next/image";





export default function Projects() {
    

    return (
        <section>
            <div className="max-w-[1440px] mx-auto mt-10 px-4 py-6">
                <h2 className="lg:text-[24px] font-epilogue font-bold text-primary text-[18px]">Our Projects</h2>
                <h3 className="font-opensaucelight text-[36px] mt-[20px] leading-[1.3em] tracking-[-0.05em]">How can we produce work that you are interested in?</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="group relative">
                    <Image 
                    className="w-full group-hover:bg-slate-900 group-hover:opacity-50 cursor-pointer"
                    src={forwardThumb}
                    onClick={'#'}
                    /> 
                    <div className="absolute font-opensaucebold text-white font-bold inset-0 ml-2 opacity-0 group-hover:opacity-100 md:text-[36px] lg:text-[40px]">FORWARD 2023</div>
                    <div className="absolute font-opensauceitalic text-white bottom-0 right-0 mr-2 opacity-0 group-hover:opacity-100 md:text-[22px] lg:text-[34px]">UI UX / WEB DEVELOPMENT</div>
                </div>
                <div className="group relative">
                    <Image 
                    className="w-full group-hover:bg-slate-900 group-hover:opacity-50 cursor-pointer"
                    src={live2kThumb}
                    /> 
                    <div className="absolute font-opensaucebold text-white font-bold inset-0 ml-2 opacity-0 group-hover:opacity-100 md:text-[36px] lg:text-[40px]">LIVE 2K</div>
                    <div className="absolute font-opensauceitalic text-white bottom-0 right-0 mr-2 opacity-0 group-hover:opacity-100 md:text-[22px] lg:text-[34px]">UI UX / WEB DEVELOPMENT</div>
                </div>
                <div className="group relative">
                    <Image 
                    className="w-full group-hover:bg-slate-900 group-hover:opacity-50 cursor-pointer"
                    src={live2kThumb}
                    /> 
                    <div className="absolute font-opensaucebold text-white font-bold inset-0 ml-2 opacity-0 group-hover:opacity-100 md:text-[36px] lg:text-[40px]">LIVE 2K</div>
                    <div className="absolute font-opensauceitalic text-white bottom-0 right-0 mr-2 opacity-0 group-hover:opacity-100 md:text-[22px] lg:text-[34px]">UI UX / WEB DEVELOPMENT</div>
                </div>
                <div className="group relative">
                    <Image 
                    className="w-full group-hover:bg-slate-900 group-hover:opacity-50 cursor-pointer"
                    src={forwardThumb}
                    /> 
                    <div className="absolute font-opensaucebold text-white font-bold inset-0 ml-2 opacity-0 group-hover:opacity-100 md:text-[36px] lg:text-[40px]">LIVE 2K</div>
                    <div className="absolute font-opensauceitalic text-white bottom-0 right-0 mr-2 opacity-0 group-hover:opacity-100 md:text-[22px] lg:text-[34px]">UI UX / WEB DEVELOPMENT</div>
                </div>
                <div className="group relative">
                    <Image 
                    className="w-full group-hover:bg-slate-900 group-hover:opacity-50 cursor-pointer"
                    src={forwardThumb}
                    /> 
                    <div className="absolute font-opensaucebold text-white font-bold inset-0 ml-2 opacity-0 group-hover:opacity-100 md:text-[36px] lg:text-[40px]">LIVE 2K</div>
                    <div className="absolute font-opensauceitalic text-white bottom-0 right-0 mr-2 opacity-0 group-hover:opacity-100 md:text-[22px] lg:text-[34px]">UI UX / WEB DEVELOPMENT</div>
                </div>
                <div className="group relative">
                    <Image 
                    className="w-full group-hover:bg-slate-900 group-hover:opacity-50 cursor-pointer"
                    src={live2kThumb}
                    /> 
                    <div className="absolute font-opensaucebold text-white font-bold inset-0 ml-2 opacity-0 group-hover:opacity-100 md:text-[36px] lg:text-[40px]">LIVE 2K</div>
                    <div className="absolute font-opensauceitalic text-white bottom-0 right-0 mr-2 opacity-0 group-hover:opacity-100 md:text-[22px] lg:text-[34px]">UI UX / WEB DEVELOPMENT</div>
                </div>
            </div>
        </section>
    )
}