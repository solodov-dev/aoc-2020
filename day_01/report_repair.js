import { readFile } from '../helpers/read_file';

function readFileAndSort(fileName) {
  return readFile(__dirname, fileName)
    .map((line) => Number(line))
    .sort((a, b) => a - b);
}

export function getTwoNumbers(fileName) {
  const report = readFileAndSort(fileName);
  for (let i = 0; i < report.length - 1; i++) {
    for (let j = i + 1; j < report.length; j++) {
      if (report[i] + report[j] === 2020) return report[i] * report[j];
      if (report[i] + report[j] > 2020) break;
    }
  }
  return 'Not found';
}

export function getThreeNumbers(fileName) {
  const report = readFileAndSort(fileName);
  for (let i = 0; i < report.length - 2; i++) {
    if (report[i] === 0) continue;
    for (let j = i + 1; j < report.length - 1; j++) {
      if (report[i] + report[j] > 2020) break;
      for (let k = j + 1; k < report.length; k++) {
        if (report[i] + report[j] + report[k] === 2020)
          return report[i] * report[j] * report[k];
        if (report[i] + report[j] + report[k] > 2020) break;
      }
    }
  }
  return 'Not found';
}
