/*
 * ES6Explore
 * Explore ES6 Features
*/

/*globals module*/

class Person {
  constructor(name, birthdate){
    this.name = name;
    this.birthdate = birthdate;
  }
  whatIsYourName(){
    return 'My name is ' + this.name;
  }
}

module.exports = Person;

