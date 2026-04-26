
document.addEventListener("DOMContentLoaded", function () {
  const welcomeMsg = document.getElementById("welcome-msg");

  if (welcomeMsg) {
  
    const hour = new Date().getHours();
    let greeting = "Hello";

    if (hour < 12) {
      greeting = "Good morning!";
    } else if (hour < 18) {
      greeting = "Good afternoon!";
    } else {
      greeting = "Good evening!";
    }

    welcomeMsg.textContent = `${greeting} Welcome to my portfolio.`;
  }
});


const toggleBtn = document.getElementById("toggle-btn");
const extraBio = document.getElementById("extra-bio");

if (toggleBtn && extraBio) {
  toggleBtn.addEventListener("click", function () {
  
    const isHidden = extraBio.classList.contains("hidden");

    if (isHidden) {
      
      extraBio.classList.remove("hidden");
      toggleBtn.textContent = "Read less ↑";
    } else {
    
      extraBio.classList.add("hidden");
      toggleBtn.textContent = "Read more ↓";
    }
  });
}


const contactForm = document.getElementById("contact-form");
const formConfirm = document.getElementById("form-confirm");

if (contactForm && formConfirm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    formConfirm.classList.remove("hidden");

    contactForm.reset();
    setTimeout(function () {
      formConfirm.classList.add("hidden");
    }, 4000);
  });
}
