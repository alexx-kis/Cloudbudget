import './dropdowns-and-select.js';
import './animation.js';

// $------------ burger ------------$ //
const burger = document.querySelector('.burger');
const overlay = document.querySelector('.overlay');
const header = document.querySelector('.header');

const closeHeader = () => {
	header.classList.remove('_open');
	overlay.classList.remove('_show');
	burger.classList.remove('_active');
};

burger.addEventListener('click', () => {
	header.classList.toggle('_open');
	overlay.classList.toggle('_show');
	burger.classList.toggle('_active');
});
header.addEventListener('click', (e) => {
	if (e.target.closest('.header__menu-link')) {
		closeHeader();
	}
});
overlay.addEventListener('click', () => {
	closeHeader();
});

// $------------ focused slider ------------$ //
new Splide('.focused__slider', {
	padding: '50px',
	type: 'loop',
	focus: 'center',
	arrows: false,
	classes: {
		pagination: 'splide__pagination focused__slider-pagination',
		page: 'splide__pagination__page focused__slider-page',
	},
}).mount();

// $------------ footer list ------------$ //
const footerColumnTitle = document.querySelector('.footer__column-title._services');
const footerList = document.querySelector('.footer__list');
footerColumnTitle.addEventListener('click', () => {
	if (!footerList.classList.contains('open')) {
		footerList.style.maxHeight = `${footerList.scrollHeight}px`;
		footerList.classList.add('open');
	} else {
		footerList.style.maxHeight = null;
		footerList.classList.remove('open');
	}
});


