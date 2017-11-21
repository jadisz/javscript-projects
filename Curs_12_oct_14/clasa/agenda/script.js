var contacte =  [];
var isOperatieDeModificare = false;
var globalIndexContactDeModificat;

class Contact{
    constructor (pNume, pTelefon) {
    this.nume = pNume;
    this.telefon = pTelefon;
    }
}

function addContact(){
    var contactNume =  document.getElementById("nume_contact").value;
    var contactTelefon =  document.getElementById("telefon_contact").value;
    var c = new Contact (contactNume, contactTelefon);

    contacte.push(c);

    //clears the input on add_contact
    document.getElementById('nume_contact').value = null;
    document.getElementById('telefon_contact').value = null;
}


function displayContact(){
    var html = `
    <table class= "table2">
        <tr>
            <th><b>Nume</b></th>
            <th><b>Telefon</b></th>
        </tr>
    `;
    for (var i = 0; i < contacte.length; i++){
        html = html + `
            <tr>
                <td id="contact-${i}">${contacte[i].nume}</td>
                <td id="contact-${i}">${contacte[i].telefon}</td>
                <td><button class = "buton2"; onclick="modifyContact(${i})"> modifica </button></td>
                <td><button class = "buton2"; onclick="deleteContact(${i}); displayContact()"> sterge </button></td>
            </tr>
         `;
    }

    html = html + `</table>`;

    document.getElementById("tabel").innerHTML = html;
} 


function deleteContact(indexContactDeSters){
    
   contacte.splice(indexContactDeSters, 1);

}

function modifyContact(indexContactDeModificat){
   isOperatieDeModificare = true;
   globalIndexContactDeModificat = indexContactDeModificat;
   document.getElementById("nume_contact").value = contacte[indexContactDeModificat].nume;
   document.getElementById("telefon_contact").value = contacte[indexContactDeModificat].telefon;

}

function saveModificare() {
    deleteContact(globalIndexContactDeModificat);
    addContact();
    isOperatieDeModificare = false;
}