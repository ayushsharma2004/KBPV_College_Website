async function getAttendance() {
    var attendanceContainer = document.getElementById('attendance_container');
    var standard = document.getElementById('standard').value;
    var division = document.getElementById('division').value;
    var loading = document.getElementById('loading-overlay').style.display = 'block';
    console.log("standard:", standard, "division:", division);
    if (standard === '' || division === '') {
        alert("Select standard and division");
        return;
    }
    var tableHtml = '        <table id="attendanceTable">            <thead>                <tr>                    <th>Sr. No </th>                    <th>Name</th>                    <th>Roll No</th>                    <th>Attendance</th>                    <th>Present/Absent</th>                    <th>Mobile No</th>               </tr>            </thead>            <tbody>';
    try {
        const response = await axios.post('http://localhost:8080/api/v1/teacher/view-attendance/student',
            {
                "standard": standard,
                "division": division
            }
        );
        var loading = document.getElementById('loading-overlay').style.display = 'none';
        var data = response.data.studStandard;
        console.log(data);
        data.forEach((student, index) => {
            var i = Number(Number(index) + Number(1));
            var studentData = student.data;
            var name = studentData.fname + ' ' + studentData.lname;
            var roll_id = studentData.roll_id;
            var attendance = parseFloat(studentData.attendance.percentage).toFixed(2);
            var phone = studentData.phone;
            console.log(studentData);
            console.log(index);

            tableHtml += '                <tr>';
            tableHtml += '                    <td>' + i + '</td>';
            tableHtml += '                    <td>' + name + '</td>';
            tableHtml += '                    <td>' + roll_id + '</td>';
            tableHtml += '                    <td>' + attendance + '%</td>';
            tableHtml += '                    <td><input type="checkbox" id="' + phone + '" name="checkbox1" value="1"></td>';
            tableHtml += '                    <td>' + phone + '</td>';
            tableHtml += '                </tr>';
        });
        tableHtml += '            </tbody>        </table>        <button onclick="saveAttendance()" type="submit">Save</button>';
        attendanceContainer.style.display = 'flex';
        attendanceContainer.innerHTML = tableHtml;
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
        alert("Attendance Saved Successfully");
        console.log(data);
        getAttendance();
    } catch (error) {
        console.error('Error uploading file:', error);
    }
}