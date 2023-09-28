function fibonacci(n: number): void {
    let fib = [1, 1];
    for(let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    console.log(fib.join(","));
}

fibonacci(20);