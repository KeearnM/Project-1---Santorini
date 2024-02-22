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
function createBoard() {
  setId = 1;
  //iterate through my dictionary to create the board
  Object.keys(board).forEach(() => {
    const square = document.createElement("div");
    square.classList.add("square");
    square.id = setId;
    setId += 1;
    gameBoard.append(square);
  });
}

//Game function area

createBoard();

const boardBox = document.querySelectorAll("#gameBoard .square");

console.log(boardBox);

const once = {
  once: true,
};

//Event listener one to initiate the player spawning phase
boardBox.forEach((square) => {
  square.addEventListener("click", spawn);
}, once);

function spawn(e) {
  e.target.innerHTML = playerChar;
  console.log(boardBox);
  const a = document.querySelectorAll("#playerChar");
  console.log(a.length);
}

//second event listener to remove the spawning feature once there are two players on the board
boardBox.forEach((square) => {
  square.addEventListener("click", removeListener);
});

function removeListener() {
  const playerCharCount = document.querySelectorAll("#playerChar");
  const allSquare = document.querySelectorAll(".square");
  if (playerCharCount.length === 4) {
    for (const i of allSquare) {
      i.removeEventListener("click", spawn);
    }
    document.querySelector("#gameStatusDiv").innerText = "Player spawn ended";
  }
}

//Start of the moving feature

boardBox.forEach((square) => {
  square.setAttribute("draggable", "true");
});

boardBox.forEach((square) => {
  square.addEventListener("dragstart", dragStart);
  square.addEventListener("dragover", dragOver);
  square.addEventListener("drop", dropItem);
});

let startingBox;
let draggedItem;

function dragStart(e) {
  startingBox = e.target;
  draggedItem = e.target.innerHTML;
}

function dragOver(e) {
  e.preventDefault();
}

function dropItem(e) {
  e.target.innerHTML = playerChar;
  startingBox.innerHTML = "";
  //remove element from startingBox variable here
}

console.log(startingBox);

//update the data structure in javascript maybe? - iterate through the board in html then update in javascript maybe
