import {
  romanNumeralGenerator,
  getDecimalPlace,
  getFirstValueOfNumber,
} from "./index";

describe("Roman Numeral Generator", () => {
  it("Should be able to translate simple numbers", () => {
    expect(romanNumeralGenerator(6)).toBe("VI");
    expect(romanNumeralGenerator(55)).toBe("LV");
  });

  it("Should be able to translate number that use subtractive notation", () => {
    expect(romanNumeralGenerator(9)).toBe("IX");
    expect(romanNumeralGenerator(90)).toBe("XC");
  });

  it("Should be able to translate number that use subtractive notation that start with 4 (referred as 'SUBTRACTIVE_NOTATION_MIDDLE_VALUE' in the code)", () => {
    expect(romanNumeralGenerator(4)).toBe("IV");
    expect(romanNumeralGenerator(40)).toBe("XL");
  });

  it("Should be able to translate large number up to 3999", () => {
    expect(romanNumeralGenerator(1444)).toBe("MCDXLIV");
    expect(romanNumeralGenerator(2984)).toBe("MMCMLXXXIV");
    expect(romanNumeralGenerator(3999)).toBe("MMMCMXCIX");
  });
});

describe("Helper functions,", () => {
  it("getDecimalPlace should return the decimal place of a number", () => {
    expect(getDecimalPlace(350)).toBe(100);
    expect(getDecimalPlace(3500)).toBe(1000);
  });

  it("getFirstValueOfNumber should return first value of a number", () => {
    expect(getFirstValueOfNumber(120)).toBe("1");
  });
});
