import React from 'react';
import Form from './../Form/Form.js';

export default function Profile() {
	return(
		<section className="profile">
			<Form name="profile" title="Привет, Виталий!" buttonTitle="Редактировать" caption="" linkURL="/" linkTitle="Выйти из аккаунта">
				<label className="form__label form-profile__label" htmlFor="text">
					Имя
					<input name="name" type="name" className="form__input form-profile__input" id="name" defaultValue="Виталий"/>
				</label>
				<div className="profile__line"></div>
				<label className="form__label form-profile__label" htmlFor="email">
					Почта
					<input name="email" type="email" className="form__input form-profile__input" id="email" defaultValue="pochta@ya.ru"/>
				</label>
			</Form>
		</section>
	)
}