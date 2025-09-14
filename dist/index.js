/**
 * Retrieve the value in a map, or if it wasn't found, set an initial value and return that.
 *
 * @example
 *   ;```js
 *   const map = new Map<string, number[]>()
 *
 *   const arr = mapGetOrSet(map, '123', () => [])
 *   //    ↳ []
 *
 *   arr.push('xyz')
 *   ```
 */
export function mapGetOrSet(map, key, initialValue) {
    let val = map.get(key);
    if (val === undefined) {
        val = initialValue();
        map.set(key, val);
    }
    return val;
}
/**
 * Retrieve the value in a weak map, or if it wasn't found, set an initial value and return that.
 *
 * @example
 *   ;```js
 *   const map = new WeakMap<string, number[]>()
 *
 *   const arr = weakMapGetOrSet(map, obj, () => [])
 *   //    ↳ []
 *
 *   arr.push('xyz')
 *   ```
 */
export function weakMapGetOrSet(map, key, initialValue) {
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
 *   ;```js
 *   const obj: Record<string, number[]> = {}
 *
 *   const arr = objGetOrSet(obj, '123', () => [])
 *   //    ↳ []
 *
 *   arr.push('xyz')
 *   ```
 */
export function objGetOrSet(obj, key, initialValue) {
    let val = obj[key];
    if (val === undefined) {
        val = initialValue();
        obj[key] = val;
    }
    return val;
}
/**
 * Retrieve the value in an array, or if it wasn't found, set an initial value and return that.
 *
 * @example
 *   ;```js
 *   const arr: number[] = []
 *
 *   const val = arrGetOrSet(arr, 0, () => 123)
 *   //    ↳ 123
 *   ```
 */
export function arrGetOrSet(arr, index, initialValue) {
    let val = arr[index];
    if (val === undefined) {
        val = initialValue();
        arr[index] = val;
    }
    return val;
}
