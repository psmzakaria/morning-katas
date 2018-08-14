const swap = (arr, index1, index2) => {
  const arrCopy = arr.slice();

  [arrCopy[index1], arrCopy[index2]] = [arrCopy[index2], arrCopy[index1]];
  return arrCopy;
};

const sortNumber = arr => {
  const length = arr.length;

  for (i = 0; i < length; i++) {
    for (j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) arr = swap(arr, j, j - 1);
      else break;
    }
  }

  return arr;
};

const insertionSortByKey = (arr, key) => {
  const length = arr.length;

  for (i = 0; i < length; i++) {
    for (j = i; j > 0; j--) {
      if (arr[j][key] < arr[j - 1][key]) arr = swap(arr, j, j - 1);
      else break;
    }
  }

  return arr;
};

module.exports = { sortNumber, insertionSortByKey };
