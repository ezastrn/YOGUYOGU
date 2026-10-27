const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('nav');
const orderLink = document.querySelector('#whatsapp-link');
const orderSection = document.querySelector('#order');
const toast = document.querySelector('.toast');

toggle.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('nav a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add('shown');
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.14 },
);

document.querySelectorAll('.reveal').forEach((element) => {
  revealObserver.observe(element);
});

const parallaxElements = document.querySelectorAll('[data-parallax]');
let isParallaxQueued = false;

function updateParallax() {
  parallaxElements.forEach((element) => {
    const amount = Number(element.dataset.parallax);
    const { top } = element.getBoundingClientRect();
    const offset = Math.round((window.innerHeight / 2 - top) * amount);

    element.style.setProperty('--parallax-y', `${offset}px`);
  });

  isParallaxQueued = false;
}

window.addEventListener(
  'scroll',
  () => {
    if (isParallaxQueued || matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    requestAnimationFrame(updateParallax);
    isParallaxQueued = true;
  },
  { passive: true },
);

updateParallax();

document.querySelectorAll('.add-button').forEach((button) => {
  button.addEventListener('click', () => {
    const product = button.dataset.product;
    const message = `Halo YoguYogu, saya ingin pesan ${product}. Apakah masih tersedia?`;

    orderLink.href = `https://api.whatsapp.com/send/?phone=6287845600062&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
    toast.classList.add('show');
    window.setTimeout(() => toast.classList.remove('show'), 3200);
    orderSection.scrollIntoView({ behavior: 'smooth' });
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();
