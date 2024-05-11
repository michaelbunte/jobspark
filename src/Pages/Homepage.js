import './Homepage.css';
import { Link } from "react-router-dom";


const other_button = {
    background: "white",
    padding: "8px 20px",
    color: "black",
    borderRadius: "20px",
    border: "2px black solid",
    boxShadow: "7px 7px 15px -6px rgba(0,0,0,0.61)",
    cursor: "pointer"
}

function Homepage() {
    return <div className="page">
        <div style={{ fontSize: "2.2rem" }}>
            Welcome To
        </div>
        <div style={{
            fontSize: "4rem",
            color: "rgba(0,0,0,0.6)",
        }}>
            JobSpark
        </div>
        <div style={{
            fontFamily: "be vietnam pro",
            color: "#026483",
            marginTop: "20px",
            marginBottom: "100px"
        }}>
            your employment search: personalized
        </div>

        <Link to="/questionaire" style={{ textDecoration: "none", color: "inherit" }}>
            <div style={{
                background: "#535bad",
                padding: "20px",
                borderRadius: "20px",
                border: "2px black solid",
                boxShadow: "7px 7px 15px -6px rgba(0,0,0,0.61)",
                marginBottom: "15px",
                cursor: "pointer"
            }}>
                Get Started
            </div>
        </Link>


        <div style={other_button}>
            Login
        </div>

        <div style={{...other_button, ...{
            position: "absolute",
            bottom: "0",
            marginBottom: "20px"
        }}}> 
            Español
        </div>
    </div>
}

export default Homepage;