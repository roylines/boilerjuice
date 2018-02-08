const expect = require('chai').expect
const boilerjuice = require('../index.js');

describe('boilerjuice', () => {
  it('should not error', done => {
    boilerjuice.get(5).then(ret => {
      expect(ret).to.have.length(5);
      return done();
    });
  });
});
