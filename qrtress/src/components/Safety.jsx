import { Container } from "react-bootstrap";
import "../assets/styles/safe.css";
import shield from "../assets/img/shield.png"
const Safety = () => {
  return (
    <Container className="safe-container" fluid>
      <div className="safe-header">
        <div className="adv-shield">
          <i className="fa-solid fa-shield adv-icon"></i>
          <h4 className="adv-title">Código QR 100% seguro</h4>
        </div>
        <a href="" className="adv-link slide_right">
          Registrate GRATIS
        </a>
      </div>
      <p className="safe-description">
        Carta digital QR para bares y restaurantes. Código QR totalmente seguro,
        mediante página web protegida con certificado SSL. Sin acortadores de
        URL ni redirecciones ocultas. Cartas digitales alojadas en webs seguras
        mediante conexión HTTPS.
      </p>
      <div className="safe-text-container">
        <p className="safe-text">
          <i className="fa-solid fa-check icon"></i>Sin necesidad de descargar apps
          de terceros.
        </p>
        <p className="safe-text">
          <i className="fa-solid fa-check icon"></i>Toda la información en una página
          web protegida con certificado SSL.
        </p>
        <p className="safe-text">
          <i className="fa-solid fa-check icon"></i>Sin registro de usuarios. Sin
          robo de datos.
        </p>
      </div>
      <img src={shield} alt="shield image" className="safe-bgimg"/>
    </Container>
  );
};

export default Safety;
