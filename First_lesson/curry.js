function curry(cb, size = cb.length, args = []) {
  return function curied(...funArgs) {
    args.push(...funArgs);
    if (size === args.length) {
      let res = cb(...args);
      args = [];
      return res;
    } else {
      return curied;
    }
  };
}

const sum = (a, b, c) => a + b + c;
const product = (a, b, c, d) => a * b * c * d;

const sumFunc = curry(sum);
const prodFunc = curry(product);

console.log(sumFunc(1)(2, 3)); //6
console.log(sumFunc(1, 2)(3)); //6
console.log(sumFunc(1, 2, 3));   //6
console.log(prodFunc(1, 2, 3, 4));   //24
console.log(prodFunc(1)(2, 3, 4));   //24
console.log(prodFunc(1, 2)(3, 4));   //24
console.log(prodFunc(1, 2, 3)(4));   //24



