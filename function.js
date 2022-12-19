// Default parameter
function loop(value=1) {
  for (let index = 0; index < value; index++) {
    console.log(index);
  }
}

loop(); // It will consider the default value (1)
loop(4);

// To treat an infinite number of parameters
function sum(...args) {
  let sum = 0;
  for (let value of args) sum += value;
  return sum;
}

console.log(sum(1, 2, 3, 4, 5));
