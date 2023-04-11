function task1(numbers) {
  const dictionary = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 'A',
    11: 'B',
    12: 'C',
    13: 'D',
    14: 'E',
    15: 'F',
    16: 'G',
    17: 'H',
    18: 'I',
    19: 'J',
    20: 'K',
    21: 'L',
    22: 'M',
    23: 'N',
    24: 'O',
    25: 'P',
    26: 'Q',
    27: 'R',
    28: 'S',
    29: 'T',
    30: 'U',
    31: 'V',
    32: 'W',
    33: 'X',
    34: 'Y',
    35: 'Z',
    36: 'a',
    37: 'b',
    38: 'c',
    39: 'd',
    40: 'e',
    41: 'f',
    42: 'g',
    43: 'h',
    44: 'i',
    45: 'j',
    46: 'k',
    47: 'l',
    48: 'm',
    49: 'n',
    50: 'o',
    51: 'p',
    52: 'q',
    53: 'r',
    54: 's',
    55: 't',
    56: 'u',
    57: 'v',
    58: 'w',
    59: 'x',
    60: 'y',
    61: 'z',
    62: ' ',
  }

  let result = '';
  
  for (let i = 0; i < numbers.length; i++) {
    const charCode = dictionary.hasOwnProperty([numbers[i]]) ? dictionary[numbers[i]] : '_';
    result += charCode;
  }
  
  return result;
};

module.exports = task1;
/*
const numbers1 = [14,12,22,10,28,38,53,44,51,55,62,2,0,1,5];

// 'ECMAScript 2015'

const numbers2 = [17,40,47,47,50,62,18,49,55,40,53,49,62,22,40,40,55,56,51,62,2,0,2,3];

// Hello Intern Meetup 2023

const numbers3 = [17,40,47,47,50,62,32,50,53,47,39,-1];

// Hello World_

console.log(a(numbers1))
console.log(a(numbers2))
console.log(a(numbers3))

*/