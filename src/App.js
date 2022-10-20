import React from "react";
import { useState, useEffect } from "react";
import { Button, Card, Col, Container, Form, Row, Table } from "react-bootstrap";
import { NavLink, Link, Switch, Routes, Route } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import CardHeader from "react-bootstrap/esm/CardHeader";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import StudentDetail from "./components/StudentDetail";
import StudentList from "./components/StudentList";
import Home from "./components/Home";
import AcademicPlanForm from "./components/AcademicPlanForm";
import AcademicPlan from "./components/AcademicPlan";

function App() {
  // students is the state variable for the student list
  const [students, setStudents] = useState([]);
  const [plans, setPlans] = useState([]);
  const [plan, setplan] = useState({
        studentId: "",
        adviseTerm: "",
        adviseYear: "",
        recommendations: []
    });

    function handleChangeForm(recommendations) {
      setplan(...plan.recommendations, recommendations);
    }
  
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

  console.log(students);


  useEffect(() => {
    fetch("http://localhost:6001/plans")
      .then((r) => r.json())
      .then((data) => setPlans(data));
  }, []);

  console.log(plans);

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

  function handleAddPlan(plan) {
    const updatedPlans = [...plans, plan];
    setPlans(updatedPlans);
  }


  function handleEditPlan(plan) {
    const updatedPlans = plans.map((p) => {
      if (p.id === plan.id) return plan;
      return p;
    });
    setplan(plan);
    setPlans(updatedPlans);
  }

  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col sm="auto"></Col>
          <Col>
            <Nav variant="tabs" defaultActiveKey="/">
              <Nav.Item>
                <Nav.Link as={NavLink} to="/">
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={NavLink} to="/students">
                  Students
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route exact path="/students" element={<StudentList students={students} onSelectStudent={handleSelectStudent} onSelectPlan={setplan} />} />
              <Route exact path="/students/:id" element={<StudentDetail plans={plans} student={selectedStudent} onEditStudent={handleEditStudent} onSelectPlan={setplan} />} />
              <Route path="/plans/:id" element={<AcademicPlanForm onUpdatePlan={handleChangeForm} plan={plan} />} />
            </Routes>
          </Col>
          <Col sm="auto"></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
