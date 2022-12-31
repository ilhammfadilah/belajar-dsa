function fibonacci(n) {
  let fib = [0,1];
  if(n < 1) {
    return fib = fib[0];
  }
  for(let i = 2; i < n; i++) {
    fib[i] = fib[i-1] + fib[i-2];
  }
  return fib;
}

console.log(fibonacci(4)); // [0,1,1,2]
console.log(fibonacci(5)); // [0,1,1,2,3]
console.log(fibonacci(7)); // [0,1,1,2,3,5,8]
console.log(fibonacci(0));
