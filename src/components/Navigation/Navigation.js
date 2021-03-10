import React from 'react';
import MainMenu from './../MainMenu/MainMenu.js'
import MovieMenu from './../MovieMenu/MovieMenu.js'
import MobileMenu from './../MobileMenu/MobileMenu.js'

export default function Navigation({isLoggedIn}) {

	return(<>
		{isLoggedIn? <MovieMenu />  : <MainMenu />}
		{isLoggedIn && <MobileMenu />}
	</>)
}