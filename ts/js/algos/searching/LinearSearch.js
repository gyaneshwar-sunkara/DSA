"use strict";
/**
 * Linear Search
 *
 * Time Complexity: O(n)
 *
 * @param arr - An array of numbers/strings
 * @param target - A number/string
 * @returns Indices of target
 */
Object.defineProperty(exports, "__esModule", { value: true });
function LinearSearch(arr, target) {
    let indices = [];
    arr.forEach((e, i) => {
        if (e === target)
            indices.push(i);
    });
    return indices;
}
exports.default = LinearSearch;
var a = [4, 3, 2, 3, 4, 5, 5, 5, 3, 3];
var b = ["a", "bb", "ss", "ss", "a", "b"];
console.log(LinearSearch(a, 3), LinearSearch(b, "a"));
