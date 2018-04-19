'use strict';

const reader = require('../lib/reader');

describe('reader.test.js', () => {
  test('file successfully read', (done) => {
    reader(`${__dirname}/../data/lorem1.txt`, (err, data) => {
      expect(err).toBeNull();
      expect(data).toEqual('Lorem ipsum 1');
      done();
    });
  });
});
