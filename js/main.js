import './dropdowns-and-select.js';

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



/*==================================== ANIMATION ====================================*/

let animItems = document.querySelectorAll('.anim-item');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let i = 0; i < animItems.length; i++) {
			let animItem = animItems[i];
			let animItemHeight = animItem.offsetHeight;
			let animItemOffset = offset(animItem).top;
			let animStart = 4;
			let animItemPoint = window.innerHeight - (animItemHeight / animStart);

			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - (window.innerHeight / animStart);
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && (pageYOffset < (animItemOffset + animItemHeight))) {
				animItem.classList.add('anim-item--active');
			} else {
				if (!animItem.classList.contains('anim-no-hide')) {
					animItem.classList.remove('anim-item--active');
				}
			}

			function offset(elem) {
				let rect = elem.getBoundingClientRect(),
					scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
					scrollTop = window.pageYOffset || document.documentElement.scrollTop;
				return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
			}
		}
	}
}

// window.onload = function () {
// 	let loadings = document.querySelectorAll('.loading');

// 	for (let loading of loadings) {
// 		loading.classList.add('loaded');
// 	}
// };