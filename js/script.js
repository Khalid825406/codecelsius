// Navigation Active Link
const navLinks = document.querySelectorAll('.nav-links a');

// Add click event to each nav link
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    // Remove active class from all links
    navLinks.forEach((nav) => nav.classList.remove('active'));

    // Add active class to clicked link
    link.classList.add('active');
  });
});

// Hamburger Menu for Mobile View
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-links');
const overlay = document.querySelector('.overlay');


overlay.addEventListener("click",()=>{
  navMenu.classList.remove('active');
})
// Toggle responsive menu
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Dropdown functionality on hover for desktop
const dropdown = document.querySelector('.dropdown');
const dropdownToggle = dropdown?.querySelector('.dropdown-toggle');
const dropdownLink = dropdown?.querySelector('.dropdown-link');
const dropdownContent = dropdown?.querySelector('.dropdown-content');

// Mobile view dropdown toggle (+ and - icons)
dropdownToggle?.addEventListener('click', () => {
  dropdown.classList.toggle('open');
  dropdownToggle.classList.toggle('open');
  dropdownContent.style.height = dropdown.classList.contains('open') ? 'auto' : '0px';
});


// Sticky Navbar
let lastScrollY = window.scrollY;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    navbar.classList.add("sticky"); // Make navbar fixed after scroll
    if (window.scrollY > lastScrollY) {
      // Scrolling down, hide navbar
      navbar.classList.add("hide");
    } else {
      // Scrolling up, show navbar
      navbar.classList.remove("hide");
    }
  } else {
    navbar.classList.remove("sticky"); // Reset navbar position when at the top
    navbar.classList.remove("hide"); // Ensure navbar is visible at the top
  }
  lastScrollY = window.scrollY;
});

// Scroll to Top Button
const progress = document.getElementById('progress');
const progressValue = document.getElementById('progress-value');

function calcScrollValue() {
  const pos = document.documentElement.scrollTop;
  const calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollValue = Math.round((pos * 100) / calcHeight);

  progress.style.background = `conic-gradient(#004d40 ${scrollValue}%, #fff ${scrollValue}%)`;

  // Show or hide the button based on scroll position
  if (pos > 100) {
    progress.style.display = 'grid';
  } else {
    progress.style.display = 'none';
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'  // Smooth scrolling behavior
  });
}

window.addEventListener('scroll', calcScrollValue);
window.addEventListener('load', calcScrollValue);

progress.addEventListener('click', scrollToTop);