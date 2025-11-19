// Basic interactivity: mobile nav toggle, reservation form validation, dynamic year
document.addEventListener('DOMContentLoaded', function() {
  // Year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
      navLinks.style.flexDirection = 'column';
    });

    // Close nav on link click (mobile)
    navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      if (window.innerWidth <= 700) navLinks.style.display = 'none';
    }));
  }

  // Reservation form
  const form = document.getElementById('reservation-form');
  const msg = document.getElementById('form-msg');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const name = form.name.value.trim();
      const phone = form.phone.value.trim();
      const date = form.date.value;
      const time = form.time.value;
      const people = form.people.value;

      // Basic validation
      if (!name || !phone || !date || !time || !people) {
        showMessage('Please fill in all required fields.', true);
        return;
      }

      if (!/^\d{10}$/.test(phone)) {
        showMessage('Enter a valid 10-digit phone number (numbers only).', true);
        return;
      }

      // Simulate success (replace with server API call if available)
      showMessage(`Thanks ${name}! Your reservation for ${people} on ${date} at ${time} is received. We will call ${phone} to confirm.`, false);
      form.reset();
    });
  }

  function showMessage(text, isError) {
    if (!msg) return;
    msg.style.color = isError ? '#c0392b' : '#2e7d32';
    msg.textContent = text;
    setTimeout(() => {
      msg.textContent = '';
    }, isError ? 5000 : 8000);
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});