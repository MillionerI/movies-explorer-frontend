import React from 'react';
import { Link } from 'react-router-dom';

export default function Form({ onSubmit, name, title, buttonTitle, caption, 
	linkURL, linkTitle, logout, validity, formStatus, authErrorStatus, authErrorMessage, profileValid = true, children}) {

	return (<>
		<h1 className={`form__title form-${name}__title`}>{title}</h1>
		<form name={name} action="#" onSubmit={onSubmit} className={`form form-${name}`}>
			<fieldset className={`form__fieldset form-${name}__fieldset`} disabled={formStatus}>
				{children}
			</fieldset>
			<div className="form__button-wrapper">
				{authErrorStatus && <p className="form__error form__error_api">{authErrorMessage}</p>}
				<button type="submit" className={(validity && profileValid)? `form__button form-${name}__button`
				:
				`form__button form-${name}__button form-${name}__button_disabled form__button_disabled`} disabled={!profileValid}>{buttonTitle}
				</button>
				<p className={`form__caption form-${name}__caption`}>
					{caption}
					<Link onClick={logout} to={linkURL} className={`form__link form-${name}__link`}>{linkTitle}</Link>
				</p>
			</div>
		</form>
	</>);
}