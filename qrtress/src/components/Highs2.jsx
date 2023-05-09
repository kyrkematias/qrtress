import "../assets/styles/highs.css";
import "../assets/styles/dif.css";
import cellphone from "../assets/img/mockup4.png";
const Highs2 = () => {
  return (
    <div className="highs-container">
      <div className="high-imgContainer2">
        <img src={cellphone} alt="" className="highs-img2" data-aos="zoom-in" data-aos-duration="3000"/>
        <div></div>
      </div>
      <div className="dif-cards-container ">
        <div className="dif-card" data-aos="fade-up" data-aos-duration="2000">
          <i className="fa-solid fa-utensils dif-icons"></i>
          <div>
            <h4 className="text">Selecciona productos</h4>
            <p className="text">
              Los clientes seleccionan los platos, las bebidas o el menú que
              desean.
            </p>
          </div>
        </div>
        <div className="dif-card" data-aos="fade-up" data-aos-duration="2000">
          <i className="fa-solid fa-pizza-slice dif-icons"></i>
          <div>
            <h4 className="text">Añade complementos</h4>
            <p className="text">
              Los comensales añaden complementos o ingredientes extra a su
              pedido.
            </p>
          </div>
        </div>
        <div className="dif-card" data-aos="fade-up" data-aos-duration="2000">
          <i className="fa-solid fa-fire-flame-curved dif-icons"></i>
          <div>
            <h4 className="text">¿Cómo lo quiere?</h4>
            <p className="text">
              Selecciona el punto de cocción de la carne, la bebida del tiempo o
              fría, con o sin hielo, etc.
            </p>
          </div>
        </div>
        <div className="dif-card" data-aos="fade-up" data-aos-duration="2000">
          <i className="fa-solid fa-paper-plane dif-icons"></i>
          <div>
            <h4 className="text">Envía la comanda</h4>
            <p className="text">
              Completado el pedido se envía al restaurante vía Whatsapp,
              Telegram o a través del panel de gestión.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highs2;
