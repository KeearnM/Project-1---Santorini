function edgeChecker(start, end) {
  testarr = [1, 6, 11, 16, 21];
  testarrtwo = [5, 10, 15, 20, 25];
  result = false;
  testarr.forEach((x, index) => {
    const y = testarrtwo[index];
    console.log("start:", start, x);
    console.log("end: ", end, y);
    if (x === start && y === end) {
      result = true;
    } else if (y === start && x === end) {
      result = true;
    }
  });
  return result;
}

console.log(edgeChecker(5, 1));
