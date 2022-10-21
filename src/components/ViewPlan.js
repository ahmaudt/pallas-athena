import React from "react";
import { Button, Card, Tab, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MarkdownPreview from "@uiw/react-markdown-preview";

function ViewPlan() {
  const params = useParams();
  console.log(params);

  const [plan, setPlan] = useState({
    studentId: "",
    advisingTerm: "",
    currentTerm: "",
    recommendations: [],
  });

  const [student, setStudent] = useState("");

  useEffect(() => {
    fetch(`http://localhost:6001/plans/${params.id}`)
      .then((r) => r.json())
      .then((data) => setPlan(data));
  }, [params.id]);

  useEffect(() => {
    fetch(`http://localhost:6001/students/${plan.studentId}`)
      .then((r) => r.json())
      .then((data) => setStudent(data));
  }, [plan.studentId]);

  if (!plan || !student) {
    <h1>Loading...</h1>;
  }

  return (
    <Table borderless>
      <tbody>
        <tr>
          <td>
            <Card bg="danger" text="light">
              <Card.Header>
                <Card.Title>Header</Card.Title>
                <Card.Text>
                  <a href="http://bulletin.uga.edu/Bulletin_Files/acad/Advising.html">
                    <strong>
                      From the UGA Bulletin:
                      <i class="fa fa-external-link-alt" aria-hidden="true"></i>
                    </strong>
                  </a>{" "}
                  <em>
                    Students are expected to be full participants in academic
                    advising and thus to be both prepared for and engaged in the
                    advising experience. The academic landscape is always
                    subject to change, and although advisors can provide advice,
                  </em>{" "}
                  <strong>
                    each student is ultimately responsible for knowing and
                    understanding the degree requirements and policies related
                    to his/her own academic progress.
                  </strong>
                </Card.Text>
              </Card.Header>
            </Card>
          </td>
        </tr>
        <tr>
          <td>
            <Card style={{ marginTop: "0" }}>
              <Card.Header style={{ marginTop: "0" }}>
                <Card.Title>Recommendations</Card.Title>
              </Card.Header>
              <Card.Body style={{ marginTop: "0" }}>
                <Table bordered striped hover style={{ marginTop: "0" }}>
                  <thead style={{ marginTop: "0" }}>
                    <tr>
                      <th>Requirement</th>
                      <th>Course</th>
                      <th>Alt Course</th>
                    </tr>
                  </thead>
                  <tbody style={{ marginTop: "0" }}>
                    {plan?.recommendations.map((r) => (
                      <>
                        <tr key={r.id}>
                          <td>{r.requirement}</td>
                          <td>{r.course}</td>
                          <td>{r.altCourse}</td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
            <Table borderless style={{ marginTop: "0" }}>
              <Card style={{ marginTop: "0" }}>
                <Card.Header style={{ marginTop: "0" }}>
                  <Card.Title>Notes</Card.Title>
                </Card.Header>
                <Card.Body>
                  <tr className="justify-content-center">
                    <td className="justify-content-center" colSpan={3}>
                      <MarkdownPreview source={plan.notes} />
                    </td>
                  </tr>
                </Card.Body>
              </Card>
            </Table>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default ViewPlan;
