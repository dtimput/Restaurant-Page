const loadAbout = () => {
  const content = document.querySelector(".content");
  content.classList.remove("home", "menu");
  content.classList.add("about");

  let child = content.lastElementChild;
  while (child) {
    content.removeChild(child);
    child = content.lastElementChild;
  }

  const ourStory = document.createElement("div");
  ourStory.classList.add("story-title");
  ourStory.textContent = "Our Story";
  const breaker = document.createElement("hr");
  const story = document.createElement("p");
  story.classList.add("story");
  story.textContent =
    "Our CEO Dylan Timput started this restaurant in 2016, right out of highschool. His passion for cooking is a marvel to see, and a delight to experience. In 2019, his restaurant became viral on TikTok, and hasn't slowed down since. Call 702-123-4567 to reserve your table today and experience Thai food like you never have before at Dylan's Famous Thai!";
  const photo = document.createElement("img");
  photo.classList.add("thumbsup");
  photo.src = "./img/thumbsup.png";

  content.append(ourStory, breaker, story, photo);
};

export default loadAbout;
