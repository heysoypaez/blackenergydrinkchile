
import React from "react";

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
        <img src={image} className="fluid" width={200} alt="miembro de equipo de mercado food" />
      </picture>
      <h3>{name}</h3>
      <h3>{jobTitle}</h3>
      <p>{description}</p>
		</section>
	)
}

export default TeamMember;
