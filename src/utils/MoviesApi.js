class MoviesApi {
  constructor(config) {
    this._baseUrl = config.url;
  }

  _getStateServer(res) {
    if (res.ok) {
      return res.json();
    }
    return (res.json().then((data) => Promise.reject(data.message)));
  }

  // getAppInfo() {
  //   return Promise.all([
  //     this.getMoviesFromServer(),
  //   ]);
  // }

  getMoviesFromApi() {
    return fetch(`${this._baseUrl}`, {
      method: 'GET',
    })
      .then((res) => this._getStateServer(res));
  }
}

export default new MoviesApi({
  url: 'https://api.nomoreparties.co/beatfilm-movies'
});
