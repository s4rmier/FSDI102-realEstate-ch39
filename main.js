const hamMenu = document.getElementById("ham-menu");
const modalClose = document.getElementById("modal-close");
const navModal = document.querySelector(".mobile-nav-modal");

const toggleNavModal = () => {
  navModal.classList.toggle("hide");
};

modalClose.addEventListener("click", toggleNavModal);
hamMenu.addEventListener("click", toggleNavModal);
