const loadMenu = () => {
  const content = document.querySelector(".content");
  content.classList.remove("home", "about");
  content.classList.add("menu");

  let child = content.lastElementChild;
  while (child) {
    content.removeChild(child);
    child = content.lastElementChild;
  }

  const menuGrid1 = document.createElement("div");

  const mainCourseTitle = document.createElement("p");
  mainCourseTitle.classList.add("menu-title");
  mainCourseTitle.textContent = "Main Course";

  const mainCourseItem1 = document.createElement("p");
  mainCourseItem1.classList.add("menu-item");
  mainCourseItem1.textContent = "Pad Grapow ------------- $15.99";

  const mainCourseItem2 = document.createElement("p");
  mainCourseItem2.classList.add("menu-item");
  mainCourseItem2.textContent = "Pad Kee Mao --------- $13.99";

  menuGrid1.append(mainCourseTitle, mainCourseItem1, mainCourseItem2);

  const menuGrid2 = document.createElement("div");

  const soupsTitle = document.createElement("p");
  soupsTitle.classList.add("menu-title");
  soupsTitle.textContent = "Curry";

  const soupItem1 = document.createElement("p");
  soupItem1.classList.add("menu-item");
  soupItem1.textContent = "Red Curry ------------- $13.99";

  const soupItem2 = document.createElement("p");
  soupItem2.classList.add("menu-item");
  soupItem2.textContent = "Yellow Curry --------- $13.99";

  menuGrid2.append(soupsTitle, soupItem1, soupItem2);

  const menuGrid3 = document.createElement("div");

  const dessertsTitle = document.createElement("p");
  dessertsTitle.classList.add("menu-title");
  dessertsTitle.textContent = "Desserts";

  const dessertsItem1 = document.createElement("p");
  dessertsItem1.classList.add("menu-item");
  dessertsItem1.textContent = "Mango Sticky Rice ------------- $7.99";

  const dessertsItem2 = document.createElement("p");
  dessertsItem2.classList.add("menu-item");
  dessertsItem2.textContent = "Matcha Ice Cream --------- $6.99";

  menuGrid3.append(dessertsTitle, dessertsItem1, dessertsItem2);

  const menuGrid4 = document.createElement("div");

  const drinksTitle = document.createElement("p");
  drinksTitle.classList.add("menu-title");
  drinksTitle.textContent = "Drinks";

  const drinksItem1 = document.createElement("p");
  drinksItem1.classList.add("menu-item");
  drinksItem1.textContent = "Thai Tea ------------- $3.99";

  const drinksItem2 = document.createElement("p");
  drinksItem2.classList.add("menu-item");
  drinksItem2.textContent = "Thai Coffee --------- $3.99";

  menuGrid4.append(drinksTitle, drinksItem1, drinksItem2);

  content.append(menuGrid1, menuGrid2, menuGrid3, menuGrid4);
};

export default loadMenu;
