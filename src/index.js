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
  if (str.length === 1) {
    itog = ob1[str[0]];
  };
  if (str.length === 2) {
    itog = ob2[str[1]];
  };
  return itog;
}
