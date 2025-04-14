export function isValid(isbn13: string): boolean {
  const isbn13Cleaned = isbn13.replace(/[\s-]/g, "");

  if (isbn13Cleaned.length !== 13 || !/^\d+$/.test(isbn13Cleaned)) {
    throw new Error("ISBN must be a 13-digit string");
  }

  const digits = isbn13Cleaned.split("").map(Number);

  // ungerade Stelle wird mit 1 multipliziert gerade Stelle mit 3
  let sum = 0;
  for (let i = 0; i < 12; i++) {
    const factor = i % 2 === 0 ? 1 : 3;
    sum += digits[i] * factor;
  }

  // checkdigit
  const calculatedCheckDigit = (10 - (sum % 10)) % 10;

  // vergleich mit der letzten Ziffer der ISBN
  const actualCheckDigit = digits[12];

  return calculatedCheckDigit === actualCheckDigit;
}
