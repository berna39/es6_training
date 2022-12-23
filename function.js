// Default parameter
function loop(value = 1) {
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

//--------- ARROW FUNCTION ----------- //

// arrow function that returns object
let func = () => ({ name: 'Toby', age: 13 });
console.log(func());

function addToCart() {
  this.productName = 'Banana';
  this.getProduct = function () {
    console.log(this.productName);
    setTimeout(() => {
      // by putting here the function keyword, we create a new execution scope (this)
      console.log(this);
    }, 1000);
  };
}

let obj = new addToCart();
obj.getProduct();
