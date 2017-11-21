var URL_CURRENT_WEATHER = "https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=";
var URL_FORECAST_WEATHER = "https://api.openweathermap.org/data/2.5/forecast?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=";
var URL_WEATHER_ICON_PREFIX = "http://openweathermap.org/img/w/"; // sufix .png



var gJson;

function afiseazaVremea() {
    var oras = document.getElementById("input_oras").value;
    console.log(oras);

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {   

            //aici incepe tratamentul raspunsului de la server
             var json = this.responseText;
             console.log(json);
             gJson = json;
             document.getElementById("imagine_vreme").src = URL_WEATHER_ICON_PREFIX + JSON.parse(json).weather[0].icon + ".png";
             //concatenez numele variabilei cu json care contine imaginea si png
             var temperaturaAcum = JSON.parse(json).main.temp; //transforma in obiect pt a apela fiecare proprietate ca un camp
             document.getElementById("temperatura_acum").innerHTML = temperaturaAcum + " &#8451;";
             document.getElementById("descriere").innerHTML = JSON.parse(json).weather[0].description;
             document.getElementById("umiditate").innerHTML = JSON.parse(json).main.humidity + "%";
             document.getElementById("presiune").innerHTML = JSON.parse(json).main.pressure + " bari";
             document.getElementById("temperatura_curenta").innerHTML =JSON.parse(json).main.temp + " &#8451;";
             document.getElementById("minima_zilei").innerHTML = JSON.parse(json).main.temp_min + " &#8451;";
             document.getElementById("maxima_zilei").innerHTML = JSON.parse(json).main.temp_max + " &#8451;";
         }
            
    };
xhttp.open("GET", URL_CURRENT_WEATHER + oras, true); //true sincron sau asincron cu false
xhttp.send();

}

function afiseazaPrognoza() {
    var oras = document.getElementById("input_oras").value;
    console.log(oras);

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {   

            //aici incepe tratamentul raspunsului de la server
             var json = this.responseText;
             console.log(json);
             var list = JSON.parse(json).list;
             var str="";
             for(var i =0;i<list.length;i++){
                str+="<div class='ziua'>"+
                "<div class='ora'>"+list[i].dt+"</div>"+
                "<div class='temperatura'>"+list[i].main.temp+"</div>"+
                "<div class='descriere'>"+list[i].weather[0].description+"</div>"+
                "</div>"
             }
             document.getElementById("prognoza-container").innerHTML=str;
             
         }
            
    };
xhttp.open("GET",  URL_FORECAST_WEATHER + oras, true); //true sincron sau asincron cu false
xhttp.send();

}


