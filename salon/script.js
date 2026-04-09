// ===== NAVIGACIJA: SCROLL EFEKT =====
(function () {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  function updateNav() {
    if (window.scrollY > 60) {
      nav.classList.remove('prozirna');
      nav.classList.add('tamna');
    } else {
      nav.classList.add('prozirna');
      nav.classList.remove('tamna');
    }
  }

  updateNav();
  window.addEventListener('scroll', updateNav, { passive: true });
})();

// ===== HAMBURGER MENU =====
(function () {
  const hamburger = document.querySelector('.nav-hamburger');
  const links = document.querySelector('.nav-links');
  if (!hamburger || !links) return;

  hamburger.addEventListener('click', () => {
    links.classList.toggle('otvoren');
    const spans = hamburger.querySelectorAll('span');
    if (links.classList.contains('otvoren')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    }
  });

  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('otvoren');
    });
  });
})();

// ===== AKTIVNA NAV VEZA =====
(function () {
  const stranica = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === stranica || (stranica === '' && href === 'index.html')) {
      a.classList.add('aktivan');
    }
  });
})();

// ===== SCROLL ANIMACIJE (Intersection Observer) =====
(function () {
  const elementi = document.querySelectorAll('.animiraj, .animiraj-lijevo, .animiraj-desno');
  if (!elementi.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('vidljivo');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  elementi.forEach(el => observer.observe(el));
})();

// ===== BACK TO TOP =====
(function () {
  const gumb = document.querySelector('.natrag-gore');
  if (!gumb) return;

  window.addEventListener('scroll', () => {
    gumb.classList.toggle('vidljiv', window.scrollY > 400);
  }, { passive: true });

  gumb.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();
