const loadWebsite = () => {
  const container = document.querySelector(".container");

  const header = document.createElement("div");
  header.classList.add("header");
  container.appendChild(header);

  const home = document.createElement("a");
  home.textContent = "Home";
  const menu = document.createElement("a");
  menu.textContent = "Menu";
  const about = document.createElement("a");
  about.textContent = "About";
  header.append(home, menu, about);

  const content = document.createElement("div");
  content.classList.add("content");
  container.appendChild(content);

  const brand = document.createElement("div");
  brand.classList.add("brand");
  brand.textContent = "Dylan's Famous Thai";
  const motto = document.createElement("div");
  motto.classList.add("motto");
  motto.textContent = "Rated best Thai Restaurant in Las Vegas!";
  content.append(brand, motto);

  const footer = document.createElement("div");
  footer.classList.add("footer");
  footer.textContent = "Developed by Dylan Timput";
  container.appendChild(footer);
};

export default loadWebsite;
