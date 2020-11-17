Array.prototype.square = function() {
  return this.map((i) => i * i);
}

Array.prototype.cube = function() {
  return this.map((i) => i * i * i);
}

Array.prototype.average = function() {
  return this.reduce((a, b) => a + b, 0) / this.length;
}

Array.prototype.sum = function() {
  return this.reduce((a, b) => a + b, 0);
}

Array.prototype.even = function() {
  return this.filter((i) => i % 2 === 0);
}

Array.prototype.odd = function() {
  return this.filter((i) => i % 2 !== 0);
}


https://www.codewars.com/kata/525d50d2037b7acd6e000534/train/javascript
