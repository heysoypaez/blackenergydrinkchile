
import React from "react";
import "../css/layout/teamMember.css";

function TeamMember(props) {
	
	const {
		name,
		jobTitle,
		description,
		image
	} = props;

	return(
		<section className="TeamMember">
      <picture>
        <img src={image} className="fluid TeamMember__image" width={200} alt="miembro de equipo de mercado food" />
      </picture>
      <h3 className="TeamMember__name with-underline">{name}</h3>
      <h3 className="TeamMember__job-title ">{jobTitle}</h3>
      <p className="TeamMember__description">{description}</p>
		</section>
	)
}

export default TeamMember;
