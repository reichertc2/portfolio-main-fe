import { getCurrentYear } from "./dateUtils";

describe("getCurrentYear", () => {
  it("should return the current year as a string", () => {
    const currentYear = new Date().getFullYear().toString();
    expect(getCurrentYear()).toBe(currentYear);
  });
});
