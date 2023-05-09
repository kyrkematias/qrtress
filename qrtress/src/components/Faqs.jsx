import "../assets/styles/faqs.css";
import faq from "../assets/img/faq-image.png";
const Faqs = () => {
  return (
    <div className="faqs-container" id="faq">
      <div className="faqs-side-container">
        <h3 className="faqs-title">FAQS</h3>
        <h4 className="faqs-subtitle" data-aos="fade-up" data-aos-duration="1500">
          Preguntas frecuentes sobre cartas digitales para restaurantes
        </h4>
        <img src={faq} alt="" className="faqs-img"/>
      </div>
      <div className="faqs-acordions-container">
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                ¿Es gratis para siempre?
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Cada usuario registrado dispone de una suscripción gratuita
                permanente que podrá mejorar si necesita disponer de más
                características.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                ¿Puedo cancelar mi suscripción?
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                En cualquier momento. Cualquier suscripción puede cancelarse sin
                ningún compromiso de permanencia.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-heading3">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse3"
                aria-expanded="false"
                aria-controls="flush-collapse3"
              >
                ¿Hace falta alguna app?
              </button>
            </h2>
            <div
              id="flush-collapse3"
              className="accordion-collapse collapse"
              aria-labelledby="flush-heading3"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                No, ni tu negocio ni tus clientes necesitarán descargar ninguna
                app ya que todo funciona vía web.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-heading4">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse4"
                aria-expanded="false"
                aria-controls="flush-collapse4"
              >
                ¿Dispone de idiomas?
              </button>
            </h2>
            <div
              id="flush-collapse4"
              className="accordion-collapse collapse"
              aria-labelledby="flush-heading4"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Sí. La interfaz web está en diferentes idiomas. Las cartas y los
                productos se pueden introducir en el idioma que necesites para
                tus clientes.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-heading5">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse5"
                aria-expanded="false"
                aria-controls="flush-collapse5"
              >
                ¿Puedo modificar las cartas?
              </button>
            </h2>
            <div
              id="flush-collapse5"
              className="accordion-collapse collapse"
              aria-labelledby="flush-heading5"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Sí. Una vez registrado en el servicio de Carta Digital Gratis,
                tendrás acceso a un gestor de administración muy sencillo, donde
                podrás añadir y modificar platos, fotos, precios y descripciones
                desde cualquier dispositivo.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-heading6">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse6"
                aria-expanded="false"
                aria-controls="flush-collapse6"
              >
                ¿Tienen coste adicional los códigos QR?
              </button>
            </h2>
            <div
              id="flush-collapse6"
              className="accordion-collapse collapse"
              aria-labelledby="flush-heading6"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Desde el panel de gestión podrás generar e imprimir tantos
                códigos QR como necesites, códigos genéricos o especiales para
                cada mesa. Siempre gratis.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-heading7">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapse7"
                aria-expanded="false"
                aria-controls="flush-collapse7"
              >
                ¿Incluye información de alérgenos?
              </button>
            </h2>
            <div
              id="flush-collapse7"
              className="accordion-collapse collapse"
              aria-labelledby="flush-heading7"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Si, en Carta Digital Gratis se incluye el control de alérgenos
                dentro de la normativa 1169/2011. Desde el panel de
                administración podrás indicar los alérgenos en cada plato y tus
                clientes podrán filtrar los menús según sus alergias.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
