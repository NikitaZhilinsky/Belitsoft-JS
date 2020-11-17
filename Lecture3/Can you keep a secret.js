function createSecretHolder(secret) {
  let obj = {
    getSecret() {
      return secret;
    },
    setSecret(i) {
      return secret = i;
    }
  }
  return obj;
}


https://www.codewars.com/kata/5351b35ebaeb67f9110012d2/train/javascript
