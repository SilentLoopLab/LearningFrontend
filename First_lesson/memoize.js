function factorial(a) {
  let res = 1;
  for (let i = 2; i <= a; ++i) {
    res *= i;
  }
  return res;
}

function memoize(cb) {
  let memo = {}
  return function (arg) {
    if (memo[arg]) return memo[arg];
    memo[arg] = cb(arg);
    return memo[arg];
  }
}

const foo = memoize(factorial);
console.log(foo(5));
console.log(foo(5));