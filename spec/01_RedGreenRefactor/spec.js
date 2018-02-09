/* globals describe it */

const expect = require('chai').expect;
const makeAFunction = require('../../src/01_RedGreenRefactor/');

describe('[LESSON ONE: Red-Green-Refactor]', () => {
  describe('#makeAFunction()', () => {
    it('should be a function', () => {
      expect(makeAFunction).to.be.a('function');
    });
    it('should return undefined', () => {
      expect(makeAFunction()).to.be.a('undefined');
    });
  });
});