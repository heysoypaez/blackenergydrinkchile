
import React from "react";
import TeamMember from "./teamMember.js";
import imageTeamAnaGomez from "../images/ana-gomez-mercado-food.png";
import imageTeamDanielPaez from "../images/daniel-paez-fondo-blanco.jpg";
import imageTeamPeterPena from "../images/peter-peña-mercado-food.png";
import imageTeamRonaldoMora from "../images/linkedin-ronaldo-mora.jpg";
import "../css/layout/teamMemberList.css";

function TeamMemberList(props) {
	

	return(
		<section className="TeamMemberList">
			<TeamMember 
				name="Peter Peña"
				jobTitle="Director General"
				description="Empresario. Experiencia en banca. Distribución de productos por mayor."
				image={imageTeamPeterPena}
			/>

			<TeamMember 
				name="Daniel Páez"
				jobTitle="Director de Tecnologia"
				description="Programador web, creación de contenido, Experiencia con marketing digital."
				image={imageTeamDanielPaez}
			/>
                    			    
			<TeamMember 
				name="Ronaldo Mora"
				jobTitle="Director de Ventas"
				description="Experiencia con Ventas y clientes, Administración, Liderazgo de Equipos."
				image={imageTeamRonaldoMora}
			/>
			<TeamMember 
				name="Ana Gómez"
				jobTitle="Director de Marketing"
				description="Profesional en publicidad y relaciones públicas, Experiencia en redes sociales, Ventas Online."
				image={imageTeamAnaGomez}
			/>
		</section>
	)
}

export default TeamMemberList;


