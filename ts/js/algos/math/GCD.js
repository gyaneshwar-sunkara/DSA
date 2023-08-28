"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function gcd(a, b) {
    return b == 0 ? a : gcd(b, a % b);
}
exports.default = gcd;
console.log(gcd(34, 22));
