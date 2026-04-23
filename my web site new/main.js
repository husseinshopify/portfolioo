/* ============================================================
   HAMBURGER MENU
   ============================================================ */
const menuBtn    = document.getElementById('menuBtn');
const navDrawer  = document.getElementById('navDrawer');
const navOverlay = document.getElementById('navOverlay');

function openMenu() {
  navDrawer.classList.add('is-open');
  navOverlay.classList.add('is-open');
  menuBtn.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  navDrawer.classList.remove('is-open');
  navOverlay.classList.remove('is-open');
  menuBtn.classList.remove('is-open');
  document.body.style.overflow = '';
}

menuBtn.addEventListener('click', () => {
  navDrawer.classList.contains('is-open') ? closeMenu() : openMenu();
});

navOverlay.addEventListener('click', closeMenu);

document.querySelectorAll('.drawer-link').forEach(a =>
  a.addEventListener('click', closeMenu)
);

/* ============================================================
   CUSTOM CURSOR — desktop only
   ============================================================ */
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

if (window.matchMedia('(pointer: fine)').matches) {
  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    cursor.style.transform = `translate(${mx - 5}px, ${my - 5}px)`;
  });

  (function animRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
    requestAnimationFrame(animRing);
  })();

  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
      ring.style.width   = '56px';
      ring.style.height  = '56px';
      ring.style.opacity = '0.8';
    });
    el.addEventListener('mouseleave', () => {
      ring.style.width   = '36px';
      ring.style.height  = '36px';
      ring.style.opacity = '0.5';
    });
  });
}

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
