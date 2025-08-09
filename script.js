const tab_buttons = document.querySelectorAll("#features ul li button");

const tabs = document.querySelectorAll("#features article");

tab_buttons[0].addEventListener("click", () => {
  tabs[0].className = "active";
  tabs[1].className = "";
  tabs[2].className = "";
});
tab_buttons[1].addEventListener("click", () => {
  tabs[0].className = "";
  tabs[1].className = "active";
  tabs[2].className = "";
});
tab_buttons[2].addEventListener("click", () => {
  tabs[0].className = "";
  tabs[1].className = "";
  tabs[2].className = "active";
});

const collapse = document.querySelectorAll('[data-bs-toggle="collapse"]');

for (let i = 0; i < 4; i++) {
  collapse[i].addEventListener("click", () => {
    const arrow = collapse[i].children[0];
    let isCollapsed = collapse[i].getAttribute("aria-expanded") == "true";
    if (isCollapsed) {
      arrow.style.rotate = "180deg";
      arrow.children[0].style.stroke = "#fa5757";
    } else {
      arrow.style.rotate = "";
      arrow.children[0].style.stroke = "";
    }
  });
}

const validateEmail = (email) => {
  const emailRegex = /^[^s@]+@[^s@]+.[^s@]+$/;
  return emailRegex.test(email);
};

const check_email = () => {
  if (input_email.value != "") {
    if (validateEmail(input_email.value)) {
      input_email.style.border = "none";
      email_tooltip[0].style.display = "none";
    } else {
      input_email.style.border = "2px solid var(--Red)";
      email_tooltip[0].style.display = "block";
      error_logo.style.display = "block";
    }
  }
};

const input_email = document.querySelector("input[type='email']");
const email_tooltip = document.getElementsByClassName("custom-tooltip");
const error_logo = document.getElementById("email-error");
const contact_button = document.getElementById("contact-button");
input_email.addEventListener("focus", check_email);
contact_button.addEventListener("click", check_email);
input_email.addEventListener("focusout", () => {
  input_email.style.border = "none";
  email_tooltip[0].style.display = "none";
  error_logo.style.display = "none";
});

const submit_email_button = document.querySelector("button[type='submit']");
submit_email_button.addEventListener("click", (event) => {
  event.preventDefault();
});

const close_sidebar = document.getElementById("close-sidebar");
const open_sidebar = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");

close_sidebar.addEventListener("click", () => {
  sidebar.style.display = "none";
});

open_sidebar.addEventListener("click", () => {
  sidebar.style.display = "block";
});
