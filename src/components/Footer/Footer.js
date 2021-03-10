import React from 'react';

export default function Footer() {
	return(
		<footer className="footer">
			<div className="footer__wrapper">
				<p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
				<div className="footer__info">
					<span className="footer__copyright">&copy; 2021</span>
					<ul className="footer__social">
						<li className="footer__social-item">
							<a href="https://praktikum.yandex.ru/" target="_blak" className="footer__social-link">Яндекс.Практикум</a>
						</li>
						<li className="footer__social-item">
							<a href="https://github.com/MillionerI" target="_blak" className="footer__social-link">Github</a>
						</li>
						<li className="footer__social-item">
							<a href="https://vk.com/frozzzeen" target="_blak" className="footer__social-link">Вконтакте</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	)
}