import { getThreeNumbers, getTwoNumbers } from './report_repair.js';

export default [
  {
    title: 'Product of the two entries that sum to 2020',
    result: (input) => getTwoNumbers(input),
  },
  {
    title: 'Product of the three entries that sum to 2020',
    result: (input) => getThreeNumbers(input),
  },
];
