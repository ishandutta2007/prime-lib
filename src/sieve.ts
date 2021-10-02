export function* sieveInt(): IterableIterator<number> {
    yield 2;
    yield 3;
    yield 5;
    yield 7;
    const sieve = new Map();
    const ps = sieveInt();
    ps.next() && ps.next();
    for (let p = 3, i = 9; true; i += 2) {
        let s = sieve.get(i);
        if (s !== undefined) {
            sieve.delete(i);
        } else if (i < p * p) {
            yield i;
            continue;
        } else {
            s = 2 * p;
            p = ps.next().value;
        }
        let k = i + s;
        while (sieve.has(k)) {
            k += s;
        }
        sieve.set(k, s);
    }
}

export function* sieveIntStart(start: number): IterableIterator<number> {
    if (start <= 2) {
        yield 2;
    }
    if (start <= 3) {
        yield 3;
    }
    if (start <= 5) {
        yield 5;
    }
    if (start <= 7) {
        yield 7;
    }
    const sieve = new Map();
    const ps = sieveIntStart(2);
    ps.next();                 // skip the 2
    let p = ps.next().value;   // p==3
    let pSqr = p * p;          // p^2, 9
    let c = pSqr;              // first candidate, 9
    let s = 6;                 // step value

    while (pSqr < start)      // must adjust initial state
    {
        s = 2 * p;
        let m = p + s * Math.ceil((start - p) / s);  // multiple of p
        while (sieve.has(m)) m += s;
        sieve.set(m, s);
        p = ps.next().value;
        pSqr = p * p;
    }
    if (start > c) {
        c = start;
    }
    if (c % 2 === 0) {
        c += 1;
    }

    for (; true; c += 2)     // main loop
    {
        s = sieve.get(c);
        if (s !== undefined) {
            sieve.delete(c);      // c composite
        } else if (c < pSqr) {
            yield c;              // c prime
            continue;
        } else {                  // c == p^2
            s = 2 * p;
            p = ps.next().value;
            pSqr = p * p;
        }
        let m = c + s;
        while (sieve.has(m)) m += s;
        sieve.set(m, s);
    }
}

export function* sieveBigInt(): IterableIterator<bigint> {
    yield BigInt(2);
    yield BigInt(3);
    yield BigInt(5);
    const sieve = new Map<bigint, bigint>();
    const ps = sieveBigInt();
    ps.next() && ps.next();
    for (let p = BigInt(3), i = BigInt(7); true; i += BigInt(2)) {
        let s = sieve.get(i);
        if (s !== undefined) {
            sieve.delete(i);
        } else if (i < p * p) {
            yield i;
            continue;
        } else {
            s = BigInt(2) * p;
            p = ps.next().value;
        }
        let k = i + s;
        while (sieve.has(k)) {
            k += s;
        }
        sieve.set(k, s);
    }
}

export function* sieveBigIntStart(start: bigint): IterableIterator<bigint> {
    // TODO: It doesn't work yet, needs ceil logic, etc.

    /*
    if (start <= BigInt(2)) {
        yield BigInt(2);
    }
    if (start <= BigInt(3)) {
        yield BigInt(3);
    }
    if (start <= BigInt(5)) {
        yield BigInt(5);
    }
    if (start <= BigInt(7)) {
        yield BigInt(7);
    }
    const sieve = new Map<bigint, bigint>();
    const ps = sieveBigIntStart(BigInt(2));
    ps.next();                 // skip the 2
    let p: bigint = ps.next().value;   // p==3
    let psqr = p * p;          // p^2, 9
    let c = psqr;              // first candidate, 9
    let s = BigInt(6);                 // step value

    while (psqr < start)      // must adjust initial state
    {
        s = BigInt(2) * p;
        let m = p + s * Math.ceil((start - p) / s);  // multiple of p
        while (sieve.has(m)) {
            m += s;
        }
        sieve.set(m, s);
        p = ps.next().value;
        psqr = p * p;
    }
    if (start > c) {
        c = start;
    }
    if (c % BigInt(2) === 0) {
        c += BigInt(1);
    }

    for (; true; c += BigInt(2))     // main loop
    {
        s = sieve.get(c);
        if (s !== undefined) {
            sieve.delete(c);      // c composite
        } else if (c < psqr) {
            yield c;              // c prime
            continue;
        } else {                  // c == p^2
            s = BigInt(2) * p;
            p = ps.next().value;
            psqr = p * p;
        }
        let m = c + s;
        while (sieve.has(m)) {
            m += s;
        }
        sieve.set(m, s);
    }*/
}
