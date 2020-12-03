const { countTrees } = require('./toboggan_trajectory');

describe('Toboggan trajectory', () => {
  const slopes = [
    [1, 3],
    [1, 1],
    [1, 5],
    [1, 7],
    [2, 1],
  ];

  it('Encounters 7 trees with test slope', () => {
    expect(countTrees('test.txt', 1, 3)).toBe(7);
  });

  it('Finds the multiplication of test slopes', () => {
    expect(
      slopes.reduce(
        (acc, cur) => countTrees('test.txt', cur[0], cur[1]) * acc,
        1
      )
    ).toBe(336);
  });
});
