
var list =  [];

function addItem(){
    var item =  document.getElementById("add_item").value;
    list.push(item);
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
                <td id="item-${i}">${list[i]}</td>
                <td><button class = "buton-marcare" onclick = "addStrikeThrough(${i})"> Mark as buyed </button></td>
            </tr>
         `;
    }

    html = html + `</table>`;

    document.getElementById("tabel").innerHTML = html;
}   

function addStrikeThrough(itemNo){
    document.getElementById("item-" + itemNo).classList.add('bought-item');
}
function sort_Asc(){
    var items =  document.getElementById("item-").value;
    items.sort();
    document.getElementById("btnSort_asc").innerHTML = items;
}