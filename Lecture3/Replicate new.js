function nouveau (Constructor, ...args) {
  let obj = Object.create(Constructor.prototype);
  let result = Constructor.apply(obj, args);
  if (Object(result) === result) {
    return result;
  } else {
    return obj;
  }
}


https://www.codewars.com/kata/558cb3df5f511f40d500001d/train/javascript
