var test_div = document.getElementById('test');

function expect(a) {
  var toEqual = function(b) {
    return a === b;
  };

  var toExist = () => {
    return a !== undefined;
  };

  var toInclude = function(b) {
    return a.includes(b);
  };

  var toBeLessThan = function(b) {
    return a < b;
  };

  return {
    toEqual: toEqual,
    toExist: toExist,
    toInclude: toInclude,
    toBeLessThan: toBeLessThan
  };
}

function it(string, test) {
  var test_div = document.getElementById('test');
  test_div.innerHTML += string + ': Test ';

  // if (test()) {
  //   test_div.innerHTML += 'Test passing';
  // } else {
  //   test_div.innerHTML += 'Test failing';
  // }

  test_div.innerHTML += (test() ? 'passing': 'failing')
}
