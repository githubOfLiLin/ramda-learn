// 自己实现柯里化
// length 是函数对象的一个属性值，指该函数有多少个必须要传入的参数，即形参的个数。

// 形参的数量不包括剩余参数个数，仅包括第一个具有默认值之前的参数个数。

// 与之对比的是，  arguments.length 是函数被调用时实际传参的个数。
// https://juejin.cn/post/6844903785848913927

const addFourNumbers = (a, b, c, d) => a + b + c + d;

const curriedAddFourNumbers = curry(addFourNumbers);

function curry(func) {
  console.log('length', func.length);
  //   需要柯里化的函数必须要传入的形参的个数
  const length = func.length;
  return function f() {
    args = [...arguments];
    if (arguments.length < length) {
      return function () {
        return f.apply(this, args.concat([...arguments]));
      }
    }
    return func.apply(this, arguments);
  }
}

const f = curriedAddFourNumbers(1, 2);
const g = f(3);
console.log(g(4));