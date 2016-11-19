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
});


