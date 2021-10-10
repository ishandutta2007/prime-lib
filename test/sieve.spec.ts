import {expect} from './header';
import {maxPrime, stopOnValue} from '../src';
import {generatePrimes} from '../src';

describe('sieveInt', () => {
    it('must generate correct values', () => {
        const i = stopOnValue(generatePrimes(), 17);
        expect([...i]).to.eql([2, 3, 5, 7, 11, 13, 17]);
    });
});

describe('sieveIntStart', () => {
    it('must include first prime', () => {
        const i = stopOnValue(generatePrimes({start: 5}), 17);
        expect([...i]).to.eql([5, 7, 11, 13, 17]);
    });
    it('must ignore low values', () => {
        const values = [-2, -1, 0, 1, 2];
        for (const a of values) {
            const i = stopOnValue(generatePrimes({start: a}), 17);
            expect([...i], `Failed for ${a}`).to.eql([2, 3, 5, 7, 11, 13, 17]);
        }
    });

    describe('at the end', () => {
        it('must instantly produce empty list beyond maxPrime', () => {
            const i = generatePrimes({start: maxPrime + 1});
            expect([...i]).to.eql([]);
        }).timeout(1);
        it('must instantly produce maxPrime value', () => {
            const i = generatePrimes({start: maxPrime});
            expect([...i]).to.eql([maxPrime]);
        }).timeout(1);
        it('must eventually find all final primes', () => {
            const i = generatePrimes({start: maxPrime - 200});
            expect([...i]).to.eql([9007199254740727, 9007199254740761, 9007199254740847, maxPrime]);
        }).timeout(20000);
    });
});
