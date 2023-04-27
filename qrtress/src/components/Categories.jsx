import { Container } from "react-bootstrap";
import "../assets/styles/categories.css";
const Categories = () => {
  return (
    <Container className="categories-container">
      <p className="categories-header">CARTA DIGITAL ADAPTADA A TU NEGOCIO</p>
      <h3 className="categories-title">
        Ejemplos de cartas digitales que puedes hacer
      </h3>
      <div className="categories-card-container">
        <div className="categories-card">
          <i className="fa-solid fa-wine-glass categories-card-icon bgy"></i>
          <h4 className="categories-card-text">Café Bar</h4>
        </div>
        <div className="categories-card">
          <i className="fa-solid fa-burger categories-card-icon bgsb"></i>
          <h4 className="categories-card-text">Burger</h4>
        </div>
        <div className="categories-card">
          <i className="fa-solid fa-martini-glass-citrus categories-card-icon bgr"></i>
          <h4 className="categories-card-text">Cocktail Bar</h4>
        </div>
        <div className="categories-card">
          <i className="fa-solid fa-utensils categories-card-icon bgb"></i>{" "}
          <h4 className="categories-card-text">Gastrobar</h4>
        </div>
        <div className="categories-card">
          <i className="fa-solid fa-beer-mug-empty categories-card-icon bgp"></i>
          <h4 className="categories-card-text">Cervecería</h4>
        </div>
        <div className="categories-card">
          <i className="fa-solid fa-seedling categories-card-icon bgg"></i>
          <h4 className="categories-card-text">Vegetariano</h4>
        </div>
      </div>
      <p className="categories-text">
        Contacta con nosotros y personalizaremos el estilo de tu carta digital
        para que no tengas que preocuparte por nada.
      </p>
      <p className="categories-text">
        Hacemos accesible la digitalización a cualquier establecimiento de
        hostelería sin importar su tamaño.
      </p>
    </Container>
  );
};

export default Categories;
