const assert = require('assert');
const {it, describe} = require('mocha');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    it('checking_if_numbers_round', () => {
        assert.equal(calculateNumber(1, 3), 4);
    });
    it('checking_if_numbers_round_2nd_round', () => {
        assert.equal(calculateNumber(1, 3.7), 5);
    });
    it('checking_if_numbers_round_3nd_round', () => {
        assert.equal(calculateNumber(1.2, 3.7), 5);
    });
    it('checking_if_numbers_round_4nd_round', () => {
        assert.equal(calculateNumber(1.5, 3.7), 6);
    });
    it('checking_negative_return', () => {
        assert.equal(calculateNumber(-1.3, -3.7), -5);
      });
});
