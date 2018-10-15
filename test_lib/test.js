var test_div = document.getElementById('test')
console.log(test_div)


function testVarExist( call ) {
  if (call === undefined) {
    test_div.innerHTML += "Variable does not exist";
  } else {
    return true
  }
}

function testArrayInclude( array, element ) {
  if (array.includes(element)) {
    return true
  } else {
    test_div.innerHTML += "Element is not in array";
  }
}
