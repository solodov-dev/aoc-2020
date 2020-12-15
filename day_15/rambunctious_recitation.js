const play = (input, limit) => {
  const history = input.reduce(
    (map, cur, index) => map.set(cur, { lastSpoken: index }),
    new Map()
  );

  let lastNum = input[input.length - 1];

  for (let i = history.size; i < limit; i++) {
    if (history.get(lastNum).beforeLastSpoken !== undefined) {
      let nextNumber = next(history.get(lastNum));
      lastNum = update(history, nextNumber, i);
    } else {
      lastNum = update(history, 0, i);
    }
  }

  return lastNum;
};

const update = (map, num, last) => {
  map.set(num, {
    beforeLastSpoken: map.has(num) ? map.get(num).lastSpoken : undefined,
    lastSpoken: last,
  });
  return num;
};

const next = (entry) => entry.lastSpoken - entry.beforeLastSpoken;

export { play };
