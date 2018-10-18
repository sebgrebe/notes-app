var notes = new Notes();

describe(".list", function() {
  it('should have a list', function() {
    return expect(notes.list).toExist()
  });
})

describe(".add", function() {
  it('adds a note to the list', function() {
    notes.add("Hi")
    return expect(notes.list).toInclude("Hi")
  });
})

describe(".cutToTwenty", function() {
  it('cuts note to twenty', function() {
    return expect(notes.cutToTwenty("This is a very long note, longer than 20 character").length).toBeLessThan(21)
  });  
})
