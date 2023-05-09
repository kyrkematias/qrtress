import "../assets/styles/banner2.css"

const Banner2 = () => {
  return (
    <div className="b2-container">
      <h4 className="b2-title" data-aos="fade-up" data-aos-duration="2000">Filtrado de productos</h4>
      <p className="b2-text" data-aos="fade-up" data-aos-duration="2500">
        Atiende las preferencias de tus clientes. Tus comensales pueden filtrar
        los platos según sus preferencias, gustos y estilo de preparación. <br /><br />
        Nuestra carta digital gratuita admite variaciones de productos y menús.
        Configura tus tarifas según diferentes formatos: tapas, raciones, etc.
      </p>
      <h4 className="b2-title" data-aos="fade-up" data-aos-duration="2000">Información sobre alérgenos</h4>
      <p className="b2-text" data-aos="fade-up" data-aos-duration="2500">
        La carta digital QR permite a los usuarios filtrar platos por alérgenos.
        Cumple de con la normativa 1169/2011 de información sobre alérgenos. <br /><br />
        Desde el panel de gestión indica fácilmente los alérgenos de cada plato
        con un click.
      </p>
      <h4 className="b2-title" data-aos="fade-up" data-aos-duration="2000">Comandas en tiempo real</h4>
      <p className="b2-text" data-aos="fade-up" data-aos-duration="2500">
        Tus clientes enviarán las comandas en tiempo real desde sus teléfonos
        utilizando Whatsapp. Mejora la experiencia de tus clientes.
      </p>
    </div>
  );
};

export default Banner2;
