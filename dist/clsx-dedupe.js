function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var clsx = _interopDefault(require('clsx'));

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var clsxd = function clsxd(arg) {
  switch (arg.constructor.name) {
    case "Object":
      return arg;

    case "Array":
      return _parseArray(arg);

    case "String":
      return _parseString(arg);
  }

  return false;
};

var _parseArray = function _parseArray(arg) {
  var flattened = arg.flat(10);
  var flatObj = flattened.map(function (x) {
    return [x, true];
  });
  return Object.fromEntries(flatObj);
};

var _parseString = function _parseString(arg) {
  var arr = arg.split(" ");
  var flatObj = arr.map(function (x) {
    return [x, true];
  });
  return Object.fromEntries(flatObj);
};

function index () {
  var i = 0,
      tmp,
      obj = {};

  while (i < arguments.length) {
    if (tmp = arguments[i++]) {
      if (val = clsxd(tmp)) {
        obj = _extends({}, obj, val);
      }
    }
  }

  return clsx(obj);
}

module.exports = index;
