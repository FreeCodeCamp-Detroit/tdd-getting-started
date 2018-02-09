/* global describe, it */

const expect = require('chai').expect;

describe('[CANARY TEST]', function () {
  describe('Mocha/Chai Test Environment', function () {
    it ('runs', function () {
      expect(true).to.equal(true);
    });
  });
});
