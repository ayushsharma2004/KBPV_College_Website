import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios';
import '../Styles/teachregis.css'

const TeacherRegister = () => {
    async function registerTeacher(e) {
        e.preventDefault();
        try {
            var fname = document.getElementById("fname").value;
            var lname = document.getElementById("lname").value;
            var email = document.getElementById("email").value;
            var phone = document.getElementById("phone").value;
            var age = document.getElementById("age").value;
            var address = document.getElementById("address").value;
            var education = document.getElementById("education").value;
            var education_desc = document.getElementById("education_desc").value;
            var expertise = document.getElementById("expertise").value;
            var description = document.getElementById("description").value;
            var standard = document.getElementById("standard").value;
            var division = document.getElementById("division").value;
            var experience = document.getElementById("experience").value;
            var role = 1;
            var loading = document.getElementById('loading-overlay').style.display = 'block';
            const response = await axios.post('http://localhost:8080/api/v1/admin/register/teacher',
                {
                    phone: phone,
                    fname: fname,
                    lname: lname,
                    email: email,
                    age: age,
                    address: address,
                    education: education,
                    education_desc: education_desc,
                    expertise: expertise,
                    description: description,
                    standard: standard,
                    division: division,
                    experience: experience,
                    role: role
                });
            var loading = document.getElementById('loading-overlay').style.display = 'none';
            var data = response.data;
            alert("Teacher Successfully Registered");
            console.log(data);
        } catch (error) {
            console.error('Error loging teacher:', error);
        }
    }
    return (
        <>
            <div className="teachregis_container">

                <div>
                    <div id="loading-overlay">
                        <div id="loading-spinner" />
                        <p>Loading...</p>
                    </div>
                    <form onSubmit={(event) => registerTeacher(event)}>
                        <h2>Personal Information</h2>
                        <hr />
                        <div className="input-group">
                            <div className="input-group-full">
                                <label htmlFor="firstName">First Name:</label>
                                <input type="text" id="fname" name="firstName" required />
                            </div>
                            <div className="input-group-full">
                                <label htmlFor="lastName">Last Name:</label>
                                <input type="text" id="lname" name="lastName" required />
                            </div>
                        </div>
                        <div className="input-group">
                            <div className="input-group-full">
                                <label htmlFor="phoneNumber">Phone Number:</label>
                                <input type="tel" id="phone" name="phoneNumber" required style={{ width: '14vw' }} />
                            </div>
                            <div className="input-group-full">
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div className="input-group-full">
                                <label htmlFor="age">Age:</label>
                                <input type="number" min={18} max={110} id="age" name="age" required style={{ width: 'auto' }} />
                            </div>
                        </div>
                        <div className="input-group-full">
                            <label htmlFor="address">Address:</label>
                            <textarea id="address" name="address" rows={1} required defaultValue={""} />
                        </div>
                        <h2>Education</h2>
                        <hr />
                        <div className="input-group">
                            <div className="input-group-full">
                                <label htmlFor="educationFrom">Education From:</label>
                                <input type="text" id="education" name="educationFrom" />
                            </div>
                            <div className="input-group-full">
                                <label htmlFor="qualifications">Qualifications:</label>
                                <input type="text" id="education_desc" name="qualifications" />
                            </div>
                        </div>
                        <div className="input-group-full">
                            <label htmlFor="fieldOfExpertise">Field of Expertise:</label>
                            <input type="text" id="expertise" name="fieldOfExpertise" />
                        </div>
                        <div className="input-group-full">
                            <label htmlFor="description">Description about Teacher:</label>
                            <textarea id="description" name="description" rows={1} defaultValue={""} />
                        </div>
                        <hr />
                        <div className="input-group">
                            <div className="input-group-full">
                                <label htmlFor="standard">Standard:</label>
                                <input type="text" id="standard" name="standard" />
                            </div>
                            <div className="input-group-full">
                                <label htmlFor="division">Division:</label>
                                <input type="text" id="division" name="division" />
                            </div>
                        </div>
                        <div className="input-group-full">
                            <label htmlFor="experience">Experience:</label>
                            <input type="text" id="experience" name="experience" />
                        </div>
                        {/* Rest of the form content */}
                        <button type="submit">Submit</button>
                    </form>
                </div>

            </div>
        </>
    )
}

export default TeacherRegister
