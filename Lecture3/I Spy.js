function spyOn (func) {
  let values = [];
  let result = [];
  let counter = 0;
  let spy = function(...args) {
    values.push(...args);
    counter += 1;
    let resultFunc = func(...args);
    result.push(resultFunc);
    return resultFunc;
  }
  spy.callCount = () => counter;
  spy.wasCalledWith = (val) => values.includes(val);
  spy.returned = (val) => result.includes(val);

  return spy;
}


https://www.codewars.com/kata/555185132c0d4cca3d000197/train/javascript
