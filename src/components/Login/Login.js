import React from 'react';
import Logo from './../Logo/Logo.js';
import Form from './../Form/Form.js';

export default function Login() {
	return(
		<section className="login">
			<Logo />
			<Form name="login" title="Рады видеть!" buttonTitle="Войти" caption="Ещё не зарегистрированы?" linkURL="/signup" linkTitle="Регистрация">
				<label className="form__label" htmlFor="email">
					E-mail
				</label>
				<input name="email" type="email" className="form__input" id="email" required autoComplete="off" />
				<label className="form__label" htmlFor="password">
					Пароль
				</label>
				<input name="password" type="password" className="form__input" id="password" required autoComplete="off" />
			</Form>
		</section>
	)
}