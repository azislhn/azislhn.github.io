$(document).ready(function () {
  document.querySelectorAll(".nav-link").forEach((link) => {
    $(link).on("click", function () {
      const offsetTop = document.getElementById(link.dataset.page).offsetTop;
      window.scrollTo({
        top: offsetTop,
        left: 0,
      });
    });
  });
});
