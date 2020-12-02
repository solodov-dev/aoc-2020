import {
  validatePasswords,
  validatePasswordsNewPolicy,
} from './password_philosophy';

describe('Password philosophy', () => {
  it('Validates first three passwords', () => {
    expect(validatePasswords('test.txt')).toBe(2);
  });
  it('Validates first three passwords with the new policy', () => {
    expect(validatePasswordsNewPolicy('test.txt')).toBe(1);
  });
});
