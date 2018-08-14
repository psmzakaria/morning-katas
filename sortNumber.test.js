const { sortNumber, insertionSortByKey } = require("./sortNumber");

test("return return back a sorted array", () => {
  expect(sortNumber([3, 5, 4, 6, 8, 7])).toEqual([3, 4, 5, 6, 7, 8]);
});

test("return return back a sorted array", () => {
  expect(sortNumber([9, 15, 14, 16, 18, 17])).toEqual([9, 14, 15, 16, 17, 18]);
});

test("should return a sorted by age array", () => {
  expect(
    insertionSortByKey(
      [
        {
          name: "bob",
          age: 50
        },
        {
          name: "alice",
          age: 20
        },
        {
          name: "june",
          age: 35
        }
      ],
      "age"
    )
  ).toMatchObject([
    {
      name: "alice",
      age: 20
    },
    {
      name: "june",
      age: 35
    },
    {
      name: "bob",
      age: 50
    }
  ]);
});

test("should return a sorted by name array", () => {
  expect(
    insertionSortByKey(
      [
        {
          name: "bob",
          age: 50
        },
        {
          name: "alice",
          age: 20
        },
        {
          name: "june",
          age: 35
        }
      ],
      "name"
    )
  ).toMatchObject([
    { age: 20, name: "alice" },
    { age: 50, name: "bob" },
    { age: 35, name: "june" }
  ]);
});
