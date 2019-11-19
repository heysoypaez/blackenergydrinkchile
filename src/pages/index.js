import React, {Fragment} from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import Countdown from "../components/countdown"
import StarRatingComponent from "react-star-rating-component"
import { graphql } from "gatsby"

class CategoriesPost extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contactPhone: "56979260701"
    }
  }


  render() {
    const { data } = this.props
    const { contactPhone } = this.state

    return (
      <Fragment>
        <div className="row product-main">
          {data.data.allContentfulProductCategories.edges.map(items => (
            <div
              className="Catalogue__item col-sm-12 col-md-6 col-lg-4"
              key={items.node.id}
            >
              <div className="details_List">
                {items.node.image === null ? (
                  <div className="no-image">No Image</div>
                ) : (
                  <Img sizes={items.node.image.fluid} />
                )}

                <div className="details_inner">
                  <h2>
                    <Link to={`/${items.node.slug}`}>{items.node.name}</Link>
                  </h2>
                  
                  <div className="row">

                    <div className="col-sm-12 text-right align-self-center">
                      <a                      
                        href={`https://wa.me/${contactPhone}`}
                        className="Product snipcart-add-item"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-item-id={items.node.slug}
                        data-item-image={
                          items.node.image === null
                            ? ""
                            : items.node.image.fluid.src
                        }
                        data-item-name={items.node.name}
                        data-item-url={`/`}
                      >
                        <i className="fas fa-shopping-bag" />
                        Consulta a ventas
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Fragment>
    )
  }
}

class IndexPost extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contactPhone: "56979260701"
    }
  }

  render() {
    const { data } = this.props
    const { contactPhone } = this.state

    return (
      <Fragment>
        <div className="row product-main">
          {data.data.allContentfulProduct.edges.map(items => (
            <div
              className="Catalogue__item col-sm-12 col-md-6 col-lg-4"
              key={items.node.id}
            >
              <div className="details_List">
                {items.node.image === null ? (
                  <div className="no-image">No Image</div>
                ) : (
                  <Img sizes={items.node.image.fluid} />
                )}

                <div className="details_inner">
                  <h2>
                    <Link to={`/${items.node.slug}`}>{items.node.name}</Link>
                  </h2>
                  <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value={items.node.rating}
                  />
                  
                  <div className="row">

                    <div className="col-sm-12 text-right align-self-center">
                      <a                      
                        href={`https://wa.me/${contactPhone}`}
                        className="Product snipcart-add-item"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-item-id={items.node.slug}
                        data-item-price={items.node.price}
                        data-item-image={
                          items.node.image === null
                            ? ""
                            : items.node.image.fluid.src
                        }
                        data-item-name={items.node.name}
                        data-item-url={`/`}
                      >
                        <i className="fas fa-shopping-bag" />
                        Consulta a ventas
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Fragment>
    )
  }
}

const IndexPage = data => (
  <Layout>
    <SEO title="Inicio" keywords={[`gatsby`, `application`, `react`]} />
    <Banner BannerData={data.data.allContentfulHeaderBanner.edges} />
    <div className="container">
      <div className="text-center">
        <h2 className="with-underline">Productos relevantes</h2>
      </div>
      <IndexPost data={data} />
    </div>
    <div className="container">
      <div className="text-center">
        <h2 className="with-underline">Categorias de interés</h2>
      </div>
      <CategoriesPost data={data} />
    </div>
    <div className="container">
      <div className="text-center">
        <h2 className="with-underline">¿Quieres recibir productos en la puerta de tu local?</h2>
        <p>
         Entonces, amigo mío, estás en el lugar correcto. 
        </p>
        <p><strong>Mercado Food = <i>economía + comodidad</i></strong>.</p>
        <Link to="/contacto" className="with-underline">
          Contáctanos
        </Link>
      </div>
    </div>
    <Countdown data={data.data.contentfulDealCountDown} />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query AboutQuery {
    allContentfulProduct(limit: 6, sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          id
          name
          slug
          rating
          image {
            fluid(maxWidth: 1000) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
          price
          details {
            childMarkdownRemark {
              excerpt(pruneLength: 140)
            }
          }
        }
      }
    }
    allContentfulHeaderBanner {
      edges {
        node {
          title
          subHeading
          image {
            fluid(maxWidth: 1800) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
        }
      }
    }
    contentfulDealCountDown {
      title
      featureImage {
        fluid(maxWidth: 1800) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
      date(formatString: "D MMMM, YYYY")
    }

    allContentfulProductCategories {
      edges {
        node {
          name
          slug
          id
          image {
            fluid(maxWidth: 1000) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }

        }
      }
    }
  }
`
//    <LatestBlogs data={data.data.allContentfulBlogs} />
/*
    allContentfulBlogs(limit: 3, sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          id
          title
          slug
          featureImage {
            fluid(maxWidth: 1120) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
        }
      }
    }
*/