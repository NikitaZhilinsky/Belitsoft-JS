// Let's make a Cat constructor!
var Cat = (function () {
 let catsList = new Map();
 function Cat (name, weight) {
   if (!name || !weight) {
     throw Error("Both values are needed");
   }
   this.name = name;
   this.weight = weight;
   catsList.set(name, weight);
   Object.defineProperty(this, "weight", {
     get: function() {
       return weight;
     },
     set: function(value) {
       weight = value
       catsList.set(name, weight);
     }
   });
 }

 Cat.averageWeight = function() {
   let sum = 0;
   for (let i of catsList.values()) {
     sum += i;
   }
   return sum / catsList.size;
 }

 return Cat;
}());

https://www.codewars.com/kata/53583765d5493bfdf5001b35/train/javascript
