import React from "react";
import { useState, useEffect } from "react";
import { Container, NavDropdown, Row } from "react-bootstrap";
import { NavLink, Routes, Route } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import StudentDetail from "./components/StudentDetail";
import StudentList from "./components/StudentList";
import Home from "./components/Home";
import AcademicPlanForm from "./components/AcademicPlanForm";
import NewStudentForm from "./components/NewStudentForm";
import NewAcademicPlanForm from "./components/NewAcademicPlanForm";
import ViewPlan from "./components/ViewPlan";

function App() {
  // students is the state variable for the student list
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState({
    id: "",
    ugaMyId: "",
    firstName: "",
    lastName: "",
    matricTerm: "",
    gradTerm: "",
    currentTerm: "",
    advisingTerm: "",
    major: "",
    preProfessional: "",
    earnedHrs: 0,
    requiredHrs: 0,
    remainingHrs: 0,
  });
  const [plans, setPlans] = useState([]);
  const [workingPlan, setWorkingPlan] = useState({
        studentId: "",
        adviseTerm: "",
        adviseYear: "",
        recommendations: []
    });

    function handleChangeForm(recommendations) {
      setWorkingPlan((workingPlan) => ({
        ...workingPlan,
        recommendations: recommendations,
      }));
    }
  
  useEffect(() => {
    fetch("http://localhost:6001/students")
      .then((r) => r.json())
      .then((data) => setStudents(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:6001/plans")
      .then((r) => r.json())
      .then((data) => setPlans(data));
  }, []);

  const handleSelectStudent = (student) => {
    setSelectedStudent(student);
  };

  function handleEditStudent(student) {
    const updatedStudents = students.map((s) => {
      if (s.id === student.id) return student;
      return s;
    });
    setSelectedStudent(student);
    setStudents(updatedStudents);
  }

  function handleAddStudent(student) {
    const updatedStudents = [...students, student];
    setStudents(updatedStudents);
  }

  function handleAddPlan(plan) {
    setPlans((plans) => [...plans, plan]);
  }

  function handleDeletePlan(plan) {
    const updatedPlans = plans.filter((p) => p.id !== plan.id);
    setPlans(updatedPlans);
  }

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
            <Nav variant="tabs" defaultActiveKey="/">
              <Nav.Item>
                <Nav.Link as={NavLink} to="/">
                  Home
                </Nav.Link>
              </Nav.Item>
              <NavDropdown title="Advising">
                <NavDropdown.Item as={NavLink} to="/students">Students</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/new-student">New Student</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route exact path="/students" element={<StudentList students={students} onSelectStudent={handleSelectStudent} onSelectPlan={setWorkingPlan} />} />
              <Route exact path="/students/:id" element={<StudentDetail plans={plans} student={selectedStudent} onEditStudent={handleEditStudent} onSelectPlan={setWorkingPlan} onDeletePlan={handleDeletePlan} />} />
              <Route path="/plans/:id/edit" element={<AcademicPlanForm onUpdatePlan={handleChangeForm} student={selectedStudent} />} />
              <Route path="/plans/:id/view" element={<ViewPlan />} />
              <Route path="/new-student" element={<NewStudentForm onAddStudent={handleAddStudent} />} />
              <Route path="/new-plan" element={<NewAcademicPlanForm onAddPlan={handleAddPlan} student={selectedStudent} />} />
              <Route path="/generated-plan" element={<ViewPlan student={selectedStudent} />} />
            </Routes>
          </Col>
          <Col sm="auto"></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
