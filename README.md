# Get or Set Anything 🐊

<a href="https://www.npmjs.com/package/getorset-anything"><img src="https://img.shields.io/npm/v/getorset-anything.svg" alt="Total Downloads"></a>
<a href="https://www.npmjs.com/package/getorset-anything"><img src="https://img.shields.io/npm/dw/getorset-anything.svg" alt="Latest Stable Version"></a>

```
npm i getorset-anything
```

Get a Map/Obj value, or if it didn't exist yet set it and return that. Fully **TypeScript** supported! A simple & small integration.

## Motivation

I created this package because I always hated doing this over and over again:

```ts
const map = new Map<string, number[]>()

const id = 'abc'

let arr = map.get(id)
if (arr === undefined) {
  arr = []
  map.set(id, arr)
}

arr.push(100)
```

So that is exactly what `getorset-anything` does for you! 💯

`getorset-anything` has performance in mind. It won't do a `.has()` check, like other libraries do, when it found the value it will immediately return it.

## Usage

Maps

```ts
import { mapGetOrSet } from 'getorset-anything'

const map = new Map<string, number[]>()

const arr = mapGetOrSet(map, 'abc', () => [])

arr.push(100) // OK!
```

Objects

```ts
import { objGetOrSet } from 'getorset-anything'

const obj: Record<string, number[]> = {}

const arr = objGetOrSet(obj, 'abc', () => [])

arr.push(100) // OK!
```

## TypeScript Support

You don't have to do anything extra for TypeScript! It comes with awesome type support.

```ts
import { mapGetOrSet } from 'getorset-anything'

const map = new Map<string, number[]>()

const arr = mapGetOrSet(map, 'abc', () => []) // OK!
const arr2 = mapGetOrSet(map, 'abc', () => ({})) // NG! ⛔️

arr.push(100) // OK!
arr.push('100') // NG! ⛔️
```

## Meet the family

- [merge-anything 🥡](https://github.com/mesqueeb/merge-anything)
- [filter-anything ⚔️](https://github.com/mesqueeb/filter-anything)
- [find-and-replace-anything 🎣](https://github.com/mesqueeb/find-and-replace-anything)
- [compare-anything 🛰](https://github.com/mesqueeb/compare-anything)
- [copy-anything 🎭](https://github.com/mesqueeb/copy-anything)
- [flatten-anything 🏏](https://github.com/mesqueeb/flatten-anything)
- [is-what 🙉](https://github.com/mesqueeb/is-what)
