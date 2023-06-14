const replace = document.querySelector(".replace");

const hover = document.querySelector(".bottom");

const replaceItems = () => {
  hover.innerHTML = replace.innerHTML;
};

hover.addEventListener("mouseover", replaceItems);
