const adjacent = (seats, row, col) => {
  const arr = [];
  for (let i = row - 1; i <= row + 1; i++) {
    for (let j = col - 1; j <= col + 1; j++) {
      if (i >= 0 && i < seats.length && j >= 0 && j < seats[i].length)
        if (!(i === row && j === col)) arr.push(seats[i][j]);
    }
  }
  return arr;
};

const adjacentFar = (seats, row, col) => {
  const arr = [];

  return arr;
};

const walk = (layout) => {
  const newSeats = [];
  let replacements = 0;
  for (let [row, line] of layout.entries()) {
    newSeats.push([]);
    for (let [col, seat] of line.entries()) {
      const adjArray = adjacent(layout, row, col);
      let newSeat = seat;
      if (seat === 'L' && adjArray.every((seat) => seat !== '#')) {
        newSeat = '#';
        replacements++;
      }
      if (seat === '#' && adjArray.filter((seat) => seat === '#').length >= 4) {
        newSeat = 'L';
        replacements++;
      }
      newSeats[row].push(newSeat);
    }
  }
  return [replacements, newSeats];
};

const fill = (input) => {
  let inputArray = input.map((line) => Array.from(line));
  let replacements = 1;
  while (replacements > 0) {
    [replacements, inputArray] = walk(inputArray);
  }
  return inputArray.join().match(/#/g).length;
};

export { fill };
