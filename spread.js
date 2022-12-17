let usa = ['Boston', 'Denver', 'Chicago', 'Seattle'];
let uk = ['London', 'Manchester', 'Bristo', 'Hull', 'Licester'];

let combinedTowns = [...usa, ...uk];
console.log(combinedTowns);

let car = {
    'mark': 'VolkWagen',
    'model': 'Tuareg',
};

let otherCar = {
    ...car,
    'color':  'Blue'
};

console.log(otherCar);
