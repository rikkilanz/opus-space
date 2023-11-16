"use client"
import {useState} from 'react';
import TeamCard from "./TeamCard";
import {teamData} from '../constants/index'

export default function TeamSlider() {

    // const [sliderId, setSliderId] = useState(0);

    // console.log(sliderId)

    return(
        <div className="flex overflow-x-auto [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-30px),transparent_100%)] lg:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] md:pb-[32px]">
            {
                teamData.map((data) => (
                    <TeamCard key={data.id} profileData={data}/>
                ))
            }
        </div>
    )
}