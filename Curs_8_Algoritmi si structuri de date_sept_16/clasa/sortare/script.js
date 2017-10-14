
var note = [];
function generateRandomArray() {
    var randomNote = [];
    for (var i = 0; i < 10; i++) {
        var valoareRandom = generateRandomNumberBetween0and10();
        randomNote.push(valoareRandom);
    }
    return randomNote;
}

function displayNote(note) {
    var noteHtml = "";
    for (i = 0; i < note.length; i++) {
        noteHtml += "<div>" + note[i] + "</div>";
    }
    document.getElementById("note").innerHTML = noteHtml;
}

function generateRandomNumberBetween0and10() {
    return Math.floor(Math.random() * 10);
}

function sortAsc(note) {
}

function calculeazaMaxim(note) {
    var max = 0;
    for (var i = 0; i < note.length; i++) {
        if (max < note[i]) {
            max = note[i];
        }
    }
    return max;
}

function calculeazaMinim(note) {
    var min = 99999; //sau primul element din vector este min
    for (var i = 0; i < note.length; i++) {
        if (note[i] < min) {
            min = note[i];
        }
    }
    return min;
}

function findPositionInArray(note, value) {
    for (var i = 0; i < note.length; i++) {
        if (value == note[i]) {
            return i; 
        }
    }
}

function sortDesc(note) {
    note = note.slice();
    var sortedArray = [];
    var nrElem = note.length;

    for (var i = 0; i < nrElem; i++) {
        var max = calculeazaMaxim(note);
        var pozitieMaxInArray = findPositionInArray(note, max);
        sortedArray.push(max);
        note.splice(pozitieMaxInArray, 1);

    }
    displayNote(sortedArray);
    return sortedArray;
}

function sortAsc(note) {
    note = note.slice();
    var sortedArray = [];
    var nrElem = note.length;

    for (var i = 0; i < nrElem; i++) {
        var min = calculeazaMinim(note);
        var pozitieMinInArray = findPositionInArray(note, min);
        sortedArray.push(min);
        note.splice(pozitieMinInArray, 1);
    }
    displayNote(sortedArray);
    return sortedArray;
}