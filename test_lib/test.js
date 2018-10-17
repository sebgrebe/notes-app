var test_div = document.getElementById('test')

function expect(a) {
  var toEqual = function (b) {
    return a === b;
  }

  var toExist = function () {
    return a !== undefined;
  }

  var toInclude = function (b) {
    return a.includes(b);
  }

  var toBeLessThan = function(b) {
    return a < b
  }

  return {
    toEqual: toEqual,
    toExist: toExist,
    toInclude: toInclude,
    toBeLessThan: toBeLessThan
  }
}
