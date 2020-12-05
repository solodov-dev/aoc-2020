const validatePasswords = (passwords, validator) => {
  let valid = 0;
  passwords.forEach((password) => validator(password) && valid++);
  return valid;
};

const isValid = (record) => {
  const [min, max, char, password] = record.split(/-| |: /);
  const matches = password.match(new RegExp(char, 'g'));
  return matches && matches.length >= min && matches.length <= max;
};

const isValidNewPolicy = (record) => {
  const [min, max, char, password] = record.split(/-| |: /);
  const index1 = +min - 1;
  const index2 = +max - 1;
  return password[index1] === char
    ? !(password[index2] === char)
    : password[index2] === char;
};

export { validatePasswords, isValid, isValidNewPolicy };
