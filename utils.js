function randomIntegerBetween(min, max) {
  const range = max - min;

  return Math.floor(Math.random() * (range + 1) + min);
}

function randomListOfSize(n, { min, max } = {}) {
  return new Array(n)
    .fill()
    .map(() => randomIntegerBetween(min || 0, max || 100));
}

module.exports = { randomIntegerBetween, randomListOfSize };
