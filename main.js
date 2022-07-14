const hamburgerBtn = document.querySelector(".header__hamburger");
const navBar = document.querySelector(".primary-navigation");

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("is-active");
  const nav = document.querySelector(".primary-navigation");
  const body = document.querySelector("body");

  if (nav.style.visibility === "hidden" || !nav.style.visibility) {
    nav.style.height = "100vh";
    nav.style.visibility = "visible";
    nav.style.opacity = "1";

    nav.classList.add("is-enabled");
    body.classList.add("menu-open");
  } else {
    nav.style.height = "0";
    nav.style.visibility = "hidden";
    nav.style.opacity = "0";

    nav.classList.remove("is-enabled");
    body.classList.remove("menu-open");
  }
});

window.addEventListener("resize", () => {
  const nav = document.querySelector(".primary-navigation");
  if (window.innerWidth >= "900") {
    nav.style.height = "fit-content";
    nav.style.opacity = "1";
    nav.style.visibility = "visible";

    nav.classList.remove("is-enabled");

    hamburgerBtn.classList.remove("is-active");
  } else {
    nav.style.height = "0";
    nav.style.opacity = "0";
    nav.style.visibility = "hidden";
  }
});
