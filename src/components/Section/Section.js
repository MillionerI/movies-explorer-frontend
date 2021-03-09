import React from 'react';

export default function Section({cName, title, cNameWrap, id, children}) {
	return(
		<section className={`section ${cName}`} id={id}>
			<div className={`section__wrapper ${cNameWrap}`}>
				<h4 className="section__title">{title}</h4>
				{children}
			</div>
		</section>
	)
}