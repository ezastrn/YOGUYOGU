const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
toggle.addEventListener('click', () => { const open = nav.classList.toggle('open'); toggle.setAttribute('aria-expanded', open); });
document.querySelectorAll('nav a').forEach((link) => link.addEventListener('click', () => { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }));

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('shown'); observer.unobserve(entry.target); } }), { threshold: 0.14 });
document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));

const parallax = document.querySelectorAll('[data-parallax]');
let ticking = false;
function updateParallax() { parallax.forEach((item) => { const amount = Number(item.dataset.parallax); const rect = item.getBoundingClientRect(); item.style.setProperty('--parallax-y', `${Math.round((window.innerHeight / 2 - rect.top) * amount)}px`); }); ticking = false; }
window.addEventListener('scroll', () => { if (!ticking && !matchMedia('(prefers-reduced-motion: reduce)').matches) { requestAnimationFrame(updateParallax); ticking = true; } }, { passive: true });
updateParallax();

const toast = document.querySelector('.toast');
const wa = document.querySelector('#whatsapp-link');
document.querySelectorAll('.add-button').forEach((button) => button.addEventListener('click', () => { const product = button.dataset.product; wa.href = `https://api.whatsapp.com/send/?phone=6287845600062&text=${encodeURIComponent(`Halo YoguYogu, saya ingin pesan ${product}. Apakah masih tersedia?`)}&type=phone_number&app_absent=0`; toast.classList.add('show'); window.setTimeout(() => toast.classList.remove('show'), 3200); document.querySelector('#order').scrollIntoView({ behavior: 'smooth' }); }));
document.querySelector('#year').textContent = new Date().getFullYear();
