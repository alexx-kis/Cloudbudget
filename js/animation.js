// $======================== ANIMATION ========================$ //
// $======================== ANIMATION ========================$ //

const heroAnimation = gsap.timeline({
  defaults: {
    opacity: 0,
  }
});
window.addEventListener('load', () => {
  heroAnimation
    .from('.hero', {
      autoAlpha: 0
    })
    .from('.hero__heading', {
      xPercent: -50,
    })
    .from('.hero__text', {
      xPercent: 50,
    })
    .from('.hero__button-box', {
      yPercent: 50,
    })
    .from('.header', {
      yPercent: -100,
    });
});


const createAnimation = (selector, animationProps) => {
  gsap.from(selector, {
    opacity: 0,
    ...animationProps,
    scrollTrigger: {
      trigger: selector,
      start: '25% 100%',
    },
  });
};

createAnimation('.software__heading', {
  xPercent: -100,
});

createAnimation('.software__text', {
  xPercent: -100,
});

createAnimation('.software__link-box', {
  xPercent: -100,
});

createAnimation('.software__video', {
  xPercent: 100,
  delay: 0.5,
});

createAnimation('.features__heading', {
  yPercent: 100,
});

createAnimation('.features__card', {
  stagger: 0.5,
  scale: 0,
});

createAnimation('.technology__heading', {
  yPercent: 100,
});

createAnimation('.technology__list-item', {
  stagger: 0.5,
  scale: 0,
});

createAnimation('.focused__heading', {
  xPercent: -100,
});

createAnimation('.focused__text', {
  xPercent: -100,
});

createAnimation('.focused__stores-item', {
  stagger: .5,
  scale: 0,
});

createAnimation('.focused__slider', {
  xPercent: 100,
  delay: .5,
});

createAnimation('.contact__heading', {
  xPercent: -100,
});

createAnimation('.contact__text', {
  xPercent: -100,
});

createAnimation('.contact__form', {
  xPercent: 100,
  delay: .5,
});

createAnimation('.footer__inner, .footer__copy', {
  yPercent: 100,
});