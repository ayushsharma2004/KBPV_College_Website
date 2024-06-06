import React, { useState } from 'react';
import axios from 'axios';
import '../Styles/notes.css';
import { NavLink, useNavigate } from 'react-router-dom';

const NotesPage = () => {
    const [subjects, setSubjects] = useState([]);
    const [notes, setNotes] = useState(null);
    const [standard, setStandard] = useState('');
    const [subject, setSubject] = useState('');
    const [selectStandard, setSelectStandard] = useState(null);
    const navigate = useNavigate();

    function openFile(value) {
        console.log(value);
        // Get references to the form and table elements
        var file = document.getElementById(value);
        console.log(file);

        // Toggle the visibility of the form and table

        file.click();
    }
    async function getSubjects() {
        const value = document.getElementById('standard').value;
        setNotes(null);
        setSelectStandard(null);
        try {
            if (value === '') {
                setSubjects([]);
                return;
            }
            const response = await axios.post('http://localhost:8080/api/v1/teacher/read-subjects', {
                standard: value
            });
            setSelectStandard(value);
            setSubjects(response.data.subjects);
        } catch (error) {
            console.error('Error reading subjects:', error);
        }
    }

    async function showNotes() {
        const standardValue = document.getElementById('standard').value;
        const subjectValue = document.getElementById('subject').value;
        if (standardValue === '' || subjectValue === '') {
            alert('Select standard and subject');
            return;
        }
        try {
            setStandard(standardValue);
            setSubject(subjectValue);
            const response = await axios.post('http://localhost:8080/api/v1/teacher/read-chapters', {
                standard: standardValue,
                subject: subjectValue
            });
            const data = response.data.chapters;
            setNotes(data);
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    }

    async function resetNotes() {
        setNotes(null);
    }

    async function uploadNotes(event, standard, subject) {
        const fileId = event.target.id;
        const selectedFile = event.target.files[0];
        const formData = new FormData();
        formData.append('standard', standard);
        formData.append('subject', subject);
        formData.append('chapter', fileId);
        formData.append('folder_path', 'notes/');
        formData.append('chapter-notes', selectedFile);
        try {
            const response = await axios.post('http://localhost:8080/api/v1/teacher/upload-notes', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            const link = document.getElementById(`link${fileId}`);
            link.href = response.data.chapter_url[0];
            link.onclick = 'return true';
            alert('Uploaded Successfully');
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    }

    function BackNavigate() {
        navigate('/');
    }
    return (
        <>
            <div className="notes_container">
                <div id="loading-overlay">
                    <div id="loading-spinner" />
                    <p>Loading...</p>
                </div>
                <div className="notes_header">
                    <button className="back-btn" onClick={BackNavigate}>
                        <i className="arrow left" />
                    </button>
                    <h1>Notes</h1>
                </div>
                <div className="select_container">
                    <form id="notesForm">
                        <div id="left">
                            <label htmlFor="standard">Select Standard:</label>
                            <select id="standard" onChange={getSubjects}>
                                <option value="">Select a Standard</option>
                                <option value="1st">1st Standard</option>
                                <option value="2nd">2nd Standard</option>
                                <option value="3rd">3rd Standard</option>
                                <option value="4th">4th Standard</option>
                                <option value="5th">5th Standard</option>
                                <option value="7th">7th Standard</option>
                                <option value="8th">8th Standard</option>
                                <option value="9th">9th Standard</option>
                                <option value="10th">10th Standard</option>
                            </select>
                            {selectStandard ? (
                                <>
                                    <div className="subjects" id="subjects">
                                        <label htmlFor="subject">Select Subject:</label>
                                        <select id="subject" onChange={resetNotes}>
                                            {subjects.map(subject => (
                                                <option key={subject} value={subject}>{subject}</option>
                                            ))}
                                        </select>
                                    </div>
                                </>
                            ) : (<></>)}
                        </div>
                        <div id="right">
                            <button type="button" className="show-button" onClick={showNotes}>Show Notes</button>
                        </div>
                    </form>
                    {notes ? (
                        <>
                            <div id="notesTable" className="notes-table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Chapter</th>
                                            <th>Upload</th>
                                            <th>Download</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {notes.map((chapter, index) => (
                                            <tr key={index}>
                                                <td>{chapter.chapter_name}</td>
                                                <td>
                                                    <input type="file" name={chapter.chapter_name} id={chapter.chapter_name} className="file" onChange={(event) => uploadNotes(event, standard, subject)} />
                                                    <button value={chapter.chapter_name} className="upload-button" onClick={() => openFile(chapter.chapter_name)}>UPLOAD</button>
                                                </td>
                                                <td>
                                                    <NavLink to={chapter.chapter_url[0] || 'javascript:void(0);'} id={`link${chapter.chapter_name}`} target="_blank" onClick={() => { return !!chapter.chapter_url }}>DOWNLOAD</NavLink>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </>
                    ) : (<></>)}

                </div>
            </div>
        </>
    )
}

export default NotesPage;
