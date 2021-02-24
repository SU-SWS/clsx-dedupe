import clsx from 'clsx'

/**
 * clsx Dedupe function.
 *
 * For each of the arguments passed to the function parse them into an object
 * so we can send it through to clsx
 */
const _clsxd = (arg) => {

  switch (arg.constructor.name) {
    case "Object":
      return arg;

    case "Array":
      return _parseArray(arg);

    case "String":
      return _parseString(arg);
  }

  return false
}

/**
 *
 * @param {array} arg
 *   An array of css classes nested up to 10 deep.
 *
 * @returns {object}
 *  An object keyed with each of the css classes and true as the value.
 */
const _parseArray = (arg) => {
  const flattened = arg.flat(10)
  const flatObj = flattened.map(x => [x, true])
  return Object.fromEntries(flatObj);
}

/**
 *
 * @param {string} arg
 *   A string of css classes separated by a space.
 *
 * @returns {object}
 *  An object keyed with each of the css classes and true as the value.
 */
const _parseString = (arg) => {
  const arr = arg.split(" ")
  const flatObj = arr.map(x => [x, true])
  return Object.fromEntries(flatObj);
}


/**
 * Entry Point.
 *
 * Arguments pulled from the ether.
 */
export default function clsxd() {
  let i = 0, tmp, val, obj = {};
  while (i < arguments.length) {
    if (tmp = arguments[i++]) {
      if (val = _clsxd(tmp)) {
        obj = {...obj, ...val}
      }
    }
  }

  return clsx(obj);
}
