import { add, subtract, multiple, divide } from "../services/calculations";

describe("add", () => {
  it("should add 1 and 2 and return 3", () => {
    expect(add(1, 2)).toBe(3);
  });
});

describe("subtract", () => {
  it("should subtract 5 and 4 and return 1", () => {
    expect(subtract(5, 4)).toBe(1);
  });
});

describe("multiple", () => {
  it("should multiple 4 and 5 and return 20", () => {
    expect(multiple(4, 5)).toBe(20);
  });
});

describe("divide", () => {
  it("should divide 100 and 4 and return 25", () => {
    expect(divide(100, 4)).toBe(25);
  });
});
