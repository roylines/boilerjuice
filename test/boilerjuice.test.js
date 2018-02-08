const expect = require('chai').expect
const boilerjuice = require('../index.js');

test('should return expected data', done => {
  boilerjuice.get(7).then(ret => {
    expect(ret).to.have.length(7);
    return done();
  });
});

/*
describe('boilerjuice', () => {
  it('should not error', done => {
    boilerjuice.get(7).then(ret => {
      expect(ret).to.have.length(7);
      return done();
    });
  });
});
*/
