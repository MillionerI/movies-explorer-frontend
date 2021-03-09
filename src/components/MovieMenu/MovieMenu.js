import React from 'react';
import { NavLink } from 'react-router-dom';
import config from './../../config.js';

export default function MovieMenu({isMobile=false}) {
	const { movieMenuNavigation } = config;

	return(
		<nav className={isMobile? "navigation navigation-mobile" : "navigation"}>
			<ul className={isMobile? "navigation__items navigation__items_mobile" : "navigation__items"}>
				{
					movieMenuNavigation.map((item, index) => {
						return(
							<li className={isMobile? (item.cNameItem + " navigation__item_mobile") : item.cNameItem} key={index}>
								<NavLink to={item.link} className={isMobile? (item.cName + " navigation-button_mobile") : item.cName} activeClassName={isMobile? ("navigation-button_active-mobile " + item.cName): "navigation-button_active"}>
									{item.title}
									{item.icon && <img src={item.icon} alt={item.alt} className={item.cNameImg} />}
								</NavLink>
							</li>
						)}
					)
				}
			</ul>
		</nav>
	)
}