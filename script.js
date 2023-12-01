const gameContainer = document.querySelector(".gameContainer");
const numberPerRow = parseFloat(prompt("Enter the amount per side"));

function createBoxes(numberPerRow) {
  const total = numberPerRow * numberPerRow + numberPerRow;
  const mod = numberPerRow + 1;

  for (let i = 0; i < total; i++) {
    const div = document.createElement("div");
    div.classList.toggle("grid");

    if (i % mod === 0) {
      div.style.cssText = "border: 0; height: 0; width: 100%";
    } else {
      div.style.cssText = "border: 1px solid black; height: 25px; width: 25px";
    }

    gameContainer.appendChild(div);
  }
}

createBoxes(numberPerRow);

const div = document.querySelectorAll(".grid");

for (let i = 0; i < div.length; i++) {
  div[i].addEventListener("mouseenter", (e) => {
    div[i].classList.add("hovered");
  });
}
