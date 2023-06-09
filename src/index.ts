const arabicNumberMap: Record<string, string> = {
  "0": "٠",
  "1": "١",
  "2": "٢",
  "3": "٣",
  "4": "٤",
  "5": "٥",
  "6": "٦",
  "7": "٧",
  "8": "٨",
  "9": "٩",
};

function convertToArabic(number: number): string {
  const numberString = number.toString();
  const arabicNumber = numberString
    .split("")
    .map((digit) => arabicNumberMap[digit])
    .join("");
  return arabicNumber;
}

module.exports = {
    convertToArabic
}