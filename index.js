var note = new Notes();
function renderList(){
    var list_div = document.getElementById('list')
    list_div.innerHTML = "";
    var list = note.list
    for(let i=0; i<list.length; i++){
        list_div.innerHTML += "<li><a href='#note"+i+"'>" + list[i] + "</a></li>";
    }
}

function hideHome() {
  document.getElementById('home').style.display = "none";
}

function showHome() {
  document.getElementById('home').style.display = "block";
}

function clickButton() {
  createNote(document.getElementById('text_input').value);
}

function createNote(input) {
  note.add(input);
  renderList();
}

function showNote(id) {
  var note_div = document.getElementById()
}


renderList();
// hideHome()
showHome()
