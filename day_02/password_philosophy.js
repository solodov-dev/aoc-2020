import { readFile } from '../helpers/read_file';

export function validatePasswords(file) {
  const passwords = readFile(__dirname, file);
  let valid = 0;
  passwords.forEach((password) => isValid(password) && valid++);
  return valid;
}

function isValid(record) {
  // record example '1-3 a: abcde'
  const [min, max, char, password] = record.split(/-| |: /);
  const matches = password.match(new RegExp(char, 'g'));
  return matches && matches.length >= min && matches.length <= max;
}

export function validatePasswordsNewPolicy(file) {
  const passwords = readFile(__dirname, file);
  let valid = 0;
  passwords.forEach((password) => isValidNewPolicy(password) && valid++);
  return valid;
}

function isValidNewPolicy(record) {
  // record example '1-3 a: abcde'
  const [min, max, char, password] = record.split(/-| |: /);
  const index1 = parseInt(min) - 1;
  const index2 = parseInt(max) - 1;
  return password[index1] === char
    ? !(password[index2] === char)
    : password[index2] === char;
}
