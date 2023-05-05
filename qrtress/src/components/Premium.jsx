import "../assets/styles/premium.css";
import "../assets/styles/safe.css";

const Premium = () => {
  return (
    <div className="premium-container">
      <h3 className="premium-title">¿Buscas un servicio premium?</h3>
      <div className="premium-text-container">
        <p className="premium-text">
          Si necesitas un sistema más complejo, con mayor número de cartas,
          locales y productos, con sistema de cartelería digital, módulo
          llamador de camareros, y mucho más... te ofrecemos el servicio
          personalizado de Recafy.
        </p>
        <a href="" className="adv-link slide_right">Carta digital QR con Recafy</a>
      </div>
      <div className="safe-text-container">
        <h4 className="safe-text">
          <i className="fa-solid fa-check icon"></i>Personalización avanzada del
          diseño de la carta
        </h4>
        <h4 className="safe-text">
          <i className="fa-solid fa-check icon"></i>Cartas y menús con horarios
          de publicación automática
        </h4>
        <h4 className="safe-text">
          <i className="fa-solid fa-check icon"></i>Galería de fotos de
          productos en alta resolución
        </h4>
        <h4 className="safe-text">
          <i className="fa-solid fa-check icon"></i>Muestra la carta en las TV
          de tu establecimiento
        </h4>
      </div>
      <i className="fa-solid fa-award award-icon"></i>
    </div>
  );
};

export default Premium;
