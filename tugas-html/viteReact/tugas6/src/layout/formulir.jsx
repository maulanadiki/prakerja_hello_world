import {
  Container,
  Form,
  Card,
  Row,
  Col,
  Button,
  Stack,
  Modal,
  Table
} from "react-bootstrap";
import { useState } from "react";

const Formulir = () => {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    telp: "",
    deskripsi: "",
    deadline: ""
  });
  const [data, setData] = useState([]);
  const [lgShow, setLgShow] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData((prevData) => [...prevData, formData]);
    setFormData({
      nama: "",
      email: "",
      telp: "",
      deskripsi: "",
      deadline: ""
    });
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

  return (
    <Container style={{ height: "85vh" }}>
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
          <Table striped bordered hover>
            <thead>
              <tr>
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