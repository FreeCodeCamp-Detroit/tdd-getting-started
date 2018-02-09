/* globals describe it */

const expect = require('chai').expect;
const getLongestWord = require('../../src/02_ThinkLikeATester/');

describe('[LESSON TWO: Think Like a Tester]', () => {
  describe('#getLongestWord(str)', () => {
    it('should be a function', () => {
      expect(getLongestWord).to.be.a('function');
    });
    it('should return a string', () => {
      expect(getLongestWord('What is the longest word in this sentence')).to.be.a('string');
    });
  });
});