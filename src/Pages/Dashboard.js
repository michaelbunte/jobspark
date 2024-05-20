import "./Base.css";
import { Link } from "react-router-dom";

export default function Dashboard() {
    const button_style = {
        borderRadius: "100px",
        padding: "10px",
        background: "#80C3E4",
        fontSize: "1.4rem",
        border: "black solid 2px",
        margin: "4px"
    }

    return <div className="basicpage">
        <div style={{
            color: "rgba(0,0,0,0.8)"
        }}>
            Your Dashboard
        </div>

        <Link to="/employmentresources" style={{ textDecoration: "none", color: "inherit" }}>
            <div style={button_style}>
                External Employment Resources
            </div>
        </Link>

        <Link to="/potentialmatches" style={{ textDecoration: "none", color: "inherit" }}>
            <div style={button_style}>
                Your Potential Positions
            </div>
        </Link>
    </div >
}