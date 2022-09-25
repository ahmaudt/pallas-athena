import { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormGroup,
  FormControl,
  Modal,
  Row,
  InputGroup,
  Table,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AcademicPlan from "./components/AcademicPlan";
import StudentInformation from "./components/StudentInformation";

function App() {
  
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col sm="auto"></Col>
          <Col>
            <Form>
              <StudentInformation />
              <AcademicPlan />
            </Form>
          </Col>
          <Col sm="auto"></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
