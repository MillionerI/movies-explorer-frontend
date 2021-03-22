import React from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from './../MoviesCard/MoviesCard.js';

export default function MoviesCardList({movies, removeMovie, saveMovie, isSaveMoviesId, isSearch, isSearchError}) {
	const location = useLocation().pathname;

  const [renderedMoviesCount, setRenderedMoviesCount] = React.useState(0);
  const [MoviesToMoreRenderCount, setMoviesToMoreRenderCount] = React.useState(0);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  let resizeTimeout = null;

  const updateWindowWidth = () => {
    if (resizeTimeout) {
      clearTimeout(resizeTimeout);
    }
    resizeTimeout = setTimeout(() => setWindowWidth(window.innerWidth), 1500);
  };

  React.useEffect(() => {
    window.addEventListener('resize', updateWindowWidth);

    return () => window.removeEventListener('resize', updateWindowWidth);
  });

  React.useEffect(() => {
    if (location === '/movies') {
      if (windowWidth <= 480) {
        setRenderedMoviesCount(5);
        setMoviesToMoreRenderCount(2);
      } else if (windowWidth <= 768) {
        setRenderedMoviesCount(8);
        setMoviesToMoreRenderCount(2);
      } else {
        setRenderedMoviesCount(12);
        setMoviesToMoreRenderCount(3);
      }
    } else {
      setRenderedMoviesCount(movies.length);
    }
  }, [windowWidth, location, movies.length]);

  const handleMoreClick = () => {
    setRenderedMoviesCount(renderedMoviesCount + MoviesToMoreRenderCount);
  };

  return (<>
      <ul className="movies-card-list">
        {
          movies &&
            (
              movies.reduce((moviesToRender, movie) => {
                if (moviesToRender.length < renderedMoviesCount) {
                  moviesToRender.push(
                    <MoviesCard 
                      movieData={movie}
                      saveMovie={saveMovie}
                      removeMovie={removeMovie}
                      isSaveMoviesId={isSaveMoviesId}
                      key={movie.movieId}
                    />
                  );
                }
                return moviesToRender;
              }, [])
            )
        }
      </ul>
      {(isSearch && isSearchError) &&
        <p className="movies-card-list__not-found">
          Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз
        </p>
      }
      {(location === '/saved-movies' && movies.length === 0) && <p className="movies-card-list__not-found">Ничего не найдено</p>}
      {(location !== '/saved-movies' && movies.length > renderedMoviesCount) &&
        <button onClick={handleMoreClick} className="movies__add-movies-btn">Ещё</button>}
      {(isSearch && movies.length === 0) && <p className="movies-card-list__not-found">Ничего не найдено</p>}
  </>);
}
