primes-generator
----------------

* [About](#about)
* [Installation](#installation)
* [Usage](#usage)
    * [JavaScript](#javascript)
    * [TypeScript](#typescript)
    * [RXJS](#rxjs)

## About

High-performance [prime number] generators - [Sieve of Eratosthenes] implementation in TypeScript.

## Installation

```
$ npm i primes-generator
```

## Usage

Follow the simple usage examples below, based on your development environment.

### JavaScript

Example of generating an array with first 10 primes as `number`-s:

```js
const {generatePrimes, stopOnCount} = require('primes-generator');

const i = generatePrimes(); // create infinite prime iterator 
const s = stopOnCount(i, 10); // stop-iterator after 10 values

const values = [...s]; // 2, 3, 5, 7, 11, 13, 17, 19, 23, 29
```

### TypeScript

Example of generating an array of all primes up to 17 as `bigint`-s:

```js
import {generateBigPrimes, stopOnValue} from 'primes-generator';

const i = generateBigPrimes(); // create infinite prime iterator
const s = stopOnValue(i, 17n); // stop-iterator when value reaches 17

const values = [...s]; // 2n, 3n, 5n, 7n, 11n, 13n, 17n
```

### RXJS

Adding reusable RXJS wrappers from start is a good practice:

```ts
import {Observable, from} from 'rxjs';
import {generatePrimes, generateBigPrimes} from 'primes-generator';

export function primes(start?: number): Observable<number> {
    return from(generatePrimes(start));
}

export function bigPrimes(start?: bigint): Observable<bigint> {
    return from(generateBigPrimes(start));
}
```

Example of generating 5 primes from 7 and upward:

```ts
import {take} from 'rxjs';

primes(7).pipe(take(5))
    .subscribe(a => {
        // 7, 11, 13, 17, 19
    });
```

Example of detecting primes in another sequence:

```ts
import {from, filter} from 'rxjs';
import {isPrime} from 'primes-generator';

const sequence = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

from(sequence).pipe(filter(isPrime))
    .subscribe(a => {
        // 2, 3, 5, 7
    });
```

[prime number]:https://en.wikipedia.org/wiki/Prime_number
[Sieve of Eratosthenes]:https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
