import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reducedMotion) {
  const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });

  intro
    .from('.header', { y: -24, autoAlpha: 0, duration: 0.8 })
    .from('.hero__kicker', { y: 20, autoAlpha: 0, duration: 0.7 }, '-=0.35')
    .from('.hero__title-line', { yPercent: 110, duration: 1.05, stagger: 0.12 }, '-=0.45')
    .from('.hero__lead, .hero__actions', { y: 28, autoAlpha: 0, duration: 0.8, stagger: 0.12 }, '-=0.7')
    .from('.hero__main-frame', { clipPath: 'inset(0 100% 0 0)', duration: 1.35 }, '-=1.15')
    .from('.hero__main-image', { scale: 1.12, duration: 1.8 }, '<')
    .from('.hero__layer-frame, .hero__vertical', { y: 26, autoAlpha: 0, duration: 0.85, stagger: 0.14 }, '-=0.8')
    .from('.hero__fact, .hero__scroll', { y: 18, autoAlpha: 0, duration: 0.65, stagger: 0.08 }, '-=0.6');

  gsap.utils.toArray<HTMLElement>('.js-reveal').forEach((element) => {
    gsap.from(element, {
      y: 56,
      autoAlpha: 0,
      duration: 1.05,
      ease: 'power3.out',
      scrollTrigger: { trigger: element, start: 'top 84%', once: true },
    });
  });

  gsap.utils.toArray<HTMLElement>('.js-line').forEach((line) => {
    gsap.from(line, {
      scaleX: 0,
      transformOrigin: 'left center',
      duration: 1.1,
      ease: 'power3.out',
      scrollTrigger: { trigger: line, start: 'top 88%', once: true },
    });
  });

  gsap.from('.js-menu-row', {
    x: 54,
    autoAlpha: 0,
    duration: 0.85,
    stagger: 0.11,
    ease: 'power3.out',
    scrollTrigger: { trigger: '.menu__list', start: 'top 76%', once: true },
  });

  const desktop = gsap.matchMedia();
  desktop.add('(min-width: 769px)', () => {
    gsap.utils.toArray<HTMLElement>('.js-parallax').forEach((element, index) => {
      gsap.to(element, {
        yPercent: index % 2 === 0 ? -9 : 8,
        ease: 'none',
        scrollTrigger: { trigger: element, start: 'top bottom', end: 'bottom top', scrub: 1.2 },
      });
    });

    gsap.to('.js-gallery-track', {
      xPercent: -18,
      ease: 'none',
      scrollTrigger: { trigger: '.gallery', start: 'top bottom', end: 'bottom top', scrub: 1.1 },
    });
  });

  gsap.to('.hero__backdrop', {
    scale: 1.08,
    ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 },
  });

  const progress = document.querySelector<HTMLElement>('[data-scroll-progress]');
  if (progress) {
    gsap.to(progress, { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: 0.2 } });
  }
}

const header = document.querySelector<HTMLElement>('[data-header]');
if (header) {
  ScrollTrigger.create({
    start: 80,
    onUpdate: (self) => header.classList.toggle('header--compact', self.scroll() > 80),
  });
}
