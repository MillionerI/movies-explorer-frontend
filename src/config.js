import profileIcon from './images/profileIcon.svg'

export const configuration = {
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
}