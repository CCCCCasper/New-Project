function initNavbar() {
  fetch('../Assets/navbar.html')
    .then(response => response.text())
    .then(html => {
      const container = document.getElementById('navbar');
      if (!container) return; // element missing; abort silently
      container.innerHTML = html;

      // After injecting, wire up mobile toggle behaviour
      const toggle = document.getElementById('nav-toggle');
      const links = document.getElementById('nav-links');
      if (toggle && links) {
        toggle.addEventListener('click', () => {
          const isOpen = links.classList.toggle('open');
          toggle.setAttribute('aria-expanded', String(isOpen));
        });

        // Close menu when any link inside is clicked (mobile-friendly)
        links.querySelectorAll('a').forEach(a => {
          a.addEventListener('click', () => {
            links.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
          });
        });
      }
    })
    .catch(err => { console.error('Failed to load navbar:', err); });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initNavbar);
} else {
  initNavbar();
}