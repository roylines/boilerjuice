const boilerjuice = require('../index.js');

test('should return expected data', done => {
  boilerjuice.get(7).then(ret => {
    expect(ret).toHaveLength(7);
    return done();
  });
});

