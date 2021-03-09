import React from 'react';
import MovieMenu from './../MovieMenu/MovieMenu.js'

export default function MobileMenu() {
	const [mobileMenu, setMobileMenu] = React.useState(false);

	const closeMobileMenu = () => {
		setMobileMenu(!mobileMenu)
	}

	return(<>
		<div className="navigation-mobile__menu-btn" onClick={closeMobileMenu}>
			<span className={mobileMenu ? `navigation-mobile__menu-line navigation-mobile__menu-line_active` : `navigation-mobile__menu-line`}></span>
		</div>
		<div className={mobileMenu ? `navigation-mobile__overlay_true` : `navigation-mobile__overlay_false`}></div>
		{mobileMenu && <MovieMenu isMobile={mobileMenu}/>}
	</>)
}