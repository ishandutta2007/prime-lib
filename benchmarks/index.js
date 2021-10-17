"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
const { cpus, version } = require('os');
function testSieveInt() {
    const tests = {
        '10^4': {
            max: 10000,
            desc: 'Time in ms, to generate the first 10,000 primes'
        },
        '10^5': {
            max: 100000,
            desc: 'Time in ms, to generate the first 100,000 primes'
        },
        '10^6': {
            max: 1000000,
            desc: 'Time in ms, to generate the first million primes'
        },
        '10^7': {
            max: 10000000,
            desc: 'Time in ms, to generate the first 10 million primes'
        },
        '10^8': {
            max: 100000000,
            desc: 'Time in ms, to generate the first 100 million primes'
        }
    };
    const result = {};
    for (const t in tests) {
        const i = (0, src_1.generatePrimes)();
        const maxPrimes = tests[t].max;
        const start = Date.now();
        let count = 0, p;
        do {
            p = i.next();
        } while (++count < maxPrimes);
        result[t] = {
            'ms': Date.now() - start,
            'Last Prime': p.value,
            'Description': tests[t].desc
        };
    }
    return result;
}
function testSieveIntBoost() {
    const tests = {
        '10^4': {
            max: 10000,
            desc: 'Time in ms, to generate the first 10,000 primes'
        },
        '10^5': {
            max: 100000,
            desc: 'Time in ms, to generate the first 100,000 primes'
        },
        '10^6': {
            max: 1000000,
            desc: 'Time in ms, to generate the first million primes'
        },
        '10^7': {
            max: 10000000,
            desc: 'Time in ms, to generate the first 10 million primes'
        },
        '10^8': {
            max: 100000000,
            desc: 'Time in ms, to generate the first 100 million primes'
        }
    };
    const result = {};
    for (const t in tests) {
        const maxPrimes = tests[t].max;
        const start = Date.now();
        const i = (0, src_1.generatePrimes)({ boost: maxPrimes });
        let count = 0, p;
        do {
            p = i.next();
        } while (++count < maxPrimes);
        result[t] = {
            'ms': Date.now() - start,
            'Last Prime': p.value,
            'Description': tests[t].desc
        };
    }
    return result;
}
function testSieveIntStart() {
    const tests = {
        '10^9 -> 10^6': {
            start: 1000000000,
            desc: 'Time in ms, to generate 1 million primes, after 1 billion'
        },
        '10^10 -> 10^6': {
            start: 10000000000,
            desc: 'Time in ms, to generate 1 million primes, after 10 billions'
        },
        '10^11 -> 10^6': {
            start: 100000000000,
            desc: 'Time in ms, to generate 1 million primes, after 100 billions'
        },
        '10^12 -> 10^6': {
            start: 1000000000000,
            desc: 'Time in ms, to generate 1 million primes, after 1 trillion'
        },
        '10^13 -> 10^6': {
            start: 10000000000000,
            desc: 'Time in ms, to generate 1 million primes, after 10 trillions'
        },
        '10^14 -> 10^6': {
            start: 100000000000000,
            desc: 'Time in ms, to generate 1 million primes, after 100 trillions'
        },
        '10^15 -> 10^6': {
            start: 1000000000000000,
            desc: 'Time in ms, to generate 1 million primes, after 1 quadrillion'
        }
        // NOTE: Maximum prime is 9_007_199_254_740_881, i.e. less then 10^16
    };
    const result = {};
    for (const t in tests) {
        const i = (0, src_1.generatePrimes)({ start: tests[t].start });
        const start = Date.now();
        let count = 0, p, f;
        do {
            p = i.next();
            f = f || p;
        } while (++count < 1000000);
        result[t] = {
            'ms': Date.now() - start,
            'First Prime': f.value,
            'Description': tests[t].desc
        };
    }
    return result;
}
function testIsPrime() {
    const tests = {
        '0 -> 10^6': {
            start: 0,
            limit: 1000000,
            desc: 'Time in ms, to verify the first million numbers'
        },
        '0 -> 10^7': {
            start: 0,
            limit: 10000000,
            desc: 'Time in ms, to verify the first 10 million numbers'
        },
        '0 -> 10^8': {
            start: 0,
            limit: 100000000,
            desc: 'Time in ms, to verify the first 100 million numbers'
        },
        '10^9 -> 10^6': {
            start: 1000000000,
            limit: 1000000,
            desc: 'Time in ms, to verify 1 million numbers, after 1 billion'
        },
        '10^10 -> 10^6': {
            start: 10000000000,
            limit: 1000000,
            desc: 'Time in ms, to verify 1 million numbers, after 10 billions'
        },
        '10^11 -> 1000': {
            start: 100000000000,
            limit: 1000,
            desc: 'Time in ms, to verify 1000 numbers, after 100 billions'
        },
        '10^12 -> 1000': {
            start: 1000000000000,
            limit: 1000,
            desc: 'Time in ms, to verify 1000 numbers, after 1 trillion'
        },
        '10^13 -> 1000': {
            start: 10000000000000,
            limit: 1000,
            desc: 'Time in ms, to verify 1000 numbers, after 10 trillions'
        },
        '10^14 -> 1000': {
            start: 100000000000000,
            limit: 1000,
            desc: 'Time in ms, to verify 1000 numbers, after 100 trillions'
        },
        '10^15 -> 1000': {
            start: 1000000000000000,
            limit: 1000,
            desc: 'Time in ms, to verify 1000 numbers, after 1 quadrillion'
        }
    };
    const result = {};
    for (const t in tests) {
        const { start, limit, desc } = tests[t];
        const end = start + limit;
        const begin = Date.now();
        for (let i = start; i < end; i++) {
            (0, src_1.isPrime)(i);
        }
        result[t] = {
            'ms': Date.now() - begin,
            'Description': desc
        };
    }
    return result;
}
(function () {
    // tslint:disable:no-console
    const commands = {
        sieveInt() {
            return testSieveInt();
        },
        sieveIntBoost() {
            return testSieveIntBoost();
        },
        sieveIntStart() {
            return testSieveIntStart();
        },
        isPrime() {
            return testIsPrime();
        }
    };
    const { argv } = process;
    const start = Date.now();
    if (argv.length > 2) {
        let i = 2;
        do {
            runTest(argv[i]);
        } while (++i < argv.length);
    }
    else {
        // run all benchmarks
        for (const c in commands) {
            runTest(c);
        }
    }
    const duration = Math.ceil((Date.now() - start) / 1000);
    const { model, speed } = cpus()[0];
    const cpu = `${model.trim()}, ${speed}Mhz`;
    console.log(`Duration: ${duration}s\nNodeJS: ${process.version}\nCPU: ${cpu}\nOS: ${version()}\n`);
    function runTest(testName) {
        if (testName in commands) {
            console.log(`*** Benchmarking ${JSON.stringify(testName)}...`);
            const result = commands[testName]();
            if (Object.keys(result).length) {
                console.table(result);
                console.log();
            }
            else {
                console.log('Nothing :(\n');
            }
        }
        else {
            console.error(`Unknown test ${JSON.stringify(testName)}\n`);
            process.exit(0);
        }
    }
})();
