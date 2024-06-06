import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios';
import '../Styles/login.css'
import logo from "../Images/schl-logo.png";
import { NavLink, useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const otpRef = useRef(null);
    const btnRef = useRef(null);
    const checkRef = useRef(null);
    const [otpDisabled, setOtpDisabled] = useState('disabled');
    const [loginData, setLoginData] = useState(null);
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

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
    // console.log(userData);

    async function button(e) {
        e.preventDefault();
        const isTeacher = document.getElementById('isTeacher').checked;
        checkRef.current.click();
        if (isTeacher) {
            if (checkRef.current.checked) {
                await getOtpTeacher()
            } else {
                await verifyOtpTeacher();
            }
        } else {
            if (checkRef.current.checked) {
                await getOtpStudent()
            } else {
                await verifyOtpStudent();
            }
        }
    }

    async function getOtpTeacher() {
        try {
            const phone = document.getElementById('phone').value;
            const isTeacher = document.getElementById('isTeacher').checked;

            document.getElementById('loading-overlay').style.display = 'block';
            console.log(phone, isTeacher);
            if (isTeacher) {
                const response = await axios.post('http://localhost:8080/api/v1/auth/send-otp',
                    {
                        phone: phone
                    });
                document.getElementById('loading-overlay').style.display = 'none';
                const getOtpData = response.data;
                console.log(getOtpData);
                setOtpDisabled('enabled');
                btnRef.current.textContent = 'Verify OTP'
            }
        } catch (error) {
            console.error('Error get teacher otp:', error);
        }
    }
    async function getOtpStudent() {
        try {
            const phone = document.getElementById('phone').value;
            const isTeacher = document.getElementById('isTeacher').checked;

            document.getElementById('loading-overlay').style.display = 'block';
            console.log(phone, isTeacher);
            if (!isTeacher) {
                const response = await axios.post('http://localhost:8080/api/v1/auth/send-otp',
                    {
                        phone: phone
                    });
                document.getElementById('loading-overlay').style.display = 'none';
                const getOtpData = response.data;
                console.log(getOtpData);
                setOtpDisabled('enabled');
                btnRef.current.textContent = 'Verify OTP'
            }
        } catch (error) {
            console.error('Error get student otp:', error);
        }
    }

    async function verifyOtpTeacher() {
        console.log('verify');
        try {
            const phone = document.getElementById('phone').value;
            const isTeacher = document.getElementById('isTeacher').checked;

            document.getElementById('loading-overlay').style.display = 'block';
            if (isTeacher) {
                const response = await axios.post('http://localhost:8080/api/v1/auth/login/teacher',
                    {
                        phone: phone,
                        code: otpRef.current.value,
                        role: 1
                    });
                const verifyData = response.data.verify;
                document.getElementById('loading-overlay').style.display = 'none';
                console.log(verifyData);
                setOtpDisabled('disabled');
                btnRef.current.textContent = 'Get OTP';
                alert("Login Successfully");
                var user = {
                    phone: verifyData.user.phone,
                    token: verifyData.token,
                    role: 2,
                }
                const now = new Date();
                const item = {
                    data: user,
                    expiry: now.getTime() + 24 * 60 * 60 * 1000, // 24 hours from now
                };
                localStorage.setItem('user', JSON.stringify(item));
                navigate('/');
            }
        } catch (error) {
            console.error('Error logging teacher:', error);
        }
    }

    async function verifyOtpStudent() {
        console.log('verify');
        try {
            const phone = document.getElementById('phone').value;
            const isTeacher = document.getElementById('isTeacher').checked;

            document.getElementById('loading-overlay').style.display = 'block';
            if (!isTeacher) {
                const response = await axios.post('http://localhost:8080/api/v1/auth/login/student',
                    {
                        phone: phone,
                        code: otpRef.current.value,
                        role: 1
                    });
                const verifyData = response.data.verify;
                document.getElementById('loading-overlay').style.display = 'none';
                console.log(verifyData);
                setOtpDisabled('disabled');
                btnRef.current.textContent = 'Get OTP';
                alert("Login Successfully");
                var user = {
                    phone: verifyData.user.phone,
                    token: verifyData.token,
                    role: verifyData.user.role,
                }
                const now = new Date();
                const item = {
                    data: user,
                    expiry: now.getTime() + 24 * 60 * 60 * 1000, // 24 hours from now
                };
                localStorage.setItem('user', JSON.stringify(item));
                navigate('/');
            }
        } catch (error) {
            console.error('Error logging student:', error);
        }
    }

    return (
        <>
            <div className='login_container'>
                <div id="loading-overlay">
                    <div id="loading-spinner" />
                    <p>Loading...</p>
                </div>
                <div id="login-container">
                    <input type="checkbox" name='' id="check" ref={checkRef} style={{ display: 'none' }} />
                    <form action="" id="login_form">
                        <div id="logo">
                            <img src={logo} alt="School Logo" />
                            <h4>Karmveer Bhauroa Patil Vidyalaya</h4>
                        </div>
                        <hr />
                        <h2>Login</h2>
                        <input type="tel" placeholder="Enter your Mobile Number" id="phone" />
                        <input type="text" ref={otpRef} className={otpDisabled} maxLength={6} placeholder="Enter OTP" id="otp" />
                        <label>
                            <div className="toggle-container">
                                Are you a Teacher at KBPV ?
                                <label className="switch">
                                    <input type="checkbox" className="toggle-switch" id="isTeacher" />
                                    <span className="slider round" />
                                </label>
                            </div>
                        </label>
                        <button type="button" id="btn" ref={btnRef} onClick={(event) => button(event)}>Get OTP</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default LoginPage