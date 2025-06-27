// Home page alert button
const alertBtn = document.getElementById('alertBtn');
if (alertBtn) {
  alertBtn.addEventListener('click', () => {
    alert('Hello! You clicked the button.');
  });
}

// About page toggle text button
const toggleTextBtn = document.getElementById('toggleTextBtn');
const extraInfo = document.getElementById('extraInfo');
if (toggleTextBtn && extraInfo) {
  toggleTextBtn.addEventListener('click', () => {
    if (extraInfo.style.display === 'none' || extraInfo.style.display === '') {
      extraInfo.style.display = 'block';
      toggleTextBtn.textContent = 'Hide Extra Info';
    } else {
      extraInfo.style.display = 'none';
      toggleTextBtn.textContent = 'Toggle Extra Info';
    }
  });
}

// Contact form submit handler
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    formMessage.style.color = 'green';
    formMessage.textContent = 'Thank you for contacting us, ' + contactForm.name.value + '!';
    contactForm.reset();
  });
}
