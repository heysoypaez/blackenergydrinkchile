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
      contactPhone: "56946599356"
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
          {data.data.allContentfulProductCategories.edges
            .slice(0, NoOfPost)
            .map(items => (
              <div
                className="Catalogue__item col-sm-12 col-md-6 col-lg-4"
                key={items.node.id}
              >
              {    console.log(items.node) }
                <div className="details_List">
                  <Link to={`/${items.node.name}`}>
                    {items.node.image === null ? (
                      <div className="no-image">No Image</div>
                    ) : (
                      <Img sizes={items.node.image.fixed} />
                    )}
                  </Link>

                  <div className="details_inner">
                    <h2>
                      <Link to={`/${items.node.name}`}>{items.node.name}</Link>
                    </h2>
                    <div className="row">

                      <div className="col-sm-12 text-right align-self-center">
                        <a
                          href={`https://wa.me/${this.state.contactPhone}`}
                          className="Product snipcart-add-item"
                          target="_blank"
                           rel="noopener noreferrer"
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
                          Consulta a ventas
                        </a>
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
    allContentfulProductCategories {
      edges {
        node {
          name
          image {
            fixed(width: 1000, height: 500) {
              width
              height
              src
              srcSet
            }
          }
        }
      }
    }
  }`