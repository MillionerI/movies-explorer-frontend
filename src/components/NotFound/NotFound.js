import React from 'react';
import { Link, useHistory } from 'react-router-dom';

export default function Header({isLoggedIn}) {

	const history = useHistory();

	return(
		<section className="not-found">
			<h1 className="not-found__title">404</h1>
			<p className="not-found__text">Страница не найдена</p>
			<Link onClick={history.goBack} className="not-found__btn">Назад</Link>
		</section>
	)
}