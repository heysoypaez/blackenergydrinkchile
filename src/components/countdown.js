import React, { Component } from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

export default class Countdown extends Component {
  render() {
    const { data } = this.props
    return (
      <div className="countdown-section">
        <Img sizes={data.featureImage.fluid} />
        <div className="container">
          <div className="countdown-inner">
            <h2 className="with-underline">{data.title}</h2>
            <span className="date">Fecha límite :</span>
            <span className="date">
              <strong>
                <i className="fas fa-clock" />
                {data.date}
              </strong>
            </span>
            <Link to="/store">Compra ahora</Link>
          </div>
        </div>
      </div>
    )
  }
}
