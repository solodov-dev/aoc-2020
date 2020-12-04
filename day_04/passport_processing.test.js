import {
  validatePassports,
  hasRequiredFields,
  allFieldsAreValid,
} from './passport_processing';

describe('Passport processing', () => {
  it('Finds valid passports', () => {
    expect(validatePassports('test.txt', hasRequiredFields)).toBe(2);
  });

  it('Finds passports with valid fields', () => {
    expect(validatePassports('test2.txt', allFieldsAreValid)).toBe(4);
  });
});
