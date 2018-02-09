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
    it('should throw an error when the first parameter is not a string', () => {
      expect(() => {
        getLongestWord(true);
      }).to.throw(TypeError, 'The parameter str must be a string.');
      expect(() => {
        getLongestWord(2,);
      }).to.throw(TypeError, 'The parameter str must be a string.');
      expect(() => {
        getLongestWord({});
      }).to.throw(TypeError, 'The parameter str must be a string.');
      expect(() => {
        getLongestWord(null);
      }).to.throw(TypeError, 'The parameter str must be a string.');
      expect(() => {
        getLongestWord(undefined);
      }).to.throw(TypeError, 'The parameter str must be a string.');
    });
    /*
    it('should return the longest word converted to lowercase', () => {
      expect(getLongestWord('Juxtapose the strings')).to.eql('juxtapose');
    });
    */
    /*
    it('should not remove apostrophes from the longest word', () => {
      expect(getLongestWord('They’re gone')).to.eql('they’re');
    });
    */
    /*
    it('should return an empty string when passed an empty string', () => {
      expect(getLongestWord('')).to.eql('');
    });
    */
    /*
    it('should remove trailing punctuation from the longest word', () => {
      expect(getLongestWord('The longest word I know is antidisestablishmentarianism.')).to.eql('antidisestablishmentarianism');
    });
    */
    /*
    it('should return the first occurring word of all longest words', () => {
      expect(getLongestWord('hello world')).to.eql('hello');
    });
    */
  });
});