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
					<p className="about-me__about">
						Привет, меня зовут Дмитрий и мне 21 год. Живу в городе Каменск-Уральский, а учился в КЖТ УрГУПС по специальности техническая эксплуатация подвижного состава железных дорог. 
						Однако, как это часто бывает по специальности, я работать не захотел, да и не смог бы по некоторым обстоятельствам. Поэтому я начал изучать Веб-разработку. Учили нас многому, в том числе: HTML, CSS, JavaScript, Node.js, Express, mongoDB, React, Git и многое другое. Конечно, я не могу сказать, что хорошо знаю все эти технологии - я новичок и только начинаю свой путь, но я готов совершенствоваться в этом направлении и узнавать новое.
					</p>
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