var elevi = [];
var note = [];
var indexElevPeCareAmDatClick;

var medieNote = [];

function adaugareElev(){
    var nume = document.getElementById("nume_elev").value;
    elevi.push(nume);
     note.push([]);
    medieNote.push(0);
    document.getElementById("nume_elev").value = "";
}

function displayElev(){
    var htmlElevi = `
    <table>
        <tr>
            <th>Nume elev</th>
            <th>Medie note</th>
            <th></th>
        </tr>
         `;

    for (var i = 0; i < elevi.length; i++){
        htmlElevi = htmlElevi + `
        <tr>
            <td>${elevi[i]}</td>
            <th>${medieNote[i]}</th>
            <td>
            <button onclick="indexElevPeCareAmDatClick=${i}; displayNote();">Vezi notele </button>
            </td>
        </tr>
        `;
    }
   htmlElevi = htmlElevi + "</table>"
    document.getElementById("lista_elevi").innerHTML = htmlElevi;
}

function displayNote(){
        document.getElementById("note_wrapper").classList.add('open');

        document.getElementById("span_nume_elev").innerHTML = elevi[indexElevPeCareAmDatClick];
        document.getElementById("note_wrapper").style.display = "block";

        //pas 1 -preluam notele pe care le are elevul
        var NoteElev = note[indexElevPeCareAmDatClick];

        // pas 2 - compunem html ul cu notele elevului
        var htmlNote = "";
        for(var i = 0; i < NoteElev.length; i++){
            htmlNote = htmlNote + NoteElev[i] + "</br>";
        
        }

        //pas 3 - afisam html ul cu notele elevului in ecran

        document.getElementById("lista_note").innerHTML = htmlNote;
}

function hideNote() {
    document.getElementById("note_wrapper").classList.remove("open");
}

function adaugaNota(){
        var nota = document.getElementById("nota_elev").value;
        
        var noteElev = note[indexElevPeCareAmDatClick]; // preiau lista de note din matrice

        noteElev.push(nota); //adaug nota noua in lista

        document.getElementById("nota_elev").value = ""; //sterge nota din input introdusa de user
}

function sumaNoteElev(){
    var NoteElev = note[indexElevPeCareAmDatClick];
    var sum = 0;
    for (var i = 0; i < NoteElev.length; i++){
                  sum = sum  + parseInt(NoteElev[i]);
    }
    return sum;
}

function medieNoteElev() {
    var noteElev = note[indexElevPeCareAmDatClick];
    var sumaNote = sumaNoteElev();
    var nrNote = noteElev.length;
    var mediaNotelor = sumaNote / nrNote;
    return mediaNotelor;
}

//functii pentru SORTARE ASCENDENTA

function calculeazaMinim (){
    var min = 10; 
         for (var i = 0; i < note.length; i++){ 
            if (min > note [i]){
             min = note [i];
            }
        }
        return min;
}

function findPositionInArray(value){

     for (var i = 0; i < note.length; i++){ 
        if (value == note[i]){
            return i;
        }
    }
}
//functia sorteaza crescator

function sortAsc (){
    var sortedArray = [];
    var nrElem = note.length;

    for(var i =  0; i < nrElem; i++){
        var min = calculeazaMinim();
         var pozitieMinInArray = findPositionInArray(min);
        sortedArray.push(min);
        note.splice(pozitieMinInArray, 1);
    }
    return sortedArray;
    document.getElementById("note_elev").value = min;
}

//functii pentru SORTARE DESCENDENTA

function calculeazaMaxim (){
    var max = 0; 
    for (var i = 0; i < note.length; i++){ 
        if (max < note [i]){
        max = note [i];
        }
    }
    return max;
}

function findPositionInArray(value){

    for (var i = 0; i < note.length; i++){ 
        if (value == note[i]){
            return i; //
        }
     }
}
  //functia sorteaza descrescator

function sortDesc (){
    var sortedArray = [];
    var nrElem = note.length;

    for(var i =  0; i < nrElem; i++){
        var max = calculeazaMaxim();
        var pozitieMaxInArray = findPositionInArray(max);
        sortedArray.push(max);
        note.splice(pozitieMaxInArray, 1);
 
    }
    return sortedArray;
    document.getElementById("note_elev").value = min;
}

