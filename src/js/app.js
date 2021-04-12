document.addEventListener('DOMContentLoaded', () => {
  const cells = document.querySelectorAll('td');
  const cellsArr = [...cells];
  const icon = '<img src = "../src/img/goblin.png">';
  const activeCell = () => Math.floor(Math.random() * cellsArr.length);
  let startCell = activeCell();
  cellsArr[startCell].innerHTML = icon;

  setInterval(() => {
    let currentCell = activeCell();
    if (startCell === currentCell) currentCell = activeCell();
    cellsArr[startCell].innerHTML = '';
    cellsArr[currentCell].innerHTML = icon;
    startCell = currentCell;
  }, 800);
});