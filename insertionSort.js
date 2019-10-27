function insertionSort(list) {
  const sorted = [...list];
  for (let i = 1; i < list.length; i++) {
    const el = sorted[i];
    let j = i - 1;

    while (j >= 0 && sorted[j] > el) {
      sorted[j + 1] = sorted[j];
      j--;
    }

    sorted[j + 1] = el;
  }

  return sorted;
}

module.exports = insertionSort;
