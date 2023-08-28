"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GCD_1 = __importDefault(require("./GCD"));
function lcm(a, b) {
    return (a / (0, GCD_1.default)(a, b)) * b;
}
exports.default = lcm;
;
console.log(lcm(34, 27));
