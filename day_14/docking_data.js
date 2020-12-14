class Mask {
  constructor(pattern) {
    this.mask = Array.from(pattern).reduce(
      (obj, cur, index) =>
        cur === 'X' ? { ...obj } : { ...obj, [index]: +cur },
      {}
    );
  }

  apply(arr) {
    const res = [...arr];
    for (let [key, value] of Object.entries(this.mask)) {
      res[+key] = value;
    }
    return res;
  }
}

class Memory {
  memory = {};
  pattern = new RegExp(/mem\[(\d+)\] = (\d+)/);

  write(line) {
    const [_, address, value] = this.pattern.exec(line);
    let binary = Array.from((+value).toString(2)).map((el) => +el);
    while (binary.length < 36) {
      binary.unshift(0);
    }
    this.memory[address] = this.mask.apply(binary);
  }

  sum() {
    let sum = 0;
    for (let value of Object.values(this.memory)) {
      sum += parseInt(value.join(''), 2);
    }
    return sum;
  }

  updateMask(pattern) {
    this.mask = new Mask(pattern);
  }

  execute(line) {
    if (/mask/.test(line)) {
      const [_, pattern] = /mask = (\w+)/.exec(line);
      this.updateMask(pattern);
    } else {
      this.write(line);
    }
  }
}

const run = (input) => {
  const memory = new Memory();

  for (let line of input) {
    memory.execute(line);
  }
  return memory.sum();
};

export { run };

//////////////////////////////////////////////
input2.forEach((instruction) => {
  if (instruction[0] === 'mask') {
    mask2 = instruction[1].split('');
  } else {
    let binaryKey = instruction[0].toString(2).padStart(36, 0).split('');
    // APPLY MASK TO MEMORY BINARY
    for (let i = 0; i < 36; i++) {
      if (mask2[i] === 'X' || mask2[i] === '1') {
        binaryKey[i] = mask2[i];
      }
    }
    // GENERATE ALL POSSIBLE KEYS AND STORE IN MEMORY 2 OBJECT
    let check = 1;
    let possiblesKeys = [binaryKey.map((e) => e)];
    while (check !== 0) {
      check = 0;
      possiblesKeys.forEach((key, index) => {
        let x = key.indexOf('X');
        if (x !== -1) {
          key[x] = '0';
          possiblesKeys.push(key.map((e) => e));
          key[x] = '1';
          possiblesKeys.push(key.map((e) => e));
          check++;
          possiblesKeys.splice(index, 1);
        }
      });
    }
    possiblesKeys.forEach((key) => {
      let decimal = parseInt(key.join(''), 2);
      memory2[decimal] = instruction[1];
    });
  }
});
