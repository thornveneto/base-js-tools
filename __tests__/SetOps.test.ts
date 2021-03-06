import { SetOps } from "../src/SetOps";

describe("Testing SetOps.union operation", () => {
  test("test basic set union", () => {
    expect(SetOps.union(new Set(['a','b']), new Set(['c', 'd']))).toEqual(new Set(['a', 'b', 'c', 'd']));
  });
});

describe("Testing SetOps.diff operation", () => {
  test("test basic set diff", () => {
    expect(SetOps.diff(new Set(['a','b', 'c', 'd']), new Set(['c', 'd']))).toEqual(new Set(['a', 'b']));
  });
});

describe("Testing SetOps.sameSets operation", () => {
  test("sets are the same", () => {
    expect(SetOps.sameSets(new Set(['c','b', 'a']), new Set(['b', 'a', 'c']))).toBe(true);
  });

  test("sets are the different", () => {
    expect(SetOps.sameSets(new Set(['c','b', 'a']), new Set(['c', 'b', 'e']))).toBe(false);
  });
});

describe("Testing SetOps.filter operation", () => {
  test("test basic set filter", () => {

    let inputSet = new Set(["test", "testo", "flour"]);

    expect(SetOps.filter(inputSet, (keyValue: string) => keyValue.indexOf("test") >= 0)).toEqual(new Set(["test", "testo"]));
  });
});