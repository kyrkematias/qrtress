import { Container, Row, Col,} from "react-bootstrap";
import "../assets/styles/banner.css";
import celphone from "../assets/img/celphone.png"

const Banner = () => {
  return (
    <div>
      <Container className="banner-img" fluid>
        <Row className="d-flex justify-content-center align-items-center">
          <Col md={5} >
            <h1 className="banner-title">Carta Digital QR Gratis!</h1>
            <h2 className="banner-subtitle">✓ Sin apps ✓ Sin descargas ✓ 100% seguro</h2>
            <p className="banner-text">
              Carta QR gratis para restaurantes y bares. Sin letras pequeñas.
              Potencia la imagen de tu negocio de hostelería y mejora la
              experiencia de tus clientes.
            </p>
            <p className="banner-text">
              Sustituye tus cartas en papel y PDF por un sólo QR siempre
              actualizado, editable desde tu propio panel de gestión. Disponible
              en varios idiomas y con sistema de comandas.
            </p>
            <p className="banner-text">
              Crea tu carta digital sin costes y de forma sencilla con Carta
              Digital Gratis. Te damos la mejor herramienta para mostrar al
              cliente tu oferta gastronómica.
            </p>
            <div className="btn-container">
                <a href="" className="banner-btn-reg slide_right">Registrate gratis</a>
                <a href="" className="banner-btn-ex slide_right">Ver un ejemplo</a>
            </div>
          </Col>
          <Col md={5}>
            <img src={celphone} alt="cellphone image in png" className="banner-cell"/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
