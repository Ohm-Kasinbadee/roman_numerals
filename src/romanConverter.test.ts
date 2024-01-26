import { romanToDecimal } from "./romanConverter";

describe("Roman to Decimal Converter", () => {
  it("should convert MMVI to 2006", () => {
    expect(romanToDecimal("MMVI")).toBe(2006);
  });

  it("should convert MCMXLIV to 1944", () => {
    expect(romanToDecimal("MCMXLIV")).toBe(1944);
  });

  it("should convert IX to 9", () => {
    expect(romanToDecimal("IX")).toBe(9);
  });

  it("should convert XC to 90", () => {
    expect(romanToDecimal("XC")).toBe(90);
  });

  it("should convert CD to 400", () => {
    expect(romanToDecimal("CD")).toBe(400);
  });

  it("should convert CM to 900", () => {
    expect(romanToDecimal("CM")).toBe(900);
  });

  it("should convert MMMCMXCIX to 3999", () => {
    expect(romanToDecimal("MMMCMXCIX")).toBe(3999);
  });

  it("should convert III to 3", () => {
    expect(romanToDecimal("III")).toBe(3);
  });

  it("should convert XIV to 14", () => {
    expect(romanToDecimal("XIV")).toBe(14);
  });

  it("should convert XLII to 42", () => {
    expect(romanToDecimal("XLII")).toBe(42);
  });

  it("should convert CCXLV to 245", () => {
    expect(romanToDecimal("CCXLV")).toBe(245);
  });

  it("should convert MMMCMXC to 3990", () => {
    expect(romanToDecimal("MMMCMXC")).toBe(3990);
  });
});
