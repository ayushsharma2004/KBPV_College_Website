import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../Images/schl-logo.png";
import "../Styles/nav1.css";

const Navbar1 = () => {
    const [loginData, setLoginData] = useState(null);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const itemStr = localStorage.getItem('user');
        if (!itemStr) {
            console.log('nothing');
            return
        }
        const getitem = JSON.parse(itemStr);
        const cnow = new Date();
        if (cnow.getTime() > getitem.expiry) {
            localStorage.removeItem('user');
            console.log('expired');
        }
        setLoginData(getitem.data);
        setUserData(getitem.data);
    }, []);

    const handleLogout = () => {
        const itemStr = localStorage.getItem('user');
        if (itemStr) {
            // To delete the 'user' item
            localStorage.removeItem('user');
            return
        }
    };

    const handleMenuToggle = () => {
        // Toggle menu logic here
    };

    return (
        <>
            <header>
                <NavLink to="#" className="Logo">
                    <img src={logo} alt="School Logo" />
                </NavLink>
                <div className="menuToggle" onClick={handleMenuToggle}></div>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="">
                                Dashboard &nbsp;
                                <b>
                                    <i className="fas fa-caret-down" />
                                </b>
                            </NavLink>
                            <ul>
                                {userData && userData.role === 2 && (
                                    <>
                                        <li>
                                            <NavLink to="">
                                                Manage Teacher &nbsp;
                                                <b>
                                                    <i className="fas fa-caret-down" />
                                                </b>
                                            </NavLink>
                                            <ul>
                                                <li>
                                                    <NavLink to={'/teach-regis'}>Register Teacher</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to={"/view-teacher"}>View Teacher</NavLink>
                                                </li>
                                            </ul>
                                        </li>
                                    </>
                                )}
                                {userData && userData.role >= 2 && (
                                    <>
                                        <li>
                                            <NavLink to="#">
                                                Manage Student &nbsp;
                                                <b>
                                                    <i className="fas fa-caret-down" />
                                                </b>
                                            </NavLink>
                                            <ul>
                                                <li>
                                                    <NavLink to="/stud-regis">Register Student</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to={"/view-student"}>View Student</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/attendance">Attendance</NavLink>
                                                </li>
                                            </ul>
                                        </li>
                                    </>
                                )}

                                <li>
                                    <NavLink to="#">
                                        Manage Academics &nbsp;
                                        <b>
                                            <i className="fas fa-caret-down" />
                                        </b>
                                    </NavLink>
                                    <ul>
                                        <li>
                                            <NavLink to="/syllabus">Syllabus</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/timetable">Timetable</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/notes">Notes</NavLink>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink to="#about_container">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="#contact_container">Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to="#">
                                Academy &nbsp;
                                <b>
                                    <i className="fas fa-caret-down" />
                                </b>
                            </NavLink>
                            <ul>
                                <li>
                                    <NavLink to="#">Info</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/syllabus">Syllabus</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/timetable">Timetable</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/notes">Notes</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/attendance">Attendance</NavLink>
                                </li>
                            </ul>
                        </li>
                        {/* <li>
                            <NavLink to="#">
                                Translate &nbsp;
                                <b>
                                    <i className="fas fa-caret-down" />
                                </b>
                            </NavLink>
                            <ul>
                                <li>
                                    <NavLink to="#">English</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Marathi</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Hindi</NavLink>
                                </li>
                            </ul>
                        </li> */}
                        <li>
                            <NavLink to="#" id='chat-btn' onClick={() => window.open("https://www.chatbase.co/chatbot-iframe/UWtYtgEsjLD3Cx2xkKWLE", "_blank")}>ChatBot</NavLink>
                        </li>
                        {!userData && (
                            <li>
                                <NavLink to="/login" id='login-btn'>Login</NavLink>
                            </li>
                        )}

                        {userData && userData.role >= 0 && (
                            <li>
                                <NavLink to="/" id='logout-btn' onClick={() => {
                                    localStorage.removeItem('user');
                                    localStorage.removeItem('auth');
                                    localStorage.clear();
                                    setLoginData(null);
                                    setUserData(null);
                                }}>Logout</NavLink>
                            </li>
                        )}
                    </ul>
                </nav>
            </header>

        </>
    )
}

export default Navbar1;
