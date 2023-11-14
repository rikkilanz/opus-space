import TeamCard from "./TeamCard";
import {teamData} from '../constants/index'

export default function TeamSlider() {
    return(
        <div className="flex overflow-x-auto">
            {
                teamData.map((data) => (
                    <TeamCard key={data.id} profileData={data} />
                ))
            }
        </div>
    )
}