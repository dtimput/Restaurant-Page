const loadMenu = () => {
  const content = document.querySelector(".content");
  content.classList.remove("home", "about");
  content.classList.add("menu");

  let child = content.lastElementChild;
  while (child) {
    content.removeChild(child);
    child = content.lastElementChild;
  }
};

export default loadMenu;
