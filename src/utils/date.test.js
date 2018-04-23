import formatedDate from "./date";

test("Date is formated correctly", () => {
  const date = "2018-04-23T12:08:23Z";
  const expected = "23rd April 18 at 13:04";
  expect(formatedDate(date)).toBe(expected);
});
