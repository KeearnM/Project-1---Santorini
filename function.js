let current = "spawn";
let thePlayer = playerOne;
let currentPlayer = "one";
let oppoPlayer = "two";
let theChar = playerTwo;
let playerIndicate = "one";
let placeCount = 0;

function changePlayer() {
  thePlayer = thePlayer === playerOne ? playerTwo : playerOne;
  currentPlayer = currentPlayer === "one" ? "two" : "one";
  oppoPlayer = oppoPlayer === "two" ? "one" : "two";
}

function changeIndicate() {
  playerIndicate = playerIndicate === "one" ? "two" : "one";
}

function place() {
  console.log(placeCount);
  board = document.querySelector("#gameBoard");
  document.addEventListener(
    "click",
    function placePlayer(e) {
      if (placeCount < 2) {
        e.target.classList.add("player");
        e.target.classList.add(playerIndicate);
        e.target.innerHTML = thePlayer;
        placeCount++;
        console.log(placeCount);
        changePlayer();
        changeIndicate();
        updateData();
        // move();
      } else if (placeCount == 2) {
        document.removeEventListener("click", placePlayer);
        current = "move";
        // func();
      }
    }
    // {
    //   once: true,
    // }
  );
}

function getStartId(func) {
  let start;
  getId = document
    .getElementById("gameBoard")
    .addEventListener("click", (e) => {
      start = e.target.id;
      console.log(start);
      func(start);
    });
}

function build(x) {
  validMove = checkValidLocation(Number(x));
  for (let i of validMove) {
    a = document.getElementById(i);
    console.log(a.classList.contains("level-zero"));
    a.addEventListener("click", (e) => {
      if (e.target.classList.contains("level-zero")) {
        e.target.innerHTML = buildingOne;
        e.target.classList.remove("level-zero");
        e.target.classList.add("level-one");
      } else if (e.target.classList.contains("level-one")) {
        e.target.innerHTML = buildingTwo;
        e.target.classList.remove("level-one");
        e.target.classList.add("level-two");
      } else if (e.target.classList.contains("level-two")) {
        e.target.innerHTML = buildingThree;
        e.target.classList.remove("level-two");
        e.target.classList.add("level-three");
      }

      updateData();
      console.log(boardData);
    });
  }
}

function checkValidLocation(id) {
  id = Number(id);

  let possibleLocation = [
    id - 5,
    id + 5,
    id - 1,
    id + 1,
    id - 4,
    id + 4,
    id - 6,
    id + 6,
  ];

  let boxId = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ];

  leftEdge = [1, 6, 11, 16, 21];
  rightEdge = [5, 10, 15, 20, 25];

  possibleLocation.forEach((element) => {
    if (boxId.includes(element) === false) {
      possibleLocation = possibleLocation.filter((val) => val !== element);
    } //this for each loop removes all number that is not in our boxId list
  });

  possibleLocation = possibleLocation.filter((val) => {
    return val > 0;
  }); //this for each loop removes all negative numbers cause there is no such ids on the board

  if (leftEdge.includes(id)) {
    possibleLocation = possibleLocation.filter((e) => {
      return !rightEdge.includes(e);
    });
  } else if (rightEdge.includes(id)) {
    possibleLocation = possibleLocation.filter((e) => {
      return !leftEdge.includes(e);
    });
  }

  //this snippet of code check if the id is an box on the edge on the board
  //if it is it removes the boxid of the box on the other end of the board
  //eliminating the overflow bug

  return possibleLocation;
}

function updateData(x = boardData) {
  a = document.querySelectorAll(".square");
  console.log(a);
  for (let i of a) {
    squareClass = i.className.split(" ");
    //change the index method to use check if array contains
    if (squareClass.includes("level-one")) {
      console.log(i.id);
      x[i.id].levels = 1;
    } else if (squareClass.includes("level-two")) {
      x[i.id].levels = 2;
    } else if (squareClass.includes("level-three")) {
      x[i.id].levels = 3;
    }

    if (i.classList.contains("player") === true) {
      x[i.id].playerStatus = true;
    } else {
      x[i.id].playerStatus = false;
    }
  }

  console.log(x);
}

function winCondition(x = boardData) {
  for (const [k, v] of Object.entries(x)) {
    if (v.levels === 3 && v.playerStatus === true) {
      current = "Game Over";
    }

    checkBlocked = checkValidLocation(k);
    console.log(checkBlocked);
    levelDiff = [];
    for (const i of checkBlocked) {
      levelDiff.push(x[i].levels - v.levels);
    }
    console.log(levelDiff);
    checkMovable = levelDiff.every((item) => {
      return item > 1;
    });

    console.log(checkMovable);
    if (checkMovable === true) {
      current = "Game Over";
    }
  }

  function htmlState() {
    state = document.getElementsByClassName("state");
    state.innerHTML = current;
  }
}

// place(thePlayer);
// console.log(document.getElementById(1));
// place(thePlayer);
// updateData();
// build();
// winCondition();
// build(1);
