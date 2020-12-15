import { play } from './rambunctious_recitation.js';

describe('Rambunctions recitation', () => {
  it('Plays the game', () => {
    expect(play([0, 3, 6])).toBe(436);
  });
  it('Plays the game', () => {
    expect(play([1, 3, 2])).toBe(1);
  });
  it('Plays the game', () => {
    expect(play([2, 1, 3])).toBe(10);
  });
  it('Plays the game', () => {
    expect(play([1, 2, 3])).toBe(27);
  });
  it('Plays the game', () => {
    expect(play([2, 3, 1])).toBe(78);
  });
  it('Plays the game', () => {
    expect(play([3, 2, 1])).toBe(438);
  });
  it('Plays the game', () => {
    expect(play([3, 1, 2])).toBe(1836);
  });
});
