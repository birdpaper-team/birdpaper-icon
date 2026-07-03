import { describe, it, expect } from "vitest";
import { toKebabCase, toPascalCase, isArray, deepClone } from "../helper";

describe("toKebabCase", () => {
  it("converts PascalCase to kebab-case", () => {
    expect(toKebabCase("IconArrowDown")).toBe("icon-arrow-down");
  });

  it("converts camelCase to kebab-case", () => {
    expect(toKebabCase("iconArrowDown")).toBe("icon-arrow-down");
  });

  it("handles single word", () => {
    expect(toKebabCase("Icon")).toBe("icon");
  });

  it("handles consecutive uppercase letters", () => {
    expect(toKebabCase("IconHTML")).toBe("icon-html");
  });
});

describe("toPascalCase", () => {
  it("converts kebab-case to PascalCase", () => {
    expect(toPascalCase("icon-arrow-down")).toBe("IconArrowDown");
  });

  it("capitalizes first letter of single word", () => {
    expect(toPascalCase("icon")).toBe("Icon");
  });

  it("handles multiple dashes", () => {
    expect(toPascalCase("icon-arrow-go-back-fill")).toBe("IconArrowGoBackFill");
  });
});

describe("isArray", () => {
  it("returns true for arrays", () => {
    expect(isArray([])).toBe(true);
    expect(isArray([1, 2, 3])).toBe(true);
  });

  it("returns falsy for non-arrays", () => {
    expect(isArray({})).toBeFalsy();
    expect(isArray("string")).toBeFalsy();
    expect(isArray(null)).toBeFalsy();
    expect(isArray(undefined)).toBeFalsy();
  });
});

describe("deepClone", () => {
  it("clones primitive values", () => {
    expect(deepClone(42)).toBe(42);
    expect(deepClone("hello")).toBe("hello");
    expect(deepClone(true)).toBe(true);
  });

  it("clones flat objects", () => {
    const source = { a: 1, b: "two", c: true };
    const cloned = deepClone(source);
    expect(cloned).toEqual(source);
    expect(cloned).not.toBe(source);
  });

  it("clones nested objects", () => {
    const source = { a: { b: { c: 1 } } };
    const cloned = deepClone(source);
    expect(cloned).toEqual(source);
    expect(cloned.a).not.toBe(source.a);
    expect(cloned.a.b).not.toBe(source.a.b);
  });

  it("clones arrays", () => {
    const source = [1, [2, 3], { a: 4 }];
    const cloned = deepClone(source);
    expect(cloned).toEqual(source);
    expect(cloned).not.toBe(source);
    expect(cloned[1]).not.toBe(source[1]);
  });

  it("clones objects with null values correctly", () => {
    const source = { a: null, b: "test" };
    const cloned = deepClone(source);
    expect(cloned.a).toBeNull();
    expect(cloned.b).toBe("test");
  });

  it("creates independent copies (no shared references)", () => {
    const source = { a: { b: 1 } };
    const cloned = deepClone(source);
    cloned.a.b = 2;
    expect(source.a.b).toBe(1);
  });
});
