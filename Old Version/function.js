let current = "spawn";
let thePlayer = "two";
let theChar = playerTwo;

function place(x) {
  let char;
  if (x === "one") {
    char = playerOne;
  } else if (x === "two") {
    char = playerTwo;
  }

  board = document.querySelector("#gameBoard");
  document.addEventListener(
    "click",
    (e) => {
      e.target.classList.add("player");
      e.target.innerHTML = theChar;
      move();
      updateData();
    },
    {
      once: true,
    }
  );
}

// function move(x = 15) {
//   //   char = document.querySelector("#playerChar");
//   //   char.setAttribute("draggable", "true");
//   validMove = checkValidLocation(x);
//   for (let i of validMove) {
//     a = document.getElementById(i);
//     // a.classList.add("viable");
//     a.addEventListener(
//       "click",
//       (e) => {
//         if (e.target.innerHTML === "") {
//           e.target.innerHTML = theChar;
//           document.getElementById(x).innerHTML = "";
//         }
//       },
//       { once: true }
//     );
//   }
// }

function move(x = 15) {
  validMove = checkValidLocation(x);

  document.getElementById("gameBoard").addEventListener(
    "click",
    (e) => {
      console.log(validMove);
      console.log(e.target.id);
      if (validMove.includes(Number(e.target.id))) {
        e.target.innerHTML = theChar;
        document.getElementById(x).innerHTML = "";
        document.getElementById(x).classList.remove("player");
        e.target.classList.add("player");
      }
    },
    { once: true }
  );
}

function build(x = 15) {
  validMove = checkValidLocation(x);
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
    }
  }

  console.log(x);
}

function winCondition(x = boardData) {
  for (const [k, v] of Object.entries(x)) {
    if (v.levels === 3 && v.playerStatus === true) {
      current = "Game Over";
    }
  }
}

// place(thePlayer);
// console.log(document.getElementById(1));
place();
updateData();
build();
// build(1);
