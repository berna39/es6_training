// No redondant elements
let mySet = new Set();

mySet.add('Belgium');
mySet.add('Luxemburg');
mySet.add('Dutchland');

console.log(mySet);

mySet.add('Belgium');

console.log(mySet); // Still the same 

mySet.forEach(e => console.log(e));

mySet.delete('Luxemburg')

console.log(mySet.entries()); 
