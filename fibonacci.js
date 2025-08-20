function fibonacci(n) {
  if (n <= 1) return BigInt(n);

  let prev2 = 0n; // F(0)
  let prev1 = 1n; // F(1)

  for (let i = 2; i <= n; i++) {
    const current = prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
  }
  return prev1;
}

console.log("F(10) =", fibonacci(10).toString()); // 55
console.log("F(20) =", fibonacci(20).toString()); // 6765
console.log("F(50) =", fibonacci(50).toString()); // 12586269025

let total = 0;
for (let i = 1; i <= 10; i++) {
  console.time(`Run ${i}`);
  fibonacci(50);
  console.timeEnd(`Run ${i}`);

  const t0 = performance.now();
  fibonacci(50);
  const t1 = performance.now();
  total += (t1 - t0);
}
console.log("Avg time:", (total / 10).toFixed(6), "ms");
