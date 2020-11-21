function construct(Class) {
  let obj = Object.create(Class.prototype);
  let args = Array.prototype.slice.call(arguments, 1);
  Class.apply(obj, args);
  return obj;
}


https://www.codewars.com/kata/53c7da8baf72924af8000405/train/javascript
