import React from 'react';
import Logo from './../Logo/Logo.js';
import Form from './../Form/Form.js';
import useFormWithValidation from './../../utils/useFormWithValidation.js';

export default function Register({onRegister, authErrorStatus, authErrorMessage, formStatus }) {
	const { values, handleChange, errors, isValid } = useFormWithValidation({ name: '', email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({ password: values.password, email: values.email, name: values.name });
  };

	return(
		<section className="register">
			<Logo />
			<Form onSubmit={handleSubmit} name="register" title="Добро пожаловать!" buttonTitle="Зарегистрироваться" caption="Уже зарегистрированы?" linkURL="/signin" linkTitle="Войти" validity={isValid} formStatus={formStatus} authErrorStatus={authErrorStatus} authErrorMessage={authErrorMessage} >
				<label className="form__label" htmlFor="name">
					Имя
				</label>
				<input onChange={handleChange} value={values.name} name="name" type="text" className={errors.name? "form__input form__input_error" : "form__input"} id="name" minLength={2} maxLength={30} required placeholder="Виталий" autoComplete="off" pattern="^[а-яА-ЯЁё\s\-]+$"/>
				<p className="form__error">{errors.name}</p>
				<label className="form__label" htmlFor="email">
					E-mail
				</label>
				<input onChange={handleChange} value={values.email} name="email" type="email" className={errors.email? "form__input form__input_error" : "form__input"} id="email" required placeholder="pochta@ya.ru" autoComplete="off" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>
				<p className="form__error">{errors.email}</p>
				<label className="form__label" htmlFor="password">
					Пароль
				</label>
				<input onChange={handleChange} value={values.password} name="password" type="password" className={errors.password? "form__input form__input_error" : "form__input"} id="password" minLength={4} required  autoComplete="off" />
				<p className="form__error">{errors.password}</p>
			</Form>
		</section>
	)
}