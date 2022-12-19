console.log(isNaN(12)); //false
console.log(isNaN('toto')); // true

console.log(10 / 0); // Infinity
console.log(isFinite(10 / 0)); // false
console.log(isFinite(10 / 0.245)); // true
