// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

function deleteFromDriverByKey(obj, key) {
  const newdriver = Object.assign({}, obj);
  delete newdriver[key];
  return newdriver;
}

function destructivelyDeleteFromDriverByKey(obj, key) {
  delete obj[key];
  return obj;
}
