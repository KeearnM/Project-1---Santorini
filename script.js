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

function createBoxes() {
  numList = [0, 1, 2, 3, 4];
  const board = {};
  id = 0;
  numList.forEach(function (entry) {
    for (let i = 0; i < 5; i++) {
      id += 1;
      let obj = {};
      obj[entry] = i;
      let boxClass = new Box(obj);
      board[id] = boxClass;
    }
  });
  return board;
}

// function board() {
//   board = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
// }

board = createBoxes();

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
