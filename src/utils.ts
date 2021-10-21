/**
 * Maximum prime number that can be generated in JavaScript,
 * using the standard 'number' type (53-bit of integer range).
 */
export const maxPrime = 9_007_199_254_740_881;

/**
 * Stops an iterator when the callback returns a truthy value.
 */
export function* stopWhen<T>(iterator: IterableIterator<T>, cb: (value: T, index: number) => boolean): IterableIterator<T> {
    let i, index = 0;
    for (; ;) {
        i = iterator.next();
        if (i.done || cb(i.value, index++)) {
            break;
        }
        yield i.value;
    }
    return i.value;
}

/**
 * Stops an iterator, once the count is reached.
 */
export function stopOnCount<T>(iterator: IterableIterator<T>, count: number): IterableIterator<T> {
    return stopWhen(iterator, (value: T, index: number) => index === count);
}

/**
 * Stops an iterator, upon exceeding a maximum value.
 */
export function stopOnValue<T>(iterator: IterableIterator<T>, maxValue: T): IterableIterator<T> {
    return stopWhen(iterator, (value: T) => value > maxValue);
}
