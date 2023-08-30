/**
 * Binary Search
 * 
 * Time Complexity: O(log(n)) - since we split search area by two for every next iteration.
 *
 * @param arr - An array of numbers/strings
 * @param target - A number/string
 * @returns Index of target
 */

export default function BinarySearch(
  arr: Array<number | string>,
  target: number | string
): number {
  let lo = 0,
    hi = arr.length - 1;
  while (lo <= hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] > target) hi = mid - 1;
    if (arr[mid] < target) lo = mid + 1;
  }
  return -1;
}

var a = [4, 3, 2, 3, 4, 5, 5, 5, 3, 3];
console.log(BinarySearch(a, 3), BinarySearch(a, 22));
