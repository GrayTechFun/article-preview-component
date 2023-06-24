const share = document.querySelector(".share");
const replace = document.querySelector(".replace");
const bottom = document.querySelector(".bottom");
const shareImg = document.querySelector(".shareImg");

const console = () => {
  shareImg.classList.add("changetoWhite");
};

share.addEventListener("click", console);
