var notes = new Notes();
function renderList(){
    var list_div = document.getElementById('list')
    list_div.innerHTML = "";
    var list = notes.list
    for(let i=0; i<list.length; i++){
        list_div.innerHTML += "<li><a onclick='clickLink(" + i + ")' href='#note"+i+"'>" + notes.cutToTwenty(list[i]) + "</a></li>";
    }
}

function hideHome() {
  document.getElementById('home').style.display = "none";
}

function showHome() {
  renderList();
  document.getElementById('home').style.display = "block";
}

function clickButton() {
  createNote(document.getElementById('text_input').value);
}

function createNote(input) {
  notes.add(input);
  renderList();
}

function clickLink(id) {
  console.log(id)
  hideHome()
  renderNote(id)
  showNotePage()
}

function renderNote(id) {
  var note_div = document.getElementById('note')
  var note = notes.list[id]
  note_div.innerHTML = note
}

function showNotePage() {
  document.getElementById('note_page').style.display = "block";
}

function goBack() {
  hideNotePage()
  showHome()
}

function hideNotePage() {
  document.getElementById('note_page').style.display = "none";
}

showHome()
