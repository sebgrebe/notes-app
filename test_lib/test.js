var test_div = document.getElementById('test');

const expect = (a) => ({
  toEqual: (b) => {
    return a === b;
  },

  toExist: () => {
    return a !== undefined;
  },

  toInclude: (b) => {
    return a.includes(b);
  },

  toBeLessThan: (b) => {
    return a < b;
  }
});

const it = (string, test) => {
  var test_div = document.getElementById('test');

  test_div.innerHTML += string + ': Test ';

  // if (test()) {
  //   test_div.innerHTML += 'passing';
  // } else {
  //   test_div.innerHTML += 'failing';
  // }

  // This is equal to the above
  test_div.innerHTML += (test()) ? 'passing': 'failing'
}
