//Create a player class object with the object storing the levels and the location
//contemplating whether the level should be stored here as the level comparison
//can be done between the boxes with player status=3 and the other boxes instead

const gameBoard = document.querySelector("#gameBoard");

class Player {
  constructor(levels = 0, location) {
    this.level = levels;
    this.location = location;
  }
}

class Box {
  constructor(boxLocatation, boxId, levels = 0, playerStatus = false) {
    this.boxLocatation = boxLocatation;
    this.levels = levels;
    this.boxId = boxId; //key value pair i:j
    this.playerStatus = playerStatus;
  }

  playerUpdate() {
    this.playerStatus = !bool;
  }
}

function createBoardData() {
  numList = [0, 1, 2, 3, 4];
  const board = {};
  id = 0;
  numList.forEach(function (entry) {
    for (let i = 0; i < 5; i++) {
      id += 1;
      let obj = {};
      obj[entry] = i;
      let boxClass = new Box(obj, id);
      board[id] = boxClass;
    }
  });
  return board;
}

// function board() {
//   board = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
// }

board = createBoardData();

console.log(board);

// board = {};

// for (let i = 0; i < 5; i++) {
//   let list = [];
//   for (let j = 0; j < 5; j++) {
//     list.push(j);
//   }
//   board[i] = list;
// }

console.log(board);
console.log(board);
console.log(board[1].boxLocatation);

testBoard = [];

for (let i = 0; i < 25; i++) {
  testBoard.push(i);
}

function createBoard() {
  setId = 1;
  Object.keys(board).forEach(() => {
    const square = document.createElement("div");
    square.classList.add("square");
    square.id = setId;
    setId += 1;
    gameBoard.append(square);
  });
}

createBoard();

const boardBox = document.querySelectorAll("#gameBoard .square");

console.log(boardBox);

boardBox.forEach((square) => {
  square.addEventListener("click", spawn);
});

function spawn(e) {
  e.target.innerHTML = playerChar;
}
