import gcd from "./GCD";

export default function lcm(a: number, b: number): number {
    return (a / gcd(a, b)) * b;
};

console.log(lcm(34, 77))
