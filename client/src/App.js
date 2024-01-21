//import logo from "./logo.svg";
import "./App.css";
//import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Courses from "./components/Courses";
import UserSignIn from "./components/UserSignIn";
import UserSignUp from "./components/UserSignUp";
import CourseDetail from "./components/CourseDetail";
import CreateCourse from "./components/CreateCourse";
import UpdateCourse from "./components/UpdateCourse";
import Header from "./components/Header";
import UserSignOut from "./components/UserSignOut";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Courses />} />
        <Route path="/signin" element={<UserSignIn />} />
        <Route path="/signup" element={<UserSignUp />} />
        <Route path="/signout" element={<UserSignOut />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/courses/create" element={<CreateCourse />} />
        <Route path="/courses/:id/update" element={<UpdateCourse />} />
      </Routes>
    </div>
  );
}

export default App;
