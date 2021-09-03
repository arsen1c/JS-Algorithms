let input = require('./input.js');

input = input.problem1.split('\n')

function twoSum(input, target=2020) {
  const storage = new Map();
    
    for (let [key, value] of input.entries()) {
        
        if (storage.has(Math.abs(target - value))) {
            return storage.get(target-value) * key;
        }
        
        storage.set(value, key);
    }

    return null;
}


console.log(twoSum(input, 2020));