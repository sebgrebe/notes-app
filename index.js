var note = new Notes();
function renderList(){
    var list_div = document.getElementById('list')
    var list = note.list
    for(let i=0; i<list.length; i++){
        
        list_div.innerHTML += "<li><a href='#note"+i+"'>" + list[i] + "</a></li>";
    }
}
renderList();