import React from 'react';
import NavTab from './../NavTab/NavTab.js'
import promoImg from './../../images/promoImg.svg';

export default function Promo() {
	return(
		<section className="promo">
			<div className="promo__wrapper">
				<div className="promo__content">
					<div className="promo__text">
						<h1 className="promo__title">Учебный проект студента факультета Веб&nbsp;-&nbsp;разработки.</h1>
						<p className="promo__paragraph">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
					</div>
					<img src={promoImg} alt="Промо картинка" className="promo__image"/>
				</div>
				<NavTab />
			</div>
		</section>
	)
}