import "./Base.css";
import goodwill from "./images/goodwill.png";
import chrys from "./images/chrys.png";
import govjobs from "./images/govjobs.png";
import homeboy from "./images/homeboy.png";
import jvs from "./images/jvs.png";
import spy from "./images/spy.png";
import transcanwork from "./images/transcanwork.png";

import opportunities from "../data/opportunities.json";


function Tile({ title, description, img }) {
    return <div className="hovergrow" style={{
        width: "300px",
        background: "white",
        height: "180px",
        border: "solid black 2px",
        fontFamily: "Be Vietnam Pro",
        fontSize: "1.3rem",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        boxShadow: "10px 10px 20px rgba(0,0,0,0.5)"
    }}>
        <div style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
        }}>
            <img src={img} style={{
                height: "100px"
            }} />
        </div>
        <div style={{ textAlign: "center", fontWeight: "bold" }}>
            {title}
        </div>
        <div style={{
            textAlign: "center",
            fontSize: "1rem",
            paddingTop: "10px"
        }}>
            {description}
        </div>
    </div>
}

export default function EmploymentResources() {
    const links = opportunities["links"];

    return <div
        className="basicpage"
        style={{
            color: "rgba(0,0,0,0.8)"
        }}
    >
        <div style={{ fontSize: "2rem" }}>
            Employment Resources
        </div>
        <div style={{
            fontSize: "1.4rem",
            textAlign: "center"
        }}>
            <div>
                Learn more about training programs, career assistance, and job opportunities.
            </div>
            <div>
                An ever growing list can be found here.
            </div>
        </div>

        <div style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            justifyContent: "center",
            background: "rgba(255,255,255,0.5)",
            padding: "20px",
            borderRadius: "20px",
            margin: "10px"
        }}>
            <Tile
                title={"Chrysalis"}
                img={chrys}
                description="Job-readiness program, individualized case management, and more!"
            />
            <Tile
                title={"JVS Socal"}
                img={jvs}
                description="No-Cost Career Training Mentoring for Women"
            />
            <Tile
                title="GovernmentJobs"
                img={govjobs}
                description="Job Opportunities with the County of Los Angeles"
            />
            <Tile
                title={"Goodwill"}
                img={goodwill}
                description="Occupational Skill Training,  Career Centers, and more"
            />
            <Tile
                title={"Spy"}
                img={spy}
                description="Providing youth job readiness tools, internship programs, and more!"
            />
            <Tile
                title={"TransCanWork"}
                img={transcanwork}
                description="Transgender Employment Programs"
            />
            <Tile
                title={"Homeboy Industries"}
                img={homeboy}
                description="Workforce development  for former gang involved men and women"
            />
        </div>
    </div>
}