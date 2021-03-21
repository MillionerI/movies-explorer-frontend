import React from 'react';
import { Route, Redirect, Switch, useLocation, } from 'react-router-dom';
import Main from './../Main/Main';
import Movies from './../Movies/Movies';
import SavedMovies from './../SavedMovies/SavedMovies';
import Register from './../Register/Register';
import Login from './../Login/Login';
import Profile from './../Profile/Profile';
import NotFound from './../NotFound/NotFound';
import InfoTooltip from './../InfoTooltip/InfoTooltip';
import ProtectedRoute from './../ProtectedRoute/ProtectedRoute';

import MainApi from './../../utils/MainApi';
import MoviesApi from './../../utils/MoviesApi';
import {moviesParams, filterMovies} from './../../utils/moviesSettings';

import { CurrentUserContext } from './../../context/CurrentUserContext';

function App() {

  const [isTokenChecked, setIsTokenChecked] = React.useState(false);
	const [loggedIn, setLoggedIn] = React.useState(false);
  const [authErrorStatus, setAuthErrorStatus] = React.useState(false);
  const [authErrorMessage, setAuthErrorMessage] = React.useState('');

  const [isFormDisabled, setIsFormDisabled] = React.useState(false);

	const [currentUser, setCurrentUser] = React.useState({});

	const [infoTooltip, setInfoTooltip] = React.useState(false);
	const [infoTooltipStatus, setInfoTooltipStatus] = React.useState('');
	const [infoTooltipMessage, setinfoTooltipMessage] = React.useState('');

  const [isSearch, setIsSearch] = React.useState(false);
  const [searchResultsMovie, setSearchResultsMovie] = React.useState([]);

	const [saveMovies, setSaveMovies] = React.useState([]);
  const [saveMoviesId, setSaveMoviesId] = React.useState([]);
  const [searchSavedMovies, setSearchSavedMovies] = React.useState([]);

  const [searchError, setSearchError] = React.useState(false);

	const [preloader, setPreloader] = React.useState(false);

  const location = useLocation();

	const handleClose = () => {
		setInfoTooltip(false)
	}

	const getUserInfo = (token) => {
    MainApi.getUserInfo(token)
      .then((infoFromServer) => {
        const userData = infoFromServer;
        setCurrentUser(userData);
        setLoggedIn(true);
      })
      .catch((error) => {
        setLoggedIn(false);
      	setInfoTooltip(true);
      	setInfoTooltipStatus('red');
        setinfoTooltipMessage(error);
      })
      .finally(() => {
        setIsTokenChecked(true);
      })
  };

  React.useEffect(() => {
    setAuthErrorStatus(false);
    setAuthErrorMessage('');
  }, [location]);

  React.useEffect(() => {
    const token = localStorage.getItem('jwt');
    if(token) {
      getUserInfo(token);
    } else {
      setIsTokenChecked(true);
    }
  }, []);

  React.useEffect(() => {
    const token = localStorage.getItem('jwt');
    const searchMovie = localStorage.getItem('search-movies');
    if(token) {
      MainApi.getMovie(token)
        .then((infoFromServer) => {
          setSaveMovies(infoFromServer);
          setSaveMoviesId(infoFromServer.map((movie) => movie.movieId));
          setSearchSavedMovies(infoFromServer.reverse());
        })
        .catch((error) => {
          console.log(error);
        })
      if(searchMovie) {
        const localStorageMovie = JSON.parse(searchMovie);
        setSearchResultsMovie(localStorageMovie);
      }
    }
  }, [loggedIn])

	const handleLogin = (data) => {
    setIsFormDisabled(true);
    MainApi.userAuthorization(data)
      .then((res) => {
        if (res.token) {
          getUserInfo(res.token);
          localStorage.setItem('jwt', res.token);
        }
      })
      .catch((error) => {
      	setAuthErrorStatus(true);
        setAuthErrorMessage(error);
      })
      .finally(() => {
        setIsFormDisabled(false)
      })
  };

	const handleRegister = (data) => {
    setIsFormDisabled(true);
		MainApi.userRegistration(data)
			.then((res) => {
				handleLogin(data);
			})
			.catch((error) => {
        setAuthErrorStatus(true);
        setAuthErrorMessage(error);
      })
      .finally(() => {
        setIsFormDisabled(false)
      })
	}

	const handleUpdateUser = (data) => {
    setIsFormDisabled(true);
    const token = localStorage.getItem('jwt');
    MainApi.patchUserInfo(data, token)
      .then((userData) => {
      	setCurrentUser(userData);
      })
      .catch((error) => {
        setAuthErrorStatus(true);
        setAuthErrorMessage(error);
      })
      .finally(() => {
        setIsFormDisabled(false)
      })
  }

  const handleLogout = () => {
    localStorage.clear();
    setLoggedIn(false);
    setCurrentUser({});
  };

  const searchMovies = (movieName, checkbox) => {
    let movies = localStorage.getItem('movies');
    if(!movies) {
      setPreloader(true);
      MoviesApi.getMoviesFromApi()
        .then(getMovies => {
          setIsSearch(true);
          const formattedMovie = moviesParams(getMovies);
          const searchFilterResult = filterMovies(formattedMovie, movieName, checkbox);
          localStorage.setItem('movies', JSON.stringify(formattedMovie));
          localStorage.setItem('search-movies', JSON.stringify(searchFilterResult));
          movies = formattedMovie;
          setSearchResultsMovie(searchFilterResult);
          setSearchError(false);
        })
        .catch(() => {
          setIsSearch(true);
          setSearchError(true);
        })
        .finally(() => {
          setPreloader(false);
        })
    } else {
        movies = JSON.parse(movies);
        const searchFilterResult = filterMovies(movies, movieName, checkbox);
        setSearchResultsMovie(searchFilterResult);
        localStorage.setItem('search-movies', JSON.stringify(searchFilterResult));
        setIsSearch(true);
        setSearchError(false);
    }
  }

  const searchSaveMovies = (movieName, checkbox) => {
    setSearchSavedMovies(filterMovies(saveMovies, movieName, checkbox))
  }

  const saveMovie = (movie) => {
    const token = localStorage.getItem('jwt');
    MainApi.saveMovie(movie, token)
      .then((newMovie) => {
        setSaveMovies([newMovie, ...saveMovies])
        setSaveMoviesId([newMovie.movieId, ...saveMoviesId]);
        setSearchSavedMovies([newMovie, ...saveMovies]);
      })
      .catch((error) => {
          setInfoTooltip(true);
          setInfoTooltipStatus('red');
          setinfoTooltipMessage(error);
      })
  }

    const removeMovie = ({movieId}) => {
      const token = localStorage.getItem('jwt');
      MainApi.removeMovie({movieId}, token)
        .then((remove) => {
          console.log(remove, {movieId});
          const filteredMovies = saveMovies.filter((movie) => movie.movieId !== movieId);
          const filteredMoviesId = saveMoviesId.filter((id) => id !== movieId);
          setSaveMovies(filteredMovies);
          setSearchSavedMovies(filteredMovies);
          setSaveMoviesId(filteredMoviesId);
        })
        .catch((error) => {
          setInfoTooltip(true);
          setInfoTooltipStatus('red');
          setinfoTooltipMessage(error);
        })
  }

	return (
		<CurrentUserContext.Provider value={currentUser}>
			<div className="app">
        {isTokenChecked &&
  				<Switch>
  					<Route exact path="/">
  						{!loggedIn && <Main isLoggedIn={loggedIn} />}
              {loggedIn && <Redirect to="/movies" /> }
  					</Route>
  					<Route path="/signup">
            {loggedIn? 
              <Redirect to="/movies" /> :
              <Register 
                authErrorStatus={authErrorStatus}
                authErrorMessage={authErrorMessage}
                formStatus={isFormDisabled}
                onRegister={handleRegister}
              />
            }
  					</Route>
  					<Route path="/signin">
  						{loggedIn? 
                <Redirect to="/movies" /> :
                <Login 
                  authErrorStatus={authErrorStatus}
                  authErrorMessage={authErrorMessage}
                  formStatus={isFormDisabled}
                  onLogin={handleLogin}
                />
              }
  					</Route>
  					<ProtectedRoute
  						path="/movies"
  						isLoggedIn={loggedIn}
              movies={searchResultsMovie}
              searchingMovies={searchMovies}
              removeMovie={removeMovie}
              saveMovie={saveMovie}
              isSaveMoviesId={saveMoviesId}
              isSearch={isSearch}
              isSearchError={searchError}
  						isPreloader={preloader}
  						component={Movies}
  					/>
  					<ProtectedRoute
  						path="/saved-movies"
  						isLoggedIn={loggedIn}
              movies={searchSavedMovies}
              searchingMovies={searchSaveMovies}
              removeMovie={removeMovie}
              isSaveMoviesId={saveMoviesId}
  						component={SavedMovies}
  					/>
  					<ProtectedRoute
  						path="/profile"
  						onProfileChange={handleUpdateUser}
  						isLoggedIn={loggedIn}
  						isLogout={handleLogout}
              authErrorStatus={authErrorStatus}
              authErrorMessage={authErrorMessage}
              formStatus={isFormDisabled}
  						component={Profile}
            />
  					<Route path="*" component={NotFound} />
  				</Switch>
        }
				<InfoTooltip 
					isShow={infoTooltip}
					infoTooltipStatus={infoTooltipStatus}
					infoTooltipMessage={infoTooltipMessage}
					onClose={handleClose}
				/>
			</div>
		</CurrentUserContext.Provider>
  );
}

export default App;
