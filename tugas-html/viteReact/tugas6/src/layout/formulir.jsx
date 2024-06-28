import {
  Container,
  Form,
  Card,
  Row,
  Col,
  Button,
  Stack,
  Modal,
  Table,
  Alert
} from "react-bootstrap";
import { useEffect, useState } from "react";


const Formulir = () => {
  const [idCount, setIdCount] = useState(0)
  const [countDelete,setCountDelete] = useState(0)
  const [showAlert, setShowAlert] = useState(false);
  const [data, setData] = useState([]);
  const [lgShow, setLgShow] = useState(false);
  const [isSubmitted,setIsSubmitted] = useState(false)
  const [hasError, setHasError] = useState(false);

  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    telp: "",
    deskripsi: "",
    deadline: ""
  });
  

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nama || !formData.email || !formData.telp || !formData.deskripsi || !formData.deadline) {
      setHasError(true);
      setIsSubmitted(false);
      return;
    }
    const newFormData = { ...formData, id: idCount };
    setData((prevData) => [...prevData, newFormData]);
    setIdCount((prevCount) => prevCount + 1);
    setFormData({
      id: "",
      nama: "",
      email: "",
      telp: "",
      deskripsi: "",
      deadline: "",
    });
    setIsSubmitted(true);
    setShowAlert(true); 
  };
  

  const handleReset = () => {
    setFormData({
      nama: "",
      email: "",
      telp: "",
      deskripsi: "",
      deadline: ""
    });
  };

  const handleKeyup = (e)=>{
    const {id,value} = e.target
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }))
  }
  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((data) => data.id !== id));
    setCountDelete(prevCount => prevCount + 1)

  }
useEffect(() => {
    if (isSubmitted) {
      setShowAlert(true);
    }

    if (hasError || showAlert) {
      const timer = setTimeout(() => {
        setHasError(false);
        setShowAlert(false);
      }, 2000);
  
      return () => clearTimeout(timer);
    }
   
  }, [isSubmitted, hasError , showAlert]);


  
  return (
    <Container style={{ height: "85vh" }}>
      {hasError && (
        <Alert variant="danger" onClose={() => setHasError(false)} dismissible>
          Form tidak lengkap. Mohon isi semua field. (tertutup dalam 2 detik)
        </Alert>
      )}
      {showAlert && (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
          Data berhasil disimpan!
        </Alert>
      )}
      <Card className="text-center mt-3">
        <Card.Header>Message Us</Card.Header>
        <Card.Body>
          <Row>
            <Col md="6">
              <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="2">
                    Nama
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      type="text"
                      placeholder="John Doe"
                      id="nama"
                      value={formData.nama}
                      onChange={handleChange}
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="2">
                    Email
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      type="email"
                      placeholder="JohnDoe@gmail.com"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="2">
                    Telpon
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      type="text"
                      placeholder="081234567890"
                      id="telp"
                      value={formData.telp}
                      onChange={handleChange}
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="2">
                    Deskripsi
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Deskripsi"
                      id="deskripsi"
                      value={formData.deskripsi}
                      onChange={handleChange}
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="2">
                    Deadline
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control type="date"id="deadline" value={formData.deadline} onChange={handleChange}/>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                  <Stack direction="horizontal" gap={3} className="justify-content-end">
                    <Button type="button" variant="danger" onClick={handleReset}>
                      Reset
                    </Button>
                    <Button type="submit" variant="success">
                      Simpan
                    </Button>
                    <Button
                      type="button"
                      variant="info"
                      onClick={() => setLgShow(true)}
                    >
                      Preview
                    </Button>
                  </Stack>
                </Form.Group>
              </Form>
            </Col>
            <Col md="6">
              <h5>Preview</h5>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
                      Nama
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control plaintext readOnly onKeyUp={handleKeyup} value={": " + formData.nama} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
                      email
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control plaintext readOnly onKeyUp={handleKeyup} value={": " + formData.email} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
                      telp
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control plaintext readOnly onKeyUp={handleKeyup} value={": " + formData.telp} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
                      deskripsi
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control plaintext readOnly onKeyUp={handleKeyup} value={": " + formData.deskripsi} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
                      deadline
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control plaintext readOnly onKeyUp={handleKeyup} value={": " + formData.deadline} />
                    </Col>
                </Form.Group>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        <Row>
          <Col md="3">all Data :</Col>
          <Col md="3">{data.length}</Col>
          <Col md="3">Delete Data :</Col>
          <Col md="3">{countDelete}</Col>
        </Row>


          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Nama</th>
                <th>Email</th>
                <th>Telp</th>
                <th>Deskripsi</th>
                <th>Deadline</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td><Button variant="danger" onClick={() => handleDelete(item.id)}>Delete</Button></td>
                  <td>{item.nama}</td>
                  <td>{item.email}</td>
                  <td>{item.telp}</td>
                  <td>{item.deskripsi}</td>
                  <td>{item.deadline}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Formulir;