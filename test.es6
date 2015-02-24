import assert from 'assert';
import indexify from './';
import map from 'fj-map';


it('fj-indexify', () => {
  assert.equal(typeof indexify, 'function');
  assert.deepEqual(indexify([]), []);
  assert.deepEqual(indexify(['1']), [[0, '1']]);
  assert.deepEqual(indexify(['1', '2']), [[0, '1'], [1, '2']]);

  assert.deepEqual(map((item) => item[0] + item[1], indexify([1, 2, 3, 4])), [1, 3, 5, 7]);
});
