var notes = new Notes();

console.log('exist: ' + expect(notes.list).toExist());


notes.add('hello my nameer asdf');

console.log(
  'includes: ' + expect(notes.list).toInclude('hello my nameer asdf')
);

notes.list.push('hello my nameer asdffgasgadfses');

console.log(
  'Twenty: ' + expect(notes.cutToTwenty(notes.list[4]).length).toBeLessThan(21)
);
