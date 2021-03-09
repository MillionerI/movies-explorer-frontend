import React from 'react';
import { NavLink } from 'react-router-dom';
import config from './../../config.js';

export default function MainMenu() {
	const { mainMenuNavigation } = config;

	return(
		<nav className="navigation navigation_visible">
			<ul className="navigation__items main-menu">
				{
					mainMenuNavigation.map((item, index) => {
						return(
							<li className={item.cNameItem} key={index}>
								<NavLink to={item.link} className={item.cName}>{item.title}</NavLink>
							</li>
						)}
					)
				}
			</ul>
		</nav>
	)
}