const loadWebsite = () => {
  const container = document.querySelector(".container");

  const header = document.createElement("div");
  header.classList.add("header");
  container.appendChild(header);

  const home = document.createElement("a");
  home.setAttribute("href", "#");
  home.classList.add("home");
  home.textContent = "Home";
  const menu = document.createElement("a");
  menu.setAttribute("href", "#");
  menu.classList.add("menu");
  menu.textContent = "Menu";
  const about = document.createElement("a");
  about.setAttribute("href", "#");
  about.classList.add("about");
  about.textContent = "About";
  header.append(home, menu, about);

  const content = document.createElement("div");
  content.classList.add("content");
  container.appendChild(content);

  const footer = document.createElement("div");
  footer.classList.add("footer");
  footer.textContent = "Developed by Dylan Timput";
  container.appendChild(footer);
};

export default loadWebsite;
