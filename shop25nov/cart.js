function MakeGetFirebase(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Action to be performed when the document is read

            list = JSON.parse(xhttp.responseText);//list in cazul meu
            console.log(list);
            displayItems();
        }
    };
    xhttp.open("GET", "https://magazin-online.firebaseio.com/produse/.json", true);
    xhttp.send();

}


var lista_produse = [];
function displayItems(lista_produse) {
    var html = `
     <table id="myTable">

     <tr>

     <td>Nume</td>
     <td>Pret</td>
     <td>Cantitate</td>
     <td>Subtotal</td>
     <td></td>

     </tr>
     `;

     for(var i in lista produse){
         html = html + `
         <tr>
         
              <td>${lista_produse[i].name}</td>
              <td>${lista_produse[i].price}</td>
              <td><span class="butonCantitate" onclick="scadeCantitate('${i}', ${lista_produse[i].cantitate}, ${lista_produse[i].idProdus})"> - </span> ${lista_produse[i].cantitate}</td>
              <td>Subtotal</td>
              <td></td>
         
              </tr>`
     }
}