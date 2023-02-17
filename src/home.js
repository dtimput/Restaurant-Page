const loadHome = () => {
  const content = document.querySelector(".content");
  content.classList.remove("about", "menu");
  content.classList.add("home");

  let child = content.lastElementChild;
  while (child) {
    content.removeChild(child);
    child = content.lastElementChild;
  }

  const brand = document.createElement("div");
  brand.classList.add("brand");
  brand.textContent = "Dylan's Famous Thai";
  const breaker = document.createElement("hr");
  const motto = document.createElement("div");
  motto.classList.add("motto");
  motto.textContent = "Rated best Thai Restaurant in Las Vegas!";
  content.append(brand, breaker, motto);
};

export default loadHome;
