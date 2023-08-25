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

export default function sort(arr: Array<string | number>) {
  let i: number, j: number;
  let swapped: boolean = false;

  for (i = 0; i < arr.length; i++) {
    swapped = false;
    for (j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }

  return arr;
}

console.log(sort(['d', 'b', 'a']));
