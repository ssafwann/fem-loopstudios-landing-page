const hamburgerBtn = document.querySelector(".header__hamburger");
const navBar = document.querySelector(".primary-navigation");

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("is-active");
  navBar.classList.toggle("is-enabled");

  const nav = document.querySelector(".primary-navigation");
  const body = document.querySelector("body");

  if (nav.style.visibility === "hidden" || !nav.style.visibility) {
    nav.style.height = "100vh";
    nav.style.visibility = "visible";
    nav.style.opacity = "1";

    body.classList.add("menu-open");
  } else {
    nav.style.height = "0";
    nav.style.visibility = "hidden";
    nav.style.opacity = "0";

    body.classList.remove("menu-open");
  }
});
