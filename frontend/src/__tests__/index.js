function getAnswer() {
  return 42;
}

test('the answer to the ultimate question of life, the universe, and everything should be 42', () => {
  expect(getAnswer()).toBe(42);
});
