const myFunctions = require('./numbers.js');

test('Testing sum -- success', () => {
  const target = 30;
  const result = myFunctions.sum(12, 18);
  expect(target).toBe(result);
});

test('Testing div -- success', () => {
    const target = 6;
    const result = myFunctions.div(12, 2);
    expect(target).toBe(result);
  });

test('Testing div -- success', () => {
    const target = 0;
    const result = myFunctions.div(0, 7);
    expect(target).toBe(result);
    });

test('Testing containsNumbers -- success', () => {
    const target = true;
    const result = myFunctions.containsNumbers("123456");
    expect(target).toBe(result);
    });

test('Testing containsNumbers -- success', () => {
    const target = true;
    const result = myFunctions.containsNumbers("abc456");
    expect(target).toBe(result);
    });

test('Testing containsNumbers -- success', () => {
    const target = false;
    const result = myFunctions.containsNumbers("abcdef");
    expect(target).toBe(result);
    });

test('Testing containsNumbers -- success', () => {
    const target = false;
    const result = myFunctions.containsNumbers("@#$%^");
    expect(target).toBe(result);
    });

test('Testing containsNumbers -- success', () => {
    const target = false;
    const result = myFunctions.containsNumbers(" ");
    expect(target).toBe(result);
    });