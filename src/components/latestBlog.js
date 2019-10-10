import React, { Component } from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

export default class LatestBlogs extends Component {
  render() {
    const { data } = this.props

    return (
      <div className="container">
        <div className="text-center">
          <h2 className="with-underline">Articulos útiles </h2>
        </div>
        <ul className="latest-blog">
          {data.edges.map(items => (
            <li key={items.node.id}>
              <div className="inner">
                <Link to={items.node.slug} />
                <Img sizes={items.node.featureImage.fluid} />
                <h3>{items.node.title}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
