import { readFile } from '../helpers/read_file';

export function countTrees(file, down, right) {
  const pattern = readFile(__dirname, file);

  let rightOffset = 0;
  let downOffset = 0;
  let trees = 0;

  while (downOffset < pattern.length) {
    if (pattern[downOffset][rightOffset] === '#') trees++;
    rightOffset += right;
    if (rightOffset >= pattern[downOffset].length)
      rightOffset -= pattern[downOffset].length;
    downOffset += down;
  }

  return trees;
}
