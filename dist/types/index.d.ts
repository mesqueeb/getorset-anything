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
export declare function mapGetOrSet<M extends Map<unknown, unknown>, T extends () => ValueOfMap<M>>(map: M, key: KeyOfMap<M>, initialValue: T): ReturnType<T>;
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
export declare function objGetOrSet<O extends Record<string | number | symbol, unknown>, T extends () => O[keyof O]>(obj: O, key: keyof O, initialValue: T): ReturnType<T>;
export {};
