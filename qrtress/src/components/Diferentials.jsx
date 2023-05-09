import "../assets/styles/dif.css";
const Diferentials = () => {
  return (
    <div className="dif-container">
      <p className="dif-header" data-aos="fade-up">
        Sí estás pensando en digitalizar la carta de tu bar, restaurante,
        cervecería, hotel, alojamiento, comercio o tener tu catálogo digital. Si
        quieres una solución profesional, interactiva y dinámica, mejor que un
        simple pdf, estás a un paso de conseguirlo con Recafy.
      </p>
      <div className="dif-cards-container">
        <div className="dif-card" data-aos="fade-down" data-aos-duration="2000">
          <i className="fa-solid fa-qrcode dif-icons"></i>
          <div>
            <h4>Códigos QR</h4>
            <p>
              Genera e imprime códigos QR por mesa o idioma sin límites siempre
              que lo necesites.
            </p>
          </div>
        </div>
        <div className="dif-card" data-aos="fade-down" data-aos-duration="2000">
          <i className="fa-solid fa-language dif-icons"></i>
          <div>
            <h4>Multi idioma</h4>
            <p>
              Cartas y productos en los idiomas que necesites. Traducciones
              fáciles de gestionar.
            </p>
          </div>
        </div>
        <div className="dif-card" data-aos="fade-down" data-aos-duration="2000">
          <i className="fa-solid fa-print dif-icons"></i>
          <div>
            <h4>En papel</h4>
            <p>
              ¿Quieres también el formato tradicional? genera tu carta o menú
              del día en formato impresión en papel.
            </p>
          </div>
        </div>
        <div className="dif-card" data-aos="fade-down" data-aos-duration="2000">
          <i className="fa-solid fa-tag dif-icons"></i>
          <div>
            <h4>Tarifas de precios</h4>
            <p>
              ¿Quieres también el formato tradicional? genera tu carta o menú
              del día en formato impresión en papel.
            </p>
          </div>
        </div>
        <div className="dif-card" data-aos="fade-down" data-aos-duration="2000">
          <i className="fa-solid fa-circle-plus dif-icons"></i>
          <div>
            <h4>Complementos</h4>
            <p>
              Añade ingredientes extra o el punto de preparación. Los comensales
              configuran el plato desde su smartphone.
            </p>
          </div>
        </div>
        <div className="dif-card" data-aos="fade-down" data-aos-duration="2000">
          <i className="fa-solid fa-filter dif-icons"></i>
          <div>
            <h4>Filtros</h4>
            <p>
              Filtra por alérgenos y tipo de producto. Cumple la normativa
              1169/2011 de información sobre alérgenos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diferentials;
