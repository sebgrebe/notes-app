function Notes() {
  this.list = []
}

Notes.prototype.add = function(note){
  this.list.push(note);
};