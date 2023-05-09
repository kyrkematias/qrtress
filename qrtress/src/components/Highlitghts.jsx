import "../assets/styles/highs.css";
import cell from "../assets/img/mockup2.png";
const Highlitghts = () => {
  return (
    <div className="highs-container">
      <div className="highs-side">
        <img
          src={cell}
          alt="Imagen de un telefono celular usando la app"
          className="highs-img"
        />
        <div className="imgbg"></div>
      </div>
      <div>
        <div className="highs-cards" data-aos-duration="1000">
          <i className="fa-solid fa-pencil highs-icon"></i>
          <div>
            <h4 className="highs-title">Editable</h4>
            <p className="highs-text">
              Actualiza precios, imágenes y productos sin depender de terceros y
              sin que cambie el código QR.
            </p>
          </div>
        </div>
        <div className="highs-cards" data-aos="fade-up">
          <i className="fa-regular fa-clock highs-icon"></i>
          <div>
            <h4 className="highs-title">Ahorra tiempo</h4>
            <p className="highs-text">
              Aumenta la satisfacción de tus clientes reduciendo los tiempos de
              espera.
            </p>
          </div>
        </div>
        <div className="highs-cards" data-aos="fade-up">
          <i className="fa-solid fa-house highs-icon"></i>
          <div>
            <h4 className="highs-title">Mejora la imagen de tu local</h4>
            <p className="highs-text">
              Potencia tu negocio adaptándote a las preferencias de los
              clientes. Digitaliza tu local.
            </p>
          </div>
        </div>
        <div className="highs-cards" data-aos="fade-up">
          <i className="fa-regular fa-face-smile highs-icon"></i>
          <div>
            <h4 className="highs-title">Muy fácil de usar</h4>
            <p className="highs-text">
              Muy intuitiva. Manejo sencillo para todos tus clientes, sin
              necesidad de instalar apps.
            </p>
          </div>
        </div>
        <div className="highs-cards" data-aos="fade-up">
          <i className="fa-solid fa-share-from-square highs-icon"></i>
          <div>
            <h4 className="highs-title">Posiciona tu restaurante</h4>
            <p className="highs-text">
              Muestra horarios e información de contacto. Conecta tu carta con
              tus perfiles en redes sociales.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlitghts;
