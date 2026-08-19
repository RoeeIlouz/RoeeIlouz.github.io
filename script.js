/**
 * ROEE ILOUZ (ROCI) - PORTFOLIO INTERACTIVITY
 * Tab Switching, Project Filtering & Contact Handling
 */

document.addEventListener('DOMContentLoaded', () => {
  // Navigation Tabs Switching
  const navButtons = document.querySelectorAll('.nav-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');
  const sectionTitle = document.getElementById('section-title');

  const titles = {
    'about': 'About Me',
    'skills': 'Skills & Academics',
    'projects': 'Featured Projects',
    'homelab': 'Home Lab & Systems',
    'contact': 'Get In Touch'
  };

  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');

      // Update Nav Buttons
      navButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Update Tab Panes
      tabPanes.forEach(pane => {
        pane.classList.remove('active');
        if (pane.id === targetTab) {
          pane.classList.add('active');
        }
      });

      // Update Header Title
      if (sectionTitle && titles[targetTab]) {
        sectionTitle.textContent = titles[targetTab];
      }

      // Update URL hash without jumping
      if (history.pushState) {
        history.pushState(null, null, `#${targetTab}`);
      } else {
        location.hash = `#${targetTab}`;
      }

      // Scroll smoothly to top of main content on mobile
      if (window.innerWidth < 1024) {
        document.querySelector('.main-content').scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Handle URL hash on initial load & hash change
  function activateTabFromHash() {
    const hash = window.location.hash.replace('#', '');
    if (hash && titles[hash]) {
      const btn = document.querySelector(`.nav-btn[data-tab="${hash}"]`);
      if (btn) {
        btn.click();
      }
    }
  }

  activateTabFromHash();
  window.addEventListener('hashchange', activateTabFromHash);

  // Project Category Filter
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Contact Form Submission (Mailto fallback & friendly feedback)
  const contactForm = document.getElementById('contact-form');
  const toast = document.getElementById('toast');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      // Direct mailto link
      const mailtoUrl = `mailto:roeeilouz@gmail.com?subject=Contact%20from%20ilouz.xyz%20(${encodeURIComponent(name)})&body=${encodeURIComponent(message)}%0A%0AFrom:%20${encodeURIComponent(name)}%20(${encodeURIComponent(email)})`;
      
      window.location.href = mailtoUrl;

      // Show Toast Notification
      if (toast) {
        toast.textContent = '🚀 Opening your email client...';
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3500);
      }

      contactForm.reset();
    });
  }
});
