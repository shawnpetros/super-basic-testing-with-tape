const test = require("tape");

function thingToTest(a, b) {
  return a + b;
}

test("thingToTest is a function", (t) => {
  t.equal(typeof thingToTest, "function"); // test that thingToTest returns 'function' as it's type
  t.end();
});

test("thingToTest adds two numbers", (t) => {
  t.equal(thingToTest(1, 2), 3); // test that thingToTest correctly adds 1 + 2 and equals 3
  t.end();
});
