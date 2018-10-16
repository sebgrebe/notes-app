var test_div = document.getElementById('test')
console.log(test_div)


function testVarExist( call ) {
  if (call === undefined) {
    test_div.innerHTML += "Variable does not exist <br>";
  } else {
    test_div.innerHTML += "Variable exists: TEST PASSED <br>"
  }
}

function testArrayInclude( array, element ) {
  if (array.includes(element)) {
    test_div.innerHTML += "Array includes: TEST PASSED <br>"
  } else {
    test_div.innerHTML += "Element is not in array <br>";
  }
}

function testTagLength(string) {
  if ( string.length <= 20 ) {
    test_div.innerHTML += "Tag length: TEST PASSED <br>"
  } else {
    test_div.innerHTML += "Max length exceeded"
  }
}

function testShowNoteFromIndex(array,index) {
  if(array[index]){
    test_div.innerHTML += "Tag length: TEST PASSED <br>"
  } else {
    test_div.innerHTML += "Max length exceeded"
  }
}


