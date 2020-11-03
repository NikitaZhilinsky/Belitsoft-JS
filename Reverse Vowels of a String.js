/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  let vowels = ["a","e","i","o","u","A","E","I","O","U"];
  let revVowels = [];
  let indxVow = [];
  let sArr = s.split("");
  for (i = sArr.length - 1; i >= 0; i--) {
     if (vowels.includes(sArr[i])) {
         revVowels.push(sArr[i]);
         indxVow.push(i);
      }
  }
  for (i = 0; i < indxVow.length; i++) {
      let tmp = indxVow[i];
      indxVow[i] = indxVow[indxVow.length - 1];
      indxVow[indxVow.length - 1] = tmp;
  }
  for (i = 0; i < indxVow.length; i++) {
      sArr.splice(indxVow[i], 1, revVowels[i]);
  }
  let result = sArr.join("");
  return result;
};


/*
  for (i = 0; i < indxVow.length; i++) {
      sArr[indxVow[i]] = revVowels[i];
  }
*/
