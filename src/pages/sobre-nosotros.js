import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TeamMemberList from "../components/teamMemberList.js"
import MissionStatement from "../components/missionStatement.js"

class About extends React.Component {

  render() {
    return (
      <Layout>
        <SEO title="Sobre Nosotros" keywords={[`gatsby`, `application`, `react`]} />{" "}
        <div className="site-About">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h1 id="queesmercadofood">¿Que es Mercado Food?</h1>

                <p>
                Somos Tres generaciones entregandote salud,vida,energia,en los mejores alimentos de tu vida personal y saludables para tus hijos y nuevas generaciones.
                </p>
                <p>
                  En palabras de mortales, somos un proveedor brillante de
                  insumos alimenticios perecibles y no perecibles para locales,
                  restaurantes, eventos y familias.
                </p>

                <p>Pero para ti somos más que eso.</p>

                <p>
                  Mercado Food es una empresa donde creemos en Chile y en los
                  inmigrantes emprendedores con acciones, no palabras. por
                  eso entregamos precio que nadie ofrece sumado a una comodidad
                  que deleita.
                </p>

                <div> 
                <h2 id="elequipo">El Equipo.</h2>
                  <p>
                    Mercado Food es la sinergia a tu servicio de personas que
                    conocen los mercado locales de frutas y verduras como la palma de su mano de
                    generaciones desde muy niño, de la tecnologia web que hace
                    posible este sitio donde estás, de personas deseando encontrar
                    nuestro producto que más cubre tus necesidades.
                  </p>

                  <TeamMemberList />

                </div>

                <MissionStatement />

                <h2 id="nuestrocliente">Nuestro cliente</h2>

                <p>
                  Estamos comprometidos en servir a locales, restaurants, foodtrucks, familias
                  a lo grande.
                </p>

                <h2 id="nuestrosvalores">Nuestros valores</h2>

                <ol>
                  <li>Enfoque.</li>

                  <li>Confianza.</li>

                  <li>Transparencia.</li>

                  <li>Compromiso.</li>

                  <li>Relevancia.</li>

                  <li>Cooperación</li>
                </ol>

                <h2 id="lavisin">¿La visión? Piensa en Grande</h2>

                <p>
                  En Mercado Food soñamos con el ser el hermano mayor de los
                  emprendedores que como tu entregan la comida que compramos y
                  comemos en nuestro dia a dia.
                </p>

                <p>
                  Queremos que los emprendedores tengan más tiempo dedicado a su
                  negocio (y a su familia) y menos haciendo mercado en La Vega,
                  Franklin o grandes supermercados.
                </p>

                <p>
                  Soñamos con el ser tu teatro de operaciones central de Chile
                  en un principio y Latinoamerica en un futuro.
                </p>

                <p>
                  <em>Creemos que el límite son las estrellas.</em>
                </p>

                <h2 id="dudas">¿Dudas?</h2>

                <p>
                  Sientete libre de escribirnos a nuestro Whatsapp oficial o
                  enviar un mensaje al correo
                </p>
              </div>
            </div>
          </div>{" "}
        </div>{" "}
      </Layout>
    )
  }
}
export default About
