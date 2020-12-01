import { getTwoNumbers, getThreeNumbers } from './report_repair';

describe('Report repair', () => {
  it('Finds a multiplication of two numbers', () => {
    expect(getTwoNumbers('test.txt')).toBe(514579);
  });

  it('Finds a multiplication of three numbers', () => {
    expect(getThreeNumbers('test.txt')).toBe(241861950);
  });
});
