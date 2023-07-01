const container = document.querySelector(".container");
const cell = document.getElementsByClassName("cell");
const colorButton = document.querySelector(".left");
const currentColor = document.querySelector("#colorSelection");
const resetButton = document.querySelector("#reset");
const gridSize = document.querySelector("#gridSize");
let gridCount = 16;
let penColor = "black";

// create 16 divs w/ class of gridSquare
function divGrid(gridNumber) {
  let _gridArea = gridCount * gridCount;
  for (let i = 1; i <= _gridArea; i++) {
    let _gridItem = document.createElement("div");
    _gridItem.classList.add("cell");
    container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
    container.insertAdjacentElement("beforeend", _gridItem);
  }
  for (i = 0; i < _gridArea; i++) {
    cell[i].addEventListener("mouseenter", (event) => {
      event.target.style.backgroundColor = penColor;
      cell[i].style.backgroundColor = "#ededee";
    });
    currentColor.style.backgroundColor = "black";
  }
}

// function call to build css grid\
divGrid(gridCount);

// reset grid backgrounds to white
resetButton.addEventListener(
  "click",
  () => {
    for (i = 0; i < gridCount * gridCount; i++) {
      cell[i].style.backgroundColor = "#ededee";
    }
    penColor = "black";
    currentColor.style.backgroundColor = "#ededee";
  },
  false
);

// set new resolution for grid
gridSize.addEventListener(
  "mouseup",
  function () {
    gridCount = this.value;
    divGrid(gridCount);
    for (i = 0; i < gridCount * gridCount; i++) {
      cell[i].style.backgroundColor = "#ededee";
    }
    penColor = "black";
  },
  false
);

// user color selection
function userColorSelection(event) {
  penColor = event.target.value;
  currentColor.computedStyleMap.backGroundColor = penColor;
}

colorButton.addEventListener("change", userColorSelection, false);
colorButton.addEventListener("input", userColorSelection, false);
