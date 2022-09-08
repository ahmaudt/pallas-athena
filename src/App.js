import { useEffect, useState } from 'react';
import { Col, Container, Modal, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import StudentInfoCard from './components/StudentInfoCard';
import PlanCard from './components/PlanCard';
import StudentList from './components/StudentList';

function App() {
  const [programs, setPrograms] = useState([]);
  const [students, setStudents] = useState([]);
  const [reqs, setReqs] = useState([]);
  const [rowCount, setRowCount] = useState(7);
  
  const handleAddRow = () => {
    setRowCount(rowCount + 1);
  }

  const handleDeleteRow = (index) => {
    setRowCount(rowCount - 1);
    setReqs(reqs.filter((req, i) => i !== index));
  }
  
  useEffect(() => {
    fetch("http://localhost:6001/programs")
      .then(response => response.json())
      .then(data => setPrograms(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:6001/students")
      .then(response => response.json())
      .then(data => setStudents(data));
  }, []);

  const handleReqSelect = (e, index ) =>{
    const newReqs = [...reqs];
    newReqs[index] = e.target.value;
    setReqs(newReqs);
  }

  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col></Col>
          <Col md={11}>
            <StudentInfoCard />
            <StudentList students={students}/>
            <PlanCard programs={programs} reqs={reqs} rowCount={rowCount} onAddRow={handleAddRow} onOptionSelect={handleReqSelect} onDeleteRow={handleDeleteRow} />
          </Col>
          <Col></Col>
        </Row>

      </Container>
    </div>
  );
}

export default App;
