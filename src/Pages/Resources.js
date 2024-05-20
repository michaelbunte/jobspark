import React from 'react';
/*import { Link } from "react-router-dom";*/
import './Resources.css';


function Resources() {
   /* const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLanguage = i18n.language.startsWith('en') ? 'es' : 'en';
        i18n.changeLanguage(newLanguage);
    };*/ // figure out later

    const resources = [
        { id: 1, image: '/jobspark/chrysalis logo.jpg', title: 'Chrysalis', subtitle: "Job-readiness program, individualized case management, and more!", url: 'https://www.changelives.org/'},
        { id: 2, image: '/jobspark/jvs logo.jpg', title: 'JVS SoCal', subtitle: "No-Cost Career Training Mentoring for Women", url: 'https://jvs-socal.org/' },
        { id: 3, image: '/jobspark/government jobs logo.png', title: 'Government Jobs', subtitle: 'Job Opportunities within Los Angeles County', url: 'https://google.com' }, //add link
        { id: 4, image: '/jobspark/goodwill logo.png', title: 'Goodwill', subtitle: 'Occupational Skill training, Career Centers, and more!', url: 'https://www.goodwill.org/training-and-work-opportunities-for-goodwill-programs/' },
        { id: 5, image: '/jobspark/spy logo.png', title: 'SPY', subtitle: 'Providing youth job readiness tools, internship programs, and more!', url: 'https://www.safeplaceforyouth.org/education_and_employment' },
        { id: 6, image: '/jobspark/transcanwork logo.png', title: 'TransCanWork', subtitle: 'Transgender Employment Programs' , url: 'https://transcanwork.org/job-seeker-services'},
        { id: 7, image: '/jobspark/homeboy logo.png', title: 'Homeboy Industries', subtitle: 'Workforce develpoment for former gang-involved men and women' , url: 'https://homeboyindustries.org/'}
    ];

    return (
        <div className="page">
            <div className="upper-background">
                <img src="jobspark logo.png" alt="Logo" className="logo"/>
                <button className="login-button">Login</button>
                <div style={{ marginTop: "110px" }}>
                    <div style={{ fontSize: "4rem", color: "black" }}>
                        Resource Hub
                    </div>
                    <div style={{ fontFamily: "be vietnam pro", color: "black", marginTop: "20px", marginBottom: "100px" }}>
                        Learn more about training programs, career assistance, and job opportunities.<br />
                        An ever growing list can be found here.
                    </div>
                </div>
            </div>
            <div className="lower-background">
                <div className="resource-grid">
                    {resources.map(resource => (
                        <div key={resource.id} className="resource-box">
                        <a href={resource.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
                            <div className="resource-image" style={{ backgroundImage: `url('${resource.image}')` }}></div>
                            <div className="resource-content">
                                <div className="resource-title">{resource.title}</div>
                                <div className="resource-subtitle">{resource.subtitle}</div>
                            </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Resources;
