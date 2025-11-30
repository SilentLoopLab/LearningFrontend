function pipe(...funcs) {
  return function wrapper(arg) {
    let res = arg;
    for (let i = 0; i < funcs.length; ++i) {
      res = funcs[i](res);
    }
    return res;
  }
}


const add5 = a => a + 5;
const double = a => 2 * a;
const sub4 = a => a - 4;

const func = pipe(add5, add5, double, sub4);
console.log(func(2));
