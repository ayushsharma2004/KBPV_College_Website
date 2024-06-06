import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import AboutPage from './pages/AboutPage';
import Contact from './pages/Contact';
import Attendance from './pages/Attendance';
import Syllabus from './pages/Syllabus';
import NotesPage from './pages/NotesPage';
import LoginPage from './pages/LoginPage';
import StudentRegister from './pages/StudentRegister';
import TeacherRegister from './pages/TeacherRegister';
import About1 from './pages/About1';
import Slider from './pages/Slider';
import Navbar1 from './components/Navbar1';
import ViewTeacher from './pages/ViewTeacher';
import ViewStudent from './pages/ViewStudent';
import Timetable from './pages/Timetable';
import UserDashboard from './pages/UserDashboard';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/about1' element={<About1 />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/user-dashboard' element={<UserDashboard />} />
        <Route path='/attendance' element={<Attendance />} />
        <Route path='/syllabus' element={<Syllabus />} />
        <Route path='/timetable' element={<Timetable />} />
        <Route path='/notes' element={<NotesPage />} />
        <Route path='/stud-regis' element={<StudentRegister />} />
        <Route path='/teach-regis' element={<TeacherRegister />} />
        <Route path='/view-teacher' element={<ViewTeacher />} />
        <Route path='/view-student' element={<ViewStudent />} />
        <Route path='/slider' element={<Slider />} />
        <Route path='/nav1' element={<Navbar1 />} />
      </Routes>
      {/* <Home /> */}
    </>
  );
}

export default App;
