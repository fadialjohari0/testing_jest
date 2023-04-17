const { capitalize, filterByAge, getUserData } = require("../src/helpers");
const axios = require("axios");

describe("capitalize function", () => {
  it("capitalizes first letter of string", () => {
    const result = capitalize("hello");
    expect(result).toBe("Hello");
  });

  it("does not change already capitalized string", () => {
    const result = capitalize("Hello");
    expect(result).toBe("Hello");
  });

  it("works with empty string", () => {
    const result = capitalize("");
    expect(result).toBe("");
  });
});

describe("filterByAge function", () => {
  const people = [
    { name: "Fadi", age: 23 },
    { name: "Ahmad", age: 25 },
    { name: "Mohammad", age: 27 },
    { name: "Rabie", age: 23 },
  ];

  it("filters array by age", () => {
    const result = filterByAge(people, 23);
    expect(result).toEqual([
      { name: "Fadi", age: 23 },
      { name: "Rabie", age: 23 },
    ]);
  });

  it("returns an empty array if no matching ages found", () => {
    const result = filterByAge(people, 20);
    expect(result).toEqual([]);
  });
});

jest.mock("axios");

describe("getUserData", () => {
  test("retrieves user data from API", async () => {
    const expectedData = {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
    };
    axios.get.mockResolvedValue({ data: expectedData });
    const result = await getUserData(1);
    expect(result).toEqual(expectedData);
  });
});
