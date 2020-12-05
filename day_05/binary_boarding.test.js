import {
  binarySearch,
  findMySeat,
  getHighestId,
  getSeatId,
} from './binary_boarding';

describe('Binary boarding', () => {
  it('Finds the correct row', () => {
    expect(binarySearch('BFFFBBF', Array.from(Array(128).keys()))).toBe(70);
  });
  it('Finds the correct col', () => {
    expect(binarySearch('RRR', Array.from(Array(8).keys()))).toBe(7);
  });
  it('Finds ID for  BFFFBBFRRR', () => {
    expect(getSeatId('BFFFBBFRRR')).toBe(567);
  });

  it('Finds the highest ID', () => {
    console.log('Highest id is: ', getHighestId());
  });

  it('Finds my seat', () => {
    console.log('Your seat is: ', findMySeat());
  });
});
