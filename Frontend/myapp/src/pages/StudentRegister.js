import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios';
import '../Styles/studregis.css'

const StudentRegister = () => {

    async function registerStudent(e) {
        e.preventDefault();
        try {
            var fname = document.getElementById("fname").value;
            var lname = document.getElementById("lname").value;
            var mother = document.getElementById("mother").value;
            var father = document.getElementById("father").value;
            var phone = document.getElementById("phone").value;
            var age = document.getElementById("age").value;
            var address = document.getElementById("address").value;
            var standard = document.getElementById("standard").value;
            var division = document.getElementById("division").value;
            var roll_id = document.getElementById("roll_id").value;
            var class_teacher = document.getElementById("class_teacher").value;
            var attendance = {
                days: 0,
                attended: 0,
                percentage: 0
            }
            var role = 0;
            var loading = document.getElementById('loading-overlay').style.display = 'block';
            const response = await axios.post('http://localhost:8080/api/v1/admin/register/student',
                {
                    phone: phone,
                    fname: fname,
                    lname: lname,
                    mother: mother,
                    father: father,
                    age: age,
                    address: address,
                    standard: standard,
                    division: division,
                    roll_id: roll_id,
                    class_teacher: class_teacher,
                    attendance: attendance,
                    role: role
                });
            var data = response.data;
            var loading = document.getElementById('loading-overlay').style.display = 'block';
            alert('Student Registered Successfully');
            console.log(data);
        } catch (error) {
            console.error('Error loging teacher:', error);
        }
    }
    return (
        <>
            <div className="studregis_container">
                <div id="loading-overlay">
                    <div id="loading-spinner" />
                    <p>Loading...</p>
                </div>
                <form onSubmit={(event) => registerStudent(event)}>
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
                            <label htmlFor="motherName">Mother Name:</label>
                            <input type="text" id="mother" name="motherName" required />
                        </div>
                        <div className="input-group-full">
                            <label htmlFor="fatherName">Father Name:</label>
                            <input type="text" id="father" name="fatherName" required />
                        </div>
                    </div>
                    <div className="input-group">
                        <div className="input-group-full">
                            <label htmlFor="phoneNumber">Phone Number:</label>
                            <input type="tel" id="phone" name="phoneNumber" required />
                        </div>
                        <div className="input-group-full">
                            <label htmlFor="age">Age:</label>
                            <input type="number" id="age" name="number" required />
                        </div>
                    </div>
                    <div className="input-group-full">
                        <label htmlFor="address">Address:</label>
                        <textarea id="address" name="address" rows={1} required />
                    </div>
                    <hr />
                    <div className="input-group">
                        <div className="input-group-full">
                            <label htmlFor="standard">Standard:</label>
                            <input type="text" id="standard" name="standard" required />
                        </div>
                        <div className="input-group-full">
                            <label htmlFor="division">Division:</label>
                            <input type="text" id="division" name="division" required />
                        </div>
                        <div className="input-group-full">
                            <label htmlFor="roll number">Roll Number: </label>
                            <input type="number" id="roll_id" name="rollNumber" required />
                        </div>
                    </div>
                    <div className="input-group">
                        <div className="input-group-full">
                            <label htmlFor="classTeacher">Class Teacher:</label>
                            <input type="text" id="class_teacher" name="classTeacher" required />
                        </div>
                    </div>
                    {/* Rest of the form content */}
                    <button type="submit">Register</button>
                </form>
            </div>
        </>
    )
}

export default StudentRegister
