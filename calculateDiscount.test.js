const calculateDiscount = require("./calculateDiscount");

describe("calculateDiscount", () => {
  test("should apply 20% discount for vip customer", () => {
    expect(calculateDiscount(100, "vip")).toBe(80);
  });

  test("should apply 5% discount for regular customer", () => {
    expect(calculateDiscount(100, "regular")).toBe(95);
  });

  test("should return original price for unknown customer type", () => {
    expect(calculateDiscount(100, "guest")).toBe(100);
  });

  test("should correctly handle price equal to 0", () => {
    expect(calculateDiscount(0, "vip")).toBe(0);
    expect(calculateDiscount(0, "regular")).toBe(0);
    expect(calculateDiscount(0, "guest")).toBe(0);
  });

  test("should throw an error when price is negative", () => {
    expect(() => calculateDiscount(-10, "vip")).toThrow("Invalid price");
  });
});