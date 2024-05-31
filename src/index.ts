// map utilities
type KeyOfMap<M extends Map<unknown, unknown>> = M extends Map<infer K, unknown> ? K : never
type ValueOfMap<M extends Map<unknown, unknown>> = M extends Map<unknown, infer V> ? V : never

/**
 * Retrieve the value in a map, or if it wasn't found, set an initial value and return that.
 *
 * @example
 * ```js
 * const map = new Map<string, number[]>()
 *
 * const arr = mapGetOrSet(map, '123', () => [])
 * //    ↳ []
 *
 * arr.push('xyz')
 * ```
 */
export function mapGetOrSet<M extends Map<unknown, unknown>, T extends () => ValueOfMap<M>>(
  map: M,
  key: KeyOfMap<M>,
  initialValue: T
): ReturnType<T> {
  let val = map.get(key)
  if (val === undefined) {
    val = initialValue()
    map.set(key, val)
  }
  return val as any
}

/**
 * Retrieve the value in an object, or if it wasn't found, set an initial value and return that.
 *
 * @example
 * ```js
 * const obj: Record<string, number[]> = {}
 *
 * const arr = objGetOrSet(obj, '123', () => [])
 * //    ↳ []
 *
 * arr.push('xyz')
 * ```
 */
export function objGetOrSet<
  O extends Record<string | number | symbol, unknown>,
  T extends () => O[keyof O]
>(obj: O, key: keyof O, initialValue: T): ReturnType<T> {
  let val = obj[key]
  if (val === undefined) {
    val = initialValue()
    obj[key] = val
  }
  return val as any
}

/**
 * Retrieve the value in an array, or if it wasn't found, set an initial value and return that.
 *
 * @example
 * ```js
 * const arr: number[] = []
 *
 * const val = arrGetOrSet(arr, 0, () => 123)
 * //    ↳ 123
 * ```
 */
export function arrGetOrSet<A extends unknown[], T extends () => A[number]>(
  arr: A,
  index: number,
  initialValue: T
): ReturnType<T> {
  let val = arr[index]
  if (val === undefined) {
    val = initialValue()
    arr[index] = val
  }
  return val as any
}
