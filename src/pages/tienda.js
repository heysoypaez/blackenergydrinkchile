import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StarRatingComponent from "react-star-rating-component"
import { graphql } from "gatsby"

class IndexPost extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      NoOfPost: 6,
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleProductClick = () => {
 //   console.log(items.node);
  }

  handleScroll() {
    var lastScrollY = window.pageYOffset + 1100

    if (lastScrollY > window.outerHeight) {
      var count = this.state.NoOfPost + 3
      this.setState({
        NoOfPost: count,
      })
    }
  }

  render() {
    const { data } = this.props
    const { NoOfPost } = this.state

    return (
      <React.Fragment>
        <div className="row product-main" onScroll={this.handleScroll}>
          {data.data.allContentfulProduct.edges
            .slice(0, NoOfPost)
            .map(items => (
              <div
                className="Catalogue__item col-sm-12 col-md-6 col-lg-4"
                key={items.node.id}
              >
              {    console.log(items.node) }
                <div className="details_List">
                  <Link to={`/${items.node.slug}`}>
                    {items.node.image === null ? (
                      <div className="no-image">No Image</div>
                    ) : (
                      <Img sizes={items.node.image.fixed} />
                    )}
                  </Link>

                  <div className="details_inner">
                    <h2>
                      <Link to={`/${items.node.slug}`}>{items.node.name}</Link>
                    </h2>
                    <StarRatingComponent
                      name="rate1"
                      starCount={5}
                      value={items.node.rating}
                    />
                    <p>{items.node.details.childMarkdownRemark.excerpt}</p>
                    <div className="row">
                      <div className="col-sm-4 align-self-center">
                        <span className="price">${items.node.price}</span>
                      </div>
                      <div className="col-sm-8 text-right align-self-center">
                        <button
                          href="#"
                          className="Product snipcart-add-item"
                          data-item-id={items.node.slug}
                          data-item-price={items.node.price}
                          data-item-image={
                            items.node.image === null
                              ? ""
                              : items.node.image.fixed.src
                          }
                          data-item-name={items.node.name}
                          data-item-url={`/`}
                          onClick={this.handleProductClick}
                        >
                          <i className="fas fa-shopping-bag" />
                          Agregar al carrito
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </React.Fragment>
    )
  }
}

const IndexPage = data => (
  <Layout>
    <SEO title="Tienda" keywords={[`gatsby`, `application`, `react`]} />
    <div className="container store-page">
      <IndexPost data={data} />
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query StoreQuery {
    allContentfulProduct {
      edges {
        node {
          id
          name
          slug
          rating
          image {
            fixed(width: 1000, height: 500) {
              width
              height
              src
              srcSet
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
  }
`
