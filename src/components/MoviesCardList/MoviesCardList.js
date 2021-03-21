import React from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from './../MoviesCard/MoviesCard.js';

export default function MoviesCardList({isSaveMoviesId, isSearch, searchResultsMovie, isSaveMovies, saveMovie, removeMovie}) {
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
      setRenderedMoviesCount(isSaveMovies.length);
    }
  }, [windowWidth, location, isSaveMovies.length]);

  const handleMoreClick = () => {
    setRenderedMoviesCount(renderedMoviesCount + MoviesToMoreRenderCount);
  };

  return (<>
      <ul className="movies-card-list">
        { 
        	location === '/movies' ?
          (
            searchResultsMovie &&
                (
                  searchResultsMovie.reduce((moviesToRender, movie) => {
                    if (moviesToRender.length < renderedMoviesCount) {
                      moviesToRender.push(
                        <MoviesCard 
                          isSaveMovies={isSaveMovies}
                          isSaveMoviesId={isSaveMoviesId}
                          movieData={movie}
                          key={movie.id}
                          saveMovie={saveMovie}
                          removeMovie={removeMovie}
                       />
                      );
                    }
                    return moviesToRender;
                  }, [])
                )
            // searchResultsMovie.map((movie) => (
            //   <MoviesCard 
            //     isSaveMovies={isSaveMovies}
            //     isSaveMoviesId={isSaveMoviesId}
            //     movieData={movie}
            //     key={movie.id}
            //     saveMovie={saveMovie}
            //     removeMovie={removeMovie}
            //   />))
          )
          :
            (
              isSaveMovies &&
                  (
                    isSaveMovies.reduce((moviesToRender, movie) => {
                      if (moviesToRender.length < renderedMoviesCount) {
                        moviesToRender.push(
                          <MoviesCard 
                            isSaveMoviesId={isSaveMoviesId}
                            movieData={movie}
                            key={movie._id}
                            saveMovie={saveMovie}
                            removeMovie={removeMovie}
                          />
                        );
                      }
                      return moviesToRender;
                    }, [])
                  )
            )

          // ((isSaveMovies.length !== 0) &&
          //   isSaveMovies.map((movie) => (
          //     <MoviesCard 
          //       isSaveMoviesId={isSaveMoviesId}
          //       movieData={movie}
          //       key={movie._id}
          //       saveMovie={saveMovie}
          //       removeMovie={removeMovie}
          //     />))
          // )
        }
      </ul>
      {(location !== '/saved-movies' && searchResultsMovie.length > renderedMoviesCount) &&
            <button onClick={handleMoreClick} className="movies__add-movies-btn">Ещё</button>}
      {(isSearch && searchResultsMovie.length === 0) && <p className="movies-card-list__not-found">Ничего не найдено</p>}
  </>);
}
