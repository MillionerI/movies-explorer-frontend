import React from 'react';
import Header from './../Header/Header.js';
import Form from './../Form/Form.js';
import { CurrentUserContext } from './../../context/CurrentUserContext';
import useFormWithValidation from './../../utils/useFormWithValidation.js';

export default function Profile({ isLoggedIn, isLogout, onProfileChange, authErrorStatus, authErrorMessage, formStatus}) {
	
	const currentUser = React.useContext(CurrentUserContext);
	const initValues = { name: currentUser.name, email: currentUser.email };
	const { values, handleChange, errors, isValid } = useFormWithValidation(initValues);
	const profileValid = isValid && (values.name !== initValues.name || values.email !== initValues.email);

	const handleProfileChange = (e) => {
		e.preventDefault();
		onProfileChange({name: values.name, email: values.email});
	}

	return(<>
		<Header isLoggedIn={isLoggedIn}/>
		<section className="profile">
			<Form onSubmit={handleProfileChange} name="profile" title={`Привет, ${currentUser.name}!`} buttonTitle="Редактировать" caption="" linkURL="/" linkTitle="Выйти из аккаунта" logout={isLogout} validity={isValid} formStatus={formStatus} authErrorStatus={authErrorStatus} authErrorMessage={authErrorMessage} profileValid={profileValid}>
				<label className="form__label form-profile__label" htmlFor="text">
					Имя
					<input onChange={handleChange} value={values.name} name="name" type="name" className="form__input form-profile__input" id="name" required minLength={2} maxLength={30} pattern="^[а-яА-ЯЁё\s\-]+$"/>
				</label>
				<p className="form__error form__error_profile">{errors.name}</p>
				<div className="profile__line"></div>
				<label className="form__label form-profile__label" htmlFor="email">
					Почта
					<input onChange={handleChange} value={values.email} name="email" type="email" className="form__input form-profile__input" id="email" required pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>
				</label>
				<p className="form__error form__error_profile">{errors.email}</p>
			</Form>
		</section>
	</>)
}