import { Container, Nav, Navbar } from "react-bootstrap";

const Navigasi = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Diki Maulana</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="justify-content-end" activeKey="/home" variant="pills" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link href="/home">HOME</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/message">Message Us</Nav.Link>
            </Nav.Item>
          </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigasi;
