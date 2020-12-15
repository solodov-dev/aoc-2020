const play = (input) => {
  const history = input.map((e) => +e);

  for (let i = 3; i < 2020; i++) {
    history.lastIndexOf(last(history), history.length - 2) !== -1
      ? history.push(next(history, last(history)))
      : history.push(0);
  }

  console.log(history);
  return last(history);
};

const last = (arr) => arr[arr.length - 1];

const next = (history, last) =>
  history.length - (history.lastIndexOf(last, history.length - 2) + 1);

export { play };
