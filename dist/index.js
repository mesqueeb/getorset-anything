function mapGetOrSet(map, key, initialValue) {
  let val = map.get(key);
  if (val === void 0) {
    val = initialValue();
    map.set(key, val);
  }
  return val;
}
function objGetOrSet(obj, key, initialValue) {
  let val = obj[key];
  if (val === void 0) {
    val = initialValue();
    obj[key] = val;
  }
  return val;
}
function arrGetOrSet(arr, index, initialValue) {
  let val = arr[index];
  if (val === void 0) {
    val = initialValue();
    arr[index] = val;
  }
  return val;
}

export { arrGetOrSet, mapGetOrSet, objGetOrSet };
