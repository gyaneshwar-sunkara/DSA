/**
 * Complexity
 *
 *
 * Best - n log(n)
 * Average - n log(n)
 * Worst - n^2
 *
 * Memory - log(n)
 * Stable - No
 *
 *  */

export default function sort(arr: Array<number | string>): Array<number | string> {
  quickSort(arr, 0, arr.length - 1);
  return arr;
}

function partition(
  arr: Array<number | string>,
  low: number,
  high: number
): number {
  let pivot = arr[high];

  let partitionIndex = low;

  for (let currentIndex = low; currentIndex < high; currentIndex++) {
    if (arr[currentIndex] < pivot) {
      [arr[currentIndex], arr[partitionIndex]] = [
        arr[partitionIndex],
        arr[currentIndex],
      ];
      partitionIndex++;
    }
  }

  [arr[partitionIndex], arr[high]] = [arr[high], arr[partitionIndex]];
  return partitionIndex;
}

function quickSort(
  arr: Array<number | string>,
  low: number,
  high: number
): void {
  if (low < high) {
    let pi: number = partition(arr, low, high);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi, high);
  }
}

function quickSort2( arr: Array<any>,
): Array<any> {
  const array = [...arr];

  if (array.length <= 1) {
    return array;
  }

  const leftArray = [];
  const rightArray = [];

  const pivotElement = array.shift();
  const centerArray = [pivotElement];

  while (array.length) {
    const currentElement = array.shift();

    if (currentElement === pivotElement) {
      centerArray.push(currentElement);
    } else if (currentElement! < pivotElement!) {
      leftArray.push(currentElement);
    } else {
      rightArray.push(currentElement);
    }
  }

  const leftArraySorted = quickSort2(leftArray);
  const rightArraySorted = quickSort2(rightArray);

  return leftArraySorted.concat(centerArray, rightArraySorted);
}

console.log(sort(["d", "b", "a"]));
console.log(quickSort2([2, 4, 21, 1, 44]));
