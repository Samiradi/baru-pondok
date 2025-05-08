
function toggleMenu() {
  const nav = document.getElementById("nav-links");
  if (nav.classList.contains("mobile-visible")) {
    nav.classList.remove("slide-down");
    nav.classList.add("slide-up");
    setTimeout(() => {
      nav.classList.remove("mobile-visible");
      nav.classList.add("mobile-hidden");
    }, 300);
  } else {
    nav.classList.remove("mobile-hidden");
    nav.classList.add("mobile-visible", "slide-down");
    nav.classList.remove("slide-up");
  }
}

function toggleSearch() {
  alert("Fitur pencarian belum tersedia.");
}
