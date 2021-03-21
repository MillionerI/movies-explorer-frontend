import React from 'react';
import Logo from './../Logo/Logo.js';
import Form from './../Form/Form.js';
import useFormWithValidation from './../../utils/useFormWithValidation.js';

export default function Login({ onLogin, authErrorStatus, authErrorMessage, formStatus}) {
	const { values, handleChange, errors, isValid } = useFormWithValidation({ email: '', password: '' });


  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ password: values.password, email: values.email });
  };

	return(
		<section className="login">
			<Logo />
			<Form onSubmit={handleSubmit} name="login" title="Рады видеть!" buttonTitle="Войти" caption="Ещё не зарегистрированы?" linkURL="/signup" linkTitle="Регистрация" validity={isValid} formStatus={formStatus} authErrorStatus={authErrorStatus} authErrorMessage={authErrorMessage}>
				<label className="form__label" htmlFor="email">
					E-mail
				</label>
				<input onChange={handleChange} value={values.email} name="email" type="email" className={errors.email? "form__input form__input_error" : "form__input"} id="email" required autoComplete="off" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>
				<p className="form__error">{errors.email}</p>
				<label className="form__label" htmlFor="password">
					Пароль
				</label>
				<input onChange={handleChange} value={values.password} name="password" type="password" minLength={4} className={errors.password? "form__input form__input_error" : "form__input"} id="password" required autoComplete="off" />
				<p className="form__error">{errors.password}</p>
			</Form>
		</section>
	)
}