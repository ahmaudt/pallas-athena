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
