import React from 'react';
import searchFormBtn from './../../images/search-form-btn.svg'

export default function SearchForm() {
	return (
		<form name="search-form" action="#" className="search-form" >
			<fieldset className="search-form__fieldset">
				<div className="search-form__input-wrapper">
					<input className="search-form__input" placeholder="Фильм" required />
					<button className="search-form__button"><img src={searchFormBtn} alt="Поиск" className="search-form__button-img" /></button>
				</div>
				<label className="search-form__checkbox-label">
				<div className="search-form__checkbox-wrapper">
					<input type="checkbox" className="search-form__checkbox" defaultChecked/>
					<div className="search-form__checkbox-span" />
					<span className="search-form__checkbox-indicator" />
				</div>
					<p className="search-form__checkbox-text">Короткометражки</p>
				</label>
			</fieldset>
		</form>
	);
}