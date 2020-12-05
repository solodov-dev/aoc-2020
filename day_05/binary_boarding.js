import { readFile } from '../helpers/read_file';

const getSeatId = (ticket) => {
  const [rows, cols] = [ticket.slice(0, 7), ticket.slice(7)];
  const row = binarySearch(rows, Array.from(Array(128).keys()));
  const col = binarySearch(cols, Array.from(Array(8).keys()));
  return row * 8 + col;
};

const binarySearch = (code, seats) => {
  if (seats.length === 1) return seats[0];
  return code[0] === 'L' || code[0] === 'F'
    ? binarySearch(code.slice(1), seats.slice(0, seats.length / 2))
    : binarySearch(code.slice(1), seats.slice(seats.length / 2));
};

const getHighestId = () => {
  const ids = readFile(__dirname, 'input.txt').map((ticket) =>
    getSeatId(ticket)
  );
  return Math.max(...ids);
};

const findMySeat = () => {
  const ids = readFile(__dirname, 'input.txt')
    .map((ticket) => getSeatId(ticket))
    .sort();
  for (let i = 0; i < ids.length - 1; i++) {
    if (ids[i + 1] - ids[i] > 1) return ids[i] + 1;
  }
};

export { binarySearch, getSeatId, getHighestId, findMySeat };
