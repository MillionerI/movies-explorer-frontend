import React from 'react';
import Section from './../Section/Section.js';
import {configuration} from './../../config.js';

export default function Techs() {
	const { techs } = configuration;

	return(
		<Section cName="techs" title="Технологии" cNameWrap="section__wrapper_techs">
			<div className="tehs__info">
				<h2 className="tehs__title">7 технологий</h2>
				<p className="tehs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
			</div>
			<ul className="tehs__list">
				{
					techs.map((item, index) => {
						return(
							<li className="tehs__tech" key={index}>
								{item.title}
							</li>
						)
					})
				}
			</ul>
		</Section>
	)
}