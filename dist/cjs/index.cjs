'use strict';

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

exports.mapGetOrSet = mapGetOrSet;
exports.objGetOrSet = objGetOrSet;
