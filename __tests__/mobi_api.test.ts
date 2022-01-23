import { Greeter } from "../lib";

test("Test greeter", () => {
  expect(Greeter("Mobi")).toBe("Hello Mobi");
});
