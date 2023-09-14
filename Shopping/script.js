const bar = document.getElementById('bar');
const navbar = document.getElementById('navbar');
const close = document.getElementById('close');
const product = document.querySelector('pro');

if (bar) {
  bar.addEventListener('click', () => {
    Navbar.classList.add('active');
  });
}

if (product) {
  product.addEventListener('click', () => {
    window.location.replace('/product');
  });
}

if (close) {
  close.addEventListener('click', () => {
    navbar.classList.remove('active');
  });
}

document.querySelector('#contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.elements.name.value = '';
  e.target.elements.email.value = '';
  e.target.elements.message.value = '';
});
