const DICTIONARY: any = {
  a: ['a', 'A', '4', '@'],
  b: ['b', 'B', '8', '13', '6'],
  c: ['c', 'C', '<', '['],
  d: ['d', 'D', '17'],
  e: ['e', 'E', '3'],
  f: ['f', 'F'],
  g: ['g', 'G', '9', '6'],
  h: ['h', 'H'],
  i: ['i', 'I', '1', '!', 'y'],
  j: ['j', 'J', '7'],
  k: ['k', 'K', '1<'],
  l: ['l', 'L'],
  m: ['m', 'M'],
  n: ['n', 'N'],
  o: ['o', 'O', '0'],
  p: ['p', 'P'],
  q: ['q', 'Q'],
  r: ['r', 'R', '12'],
  s: ['s', 'S', '$', '5'],
  t: ['t', 'T', '+'],
  u: ['u', 'U', 'V', '03'],
  v: ['v', 'V'],
  w: ['w', 'W', 'VV'],
  x: ['x', 'X'],
  y: ['y', 'Y'],
  z: ['z', 'Z', '2'],
};

const getRandomString = (letterArray: string[]) =>
  letterArray.at(Math.floor(Math.random() * letterArray.length));

export const getAlayWord = (value: string) => {
  const REGEX_SYMBOL = /^[\w]+$/;
  return value
    .toLowerCase()
    .split('')
    .map((letter) => {
      console.log(letter, REGEX_SYMBOL.test(letter));
      if (REGEX_SYMBOL.test(letter) && letter !== '') {
        return getRandomString(DICTIONARY[letter]);
      } else {
        return letter;
      }
    })
    .filter((letter) => letter !== ' ')
    .join('');
};
