function isSantaClausable(obj) {
  if (obj.hasOwnProperty("sayHoHoHo") &&
      obj.hasOwnProperty("distributeGifts") &&
      obj.hasOwnProperty("goDownTheChimney")) {
    return true;
  } else {
    return false;
  }
}


https://www.codewars.com/kata/52b50a20fa0e77b304000103/train/javascript
