var list = [];

function displayItems() {
    var html = `
    <div class="wrapp-box">
    `;
    for (var i = 0; i < list.length; i++) {
        html = html + `
        <div class="boxes">
            <img src="${list[i].image}" alt="xbox">
            <p class="xbox">${list[i].name}</p>
            <p>${list[i].price}  <button class= "detalii" onclick = "detaliiProdus()"> <a href="details.html">Detalii </a></button></p>
        </div>
        `;
        if (i % 3 === 2) {
            html = html + `</div>
            
                    <div class="wrapp-box">
            `
        }
    }
    html = html + `</div>`
    document.getElementById("container-produse").innerHTML = html;
}

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




