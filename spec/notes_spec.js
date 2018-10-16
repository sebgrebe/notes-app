
var notes = new Notes()


testVarExist(notes.list)

//
notes.list.push('hello my nameer asdf')

testArrayInclude(notes.list, 'hello my nameer asdf')
notes.list.push('hello my nameer asdfs')

notes.add("Whoop!")
testArrayInclude(notes.list, 'Whoop!')

testTagLength(cutToTwenty(notes.list[4]))