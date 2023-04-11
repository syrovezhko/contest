function task1(numbers) {
  const dictionary = {
    0: 48,
    1: 49,
    2: 50,
    3: 51,
    4: 52,
    5: 53,
    6: 54,
    7: 55,
    8: 56,
    9: 57,
    10: 65,
    11: 66,
    12: 67,
    13: 68,
    14: 69,
    15: 70,
    16: 71,
    17: 72,
    18: 73,
    19: 74,
    20: 75,
    21: 76,
    22: 77,
    23: 78,
    24: 79,
    25: 80,
    26: 81,
    27: 82,
    28: 83,
    29: 84,
    30: 85,
    31: 86,
    32: 87,
    33: 88,
    34: 89,
    35: 90,
    36: 97,
    37: 98,
    38: 99,
    39: 100,
    40: 101,
    41: 102,
    42: 103,
    43: 104,
    44: 105,
    45: 106,
    46: 107,
    47: 108,
    48: 109,
    49: 110,
    50: 111,
    51: 112,
    52: 113,
    53: 114,
    54: 115,
    55: 116,
    56: 117,
    57: 118,
    58: 119,
    59: 120,
    60: 121,
    61: 122,
    62: 32,
  }

  let uint8Array = [];
  
  for (let i = 0; i < numbers.length; i++) {
    const charCode = dictionary.hasOwnProperty([numbers[i]]) ? dictionary[numbers[i]] : 95;
    uint8Array.push(charCode);
  }

  let result = new Uint8Array(uint8Array)
  
  
  return new TextDecoder().decode(result);
};

module.exports = task1;
// /*
const numbers1 = [14,12,22,10,28,38,53,44,51,55,62,2,0,1,5];

// ECMAScript 2015

const numbers2 = [17,40,47,47,50,62,18,49,55,40,53,49,62,22,40,40,55,56,51,62,2,0,2,3];

// Hello Intern Meetup 2023

const numbers3 = [17,40,47,47,50,62,32,50,53,47,39,-1];

// Hello World_

console.log(task1(numbers1))
console.log(task1(numbers2))
console.log(task1(numbers3))

// */