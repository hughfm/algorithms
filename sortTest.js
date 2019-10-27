const { performance } = require('perf_hooks');
const { randomListOfSize } = require('./utils.js');
const insertionSort = require('./insertionSort.js');
const selectionSort = require('./selectionSort.js');

const listsCount = 50;
const listSize = 20000;

const functions = {
  selectionSort,
  insertionSort,
};

const results = [];

Object.entries(functions)
  .forEach(([name, fn]) => {
    const lists = [];

    for (let i = 0; i < listsCount; i++) {
      lists.push(randomListOfSize(listSize));
    }

    const start = performance.now();
    const sortedLists = lists.map(list => fn(list));
    const end = performance.now();

    const time = end - start;

    results.push({ name, time, example: sortedLists[0].slice(0, 5) });
  });

console.table(results);
