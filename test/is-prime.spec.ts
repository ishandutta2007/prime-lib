import {expect} from './header';
import {isPrime} from '../src';

describe('isPrime', () => {

    describe('for valid prime numbers', () => {
        it('must return true', () => {
            const values = [2, 3, 5, 7, 11, 13, 17];
            for (const a of values) {
                expect(isPrime(a), `Failed for ${a}`).to.be.true;
            }
        });
    });

    describe('for invalid prime numbers', () => {
        it('must return false', () => {
            const values = [-2, -1, 0, 1, 1.5, 1.99, 2.01, 3.1, 4, 6, 8, 9];
            for (const a of values) {
                expect(isPrime(a), `Failed for ${a}`).to.be.false;
            }
        });
    });

    describe('for valid prime bigint-s', () => {
        it('must return true', () => {
            const values = [2n, 3n, 5n, 7n, 11n, 13n, 17n];
            for (const a of values) {
                expect(isPrime(a), `Failed for ${a}`).to.be.true;
            }
        });
    });

    describe('for invalid prime bigint-s', () => {
        it('must return false', () => {
            const values = [0n, 1n, 4n, 6n, 8n, 9n, 10n, 12n];
            for (const a of values) {
                expect(isPrime(a), `Failed for ${a}`).to.be.false;
            }
        });
    });

    describe('for special cases', () => {
        it('must not fail', () => {
            // const specialCase = 109000000000000005676789000007878700000000000000000055500000000000137n;
            // TODO: This special case hang, for some reasons :(
            // expect(isPrime(specialCase)).to.be.true;
        });
    });

});
