import React from 'react'
import "../Styles/about1.css";
import logo from "../Images/schl-logo.png";

const About1 = () => {
    return (
        <>
            <div className="about-us">
                <div className="about1_container">
                    <div className="row">
                        <div className="flex">
                            <h2>About us</h2>
                            <h3>Overview</h3>
                            <p>Karmaveer Bhaurao Patil School-Sion Salesians has a rich history that traces back to its inception on May
                                16,1928. Originally managed by the Salesians, the school was initially located in a rented building named
                                "Tardeo Castle." The management takeover marked a significant shift in staff and administration, with the
                                new school
                                year in 1928 seeing a complete change in personnel.
                                Under the leadership of Fr. Joseph Hauber, Fr. Austin Oehlert, Bro. William Haughey, and Bro. Michael
                                Devalle,the school underwent transformations.</p>
                            <div className="social-links">
                                <a href><i className="fab fa-facebook-f" /></a>
                                <a href><i className="fab fa-twitter" /></a>
                                <a href><i className="fab fa-instagram" /></a>
                            </div>
                            <a href className="btn">learn more</a>
                        </div>
                        <div className="flex">
                            <img src={logo} alt="School Logo" />
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default About1