// Show Mobile Bar

const mobileBar = document.getElementById('mobile-bar');
const overlay = document.getElementById('overlay');
const mobileMenu = document.getElementById('mobile-menu');
const closeBtn = document.getElementById('close-btn');

function handleBarClick() {
  overlay.classList.remove('hidden');
  mobileMenu.classList.remove('hidden');
}

function handleOverlayClick() {
  overlay.classList.add('hidden');
  mobileMenu.classList.add('hidden');
}

function handleCloseBtn() {
  overlay.classList.add('hidden');
  mobileMenu.classList.add('hidden');
}

// Validate form

const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');
const input4 = document.getElementById('input4');

document
  .getElementById('contact-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    if (
      input1.value.trim() === '' ||
      input2.value.trim() === '' ||
      input3.value.trim() === '' ||
      input4.value.trim() === ''
    ) {
      alert(`Please fill in all fields !!`);
    } else {
      alert(
        `We will contact you as soon as possible. 
        Your info:  
        ${input1.value},
        ${input2.value},  
        ${input3.value},  
        ${input4.value}`
      );
      document.getElementById('contact-form').reset();
    }
  });

let mybutton = document.getElementById('scroll-to-top');

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.opacity = '1';
  } else {
    mybutton.style.opacity = '0';
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
