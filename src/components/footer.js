import React from "react"
import { Link } from "gatsby"

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
                      <Link to="/about">Sobre Nosotros</Link>
                    </li>
                    <li>
                      <Link to="/blogs">Blog</Link>
                    </li>
                    <li>
                      <Link to="/store">Tienda</Link>
                    </li>
                    <li>
                      <Link to="/contact-us">Contacto</Link>
                    </li>
                    <li>
                      <Link to="/copyright">Derechos de autor</Link>
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
