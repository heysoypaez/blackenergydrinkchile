import React from "react"
import { Link } from "gatsby"
import facebookIcon from "../images/facebook-icon-18-256.png";
import instagramIcon from "../images/instagram-icon-png-white-1.jpg";

class Footer extends React.Component {
  render() {
    return (
      <footer className="site-footer">
        <div className="footer_inner">
          <div className="container">
            <div className="footer-widget footer-content">
              <section id="nav_menu-8" className="widget widget_nav_menu">
                <div className="menu-main-container">
                  <ul id="menu-main" className="menu">
                    <li>
                      <Link to="/sobre-nosotros">Sobre Nosotros</Link>
                    </li>
                    <li>
                      <Link to="/tienda">Tienda</Link>
                    </li>
                    <li>
                      <Link to="/contacto">Contacto</Link>
                    </li>
                    <li>
                      <Link to="/copyright">Derechos de autor</Link>
                    </li>
                  </ul>
                </div>
              </section>
              <section id="nav_menu-8" className="widget widget_nav_menu">
                <div className="menu-secondary-container">
                  <ul id="menu-main" className="menu">
                    <li>
                      <a href="https://www.facebook.com/Mercado-Food-108834677197759">
                        <img src={facebookIcon} height={40} width={40} />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/mercadofood.cl/">
                        <img src={instagramIcon} height={40} width={40} />
                      </a>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
            <div className="footer-bottom social-right-menu ">
              <div className="site-info">
                ©2019 heysoypaez. Todos los derechos resevados.
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
