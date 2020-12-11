import testInput from '../helpers/test_input.js';
import { fill } from './seating_system.js';

const input = testInput(
  `L.LL.LL.LL
LLLLLLL.LL
L.L.L..L..
LLLL.LL.LL
L.LL.LL.LL
L.LLLLL.LL
..L.L.....
LLLLLLLLLL
L.LLLLLL.L
L.LLLLL.LL`
);

describe('Seating system', () => {
  it('Finds the final sitting state', () => {
    expect(fill(input)).toBe(37);
  });
});
