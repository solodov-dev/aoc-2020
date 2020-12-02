import fs from 'fs';
import path from 'path';

export function readFile(dirname, fileName) {
  return fs
    .readFileSync(path.resolve(dirname, fileName))
    .toString()
    .split('\n');
}
