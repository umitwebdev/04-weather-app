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

    if (data.cod !== 200) {
        ergebnis.textContent = "Stadt nicht gefunden.";
        return;
    }

    let stadt_name = data.name;
    let temp = Math.round(data.main.temp);
    let fuehlt_sich_an = Math.round(data.main.feels_like);
    let beschreibung = data.weather[0].description;
    let feuchtigkeit = data.main.humidity;
    let wind = data.wind.speed;
    let icon_code = data.weather[0].icon;
    let icon_url = "https://openweathermap.org/img/wn/" + icon_code + "@4x.png";

    ergebnis.innerHTML = "<img src='" + icon_url + "'><br>"
                       + stadt_name + ": " + temp + "°C  (gefühlt wie " + fuehlt_sich_an + "°C)<br>" 
                       + beschreibung 
                       + "<br>💧 " + feuchtigkeit + "%  💨 " + wind + " m/s";

    holeForecast(stadt);
}

async function holeForecast(stadt) {
    let url = "https://api.openweathermap.org/data/2.5/forecast?q=" 
              + stadt 
              + "&appid=" + API_KEY 
              + "&units=metric"
              + "&lang=de";

    let antwort = await fetch(url);
    let data = await antwort.json();

    let eintraege = data.list;
    let forecast = document.querySelector("#forecast");
    forecast.innerHTML = "";

    for (let i = 0; i < eintraege.length; i++) {
        if (eintraege[i].dt_txt.includes("12:00:00")) {
            let datumRaw = new Date(eintraege[i].dt_txt);
            let wochentage = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
            let wochentag = wochentage[datumRaw.getDay()];
            let datum = wochentag + " " + eintraege[i].dt_txt.slice(8, 10) + "." + eintraege[i].dt_txt.slice(5, 7) + ".";
            let temp = Math.round(eintraege[i].main.temp);
            let icon_code = eintraege[i].weather[0].icon;
            let icon_url = "https://openweathermap.org/img/wn/" + icon_code + "@2x.png";

            forecast.innerHTML += "<div class='forecast-tag'>"
                                + datum + "<br>"
                                + "<img src='" + icon_url + "'><br>"
                                + temp + "°C"
                                + "</div>";
        }
    }
}