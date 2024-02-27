let startButton = document.querySelector(".startButton");
let playerOneStart;
let playerTwoStart;

place();
// console.log(startButton);
startButton.addEventListener("click", startGame);

function startGame() {
  htmlState();
  console.log("works");
  moveV2();
  htmlState();
}

function moveV2() {
  boardGame = document.querySelectorAll("#gameBoard .square");
  boardGame.forEach((square) => {
    square.setAttribute("draggable", "true");
  });

  boardGame.forEach((square) => {
    square.addEventListener("dragstart", dragStart);
    square.addEventListener("dragover", dragOver);
    square.addEventListener("drop", dropItem);
  });

  let startingBox;
  let draggedItem;
  let endingBox;

  function dragStart(e) {
    startingBox = e.target;
    draggedItem = e.target.innerHTML;
  }

  function dragOver(e) {
    e.preventDefault();
  }

  function dropItem(e) {
    endingBox = e.target;
    validSpot = checkValidLocation(startingBox.id);
    console.log(validSpot);
    if (validSpot.includes(Number(endingBox.id)) === true) {
      e.target.innerHTML = thePlayer;
      startingBox.innerHTML = "";
      current = `Player ${currentPlayer} just moved!`;
      startingBox.classList.remove("player");
      endingBox.classList.add("player");
      build(startingBox.id);
      changePlayer();
      updateData();
      winCondition();
      htmlState();
    }
  }
}
