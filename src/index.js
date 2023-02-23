module.exports = function toReadable (number) {
  let itog;
  const str = String(number);
  const ob1 = {
    ['0']: "zero",
    ['1']: "one",
    ['2']: "two",
    ['3']: "three",
    ['4']: "four",
    ['5']: "five",
    ['6']: "six",
    ['7']: "seven",
    ['8']: "eight",
    ['9']: "nine",
  };
  const ob2 = {
    ['0']: "ten",
    ['1']: "eleven",
    ['2']: "twelve",
    ['3']: "thirteen",
    ['4']: "fourteen",
    ['5']: "fifteen",
    ['6']: "sixteen",
    ['7']: "seventeen",
    ['8']: "eighteen",
    ['9']: "nineteen",
  };
  const ob3 = {
    ['2']: "twenty",
    ['3']: "thirty",
    ['4']: "forty",
    ['5']: "fifty",
    ['6']: "sixty",
    ['7']: "seventy",
    ['8']: "eighty",
    ['9']: "ninety",
  };
  if (str.length === 1) {
    itog = ob1[str[0]];
  };
  if (str.length === 2 && str[0] === '1') {
    itog = ob2[str[1]];
  };
  if (str.length === 2 && str[0] !== '1' && str[1] === '0') {
    itog = ob3[str[0]];
  };
  if (str.length === 2 && str[0] !== '1' && str[1] !== '0') {
    itog = ob3[str[0]] + ' ' + ob1[str[1]];
  };
  if (str.length === 3 && str[1] === '0' && str[2] === '0') {
    itog = ob1[str[0]] + ' hundred';
  };
  if (str.length === 3 && str[1] === '0' && str[2] !== '0') {
    itog = ob1[str[0]] + ' hundred ' + ob1[str[2]];
  };
  if (str.length === 3 && str[1] === '1') {
    itog = ob1[str[0]] + ' hundred ' + ob2[str[2]];
  };
  if (str.length === 3 && str[1] !== '1' && str[1] !== '0' && str[2] === '0') {
    itog = ob1[str[0]] + ' hundred ' + ob3[str[1]];
  };
  return itog;
}
