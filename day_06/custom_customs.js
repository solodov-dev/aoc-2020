const countUniqueAnswers = (group) => {
  let answers = [];
  const string = group.join('');
  for (let char of string) {
    if (!answers.includes(char)) answers.push(char);
  }
  return answers.length;
};

const countSameAnswers = (group) => {
  const chars = Array.from(group[0]);
  let count = 0;
  chars.forEach((char) => {
    group.every((el) => el.includes(char)) && count++;
  });
  return count;
};

const reduceAnswers = (input, reducer) => {
  const groups = parseGroups(input);
  return groups.reduce((acc, cur) => {
    return (acc += reducer(cur));
  }, 0);
};

const parseGroups = (input) => {
  let groups = [[]];
  for (let line of input) {
    line === '' ? groups.push([]) : groups[groups.length - 1].push(line);
  }
  return groups;
};

export { countUniqueAnswers, reduceAnswers, countSameAnswers };
