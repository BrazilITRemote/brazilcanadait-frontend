import './scss/app.scss';

const navbarToggler = document.querySelector('#navbar-toggler-bt');
if (navbarToggler) {
  const menu = document.querySelector('#menu');
  navbarToggler.addEventListener('click', function() {
    menu.classList.toggle('collapse');
  });
}
