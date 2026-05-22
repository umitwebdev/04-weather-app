const API_KEY = "43d0b062cf9afab14fa5b0fb20a5bf13"; 
async function holeWetter() {
    let eingabe = document.querySelector("#stadt-eingabe");
    let stadt = eingabe.value;
    let ergebnis = document.querySelector("#ergebnis");
    if (stadt === "") {
    ergebnis.textContent = "Bitte eine Stadt eingeben.";
    return;
}

    ergebnis.textContent = "Lade...";

    let url = "https://api.openweathermap.org/data/2.5/weather?q=" 
              + stadt 
              + "&appid=" + API_KEY 
              + "&units=metric"
              + "&lang=de";

   let antwort = await fetch(url);
let data = await antwort.json();

console.log(data);

// NEU: Fehlerprüfung
if (data.cod !== 200) {
    ergebnis.textContent = "Stadt nicht gefunden.";
    return;
}

let stadt_name = data.name;
let temp = data.main.temp;
let beschreibung = data.weather[0].description;
let feuchtigkeit = data.main.humidity;
let wind = data.wind.speed;

ergebnis.innerHTML = stadt_name + ": " + temp + "°C<br>" 
                   + beschreibung 
                   + "<br>💧 " + feuchtigkeit + "%  💨 " + wind + " m/s";
}