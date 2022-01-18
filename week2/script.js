
const header = document.getElementById("header-container");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 10) {
    header-container.classList.add("header-scroll");
  } else {
    header-container.classList.remove("header-scroll");
  }
});

