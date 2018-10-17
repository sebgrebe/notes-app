var notes = new Notes();

console.log('Exists: ' + expect(notes.list).toExist());

// Working
it('should have a list', () => expect(notes.list).toExist());

// Failing
it('should have a list', function () {
  expect(notes.list).toExist()
});

// it('should include the string', () =>
//   notes.add('hello my nameer asdf');
// expect(notes.list).toInclude('hello my nameer asdf'));

// notes.add('hello my nameer asdf');

// console.log(
//   'Includes: ' + expect(notes.list).toInclude('hello my nameer asdf')
// );

// it('should include', function() {
//   notes.add('hello my nameer asdf');
//   expect(notes.list).toInclude('hello my nameer asdf');
// });

// notes.list.push('This string is a lot longer than twenty characters');

// console.log(
//   'Exactly Twenty: ' +
//     expect(notes.cutToTwenty(notes.list[4]).length).toEqual(20)
// );

// console.log(
//   'Less Than Twenty: ' +
//     expect(notes.cutToTwenty(notes.list[4]).length).toBeLessThan(21)
// );
