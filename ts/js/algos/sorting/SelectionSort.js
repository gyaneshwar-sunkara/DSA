"use strict";
/**
 * Complexity
 *
 * Best - n^2
 * Average - n^2
 * Worst - n^2
 *
 * Memory - 1
 * Stable - No
 *
 *  */
Object.defineProperty(exports, "__esModule", { value: true });
function sort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}
exports.default = sort;
console.log(sort(["d", "b", "a"]));
console.log(sort([2, 4, 21, 1, 44]));
