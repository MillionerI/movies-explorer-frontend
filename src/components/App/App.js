import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './../Header/Header.js';
import Main from './../Main/Main.js';
import Movies from './../Movies/Movies.js';
import SavedMovies from './../SavedMovies/SavedMovies.js';
import Register from './../Register/Register.js';
import Login from './../Login/Login.js';
import Profile from './../Profile/Profile.js';
import NotFound from './../NotFound/NotFound.js';

function App() {

	const [loggedIn, setLoggedIn] = React.useState(false);
	const [preloader, setPreloader] = React.useState(false);

	return (
		<div className="app">
			<Switch>
				<Route exact path="/">
					<Main isLoggedIn={loggedIn}/>
				</Route>
				<Route path="/movies">
					<Movies isLoggedIn={loggedIn} isPreloader={preloader}/>
				</Route>
				<Route path="/saved-movies">
					<SavedMovies isLoggedIn={loggedIn} />
				</Route>
				<Route path="/signup">
					<Register />
				</Route>
				<Route path="/signin">
					<Login />
				</Route>
				<Route path="/profile">
					<Header isLoggedIn={loggedIn}/>
					<Profile />
				</Route>
				<Route path="/*">
					<NotFound />
				</Route>
			</Switch>
		</div>
  );
}

export default App;
