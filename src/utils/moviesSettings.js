export const moviesParams = (movies) =>
	movies.map((movie) => {
		const formattedMovie = {
			...movie,
			nameRU: movie.nameRU || 'Не указано',
      nameEN: movie.nameEN || 'Не указано',
      country: movie.country || 'Не указано',
      director: movie.director || 'Не указано',
      duration: movie.duration || 0,
      year: movie.year || 'Не указано',
      description: movie.description || 'Не указано',
			movieId: movie.id,
			image: movie.image ? ('https://api.nomoreparties.co' + movie.image.url) : '',
			thumbnail: movie.image ? ('https://api.nomoreparties.co' + movie.image.formats.thumbnail.url) : '',
			trailer: movie.trailerLink || 'https://www.youtube.com/',
		}
		return formattedMovie;
	})

export const filterMovies = (moviesArray, keyWord, checkbox) => {
	const minDuration = checkbox ? 0 : 40;
	return moviesArray.filter((movie) => movie.nameRU.toLowerCase().includes(keyWord.toLowerCase()) && movie.duration > minDuration)
}
