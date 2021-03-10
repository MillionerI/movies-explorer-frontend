import React from 'react';
import { useLocation } from 'react-router-dom';
import getTimeFromMins from './../../utils/getTimeFromMins.js'

export default function MoviesCard({movieData}) {
  const url = 'https://api.nomoreparties.co' + movieData.image.formats.thumbnail.url;
  const [isSaved, setSaved] = React.useState(movieData.save);
  const location = useLocation().pathname;

  const handleClickSave = () => {
    setSaved(!isSaved)
  }

  return (
		<li className="movie-card">
    	<img src={url} alt={movieData.nameRU} className="movie-card__img" />
      <div className="movie-card__wrapper">
        <h1 className="movie-card__title">{movieData.nameRU}</h1>
        {
          location === '/movies' &&
          <button className={isSaved? `movie-card__btn-save movie-card__btn-save_saved` : `movie-card__btn-save` } onClick={handleClickSave}></button>
        }
        {
          location === '/saved-movies' && 
          <button className="movie-card__btn-remove" onClick={handleClickSave}></button>
        }
      </div>
      <div className="movie-card__line"></div>
      <span className="movie-card__time">{getTimeFromMins(movieData.duration)}</span>
  	</li>
  );
}