function trace(cb) {
  let size = cb.length;
  function wrapper(...args) {
    let argument = new Array(size);
    for (let i = 0; i < size; ++i) {
      argument[i] = args[i];
    }
    let out = cb(...argument);
    wrapper.history.push({
      argument,
      out,
    });
    return out;
  }
  wrapper.history = [];
  return wrapper;
}

function foo(a, b) {
  return a + b;
}

const tracedFunc = trace(foo);
console.log(tracedFunc(1, 2)); //3
console.log(tracedFunc(2, 4, 6)); //6

console.log(tracedFunc.history); //[{args:[1,2], output: 3}, {args:[2,4], output:6}}]