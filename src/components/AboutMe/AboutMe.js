import React from 'react';
import Section from './../Section/Section.js';
import Portfolio from './../Portfolio/Portfolio.js';
import student from './../../images/student.jpg';

export default function AboutMe() {
	return(
		<Section cName="about-me" title="Студент" cNameWrap="section__wrapper_about-me">
			<div className="about-me__content">
				<div className="about-me__info">
					<h2 className="about-me__name">Дмитрий</h2>
					<h5 className="about-me__age">Фронтенд-разработчик, 21 год</h5>
					<p className="about-me__about">Я родился и живу в г.Каменск-Уральский, закончил колледж железнодорожного транспорта Кжт УрГупс. Недавно начал кодить.</p>
					<ul className="about-me__social">
						<li className="about-me__social-item">
						<a href="https://github.com/MillionerI" target="_blak" className="about-me__social-link">Github</a>
						</li>
						<li className="about-me__social-item">
							<a href="https://vk.com/frozzzeen" target="_blak" className="about-me__social-link">Вконтакте</a>
						</li>
					</ul>
				</div>
				<img src={student} alt="Студент" className="about-me__images" />
			</div>
			<Portfolio />
		</Section>
	)
}