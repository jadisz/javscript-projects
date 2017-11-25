<<<<<<< HEAD

var list =  [];

function addItem(){
    var item =  document.getElementById("add_item").value;
    list.push(new String(item));
    //clears the input on add_item
    document.getElementById('add_item').value = null;
}

function displayItems(){
    var html = `
    <table>
        <tr>
            <th><h3 style="font-family: Georgia; font-size: 12px"><b>Item description</b></h3></th>
            <th><h3 style="font-family: Georgia; font-size: 12px"><b>Action</b></h3></th>
        </tr>
`;
    for (var i = 0; i < list.length; i++){
        html = html + `
            <tr>
                <td id="item-${i}" class="${list[i].buyed ? 'bought-item' : ''}">${list[i]}</td>
                <td><button class = "buton-marcare" onclick = "addStrikeThrough(${i})"> Mark as buyed </button></td>
            </tr>
         `;
    }

    html = html + `</table>`;

    document.getElementById("tabel").innerHTML = html;
}   

function addStrikeThrough(itemNo){
    // document.getElementById("item-" + itemNo).classList.add('bought-item');
    list[itemNo].buyed = true;
    displayItems();
}

function sort_Asc(){
    list.sort();
    displayItems();
}

function sort_Desc(){
    list.sort();
    list.reverse();
    displayItems();
=======

var list =  [];

function addItem(){
    var item =  document.getElementById("add_item").value;
    list.push(new String(item));
    //clears the input on add_item
    document.getElementById('add_item').value = null;
}

function displayItems(){
    var html = `
    <table>
        <tr>
            <th><h3 style="font-family: Georgia; font-size: 12px"><b>Item description</b></h3></th>
            <th><h3 style="font-family: Georgia; font-size: 12px"><b>Action</b></h3></th>
        </tr>
`;
    for (var i = 0; i < list.length; i++){
        html = html + `
            <tr>
                <td id="item-${i}" class="${list[i].buyed ? 'bought-item' : ''}">${list[i]}</td>
                <td><button class = "buton-marcare" onclick = "addStrikeThrough(${i})"> Mark as buyed </button></td>
            </tr>
         `;
    }

    html = html + `</table>`;

    document.getElementById("tabel").innerHTML = html;
}   

function addStrikeThrough(itemNo){
    // document.getElementById("item-" + itemNo).classList.add('bought-item');
    list[itemNo].buyed = true;
    displayItems();
}

function sort_Asc(){
    list.sort();
    displayItems();
}

function sort_Desc(){
    list.sort();
    list.reverse();
    displayItems();
>>>>>>> a2a6c4202e9dc203e4905681557b046e043f6279
}