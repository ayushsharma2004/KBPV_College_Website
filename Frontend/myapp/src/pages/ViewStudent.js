import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../Styles/viewStudent.css";

const ViewStudent = () => {
    const navigate = useNavigate();
    const [students, setStudents] = useState([]);
    const [table, setTable] = useState(false);
    console.log(table);
    async function showDetails() {
        var standard = document.getElementById('standard').value;
        var division = document.getElementById('division').value;
        console.log(standard);
        // Get references to the form and table elements
        console.log(division);
        try {
            const response = await axios.post('http://localhost:8080/api/v1/admin/view/student',
                {
                    standard: standard,
                    division: division
                });

            console.log(response.data.studStandard);
            var data = response.data.studStandard;
            setStudents(data);
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
            <div className='viewStudent'>
                <div className='viewStudentHeader'>
                    <button className="back-btn" onClick={BackNavigate}>
                        <i className="arrow left" />
                    </button>
                    <h1>Student Details</h1>
                </div>
                <div className="viewStudentContainer">
                    <form id="vstudform">
                        <div id="left">
                            <label htmlFor="standard">Select Standard:</label>
                            <select id="standard">
                                <option value="1">1st Standard</option>
                                <option value="2">2nd Standard</option>
                                <option value="3">3rd Standard</option>
                                <option value="4">4th Standard</option>
                                <option value="5">5th Standard</option>
                                <option value="7">7th Standard</option>
                                <option value="8">8th Standard</option>
                                <option value="9">9th Standard</option>
                                <option value="10">10th Standard</option>
                            </select>
                            <label htmlFor="division">Select Division:</label>
                            <select id="division">
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                            </select>
                            <div className="right">
                                <button type="button" className="show-button" onClick={showDetails}>Show Details</button>
                            </div>
                        </div>
                        {/* Your form content here */}
                        <div id="viewStudentTable" className={table ? '' : 'hidden'}>
                            {students ? (
                                <>
                                    <table id="studentTable">
                                        <tbody>
                                            <tr>
                                                <th>SR. NO</th>
                                                <th>STUDENT NAME</th>
                                                <th>ROLL NO</th>
                                                <th>MOBILE NUMBER</th>
                                                <th>ATTENDANCE</th>
                                                <th>DIVISION</th>
                                            </tr>
                                            {students.map((student, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{student.data.fname + ' ' + student.data.lname}</td>
                                                    <td>{student.data.roll_id}</td>
                                                    <td>{student.data.phone}</td>
                                                    <td>{parseFloat(student.data.attendance.percentage).toFixed(2) + '%'}</td>
                                                    <td>{student.data.division}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </>) : <></>}

                            {/* Your table content here */}
                        </div>
                    </form>
                </div>
            </div>


        </>
    )
}

export default ViewStudent