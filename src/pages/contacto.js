import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Contact extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Contacto" keywords={[`gatsby`, `application`, `react`]} />
        <div className="Contact-us">
          <div className="container">
            {/* To make form work, use your own formspree credentials in action="" */}
            <form
              action="https://formspree.io/mercadofood.chile@gmail.com"
              method="POST"
              name="contact"
              netlify
            >
              <div>
                <label>Tu Nombre: </label>
                <input type="text" name="name" />
                <div>
                  <label>Asunto: </label>
                  <input type="text" name="issue" />
                </div>
              </div>
              <div>
                <label>Tu correo electrónico: </label>
                <input type="email" name="email" />
              </div>
              <div>
                <label>Mensaje: </label>
                <textarea name="message" />
              </div>
              <div>
                <button type="submit">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Contact
