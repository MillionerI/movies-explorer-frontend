import React from 'react';
import searchFormBtn from './../../images/search-form-btn.svg'

export default function SearchForm({ isHandleMovies }) {
	const [movieName, setMovieName] = React.useState('');
	const [inputValidity, setInputValidity] = React.useState(true);
	const checked = React.useRef();

	const handleMovieNameChange = (e) => {
		setMovieName(e.target.value);
	}

	const handleCheckbox = () => {
		isHandleMovies(movieName, checked.current.checked)
	}

	const inputValidator = (inputValue) => {
		if(inputValue.length >= 2) {
			setInputValidity(true);
			return true;
		} else{
			setInputValidity(false);
			return false;
		}
	}

	const handleMoviesFromApi = (e) => {
		e.preventDefault();
		inputValidator(movieName) && isHandleMovies(movieName, checked.current.checked);
	}

	return (
		<form onSubmit={handleMoviesFromApi} name="search-form" action="#" className="search-form" >
			<fieldset className="search-form__fieldset">
				<div className="search-form__input-wrapper">
					<input onChange={handleMovieNameChange} className="search-form__input" placeholder="Фильм"/>
					<button className="search-form__button"><img src={searchFormBtn} alt="Поиск" className="search-form__button-img" /></button>
				</div>
				{!inputValidity && <p className="search-form__error">Нужно ввести ключевое слово</p>}
				<label className="search-form__checkbox-label">
				<div className="search-form__checkbox-wrapper">
					<input ref={checked} onClick={handleCheckbox} type="checkbox" className="search-form__checkbox" defaultChecked/>
					<div className="search-form__checkbox-span" />
					<span className="search-form__checkbox-indicator" />
				</div>
					<p className="search-form__checkbox-text">Короткометражки</p>
				</label>
			</fieldset>
		</form>
	);
}