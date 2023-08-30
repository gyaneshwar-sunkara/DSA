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
    let i, j, key;
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
exports.default = sort;
console.log(sort(["d", "b", "a"]));
console.log(sort([2, 4, 21, 1, 44]));
