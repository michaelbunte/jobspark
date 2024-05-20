import './PotentialMatches.css'

import joblist from "../data/joblist.json";

function JobTile({
    position="",
    availability="",
    hours_required="",
    color="green"
}) {

    const color_map = {
        "green" : "#39EEAAF",
        "yellow" : "#FFFDCA"
    }
    return (
        <div style={{
            background: color_map[color],
            padding: "10px 20px",
            margin: "10px  20px",
            borderRadius: "10px 10px 10px 0px",
            color: "rgba(0,0,0,0.8)",
            fontSize: "1.5rem",
            boxShadow: "14px 17px 56px rgba(0,0,0,0.41)",
        }}>
            <div style={{fontSize: "2rem"}}>
                {position}
            </div>
            <div>
                Current Available Positions: {availability}
            </div>
            <div>
                {hours_required} Training Hours Required
            </div>
        </div>
    )
}

export default function PotentialMatches() {
    const cards = joblist["joblist"].map(job => <JobTile 
        position={job["position"]}
        availability={job["availability"]}
        hours_required={job["hours_required"]}
        color={job["color"]}
    />)
    
    return <div className="potentialmatchespage" style={{

    }}>
        <div style={{
            // color: "rgba(0,0,0,0.8)",
            fontSize: "3rem",
            textAlign: "center",
            padding: "10px"
        }}>
            Your Potential Job Matches
        </div>
        {cards}
    </div>
}