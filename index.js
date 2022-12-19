import Driver from "./driver.js";
import { Person } from "./person.js";

let person = new Person("Shango");
console.log(person);
person.walk();

let driver = new Driver("The Pat", "BMW");
console.log(driver);
driver.drive();
