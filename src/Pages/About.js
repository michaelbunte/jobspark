import "./Base.css"

export default function About() {
    return <div className="aboutpage">
        <div style={{
            fontSize: "2rem",
            margin: "10px"
        }}>
            About Us
        </div>
        <div style={{
            background: "rgba(255,255,255,0.8)",
            fontFamily:  "Inria Sans",
            color: "black",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            fontSize: "1.3rem",
            width: "90%",
            maxWidth: "800px",
            padding: "20px",
            borderRadius: "10px"
        }}>
            <div>
                At JobSpark, we believe that everyone deserves access to meaningful employment opportunities, regardless of their circumstances. Founded in 2024 by a group of UCLA students, our mission has been to spark positive change by connecting low-income or unemployed individuals with job opportunities in their communities.
            </div>

            <div>
                We understand the challenges that individuals face when trying to enter or reenter the workforce, which is why we provide user-focused tools and resources to simplify the job search process. From matching individuals with nearby job openings to connecting users with comprehensive training services and courses, we are committed to empowering our users to unlock their full potential and start on the best course for their futures.
            </div>

            <div>
                Join us in creating a world where every individual has the chance to thrive. Let's spark change, one job at a time.
            </div>
        </div>

    </div>
}