// partition the items array so that all values for which pred returns true are
// at the end, returning the index of the first true value
function partitionOn(pred, items) {
  let arrTrue = items.filter(pred);
  let arrFalse = [];
  for (i = 0; i < items.length; i++) {
    if (!arrTrue.includes(items[i])) {
      arrFalse.push(items[i]);
    }
  }
  items.splice(0, items.length)
  items.push(...arrFalse, ...arrTrue);
  return arrFalse.length;
}



/*
function partitionOn(pred, items) {
  let arrTrue = items.filter(pred);
  let arrFalse = [];
  for (i = 0; i < items.length; i++) {
    for (j = 0; i < arrTrue.length; j++) {
      if (!items[i] === arrTrue[j]) {
        arrFalse.push(items[i]);
      }
    }
  }
  items.length = 0;
  items = arrFalse.push(...arrTrue);
  return arrFalse;
}
*/
