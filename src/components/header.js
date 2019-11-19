import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../css/font-awesome.css"
import "bootstrap/dist/css/bootstrap.css"
import "../css/style.css"
import SEO from "../components/seo"
import logo from "../images/logotipo-mercado-food-comida-por-mayor.png"
import { StaticQuery ,graphql} from "gatsby";


const Header = ({ siteTitle }) => (

  <StaticQuery
    query={graphql`
      query HeaderQuery {
        allContentfulProductCategories {
          edges {
            node {
              name
              slug
            }
          }
        }
      }
    `}
    render={data => (
  <header className="site-header">
    <SEO title={siteTitle} />
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-4 align-self-center">
          <Link className="header-logo" to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="col-sm-12 col-md-8 align-self-center">
          <nav>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tienda">
                  Tienda
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sobre-nosotros">
                  Sobre Nosotros
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contacto">
                  Contacto
                </Link>
              </li>
            </ul>
            <div className="header-cart">
              <Link
                className="Header__summary snipcart-summary snipcart-checkout"
                to="#"
              >
                <i className="fas fa-cart-plus" />
              </Link>
            </div>
          </nav>
        </div>
      </div>
    <div className="row Header__product-categories__container">
        <div className="col-sm-12 col-md-12 align-self-center">
          <nav>
            <ul className="navbar-nav mr-auto Header__product-categories__menu">
                {
                  data.allContentfulProductCategories.edges.map(( {node: {name, slug} }, index) => (
                  <li className="nav-item" key={index}>
                    <Link className="nav-link" to={`/${slug}`}>
                      {name}
                    </Link>                                                        
                  </li>
                  ))
                }
            </ul>
          </nav>
        </div>
    </div>
    </div>
  </header>
    )}
  />
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

