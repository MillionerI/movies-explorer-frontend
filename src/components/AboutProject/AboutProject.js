import React from 'react';
import Section from './../Section/Section.js';

export default function AboutProject() {
	return(
		<Section cName="about-project" title="О проекте" cNameWrap="section__wrapper_about-project" id="about-project">
			<div className="about-project__info">
			<div>
				<h4 className="about-project__info-title">Дипломный проект включал 5 этапов</h4>
				<p className="about-project__info-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
			</div>
			<div>
				<h4 className="about-project__info-title">На выполнение диплома ушло 5 недель</h4>
				<p className="about-project__info-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
			</div>
			</div>
			<div className="about-project__track">
				<span className="about-project__track-period about-project__track-period_green">1 неделя</span>
				<span className="about-project__track-period about-project__track-period_gray">4 недели</span>
				<span className="about-project__track-name">Back-end</span>
				<span className="about-project__track-name">Front-end</span>
			</div>
		</Section>
	)
}