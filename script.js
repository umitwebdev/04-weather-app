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

    // Min/Max kommt aus holeForecast – wird dort berechnet und zurückgegeben
    let { minHeute, maxHeute } = await holeForecast(stadt);

    ergebnis.innerHTML = "<img src='" + icon_url + "'><br>"
                       + stadt_name + ": " + temp + "°C  (gefühlt wie " + fuehlt_sich_an + "°C)<br>"
                       + minHeute + "° / " + maxHeute + "°C  |  " + beschreibung
                       + "<br>💧 " + feuchtigkeit + "%  💨 " + wind + " m/s";
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

    // Heutiges Datum als String z.B. "2026-05-25"
    let heute = new Date().toISOString().slice(0, 10);

    let minHeute = 999;
    let maxHeute = -999;
    let min = 999;
    let max = -999;

    for (let i = 0; i < eintraege.length; i++) {
        let temp = Math.round(eintraege[i].main.temp);
        let datumEintrag = eintraege[i].dt_txt.slice(0, 10);

        // Min/Max für heute separat tracken
        if (datumEintrag === heute) {
            if (temp < minHeute) { minHeute = temp; }
            if (temp > maxHeute) { maxHeute = temp; }
        }

        // Min/Max für Forecast-Karten
        if (temp < min) { min = temp; }
        if (temp > max) { max = temp; }

        if (eintraege[i].dt_txt.includes("12:00:00")) {
            let datumRaw = new Date(eintraege[i].dt_txt);
            let wochentage = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
            let wochentag = wochentage[datumRaw.getDay()];
            let datum = wochentag + " " + eintraege[i].dt_txt.slice(8, 10) + "." + eintraege[i].dt_txt.slice(5, 7) + ".";
            let icon_code = eintraege[i].weather[0].icon;
            let icon_url = "https://openweathermap.org/img/wn/" + icon_code + "@2x.png";

            forecast.innerHTML += "<div class='forecast-tag'>"
                                + datum + "<br>"
                                + "<img src='" + icon_url + "'><br>"
                                + min + "° / " + max + "°C"
                                + "</div>";

            min = 999;
            max = -999;
        }
    }

    // Werte zurückgeben an holeWetter()
    return { minHeute, maxHeute };
}