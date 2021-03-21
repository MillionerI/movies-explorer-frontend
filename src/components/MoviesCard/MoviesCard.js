import React from 'react';
import { useLocation } from 'react-router-dom';
import defaultMoviImage from './../../images/defaultMoviImage.svg'
import getTimeFromMins from './../../utils/getTimeFromMins'

export default function MoviesCard({isSaveMoviesId, isSaveMovies, movieData, saveMovie, removeMovie}) {
  const {image, nameRU, duration, trailer, movieId} = movieData;
  const [isSaved, setSaved] = React.useState(false);
  const location = useLocation().pathname;

  const handleClickSave = () => {
    setSaved(true);
    saveMovie(movieData);
  }

  const handleClickRemove = () => {
       setSaved(false)
       removeMovie({movieId});
  }
  
  const handleClickTrailer = () => {
    window.open(trailer);
  };

  React.useEffect(() => {
    if (isSaveMoviesId && isSaveMoviesId.includes(movieId)) {
      setSaved(true);
    } else {
      setSaved(false);
    }
  }, [isSaveMoviesId, movieId]);

  return (
		<li className="movie-card">
    	<img src={image || defaultMoviImage} alt={nameRU} className="movie-card__img" onClick={handleClickTrailer}/>
      <div className="movie-card__wrapper">
        <h1 className="movie-card__title">{nameRU}</h1>
        {
          location === '/movies' &&
          <button className={isSaved? `movie-card__btn-save movie-card__btn-save_saved` : `movie-card__btn-save` } onClick={!isSaved? handleClickSave : handleClickRemove}></button>
        }
        {
          location === '/saved-movies' && 
          <button className="movie-card__btn-remove" onClick={handleClickRemove}></button>
        }
      </div>
      <div className="movie-card__line"></div>
      <span className="movie-card__time">{getTimeFromMins(duration)}</span>
  	</li>
  );
}