import testInput from '../helpers/test_input.js';
import { run } from './docking_data.js';

const input = testInput(
  `mask = XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X
mem[8] = 11
mem[7] = 101
mem[8] = 0`
);

describe('Docking data', () => {
  it('Returns the sum', () => {
    expect(run(input)).toBe(165);
  });
});
