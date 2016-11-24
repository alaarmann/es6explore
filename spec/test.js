/*
 * ES6Explore Unit Tests
*/

/*globals require, describe, it, expect */

var Person = require('../main');

describe('Person', function() {
  'use strict';

  describe('constructor', function() {

    it('constructs a nameless Person object', function() {
      var person = new Person();
      expect(person).not.toBe(null);
    });

    it('constructs a named Person object', function() {
      var person = new Person('Rudy Runner');
      expect(person).not.toBe(null);
    });
  });

  describe('whatIsYourName', function() {
    it('returns sentence with name appended', function() {
      var person = new Person('Rudy Runner');
      var saying = person.whatIsYourName();
      expect(saying).toBe('My name is Rudy Runner');
    });
  });

  describe('makeMethod', function() {
    it('makes new method with specified name', function() {
      var person = new Person('Rudy Runner');
      person.makeMethod('say', words => 'I say: ' + words);
      expect(typeof person.say).toBe('function');
      var saying = person.say('All right!');
      expect(saying).toBe('I say: All right!');
    });
  });

  describe('arrow functions', function() {

    it('lexical this', function() {
      var person = new Person('Peter');
      var petersName = person.name;
      expect(petersName).toBe('Peter');
      person.makeMethod('sayName', () => this.name);
      expect(person.sayName()).toBe(undefined);
    });

  });
});


