import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../Styles/timetable.css'
import { NavLink, useNavigate } from 'react-router-dom';

const Timetable = () => {
    const [getData, setGet] = useState(null);
    const navigate = useNavigate();
    // readSyllabus();
    useEffect(() => {
        readTimetable(); // Fetch timetable data when the component mounts
    }, []);

    function openFile(value) {
        console.log(value);
        // Get references to the form and table elements
        var file = document.getElementById(value);
        console.log(file);

        // Toggle the visibility of the form and table

        file.click();
    }

    async function readTimetable() {
        console.log('reading');
        try {
            const response = await axios.get('http://localhost:8080/api/v1/teacher/read-timetable', {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            var data = response.data.timetable;
            setGet(data);
            console.log(data);
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    }

    async function uploadTimetable(value) {
        console.log(document.getElementById(value));
        var fileId = document.getElementById(value).id;
        const selectedFile = document.getElementById(value).files[0];
        console.log(selectedFile ? selectedFile.name : '');

        // Use the selected file for further processing, for example, sending it to the server
        const formData = new FormData();
        formData.append('standard', fileId);
        formData.append('folder_path', "timetable/");
        formData.append('timetable', selectedFile);

        var loading = document.getElementById('loading-overlay').style.display = 'block';

        try {
            const response = await axios.post('http://localhost:8080/api/v1/teacher/upload-timetable', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log(response.data.timetableUrl[0]);
            document.getElementById('loading-overlay').style.display = 'none';
            var linkId = 'link' + fileId;
            var link = document.getElementById(linkId);
            link.href = response.data.timetableUrl[0];
            readTimetable();
            alert("Uploaded Successfully");
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };
    function BackNavigate() {
        navigate('/');
    }
    return (
        <>
            <div className='timetable_container' onLoad={() => readTimetable()}>
                <div>
                    <div id="loading-overlay">
                        <div id="loading-spinner" />
                        <p>Loading...</p>
                    </div>
                    <div className='timetable_header'>
                        <button className="back-btn" onClick={BackNavigate}>
                            <i className="arrow left" />
                        </button>
                        <h1>Timetable</h1>
                    </div>
                </div>
                <div className="timetable_table" id="timetable_table">
                    {getData ? (
                        <>
                            <table id="attendanceTable">
                                <thead>
                                    <tr>
                                        <th>Standard</th>
                                        <th>Upload</th>
                                        <th>Download</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {getData.map((timetable, index) => (
                                        <tr key={index}>
                                            <td>{timetable.standard} Standard</td>
                                            {/* eslint-disable-next-line no-restricted-globals */}
                                            <input type="file" id={timetable.standard} className="file" onChange={() => uploadTimetable(timetable.standard)} />
                                            <td>
                                                <button className="upload-button" onClick={() => openFile(timetable.standard)}>UPLOAD</button>
                                            </td>
                                            <td><NavLink to={timetable.url[0]} id={`link${timetable.standard}`} target="_blank">DOWNLOAD</NavLink></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </>
                    ) : (
                        <p>No data available</p>
                    )}

                </div>

            </div>

        </>
    )
}

export default Timetable