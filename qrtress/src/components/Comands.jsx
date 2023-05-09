import "../assets/styles/comands.css";
const Comands = () => {
  return (
    <div className="comands-container" id="comandas">
      <h3 className="comands-header" data-aos="fade-up" data-aos-duration="2000">SISTEMA DE COMANDAS</h3>
      <h4 className="comands-title" data-aos="fade-up" data-aos-duration="2000">Recibe los pedidos en tu móvil</h4>
      <p className="comands-text" data-aos="fade-up" data-aos-duration="2000">
        Tus clientes podrán utilizar la carta digital gratuita para realizar
        comandas en tiempo real. Con esta herramienta, se reduce el contacto y
        se acortan los tiempos de espera de los clientes. Los comensales
        escanearán un código QR situado en cada mesa para acceder a la carta.
        Una vez dentro, podrán seleccionar las comidas o bebidas que desean
        añadir a su comanda.
      </p>
    </div>
  );
};

export default Comands;
