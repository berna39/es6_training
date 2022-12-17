let countries = new Map([
    ['Germany', 340],
    ['UK', 312],
    ['France', 287],
    ['Spain', 240], // trailing comma
]);

countries.set('Belgium', 197);

console.log(countries.get('UK')); // 312
console.log(countries.has('Spain')); // true

countries.forEach((value, key) => console.log(`${key} -> ${value}`)); // print values only
