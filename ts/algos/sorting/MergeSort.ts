/**
 * Complexity
 *
 * Best - n
 * Average - n^2
 * Worst - n^2
 *
 * Memory - 1
 * Stable - Yes
 *
 *  */

export default function sort(
  arr: Array<number | string>
): Array<number | string> {
  if (arr.length <= 1) return arr;

  const middleIndex = Math.floor(arr.length / 2);
  const leftArray = arr.slice(0, middleIndex);
  const rightArray = arr.slice(middleIndex, arr.length);

  const leftSortedArray = sort(leftArray);
  const rightSortedArray = sort(rightArray);

  return merge(leftSortedArray, rightSortedArray);
}

function merge(
  arr1: Array<number | string>,
  arr2: Array<number | string>
): Array<number | string> {
  const sortedArray: Array<number | string> = [];

  let leftIndex = 0,
    rightIndex = 0;

  while (leftIndex < arr1.length && rightIndex < arr2.length) {
    let minElement = null;

    if (arr1[leftIndex] < arr2[rightIndex]) {
      minElement = arr1[leftIndex];
      leftIndex++;
    } else {
      minElement = arr2[rightIndex];
      rightIndex++;
    }

    sortedArray.push(minElement);
  }
  return sortedArray
    .concat(arr1.slice(leftIndex))
    .concat(arr2.slice(rightIndex));
}

console.log(sort(["d", "b", "a"]));
console.log(sort([2, 4, 21, 1, 44]));
