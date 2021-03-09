import profileIcon from './images/profileIcon.svg'

export default {
	mainMenuNavigation: [{
		link: '/signup',
		cNameItem: 'navigation__item',
		cName: 'navigation-button navigation-button_color-white',
		title: 'Регистрация',
	},
	{
		link: '/signin',
		cNameItem: 'navigation__item',
		cName: 'navigation-button navigation-button-sign-in',
		title: 'Войти',
	}],

	movieMenuNavigation: [{
		link: '/',
		cNameItem: 'navigation__item navigation__item_hidden navigation__item_visible',
		cName: 'navigation-button navigation-button_not-active',
		title: 'Главная',
	},
	{
		link: '/movies',
		cNameItem: 'navigation__item',
		cName: 'navigation-button',
		title: 'Фильмы',
	},
	{
		link: '/saved-movies',
		cNameItem: 'navigation__item',
		cName: 'navigation-button',
		title: 'Сохранённые фильмы',
	},
	{
		link: '/profile',
		cNameItem: 'navigation__item navigation__item_margin-left',
		cName: 'navigation-button navigation-button_not-active',
		title: 'Аккаунт',
		icon: profileIcon,
		alt: '',
		cNameImg: 'navigation-button-image',
	}],

	techs: [{
		title: 'HTML',
	},
	{
		title: 'CSS',
	},
	{
		title: 'JS',
	},
	{
		title: 'React',
	},
	{
		title: 'Git',
	},
	{
		title: 'Express',
	},
	{
		title: 'mongoDB',
	}],

	portfolio: [{
		title: 'Статичный сайт',
		link: 'https://millioneri.github.io/how-to-learn/',
	},
	{
		title: 'Адаптивный сайт',
		link: 'https://millioneri.github.io/russian-travel/index.html#',
	},
	{
		title: 'Одностраничное приложение',
		link: 'http://first.students.nomoredomains.rocks/',
		last: true,
	}],

	movies: [{
		id: 1,
		save: true,
		nameRU: "«Роллинг Стоунз» в изгнании",
		duration: 78,
		image: {
			id: 1,
			formats: {
				thumbnail: {
					url: "/uploads/thumbnail_stones_in_exile_b2f1b8f4b7.jpeg"
				}
			}
		}
	},
	{
		id: 2,
		save: false,
		nameRU: "«Роллинг Стоунз» в изгнании",
		duration: 144,
		image: {
			id: 2,
			formats: {
				thumbnail: {
					url: "/uploads/thumbnail_stones_in_exile_b2f1b8f4b7.jpeg"
				}
			}
		}
	},
	{
		id: 3,
		save: false,
		nameRU: "«Роллинг Стоунз» в изгнании",
		duration: 132,
		image: {
			id: 3,
			formats: {
				thumbnail: {
					url: "/uploads/thumbnail_stones_in_exile_b2f1b8f4b7.jpeg"
				}
			}
		}
	},
	{
		id: 4,
		save: false,
		nameRU: "«Роллинг Стоунз» в изгнании",
		duration: 231,
		image: {
			id: 4,
			formats: {
				thumbnail: {
					url: "/uploads/thumbnail_stones_in_exile_b2f1b8f4b7.jpeg"
				}
			}
		}
	},
	{
		id: 5,
		save: false,
		nameRU: "«Роллинг Стоунз» в изгнании",
		duration: 109,
		image: {
			id: 5,
			formats: {
				thumbnail: {
					url: "/uploads/thumbnail_stones_in_exile_b2f1b8f4b7.jpeg"
				}
			}
		}
	},
	{
		id: 6,
		save: false,
		nameRU: "«Роллинг Стоунз» в изгнании",
		duration: 22,
		image: {
			id: 6,
			formats: {
				thumbnail: {
					url: "/uploads/thumbnail_stones_in_exile_b2f1b8f4b7.jpeg"
				}
			}
		}
	},
	{
		id: 7,
		save: true,
		nameRU: "«Роллинг Стоунз» в изгнании",
		duration: 34,
		image: {
			id: 7,
			formats: {
				thumbnail: {
					url: "/uploads/thumbnail_stones_in_exile_b2f1b8f4b7.jpeg"
				}
			}
		}
	},
	{
		id: 8,
		save: false,
		nameRU: "«Роллинг Стоунз» в изгнании",
		duration: 56,
		image: {
			id: 8,
			formats: {
				thumbnail: {
					url: "/uploads/thumbnail_stones_in_exile_b2f1b8f4b7.jpeg"
				}
			}
		}
	},
	{
		id: 9,
		save: false,
		nameRU: "«Роллинг Стоунз» в изгнании",
		duration: 67,
		image: {
			id: 9,
			formats: {
				thumbnail: {
					url: "/uploads/thumbnail_stones_in_exile_b2f1b8f4b7.jpeg"
				}
			}
		}
	},
	{
		id: 10,
		save: true,
		nameRU: "«Роллинг Стоунз» в изгнании",
		duration: 91,
		image: {
			id: 10,
			formats: {
				thumbnail: {
					url: "/uploads/thumbnail_stones_in_exile_b2f1b8f4b7.jpeg"
				}
			}
		}
	},
	{
		id: 11,
		save: false,
		nameRU: "«Роллинг Стоунз» в изгнании",
		duration: 91,
		image: {
			id: 11,
			formats: {
				thumbnail: {
					url: "/uploads/thumbnail_stones_in_exile_b2f1b8f4b7.jpeg"
				}
			}
		}
	},
	{
		id: 12,
		save: false,
		nameRU: "«Роллинг Стоунз» в изгнании",
		duration: 91,
		image: {
			id: 12,
			formats: {
				thumbnail: {
					url: "/uploads/thumbnail_stones_in_exile_b2f1b8f4b7.jpeg"
				}
			}
		}
	},
	],
}