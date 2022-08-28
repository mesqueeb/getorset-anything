declare type KeyOfMap<M extends Map<unknown, unknown>> = M extends Map<infer K, unknown> ? K : never;
declare type ValueOfMap<M extends Map<unknown, unknown>> = M extends Map<unknown, infer V> ? V : never;
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
export declare function mapGetOrSet<M extends Map<unknown, unknown>>(map: M, key: KeyOfMap<M>, initialValue: () => ValueOfMap<M>): ValueOfMap<M>;
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
export declare function objGetOrSet<O extends Record<string | number | symbol, unknown>>(obj: O, key: keyof O, initialValue: () => O[keyof O]): O[keyof O];
export {};
