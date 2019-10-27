function selectionSort(list) {
  const unsorted = [...list];
  const sorted = [];

  while (unsorted.length) {
    let min = 0;

    unsorted.forEach((el, i) => {
      if (el < unsorted[min]) min = i;
    });

    sorted.push(...unsorted.splice(min, 1));
  }

  return sorted;
}

module.exports = selectionSort;
