import fs from 'fs';

const logAnswers = async (day) => {
  console.log(`Answers for Day ${day}`);
  try {
    const { default: answers } = await import(`../day_0${day}/index.js`);
    fs.readFile(
      new URL(`../inputs/input${day}`, import.meta.url),
      'utf8',
      (err, data) => {
        err
          ? console.error(err)
          : answers.forEach((answer) =>
              console.log(`${answer.title}: ${answer.result(data.split('\n'))}`)
            );
      }
    );
  } catch (e) {
    console.error(e);
  }
};

const day = process.argv.slice(2);
logAnswers(day);
