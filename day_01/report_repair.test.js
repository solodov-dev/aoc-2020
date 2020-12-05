import { getTwoNumbers, getThreeNumbers } from './report_repair.js';

const test = `1721
979
366
299
675
1456`.split('\n');

describe('Report repair', () => {
  it('Finds a multiplication of two numbers', () => {
    expect(getTwoNumbers(test)).toBe(514579);
  });

  it('Finds a multiplication of three numbers', () => {
    expect(getThreeNumbers(test)).toBe(241861950);
  });
});
