const romanNumbers: { [key: string]: number } = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1,
} as const;

const SUBTRACTIVE_NOTATION_MIDDLE_VALUE = "4";

export const getDecimalPlace = (int: number): number =>
  Number(
    "1" + Array.from({ length: int.toString().length - 1 }, () => 0).join("")
  );

export const getFirstValueOfNumber = (number: number) => number.toString()[0];

export const romanNumeralGenerator = (int: number): string => {
  let reducedInt: number = int;
  let romanNumber: string = "";

  const objEntries = Object.entries(romanNumbers);

  while (reducedInt > 0) {
    let index = 0;

    for (const [romanValue, intValue] of objEntries) {
      index++;

      const neighboringNumber = intValue - getDecimalPlace(reducedInt);
      const firstValueOfReducedInt = getFirstValueOfNumber(reducedInt);

      const subtractiveNotationValue =
        firstValueOfReducedInt === SUBTRACTIVE_NOTATION_MIDDLE_VALUE
          ? objEntries[index]
          : objEntries[index + 1];

      if (reducedInt >= intValue) {
        romanNumber += romanValue;
        reducedInt = reducedInt - intValue;
        break;
      } else if (reducedInt >= neighboringNumber) {
        romanNumber += subtractiveNotationValue[0] + romanValue;
        reducedInt = reducedInt - neighboringNumber;
        break;
      }
    }
  }

  return romanNumber;
};
