/*
 * Person
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

  makeMethod(name, method) {
    this[name] = method;
  } 
}
module.exports = Person;

