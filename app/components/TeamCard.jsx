import Image from "next/image"

export default function TeamCard({profileData}) {
    return(
        <div className="flex flex-col items-center text-center gap-y-[8px] px-6 basis-[33%]">
            <h4 className="font-epilogue font-medium text-[20px] order-1">{profileData.name}</h4>
            <p className="font-opensauce order-3 text-[16px]">{profileData.title}</p>
            <Image className="min-w-[150px] rounded-lg order-2" src={profileData.imageUrl} />
        </div>
    )
}