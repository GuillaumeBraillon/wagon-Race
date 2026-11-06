/* eslint-disable arrow-parens */
// TODO: write your code here
let playerId = "";
let playerName = "";
let isFinish = false;

const button = document.querySelector("body > div > div.d-grid.gap-2.col-6.mx-auto > button");
const table = document.querySelector("body > div > table");

document.addEventListener("keyup", (event) => {
  if (isFinish) return;

  if (event.key === "a") {
    playerId = "#player1";
    playerName = "joueur 1";
  } else if (event.key === "1") {
    playerId = "#player2";
    playerName = "joueur 2";
  }

  if (playerId === "") return;

  const position = document.querySelector(`${playerId}-race > td.active`);
  const positionColIndex = position.cellIndex;
  const finish = document.querySelector(`${playerId}-race > td.finish`).cellIndex;
  const nextPosition = position.nextElementSibling;

  position.classList.remove("active");
  nextPosition.classList.add("active");

  if (positionColIndex >= finish) {
    alert(`Bravo ${playerName} tu remportes la course !!`);
    const score = document.querySelector(`${playerId}-score`);
    let numScore = parseInt(score.textContent, 10);
    numScore += 1;
    score.textContent = numScore;
    isFinish = true;
    button.focus();
    button.disabled = false;
  }
});

button.addEventListener("click", (event) => {
  Array.from(table.rows).forEach((row) => {
    Array.from(row.cells).forEach((cell) => cell.classList.remove("active"));
    if (row.cells.length > 0) row.cells[0].classList.add("active");
  });
  isFinish = false;
  button.disabled = true;
});
