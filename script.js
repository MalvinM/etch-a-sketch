const gameContainer = document.querySelector(".gameContainer");

for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.classList.toggle("grid");
  gameContainer.appendChild(div);
}

const div = document.querySelectorAll(".grid");

for (let i = 0; i < div.length; i++) {
  div[i].addEventListener("mouseenter", (e) => {
    div[i].classList.add("hovered");
  });
}
