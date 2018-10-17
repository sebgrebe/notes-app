function Notes() {
  this.list = ['test', 'beginning', 'something']
}

Notes.prototype.add = function(note){
  this.list.push(note);
};

Notes.prototype.cutToTwenty = function(string) {
  return string.substring(0, 20)
}
