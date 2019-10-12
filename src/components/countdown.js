import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Countdown = ({ data }) =>  {
    let date = new Date(data.date);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    date = date.toLocaleDateString("es-ES", options)

    return (
      <div className="countdown-section">
        <Img sizes={data.featureImage.fluid} />
        <div className="container">
          <div className="countdown-inner">
            <h2 className="with-underline">{data.title}</h2>
            <span className="date">Fecha límite :</span>
            <span className="date">
              <strong>
                <i className="fas fa-clock" /> {date}
              </strong>
            </span>
            <Link to="/tienda">Compra ahora</Link>
          </div>
        </div>
      </div>
    )  
}

export default Countdown;
