import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import StarRatingComponent from "react-star-rating-component";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";
const contactPhone = "56946599356";

const ProductCategory = data => (
  <Layout>
    <SEO
      title={data.data.contentfulProductCategory.name}
      keywords={[`gatsby`, `application`, `react`]}
    />
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
  </Layout>
)

export default ProductCategory

export const query = graphql`
  query ProductCategoryQuery($slug: String!) {
    contentfulProductCategories(slug: { eq: $slug }) {
      id
      name
      slug
      image {
        fixed(width: 1120, height: 500) {
          width
          height
          src
          srcSet
        }
      }
    }
  }
`
