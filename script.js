
function toggleMenu() {
  const nav = document.getElementById('mobileNav');
  nav.classList.toggle('open');
}
function toggleSubmenu(event) {
  event.preventDefault();
  const li = event.target.closest('li');
  li.classList.toggle('open');
}
