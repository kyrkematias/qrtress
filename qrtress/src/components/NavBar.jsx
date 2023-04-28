import { Navbar, Container, Nav,  Button} from "react-bootstrap";
import "../assets/styles/navbar.css";
const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top" className="navbar">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100vh' }}
            navbarScroll>
            <Nav.Link href="#home" className="link">
              Caracteristicas
            </Nav.Link>
            <Nav.Link href="#link" className="link">
              Comandas
            </Nav.Link>
            <Nav.Link href="#link" className="link">
              ¿Dudas?
            </Nav.Link>
            <Nav.Link href="#link" className="link">
              Contacto
            </Nav.Link>
            <Nav.Link href="#link" className="link">
              Registrar un local
            </Nav.Link>
          </Nav>
          <Button size="lg" className="navbar-btn" variant="outline-danger">
            Iniciar sesión
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
};

export default NavBar;
