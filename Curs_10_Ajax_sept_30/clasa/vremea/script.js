var URL_CURRENT_WEATHER = "https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=";
var URL_FORECAST_WEATHER = "https://api.openweathermap.org/data/2.5/forecast?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=";
var URL_WEATHER_ICON_PREFIX = "http://openweathermap.org/img/w/"; // sufix .png



var gJson;

function afiseazaVremea() {
    var oras = document.getElementById("oras").value;
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
             document.getElementById("temperatura_acum").innerHTML = temperaturaAcum;
             document.getElementById("descriere").innerHTML = JSON.parse(json).weather[0].description;
             document.getElementById("umiditate").innerHTML = JSON.parse(json).main.humidity;
             document.getElementById("presiune").innerHTML = JSON.parse(json).main.pressure;
             document.getElementById("temperatura_curenta").innerHTML =JSON.parse(json).main.temp;
             document.getElementById("minima_zilei").innerHTML = JSON.parse(json).main.temp_min;
             document.getElementById("maxima_zilei").innerHTML = JSON.parse(json).main.temp_max;
         }
            
    };
xhttp.open("GET", URL_CURRENT_WEATHER + oras, true); //true sincron sau asincron cu false
xhttp.send();

}

/* URL_FORECAST_WEATHER  pt tema,  lista de structuri cu care imi place sa lucrez, divuri cu float, length
class foreCast () */

