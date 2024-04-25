
import { formatAmount } from "../services/helpers";

describe("formatAmount", () => {
  it('returns "0.00" for a 0', () => {
    expect(formatAmount(0)).toBe("0.00");
  });

  it("returns a string with two decimal places for an integer amount", () => {
    expect(formatAmount(10)).toBe("10.00");
    expect(formatAmount(100)).toBe("100.00");
  });

  it("returns a formatted string with proper locality for a non-integer amount", () => {
    expect(formatAmount(123.456)).toBe("123.46");
  });

  it("returns a formatted string with comma for larger amounts", () => {
    expect(formatAmount(1000.00)).toBe("1,000.00");
  });
});
