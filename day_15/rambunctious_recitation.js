const play = (input, limit) => {
  const history = input.reduce(
    (map, cur, index) => map.set(cur, { lastSpoken: index }),
    new Map()
  );

  let lastNum = input[input.length - 1];

  for (let i = history.size; i < limit; i++) {
    if (history.get(lastNum).beforeLastSpoken !== undefined) {
      let nextNumber = next(history.get(lastNum));
      lastNum = nextNumber;
      history.set(nextNumber, {
        beforeLastSpoken: history.has(nextNumber)
          ? history.get(nextNumber).lastSpoken
          : undefined,
        lastSpoken: i,
      });
    } else {
      history.set(0, {
        beforeLastSpoken: history.has(0)
          ? history.get(0).lastSpoken
          : undefined,
        lastSpoken: i,
      });
      lastNum = 0;
    }
  }

  return lastNum;
};

const next = (entry) => entry.lastSpoken - entry.beforeLastSpoken;

export { play };
