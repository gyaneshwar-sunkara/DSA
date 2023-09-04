export default function gcd(a: number, b: number): number {
  return b == 0 ? a : gcd(b, a % b);
}

export function gcdIterative(a: number, b: number): number {
  while (b !== 0) [a, b] = [b, a % b];
  return a;
}

console.log(gcd(34, 22));
console.log(gcdIterative(34, 22));
