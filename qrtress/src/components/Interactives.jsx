import "../assets/styles/interactives.css";

const Interactives = () => {
  return (
    <div className="interactives-container">
      <div>
        <h3 className="interactives-title">La carta QR gratis más completa</h3>
        <p className="interactive-text">
          Haz marketing gastronómico. Mejora tu imagen de marca, ahorra costes y
          vende mucho más. Lleva tu negocio de restauración a lo más alto con
          nuestra carta digital QR. <br />
          Modifica tus productos, actualiza precios o disponibilidad y edita las
          cartas en tiempo real.
        </p>
        <a href="">
          Empieza ya! <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
      <div className="interactives-cards">
        <div className="interactives-card green">
          <i className="fa-solid fa-bullhorn icon"></i>
          <p>100% gratis</p>
        </div>
        <div className="interactives-card orange">
          <i className="fa-regular fa-face-smile icon"></i>
          <p>100% interactiva</p>
        </div>
        <div className="interactives-card red">
          <i className="fa-sharp fa-solid fa-pen-to-square icon"></i>
          <p>100% administrable</p>
        </div>
        <div className="interactives-card blue">
          <i className="fa-solid fa-mobile-screen-button icon"></i>
          <p>Sin aplicaciones</p>
        </div>
      </div>
    </div>
  );
};

export default Interactives;
