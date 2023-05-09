import "../assets/styles/footer.css";
const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="footer-section-container">
          <h3 className="footer-section-title">Destacados</h3>
          <div className="link-container">
            <i className="fa-solid fa-chevron-right arrowIcon"></i>
            <a href="" className="footer-link">
              Diseño web profesional. Desarrollo de páginas web y tiendas
              online.
            </a>
          </div>
          <div className="link-container">
            <i className="fa-solid fa-chevron-right arrowIcon"></i>
            <a href="" className="footer-link">
              Cartelería digital para restaurantes. Menú en TV.
            </a>
          </div>
          <div className="link-container">
            <i className="fa-solid fa-chevron-right arrowIcon"></i>
            <a href="" className="footer-link">
              Carta digital Argentina
            </a>
          </div>
          <div className="link-container">
            <i className="fa-solid fa-chevron-right arrowIcon"></i>
            <a href="" className="footer-link">
              Menú digital gratis en Colombia
            </a>
          </div>
          <div className="link-container">
            <i className="fa-solid fa-chevron-right arrowIcon"></i>
            <a href="" className="footer-link">
              Carta QR en México
            </a>
          </div>
        </div>
        <div className="footer-section-container">
          <h3 className="footer-section-title">Política de privacidad</h3>
          <div className="link-container">
            <i className="fa-solid fa-chevron-right arrowIcon"></i>
            <a href="" className="footer-link">
              Aviso legal
            </a>
          </div>
          <div className="link-container">
            <i className="fa-solid fa-chevron-right arrowIcon"></i>
            <a href="" className="footer-link">
              Condiciones de venta
            </a>
          </div>
          <div className="link-container">
            <i className="fa-solid fa-chevron-right arrowIcon"></i>
            <a href="" className="footer-link">
              Política de cookies
            </a>
          </div>
          <div className="link-container">
            <i className="fa-solid fa-chevron-right arrowIcon"></i>
            <a href="" className="footer-link">
              Política de privacidad
            </a>
          </div>
        </div>
        <div className="footer-section-container">
          <h3 className="footer-section-title">Siguenos</h3>
          <a href="" className="footer-link">
            <i className="fa-brands fa-facebook socialIcon"></i>
          </a>
          <a href="" className="footer-link">
            <i className="fa-brands fa-instagram socialIcon"></i>
          </a>
          <a href="" className="footer-link">
            <i className="fa-brands fa-youtube socialIcon"></i>
          </a>
        </div>
      </div>
      <p className="footer-creator">
        CREADO Y DESARROLLADO POR: <strong>MARTIN MATIAS</strong>
      </p>
    </div>
  );
};

export default Footer;
