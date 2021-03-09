import React from 'react';
import Logo from './../Logo/Logo.js';
import Form from './../Form/Form.js';

export default function Register() {
	return(
		<section className="register">
			<Logo />
			<Form name="register" title="Добро пожаловать!" buttonTitle="Зарегистрироваться" caption="Уже зарегистрированы?" linkURL="/signin" linkTitle="Войти">
				<label className="form__label" htmlFor="name">
					Имя
				</label>
				<input name="name" type="text" className="form__input" id="name" minLength={2} maxLength={30} required defaultValue="Виталий" autoComplete="off" />
				<label className="form__label" htmlFor="email">
					E-mail
				</label>
				<input name="email" type="email" className="form__input" id="email" required defaultValue="pochta@ya.ru" autoComplete="off" />
				<label className="form__label" htmlFor="password">
					Пароль
				</label>
				<input name="password" type="password" className="form__input form__input_error" id="password" defaultValue="password" required autoComplete="off" />
				<p className="form__error">Что-то пошло не так...</p>
			</Form>
		</section>
	)
}