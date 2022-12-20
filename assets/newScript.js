$(document).ready(() => {
  date();

  $(".mode-toggler").hover(() => {
    $(".mode-toggler i").toggleClass("fa-lg");
  });

  $(".mode-toggler").click(() => {
    $("#sun").toggleClass("hide");
    $("#moon").toggleClass("hide");
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    $(link).on("click", () => {
      const offsetTop = document.getElementById(link.dataset.page).offsetTop;
      window.scrollTo({
        top: offsetTop,
        left: 0,
      });
    });
  });
});

window.onscroll = () => {
  let curr = "";
  document.querySelectorAll("section").forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 240) {
      curr = section.getAttribute("id");
    }
  });
  document.querySelectorAll(".navlinks .nav-link").forEach((link) => {
    link.classList.remove("active");
    if (link.classList.contains(curr)) {
      link.classList.add("active");
    }
  });
};

function date() {
  const datetime = new Date();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day = days[datetime.getDay()];
  const date = datetime.getDate();
  const month = months[datetime.getMonth()];
  const year = datetime.getFullYear();

  $("#date").html(`<small>${day}, ${date} ${month} ${year}</small>`);
}
