const toNumberAndSort = (input) => {
  return input.map((line) => +line).sort((a, b) => a - b);
};

const getTwoNumbers = (input) => {
  const report = toNumberAndSort(input);
  for (let i = 0; i < report.length - 1; i++) {
    for (let j = i + 1; j < report.length; j++) {
      if (report[i] + report[j] === 2020) return report[i] * report[j];
      if (report[i] + report[j] > 2020) break;
    }
  }
  return 'Not found';
};

const getThreeNumbers = (input) => {
  const report = toNumberAndSort(input);
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
};

export { getTwoNumbers, getThreeNumbers };
