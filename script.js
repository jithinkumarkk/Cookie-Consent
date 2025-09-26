const popup = document.getElementById('cookie-popup');
const acceptBtn = document.getElementById('accept-btn');
const closeBtn = document.getElementById('close-btn');

if (!localStorage.getItem('cookieAccepted')) {
  popup.classList.add('show');
}

acceptBtn.addEventListener('click', () => {
  popup.classList.remove('show');
  localStorage.setItem('cookieAccepted', 'true');
});

closeBtn.addEventListener('click', () => {
  popup.classList.remove('show');
});