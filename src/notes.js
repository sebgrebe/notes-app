function Notes() {
  this.list = ['test', 'beginning', 'something']
}

Notes.prototype.add = function(note){
  this.list.push(note);
};


Notes.prototype.twentyCharTags = function(){
  let tempArr = [];
  for(let i=0; i<this.list.length; i++){
    tempArr.push(this.list[i].substring(0,19));
  }
  return tempArr;
};

Notes.prototype.cutToTwenty = function(string) {
  return string.substring(0, 19)
}