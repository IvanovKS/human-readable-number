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
  if (str.lengh === 1) {
    itog = ob1[str[0]];
  }
  return itog;
}
