$(document).ready(() => {
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
  document.querySelectorAll('section').forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 240) {
      curr = section.getAttribute("id")
      // console.log(curr);
    }
  })
  document.querySelectorAll(".navlinks .nav-link").forEach((link) => {
    // console.log(link);
    link.classList.remove("active");
    if (link.classList.contains(curr)) {
      link.classList.add("active");
    }
  });

}
