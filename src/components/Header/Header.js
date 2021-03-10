import React from 'react';
import Logo from './../Logo/Logo.js';
import Navigation from './../Navigation/Navigation.js';

export default function Header({isLoggedIn}) {

	return(
		<header className="header">
			<Logo />
			<Navigation isLoggedIn={isLoggedIn} />
		</header>
	)
}