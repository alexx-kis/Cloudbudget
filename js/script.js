$(function () {
	$('.focused__slider').slick({
		centerMode: true,
		// centerPadding: '40px',
		slidesToShow: 1,
		infinite: true,
		arrows: false,
		dots: true,
		appendDots: ('.focused__slider-dots'),
	})

	$('.burger, .overlay, .header__top a').on('click', function (e) {
		// e.preventDefault();
		$('.header__top').toggleClass('header__top--open')
		$('.overlay').toggleClass('overlay--show')
		$('.burger').toggleClass('burger--open')
	})

	$('.footer__column-title--services').on('click', function () {
		$(this).next().slideToggle()
	})

})

/*==================================== ANIMATION ====================================*/

let animItems = document.querySelectorAll('.anim-item');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let i = 0; i < animItems.length; i++) {
			let animItem = animItems[i];
			let animItemHeight = animItem.offsetHeight;
			let animItemOffset = offset(animItem).top;
			let animStart = 4
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
				return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
			}
		}
	}
}

window.onload = function () {
	let loadings = document.querySelectorAll('.loading');

	for (let loading of loadings) {
		loading.classList.add('loaded');
	}
};