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
  let i: number, j: number, key: number | string;
  for (i = 1; i < arr.length; i++) {
    key = arr[i];
    j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }
  return arr;
}

console.log(sort(["d", "b", "a"]));
console.log(sort([2, 4, 21, 1, 44]));
