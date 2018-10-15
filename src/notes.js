function Notes() {
  this.list = ['test', 'beginning', 'something']
}

Notes.prototype.add = function(note){
  this.list.push(note);
};