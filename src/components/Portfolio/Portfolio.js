import React from 'react';
import arrow from './../../images/arrow.svg';
import config from './../../config.js';

export default function Portfolio() {
	const { portfolio } = config;

	return(
		<section className="portfolio">
			<h5 className="portfolio__title">Портфолио</h5>
			<ul className="portfolio__links">
				{
					portfolio.map((item, index) => {
						return(
							<li className="portfolio__link" key={index}>
								<a href={item.link} target="_blank" rel="noreferrer" className={item.last ? `portfolio__link-item portfolio__link-item_margin` : `portfolio__link-item`}>
									<h3 className="portfolio__link-title">{item.title}</h3>
									<img src={arrow} alt="Перейти" className="portfolio__img" />
								</a>
							</li>
						)}
					)
				}
			</ul>
		</section>
	)
}