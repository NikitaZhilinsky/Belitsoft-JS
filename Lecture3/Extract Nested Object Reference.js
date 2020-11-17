// return the nested property value if it exists,
// otherwise return undefined
Object.prototype.hash = function(string) {
  let self = this;
  let arr = string.split('.');
  for (i = 0; i < arr.length; i++) {
    if (self[arr[i]]) {
      self = self[arr[i]];
    } else {
      self = undefined;
      return self;
    }
  }
  return self;
}


https://www.codewars.com/kata/527a6e602a7db3456e000a2b/train/javascript
