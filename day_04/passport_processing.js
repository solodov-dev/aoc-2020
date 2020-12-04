import { readFileSync } from 'fs';
import path from 'path';

const validatePassports = (fileName, validator) => {
  const passports = readPassports(fileName);
  let valid = 0;
  passports.forEach((passport) => validator(passport) && valid++);
  return valid;
};

const readPassports = (fileName) =>
  readFileSync(path.resolve(__dirname, fileName))
    .toString()
    .split(/\n{2,}/g)
    .map((passport) => passport.replace(/\n/g, ' '));

const hasRequiredFields = (passport) => {
  const fields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid' /*'cid'*/];
  for (let field of fields) {
    if (!passport.includes(field)) return false;
  }
  return true;
};

const allFieldsAreValid = (passport) => {
  if (!hasRequiredFields(passport)) return false;
  const fields = passport.split(' ');
  for (let field of fields) {
    const [key, value] = field.split(':');
    if (!fieldsValidator[key](value)) return false;
  }
  return true;
};

const fieldsValidator = {
  byr: (year) => +year >= 1920 && +year <= 2002,
  iyr: (year) => +year >= 2010 && +year <= 2020,
  eyr: (year) => +year >= 2020 && +year <= 2030,
  hgt: (height) => {
    const [, value, units] = height.match(/(\d+)(cm|in)?/);
    return (
      (units === 'cm' && value >= 150 && value <= 193) ||
      (units === 'in' && value >= 59 && value <= 76)
    );
  },
  hcl: (color) => /#[0-9a-f]{6}/.test(color),
  ecl: (color) => /(amb|blu|brn|gry|grn|hzl|oth)/.test(color),
  pid: (id) => /^\d{9}$/.test(id),
  cid: () => true,
};

export { validatePassports, hasRequiredFields, allFieldsAreValid };
