import { isValid } from "./isbn13";

describe("isValid", () => {
  // Individual tests
  test("throws error if ISBN is not 13 digits long", () => {
    expect(() => isValid("123456789")).toThrow("ISBN must be a 13-digit string");
    expect(() => isValid("")).toThrow("ISBN must be a 13-digit string");
  });

  test("throws error if ISBN contains non-digit characters", () => {
    expect(() => isValid("9780306406X57")).toThrow("ISBN must be a 13-digit string");
  });

  // Parameterized tests (ISBN-13 codes by Chat GPT)
  test.each([
    ["9780306406157", true],
    ["9781861972712", true],
    ["9781861972713", false],
    ["1234567890128", true],
    ["1234567890123", false],
  ])('isValid("%s") should return %s', (isbn, expected) => {
    expect(isValid(isbn)).toBe(expected);
  });
});
