function main(primeNumber) {
  const storage = new Map();

  for (let x = 1; x < primeNumber; x++) {
    if(storage.has(primeNumber % x)) {
      console.log('setting:', primeNumber % x, 'to', x)
      return [storage.get(primeNumber % x), x];
    }

    storage.set(primeNumber % x, x);
  }
}

console.log(main(17)); // 3 5