import { describe, expect, test } from "bun:test";

import { add } from "../src";

describe("add", () => {
  test("adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });
});
