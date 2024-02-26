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

  levelUpdates(x) {
    this.levels = x;
  }
}

//create the object containing the class object
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

board = createBoardData();

//create the board in HTML
function createBoard(data) {
  setId = 1;
  //iterate through my dictionary to create the board
  Object.keys(data).forEach(() => {
    const square = document.createElement("div");
    square.classList.add("square");
    square.id = setId;
    square.classList.add("level-zero");
    setId += 1;
    gameBoard.append(square);
  });
}

//Game function area

let boardData = createBoardData();
createBoard(board);

const boardBox = document.querySelectorAll("#gameBoard .square");

console.log(boardBox);
