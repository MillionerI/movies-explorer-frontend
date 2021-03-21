class MainApi {
  constructor(config) {
    this._baseUrl = config.url;
    this._headers = config.headers;
  }

  _getStateServer(res) {
    if (res.ok) {
      return res.json();
    }
    return (res.json().then((data) => Promise.reject(data.message)));
  }

  userRegistration(data) {
    return fetch(`${this._baseUrl}/signup`, {
    	
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify({ password: data.password, email: data.email, name: data.name }),
    })
      .then((res) => this._getStateServer(res));
  }

  userAuthorization(data) {
    return fetch(`${this._baseUrl}/signin`, {
    	
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify({ password: data.password, email: data.email }),
    })
      .then((res) => this._getStateServer(res));
  }

  patchUserInfo(data, jwt) {
    return fetch(`${this._baseUrl}/users/me`, {
    	
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${jwt}`,
      },
      method: 'PATCH',
      body: JSON.stringify({ name: data.name, email: data.email }),
    })
      .then((res) => this._getStateServer(res));
  }

  getUserInfo(jwt) {
    return fetch(`${this._baseUrl}/users/me`, {
    	
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
      method: 'GET',
    })
      .then((res) => this._getStateServer(res));
  }

  getMovie(jwt) {
    return fetch(`${this._baseUrl}/movies`, {
    	
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${jwt}`,
      },
      method: 'GET',
    })
      .then((res) => this._getStateServer(res));
  }

  saveMovie({ country, director, year,
       description, image, thumbnail,
       nameRU, nameEN, duration, trailer, 
       movieId }, jwt) {
    return fetch(`${this._baseUrl}/movies`, {
    	
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${jwt}`,
      },
      method: 'POST',
      body: JSON.stringify({ country, director, year,
       description, image, thumbnail,
       nameRU, nameEN, duration, trailer, 
       movieId }),
    })
      .then((res) => this._getStateServer(res));
  }

  removeMovie({movieId}, jwt) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
    	
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${jwt}`,
      },
      method: 'DELETE',
    })
      .then((res) => this._getStateServer(res));
  }
}

export default new MainApi({
   url: 'https://api.diploma.students.nomoredomains.rocks',
   headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});
