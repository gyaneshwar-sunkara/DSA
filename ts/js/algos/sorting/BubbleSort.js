"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
function sort(arr) {
    let i, j;
    let swapped = false; // This improves best case time from n^2 to n by exiting quickly similar to insertion sort
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
exports.default = sort;
console.log(sort(["d", "b", "a"]));
