<<<<<<< HEAD
var list = [
    {
        "name": " Xbox 360 Wireless Controller, USB, negru",
        "price": "164 Lei",
        "detalii": "",
        "image": "xbox164.jpg"
    },
    {
        "name": " Xbox 360 Wireless Controller, USB, negru",
        "price": "164 Lei",
        "detalii": "",
        "image": "xbox164.jpg"
    },
    {
        "name": " Xbox 360 Wireless Controller, USB, negru",
        "price": "164 Lei",
        "detalii": "",
        "image": "xbox164.jpg"
    },
    {
        "name": " Xbox 360 Wireless Controller, USB, negru",
        "price": "164 Lei",
        "detalii": "",
        "image": "xbox164.jpg"
    },
    {
        "name": " Xbox 360 Wireless Controller, USB, negru",
        "price": "164 Lei",
        "detalii": "",
        "image": "xbox164.jpg"
    },
    {
        "name": " Xbox 360 Wireless Controller, USB, negru",
        "price": "164 Lei",
        "detalii": "",
        "image": "xbox164.jpg"
    }
]



function displayItems() {
    var html = `
    <div class="wrapp-box">
    `;
    for (var i = 0; i < list.length; i++) {


        html = html + `
        <span class="boxes">
        <img src="${list[i].image}" alt="xbox">
        <p class="xbox">${list[i].name}</p>
        <p>${list[i].price}  <button class= "detalii" onclick = "detaliiProdus()"> Detalii </button></p>
        </span>
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
displayItems();


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Action to be performed when the document is read

    var menu = JSON.parse(xhttp.responseText);//list in cazul meu
      //var 1  
     /*     for( var i in menu){
           if(!menu.HasOwnProperty(i)){continue;} 
           //code goes here */
    //var 2
    var menuKeys = Object.keys(menu);
        for( var i; i< menuKeys; i++){
           var menuItem= menu[menuKeys[i]];
           str+=`
           <div>${menuItem.nume}</div>
           <div>${menuItem.ingrediente}</div>
           <div>${menuItem.reteta}</div>
           <div style= "border-bottom: 1px solid black;"> &nbsp;</div>
        `;
       }
       //code goes here
    }
};
xhttp.open("GET", "https://restaurant-menu-v1.firebaseio.com/menu/.json", true);
xhttp.send();

function draw(menu){
    //var 2
    var str = "";

    var menuKeys = Object.keys(menu);
    for(var i=0;i<menuKeys.length;i++ ){
        var menuItem = menu[menuKeys[i]];

        str+=`
            <div>${menuItem.nume}</div>
            <div>${menuItem.ingrediente}</div>
            <div>${menuItem.reteta}</div>
            <div style="border-bottom: 1px solid black;"> &nbsp;</div>
            `;
        //code goes here
    }

    document.querySelector("body").innerHTML=str;
}



=======
var list = [
    {
        "name": " Xbox 360 Wireless Controller, USB, negru",
        "price": "164 Lei",
        "detalii": "",
        "image": "xbox164.jpg"
    },
    {
        "name": " Xbox 360 Wireless Controller, USB, negru",
        "price": "164 Lei",
        "detalii": "",
        "image": "xbox164.jpg"
    },
    {
        "name": " Xbox 360 Wireless Controller, USB, negru",
        "price": "164 Lei",
        "detalii": "",
        "image": "xbox164.jpg"
    },
    {
        "name": " Xbox 360 Wireless Controller, USB, negru",
        "price": "164 Lei",
        "detalii": "",
        "image": "xbox164.jpg"
    },
    {
        "name": " Xbox 360 Wireless Controller, USB, negru",
        "price": "164 Lei",
        "detalii": "",
        "image": "xbox164.jpg"
    },
    {
        "name": " Xbox 360 Wireless Controller, USB, negru",
        "price": "164 Lei",
        "detalii": "",
        "image": "xbox164.jpg"
    }
]



function displayItems() {
    var html = `
    <div class="wrapp-box">
    `;
    for (var i = 0; i < list.length; i++) {


        html = html + `
        <span class="boxes">
        <img src="${list[i].image}" alt="xbox">
        <p class="xbox">${list[i].name}</p>
        <p>${list[i].price}  <button class= "detalii" onclick = "detaliiProdus()"> Detalii </button></p>
        </span>
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
displayItems();


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Action to be performed when the document is read

    var menu = JSON.parse(xhttp.responseText);//list in cazul meu
      //var 1  
     /*     for( var i in menu){
           if(!menu.HasOwnProperty(i)){continue;} 
           //code goes here */
    //var 2
    var menuKeys = Object.keys(menu);
        for( var i; i< menuKeys; i++){
           var menuItem= menu[menuKeys[i]];
           str+=`
           <div>${menuItem.nume}</div>
           <div>${menuItem.ingrediente}</div>
           <div>${menuItem.reteta}</div>
           <div style= "border-bottom: 1px solid black;"> &nbsp;</div>
        `;
       }
       //code goes here
    }
};
xhttp.open("GET", "https://restaurant-menu-v1.firebaseio.com/menu/.json", true);
xhttp.send();

function draw(menu){
    //var 2
    var str = "";

    var menuKeys = Object.keys(menu);
    for(var i=0;i<menuKeys.length;i++ ){
        var menuItem = menu[menuKeys[i]];

        str+=`
            <div>${menuItem.nume}</div>
            <div>${menuItem.ingrediente}</div>
            <div>${menuItem.reteta}</div>
            <div style="border-bottom: 1px solid black;"> &nbsp;</div>
            `;
        //code goes here
    }

    document.querySelector("body").innerHTML=str;
}



>>>>>>> a2a6c4202e9dc203e4905681557b046e043f6279
