import TeamCard from "./TeamCard";
import {teamData} from '../constants/index'

export default function TeamSlider() {
    return(
        <div className="flex overflow-x-auto [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-30px),transparent_100%)] lg:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] md:pb-[32px]">
            {
                teamData.map((data) => (
                    <TeamCard key={data.id} profileData={data} />
                ))
            }
        </div>
    )
}