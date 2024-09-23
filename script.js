let lastScrollTop = 0;
const navbar = document.getElementById("navbar");
const delta = 5;
let navbarVisible = true;

// Fungsi untuk update jam setiap detik
function updateClock() {
  const clock = document.getElementById("clock");
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  clock.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000); // Update jam setiap detik
updateClock(); // Panggil sekali untuk langsung menampilkan waktu
window.addEventListener("scroll", function () {
  const scrollTop =
    window.pageYOffset || document.documentElement.scrollTop;

  if (Math.abs(lastScrollTop - scrollTop) >= delta) {
    if (scrollTop > lastScrollTop && navbarVisible) {
      navbar.style.top = "-70px";
      navbarVisible = false;
    } else if (scrollTop < lastScrollTop && !navbarVisible) {
      navbar.style.top = "0";
      navbarVisible = true;
    }
  }
  lastScrollTop = scrollTop;
});