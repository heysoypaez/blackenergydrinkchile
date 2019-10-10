
import React from "react";
import TeamMember from "./teamMember.js";
import imageTeamAnaGomez from "../images/ana-gomez-mercado-food.jpeg";
import imageTeamDanielPaez from "../images/daniel-paez-fondo-blanco.jpg";
import imageTeamPeterPena from "../images/peter-peña-mercado-food.png";
import imageTeamRonaldoMora from "../images/linkedin-ronaldo-mora.jpg";


function TeamMemberList(props) {
	
	return(
		<section className="teamMemberList">
			<TeamMember 
				name="Peter Peña"
				jobTitle="Director General"
				description="Empresario. Experiencia en banca. Distribución de productos por mayor."
				image={imageTeamPeterPena}
			/>

			<TeamMember 
				name="Daniel Páez"
				jobTitle="Director de Tecnologia"
				description="Programador web, Experiencia en creación de contenido, Experiencia con equipos de marketing digital"
				image={imageTeamDanielPaez}
			/>
                    			    
			<TeamMember 
				name="Ronaldo Mora"
				jobTitle="Director de Ventas"
				description="Experiencia con Ventas y clientes. Experiencia administrativa. Liderazgo de Equipos."
				image={imageTeamRonaldoMora}
			/>
			<TeamMember 
				name="Ana Gómez"
				jobTitle="Director de Marketing"
				description="Profesional en publicidad y relaciones públicas. Experiencia en redes sociales. Ventas Online."
				image={imageTeamAnaGomez}
			/>
		</section>
	)
}

export default TeamMemberList;


