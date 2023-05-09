import "../assets/styles/char.css"
import "../../../qrtress/src/app.css"

const Characteristics = () => {
  return (
    <div className="char-container" id="caracteristicas">
      <h3 className="char-title" data-aos="fade-up">CARACTERÍSTICAS</h3>
      <h4 className="char-header" data-aos="fade-up" data-aos-duration="1500">Carta digital QR sin coste</h4>
      <p className="char-text" data-aos="fade-up" data-aos-duration="2000">
        Reduce los contactos con la carta digital. Cumple con la nueva normativa
        de seguridad para hacer frente a la propagación del Covid-19 haciendo de
        tu negocio un lugar más higiénico y libre de contagios.
      </p>
      <p className="char-text" data-aos="fade-up" data-aos-duration="2500">
        Digitaliza tu bar o restaurante con la única carta digital QR gratuita
        que incluye sistema de comandas vía Whatsapp. Ten el control en tiempo
        real de tus cartas, productos, disponibilidad, y mucho más. Simplifica
        todos los procesos. Tus menús siempre actualizados.
      </p>
    </div>
  );
};

export default Characteristics;
