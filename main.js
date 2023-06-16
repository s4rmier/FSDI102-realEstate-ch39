const hamMenu = document.getElementById("ham-menu");
const modalClose = document.getElementById("modal-close");

const navModal = document.querySelector(".mobile-nav-modal");

modalClose.addEventListener("click", () => {
  navModal.classList.toggle("hide");
});

hamMenu.addEventListener("click", () => {
  navModal.classList.toggle("hide");
});
