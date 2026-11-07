const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((nav) => {
  nav.addEventListener("click", () => {
    navLinks.forEach((item) => {
      item.classList.remove("active");
      item.removeAttribute("aria-current");
    });
    nav.classList.add("active");
    nav.setAttribute("aria-current", "location");
  });
});
