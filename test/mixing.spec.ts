import {expect} from './header';
import {isPrime, stopOnCount, generatePrimes, generateBigPrimes} from '../src';

describe('mixing', () => {
    describe('for start values', () => {
        it('must pass prime test', () => {
            const i = stopOnCount(generatePrimes(), 1000);
            [...i].forEach(a => {
                expect(isPrime(a), `Failed for ${a}`).to.be.true;
            });
        });
    });

    describe('for offset values', () => {
        it('must pass prime test', () => {
            const i = stopOnCount(generatePrimes(100_000), 1000);
            [...i].forEach(a => {
                expect(isPrime(a), `Failed for ${a}`).to.be.true;
            });
        });
    });

    describe('for bigint start values', () => {
        it('must pass prime test', () => {
            const i = stopOnCount(generatePrimes(), 1000);
            [...i].forEach(a => {
                expect(isPrime(a), `Failed for ${a}`).to.be.true;
            });
        });
    });

    describe('for bigint offset values', () => {
        it('must pass prime test', () => {
            const i = stopOnCount(generateBigPrimes(100_000n), 10_000);
            [...i].forEach(a => {
                expect(isPrime(a), `Failed for ${a}`).to.be.true;
            });
        });
    });
});