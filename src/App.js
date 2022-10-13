import React from "react";
import { useState, useEffect } from "react";
import { Button, Card, Col, Container, Form, Row, Table } from "react-bootstrap";
import { NavLink, Link, Switch, Routes, Route } from "react-router-dom";
import CardHeader from "react-bootstrap/esm/CardHeader";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import StudentDetail from "./components/StudentDetail";
import StudentList from "./components/StudentList";
import Home from "./components/Home";

function App() {
  // students is the state variable for the student list
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState({
    firstName: "",
    lastName: "",
    majorOne: "",
    majorTwo: "",
    minorOne: "",
    minorTwo: "",
    id: "",
    matricTerm: "",
    gradTerm: "",
    ugaMyId: "",
    preProfessional: "",
    earnedHrs: "",
    remainingHrs: "",
    requiredHrs: "",
  });
  
  // selectedStudent is the student that is currently selected from the list

  useEffect(() => {
    fetch("http://localhost:6001/students")
      .then((r) => r.json())
      .then((data) => setStudents(data));
  }, []);

  const handleSelectStudent = (student) => {
    setSelectedStudent(student);
  };

  // make a fetch request to the backend to get the student with the id
  // this makes the student show up in the StudentDetail component
  function handleEditStudent(student) {
    const updatedStudents = students.map((s) => {
      if (s.id === student.id) return student;
      return s;
    });
    setSelectedStudent(student);
    setStudents(updatedStudents);
  }

  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col sm="auto"></Col>
          <Col>
            <nav>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/students">Students</NavLink>
            </nav>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route exact path="/students" element={<StudentList students={students} onSelectStudent={handleSelectStudent} />} />
              <Route exact path="/students/:id" element={<StudentDetail student={selectedStudent} onEditStudent={handleEditStudent} />} />
            </Routes>
          </Col>
          <Col sm="auto"></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
