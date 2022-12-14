import { test, expect } from 'vitest'
import { mapGetOrSet, objGetOrSet } from '../src/index'

test('mapGetOrSet', () => {
  const map = new Map<string, number[]>()

  const arr = mapGetOrSet(map, 'abc', (): number[] => [])

  expect(arr).toEqual([])

  arr.push(100)

  expect(map.get('abc')).toEqual([100])
})

test('objGetOrSet', () => {
  const obj: Record<string, number[]> = {}

  const arr = objGetOrSet(obj, 'abc', (): number[] => [])

  expect(arr).toEqual([])

  arr.push(100)

  expect(obj['abc']).toEqual([100])
})

test('objGetOrSet - partial', () => {
  const obj: { [key in 'a' | 'b' | 'c']?: number } = {}

  const res = objGetOrSet(obj, 'a', () => 123)

  expect(res).toEqual(123)
})
