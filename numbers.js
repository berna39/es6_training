let min = Number.MIN_SAFE_INTEGER;
let max = Number.MAX_SAFE_INTEGER;

console.log(min);
console.log(max);

console.log(Number.isInteger(12.3)); // false
console.log(Number.isInteger(1242342342342332342342342324)); // true -> it's a integer somehow :)
console.log(Number.isSafeInteger(124234234234233245252234)); // false -> it's out of the range
