// variable scope example
function loop(number = 1) {
  for (var i = 0; i <= number; i++) {
    console.log(i);
  }
  console.log(i); // this will print 6 because the scope of var i is the function
}

function otherLoop(number) {
  for (let i = 0; i <= number; i++) {
    console.log(i);
  }
  //console.log(i); // this will throw an error
}

//loop(5);
otherLoop(5);
