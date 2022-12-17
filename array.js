let name = 'thepatient';
let arrName = Array.from(name);
// console.log(arrName); 

let numbers = [12, 23, 20, 11, 8, 16, 32];
let greatThanTwenty = numbers.find((value, index, arr) => {
    return value > 20; // returns the first that is greater than 20
});

console.log(greatThanTwenty);

let allGreatThanTwenty = numbers.filter((value, index, arr) => {
    return value > 20; // returns the all greater than 20
});

console.log(allGreatThanTwenty);