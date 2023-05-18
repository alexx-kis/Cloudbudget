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