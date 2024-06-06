import React, { useState } from 'react'
import "../Styles/teacher_view.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ViewTeacher = () => {
    const navigate = useNavigate();
    const [teachers, setTeachers] = useState([]);
    const [table, setTable] = useState(false);
    const [loginData, setLoginData] = useState(null);
    console.log(table);
    async function showDetails() {
        // Get references to the form and table elements
        console.log(table);
        try {

            const itemStr = localStorage.getItem('user');
            if (!itemStr) {
                console.log('nothing');
            }
            const getitem = JSON.parse(itemStr);
            const cnow = new Date();
            if (cnow.getTime() > getitem.expiry) {
                localStorage.removeItem('user');
                console.log('expired');
            }
            var userData = getitem.data;
            console.log(userData);
            const config = {
                headers: {
                    Authorization: `${userData.token}`,
                },
            };
            const response = await axios.post('http://localhost:8080/api/v1/admin/view/teacher',
                {
                    phone: userData.phone,
                    role: userData.role
                },
                config);

            console.log(response.data.teachers);
            var data = response.data.teachers;
            setTeachers(data);
            setTable(true);
        } catch (error) {
            console.error('Error uploading file:', error);
        }

        // Toggle the visibility of the form and table
    }

    function BackNavigate() {
        navigate('/');
    }
    return (
        <>
            <div className="viewTeacher">
                <div className="viewTeacher_header">
                    <button className="back-btn" onClick={BackNavigate}><i className="arrow left" /></button>
                    <h1>Teachers Details</h1>
                </div>
                <div className="viewTeacher_container">
                    <div id="right">
                        <button type="button" className="show-button" onClick={showDetails}>Show Details</button>
                    </div>
                    <div id="viewTeacherTable" className={table ? '' : 'hidden'}>
                        {teachers ? (
                            <>
                                <table id="teachersTable">
                                    <tbody>
                                        <tr>
                                            <th>SR. NO</th>
                                            <th>TEACHERS NAME</th>
                                            <th>MOBILE NUMBER</th>
                                            <th>Class</th>
                                            <th>Division</th>
                                            <th>WORK EXPERIENCE</th>
                                        </tr>
                                        {teachers.map((teacher, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{teacher.fname + ' ' + teacher.lname}</td>
                                                <td>{teacher.phone}</td>
                                                <td>{teacher.standard}</td>
                                                <td>{teacher.division}</td>
                                                <td>{teacher.experience}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </>) :
                            <></>}

                    </div>
                </div>
            </div>

        </>
    )
}

export default ViewTeacher