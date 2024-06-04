'use strict';



/**
 * addEvent on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  navbarToggler.classList.toggle("active");
}

addEventOnElem(navbarToggler, "click", toggleNav);

const closeNav = function () {
  navbar.classList.remove("active");
  navbarToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNav);



/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});




/*form*/


document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('appointment-modal');
  const btn = document.getElementById('book-appointment-btn');
  const span = document.getElementsByClassName('close-btn')[0];

  // Show the modal when the button is clicked
  btn.onclick = function () {
      modal.style.display = 'block';
  }

  // Close the modal when the close button is clicked
  span.onclick = function () {
      modal.style.display = 'none';
  }

  // Close the modal when clicking outside of the modal content
  window.onclick = function (event) {
      if (event.target == modal) {
          modal.style.display = 'none';
      }
  }

  // Handle form submission
  const form = document.getElementById('appointment-form');
  form.addEventListener('submit', function (event) {
      event.preventDefault();
      // Here you can add code to send the form data to your server
      // For now, we'll just close the modal and show an alert
      modal.style.display = 'none';
      alert('Appointment booked successfully!');
  });
});
