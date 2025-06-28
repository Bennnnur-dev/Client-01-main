const header = document.getElementById("header-nav");
const topMarker = document.querySelector(".hero-section-title-bg");
const background = document.getElementById("header-background");
const serviceButton = document.getElementById("service-tab");
const scrollTab = document.getElementById("scroll-tab");
const aboutMarker = document.querySelector(".overlay-text");

document.addEventListener("DOMContentLoaded", checkDistance);
document.addEventListener("scroll", checkDistance);

function checkDistance() {
  const markerY = Math.round(topMarker?.getBoundingClientRect().y);
  const markerYAbout = Math.round(aboutMarker?.getBoundingClientRect().y);
  const headerY = Math.round(header?.getBoundingClientRect().y);

  if (headerY - markerY > -10 || headerY - markerYAbout > 0) {
    background.style.transform = "translateY(0vw)";
    scrollTab.style.backgroundColor = "var(--color-dark-blue)";
    return;
  }

  background.style.transform = "translateY(-200%)";
  scrollTab.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
}
