import React from 'react';
import { Link } from 'react-router-dom';

export default function Form({name, title, buttonTitle, caption, linkURL, linkTitle, children}) {
	return (<>
		<h1 className={`form__title form-${name}__title`}>{title}</h1>
		<form name={name} action="#" className={`form form-${name}`} >
			<fieldset className={`form__fieldset form-${name}__fieldset`}>
				{children}
			</fieldset>
			<div className="form__button-wrapper">
				<button type="submit" className={`form__button form-${name}__button`}>{buttonTitle}</button>
				<p className={`form__caption form-${name}__caption`}>
					{caption}
					<Link to={linkURL} className={`form__link form-${name}__link`}>{linkTitle}</Link>
				</p>
			</div>
		</form>
	</>);
}