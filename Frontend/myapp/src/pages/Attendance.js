import React from 'react'
import axios from 'axios';
import '../Styles/attendance.css'

const Attendance = () => {
    var i;
    var studentData;
    var name;
    var roll_id;
    var attendance;
    var phone;
    var data;
    async function getAttendance() {
        var attendanceContainer = document.getElementById('attendance_container');
        var standard = document.getElementById('standard').value;
        var division = document.getElementById('division').value;
        console.log("standard:", standard, "division:", division);
        if (standard === '' || division === '') {
            alert("Select standard and division");
            return;
        }
        try {
            const response = await axios.post('http://localhost:8080/api/v1/teacher/view-attendance/student',
                {
                    "standard": standard,
                    "division": division
                }
            );
            data = response.data.studStandard;
            console.log(data);
            data.forEach((student, index) => {
                i = Number(Number(index) + Number(1));
                studentData = student.data;
                name = studentData.fname + ' ' + studentData.lname;
                roll_id = studentData.roll_id;
                attendance = parseFloat(studentData.attendance.percentage).toFixed(2);
                phone = studentData.phone;
                console.log(studentData);
                console.log(index);
                attendanceContainer.style.display = 'flex';
            });
            // console.log(data);
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    }

    async function saveAttendance() {
        var attendanceTable = document.getElementById('attendanceTable');
        var phoneArr = [];
        var attendanceArr = [];


        for (var i = 1; i < attendanceTable.rows.length; i++) { // Start from 1 to skip header row
            var cell1 = attendanceTable.rows[i].cells[5];
            var cell2 = attendanceTable.rows[i].cells[4];

            var checkbox = cell2.querySelector('input[type="checkbox"]');
            phoneArr.push(cell1.innerText);
            attendanceArr.push(checkbox.checked);
        }

        try {
            const response = await axios.post('http://localhost:8080/api/v1/teacher/add-attendance/student',
                {
                    "phoneArr": phoneArr,
                    "attendanceArr": attendanceArr
                }
            );
            var data = response.data;
            console.log(data);
            getAttendance();
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    }
    return (
        <>
            <div className='attendance_container'>
                <header>
                    <button className="back-btn">
                        <i className="arrow left" />
                    </button>
                    <h1>Attendance</h1>
                </header>
                <div className="container">
                    <h4>Select Class</h4>
                    <form>
                        <label id="selectOption">Standard:</label>
                        <select id="standard" name="selectOption">
                            <option value>Select a Standard</option>
                            <option value={1}>1st Standard</option>
                            <option value={2}>2nd Standard</option>
                            <option value={3}>3th Standard</option>
                            <option value={4}>4th Standard</option>
                            <option value={5}>5th Standard</option>
                            <option value={6}>6th Standard</option>
                            <option value={7}>7th Standard</option>
                            <option value={8}>8th Standard</option>
                            <option value={9}>9th Standard</option>
                            <option value={10}>10th Standard</option>
                        </select>
                        <label id="divisionSelect">Division:</label>
                        <select id="division" name="divisionSelect">
                            <option value>Division</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                        </select>
                    </form>
                    <button onClick={() => getAttendance()} type="submit">Submit </button>
                </div>
                <div className="attendance_table" id="attendance_container">
                    {data ? (
                        <>
                            <table id="attendanceTable">
                                <thead>
                                    <tr>
                                        <th>Sr. No</th>
                                        <th>Name</th>
                                        <th>Roll No</th>
                                        <th>Attendance</th>
                                        <th>Present/Absent</th>
                                        <th>Mobile No</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((student, index) => (
                                        <tr key={index}>
                                            <td>{i}</td>
                                            <td>{name}</td>
                                            <td>{roll_id}</td>
                                            <td>{attendance}%</td>
                                            <td><input type="checkbox" id={phone} name="checkbox1" value="1" /></td>
                                            <td>{phone}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <button type="submit" onClick={() => saveAttendance()}>Save </button>
                        </>
                    ) : <></>}
                </div>
            </div>

        </>
    )
}

export default Attendance