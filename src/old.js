const [programs, setPrograms] = useState([]);
  const [students, setStudents] = useState([]);
  const [reqs, setReqs] = useState([]);
  const [rowCount, setRowCount] = useState(7);
  const [academicPlans, setAcademicPlans] = useState({});

  function handleAddAcademicPlan(newPlan) {
    setAcademicPlans([...academicPlans, newPlan]);
  }

  const handleAddRow = () => {
    setRowCount(rowCount + 1);
  };

  const handleDeleteRow = (index) => {
    setRowCount(rowCount - 1);
    setReqs(reqs.filter((req, i) => i !== index));
  };

  useEffect(() => {
    fetch("http://localhost:6001/programs")
      .then((response) => response.json())
      .then((data) => setPrograms(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:6001/students")
      .then((response) => response.json())
      .then((data) => setStudents(data));
  }, []);

  const handleReqSelect = (e, index) => {
    const newReqs = [...reqs];
    newReqs[index] = e.target.value;
    setReqs(newReqs);
  };

  console.log(students);

  {/* <FormGroup>
                <Row>
                  <Col sm="3" style={{ paddingRight: "0" }}>
                    <FormControl
                      type="text"
                      placeholder="requirement"
                      name="requirement"
                      defaultValue={plan.recommendations[0].requirement}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col sm="5" style={{ paddingRight: "0", paddingLeft: "0" }}>
                    <FormControl
                      type="text"
                      placeholder="course"
                      name="name"
                      defaultValue={plan.recommendations[0].name}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col sm="4" style={{ paddingLeft: "0" }}>
                    <FormControl
                      type="text"
                      placeholder="alt course"
                      name="altCourse"
                      value={plan.recommendations[0].altCourse}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col sm="3" style={{ paddingRight: "0" }}>
                    <FormControl
                      type="text"
                      placeholder="requirement"
                      name="requirement"
                      defaultValue={plan.recommendations[1].requirement}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col sm="5" style={{ paddingRight: "0", paddingLeft: "0" }}>
                    <FormControl
                      type="text"
                      placeholder="course"
                      name="name"
                      value={plan.recommendations[1].name}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col sm="4" style={{ paddingLeft: "0" }}>
                    <FormControl
                      type="text"
                      placeholder="alt course"
                      name="altCourse"
                      value={plan.recommendations[1].altCourse}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col sm="3" style={{ paddingRight: "0" }}>
                    <FormControl
                      type="text"
                      placeholder="requirement"
                      name="requirement"
                      defaultValue={plan.recommendations[2].requirement}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col sm="5" style={{ paddingRight: "0", paddingLeft: "0" }}>
                    <FormControl
                      type="text"
                      placeholder="course"
                      name="name"
                      defaultValue={plan.recommendations[2].name}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col sm="4" style={{ paddingLeft: "0" }}>
                    <FormControl
                      type="text"
                      placeholder="alt course"
                      name="altCourse"
                      value={plan.recommendations[2].altCourse}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col sm="3" style={{ paddingRight: "0" }}>
                    <FormControl
                      type="text"
                      placeholder="requirement"
                      name="requirement"
                      value={plan.recommendations[3].requirement}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col sm="5" style={{ paddingRight: "0", paddingLeft: "0" }}>
                    <FormControl
                      type="text"
                      placeholder="course"
                      name="name"
                      value={plan.recommendations[3].name}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col sm="4" style={{ paddingLeft: "0" }}>
                    <FormControl
                      type="text"
                      placeholder="alt course"
                      name="altCourse"
                      value={plan.recommendations[3].altCourse}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col sm="3" style={{ paddingRight: "0" }}>
                    <FormControl
                      type="text"
                      placeholder="requirement"
                      name="requirement"
                      value={plan.recommendations[4].requirement}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col sm="5" style={{ paddingRight: "0", paddingLeft: "0" }}>
                    <FormControl
                      type="text"
                      placeholder="course"
                      name="name"
                      value={plan.recommendations[4].name}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col sm="4" style={{ paddingLeft: "0" }}>
                    <FormControl
                      type="text"
                      placeholder="alt course"
                      name="altCourse"
                      value={plan.recommendations[4].altCourse}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col sm="3" style={{ paddingRight: "0" }}>
                    <FormControl
                      type="text"
                      placeholder="requirement"
                      name="requirement"
                      value={plan.recommendations[5].requirement}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col sm="5" style={{ paddingRight: "0", paddingLeft: "0" }}>
                    <FormControl
                      type="text"
                      placeholder="course"
                      name="name"
                      value={plan.recommendations[5].name}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col sm="4" style={{ paddingLeft: "0" }}>
                    <FormControl
                      type="text"
                      placeholder="alt course"
                      name="altCourse"
                      value={plan.recommendations[5].altCourse}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col sm="3" style={{ paddingRight: "0" }}>
                    <FormControl
                      type="text"
                      placeholder="requirement"
                      name="requirement"
                      value={plan.recommendations[6].requirement}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col sm="5" style={{ paddingRight: "0", paddingLeft: "0" }}>
                    <FormControl
                      type="text"
                      placeholder="course"
                      name="name"
                      value={plan.recommendations[6].name}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col sm="4" style={{ paddingLeft: "0" }}>
                    <FormControl
                      type="text"
                      placeholder="alt course"
                      name="altCourse"
                      value={plan.recommendations[6].altCourse}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
              </FormGroup> */}
