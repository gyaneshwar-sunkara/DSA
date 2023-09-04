"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gcdIterative = void 0;
function gcd(a, b) {
    return b == 0 ? a : gcd(b, a % b);
}
exports.default = gcd;
function gcdIterative(a, b) {
    while (b !== 0)
        [a, b] = [b, a % b];
    return a;
}
exports.gcdIterative = gcdIterative;
console.log(gcd(34, 22));
console.log(gcdIterative(34, 22));
