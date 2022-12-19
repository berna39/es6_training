import { Person } from './person.js';

export default class Driver extends Person {
  // default exports
  constructor(name, carModel) {
    super(name);
    this.carModel = carModel;
  }

  drive() {
    console.log('I drive');
  }
}
