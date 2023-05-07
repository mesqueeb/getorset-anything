'use strict';

/**
 * Retrieve the value in a map, or if it wasn't found, set an initial value and return that.
 *
 * @example
 * ```js
 * const map = new Map<string, number[]>()
 *
 * const arr = mapGetOrSet(map, '123', () => [])
 *
 * arr.push('xyz')
 * ```
 */
function mapGetOrSet(map, key, initialValue) {
    let val = map.get(key);
    if (val === undefined) {
        val = initialValue();
        map.set(key, val);
    }
    return val;
}
/**
 * Retrieve the value in an object, or if it wasn't found, set an initial value and return that.
 *
 * @example
 * ```js
 * const obj: Record<string, number[]> = {}
 *
 * const arr = objGetOrSet(obj, '123', () => [])
 *
 * arr.push('xyz')
 * ```
 */
function objGetOrSet(obj, key, initialValue) {
    let val = obj[key];
    if (val === undefined) {
        val = initialValue();
        obj[key] = val;
    }
    return val;
}

exports.mapGetOrSet = mapGetOrSet;
exports.objGetOrSet = objGetOrSet;
