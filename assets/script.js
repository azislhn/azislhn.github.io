window.onscroll = () => {
  const top = document.querySelector("header");
  const offset = top.offsetTop;
  if (window.pageYOffset > offset) {
    top.classList.add("fixed-top");
  } else {
    top.classList.remove("fixed-top");
  }

  const sections = document.querySelectorAll("section");
  const navlinks = document.querySelectorAll("nav .navbar .navlinks a");
  let curr = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 200) {
      curr = section.getAttribute("id")
    }
  })
  navlinks.forEach(a => {
    a.classList.remove("active");
    if (a.classList.contains(curr)) {
      a.classList.add("active");
    }
  })

}

document.addEventListener("DOMContentLoaded", () => {
  const submitForm = document.querySelector("form");
  submitForm.addEventListener("submit", (e) => {
    alert("Your subject has been sent!")
    e.preventDefault();
  })
})

// darkMode
let darkMode = localStorage.getItem("theme");
const modeToggle = document.getElementById("dark-toggle");
const moonIcon = document.getElementById("moon-icon");
const sunIcon = document.getElementById("sun-icon");

const enableDarkMode = () => {
  document.body.setAttribute("id", "darkMode");
  moonIcon.style.display = "block";
  sunIcon.style.display = "none";
  localStorage.setItem("theme", "dark");
}

const disableDarkMode = () => {
  document.body.setAttribute("id", "");
  moonIcon.style.display = "none";
  sunIcon.style.display = "block";
  localStorage.setItem("theme", "light");
}

if (darkMode === "dark") {
  enableDarkMode();
} else {
  disableDarkMode();
}

modeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("theme");
  if (darkMode !== "dark") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
})