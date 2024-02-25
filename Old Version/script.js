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
let endingBox;

function dragStart(e) {
  startingBox = e.target;
  draggedItem = e.target.innerHTML;
}

function dragOver(e) {
  e.preventDefault();
}

//The two function here validate whether the box the player model is dragged to is valid
//if it is valid the functions will return a boolean which I will use in the move function to
//validate possible movements

function edgeChecker(start, end) {
  leftEdge = [1, 6, 11, 16, 21];
  rightEdge = [5, 10, 15, 20, 25];
  result = false;
  leftEdge.forEach((x, index) => {
    const y = rightEdge[index];
    if (x === Number(start) && y === Number(end)) {
      result = true;
    } else if (y === Number(start) && x === Number(end)) {
      result = true;
    }
  });
  return result;
}

function moveLogic(startingBox, endingBox) {
  if (startingBox - endingBox == 5 || startingBox - endingBox == -5) {
    return true;
  } else if (startingBox - endingBox == 1 || startingBox - endingBox == -1) {
    return true;
  } else if (startingBox - endingBox == 6 || startingBox - endingBox == -6) {
    return true;
  } else if (startingBox - endingBox == 4 || startingBox - endingBox == -4) {
    if (edgeChecker(startingBox, endingBox) === true) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
}

function checkEdges(edgeNumber) {
  arr = [1, 6, 11, 16, 21];
  testArr = [Number(edgeNumber)];
  result = arr.some((r) => testArr.includes(r));
  return result;
}

function dropItem(e) {
  endingBox = e.target;
  let end = endingBox.id;
  let start = startingBox.id;
  let validMove = moveLogic(start, end);
  let checkEdge = edgeChecker(start, end);
  console.log(start);
  console.log(end);
  console.log(checkEdge);
  if (validMove === true) {
    e.target.innerHTML = playerChar;
    startingBox.innerHTML = "";
  }
}

//Build Section

function build() {
  x = document.querySelectorAll("#gameBoard .square");

  function checkValidBuild(playerId) {
    playerId = Number(playerId);

    let possibleBuild = [
      playerId - 5,
      playerId + 5,
      playerId + 1,
      playerId - 1,
      playerId - 4,
      playerId + 4,
      playerId - 6,
      playerId + 6,
    ];

    let boxId = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25,
    ];

    const edge = {
      1: 5,
      6: 10,
      11: 15,
      16: 20,
      21: 25,
      5: 1,
      10: 6,
      15: 11,
      20: 16,
      25: 21,
    };

    possibleBuild.forEach((element) => {
      if (boxId.includes(element) === false) {
        possibleBuild = possibleBuild.filter((val) => val !== element);
      }
    });

    possibleBuild = possibleBuild.filter((val) => {
      return val > 0;
    });

    edgeNumber = Object.keys(edge).map(Number);

    possibleBuild.forEach((element) => {
      if (edgeNumber.includes(element) === true) {
        possibleBuild = possibleBuild.filter((val) => val !== edge[playerId]);
      }
    });

    return possibleBuild;
  }

  x.forEach((box) => {
    box.addEventListener("click", build);
  });

  function build(e) {
    console.log(e.target.id);
    e.target.innerHTML = buildingOne;
  }
}

let buildButton = document.querySelector("#buildButton");
buildButton.addEventListener("click", build);

let pc = document.querySelectorAll("#playerChar");
pc.addEventListener("click", check);

function check(e) {
  console.log(e.target);
}

//update the data structure in javascript maybe? - iterate through the board in html then update in javascript maybe
