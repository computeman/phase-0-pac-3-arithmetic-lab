function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function divide(a, b) {
  return a / b;
}
function multiply(a, b) {
  return a * b;
}
function increment(n) {
  return n + 1;
}
function decrement(n) {
  return n - 1;
}
function makeInt(n) {
  let parsedInt = parseInt(n, 10);
  if (isNaN(parsedInt)) {
    return NaN;
  }
  return parsedInt;
}
function preserveDecimal(n) {
  let parsedFloat = parseFloat(n);
  if (isNaN(parsedFloat)) {
    return NaN;
  }

  return parsedFloat;
}
