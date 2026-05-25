const API_KEY = "43d0b062cf9afab14fa5b0fb20a5bf13";
let alleEintraege = [];
let aktiverChart = null;
let aktiversRegenChart = null;
let aktuellerText = "";

const WOCHENTAGE = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];

const STADT_POSITIONEN = [
    { x: 0, y: 3 }, { x: 0, y: 12 }, { x: 0, y: 21 }, { x: 0, y: 30 }, { x: 0, y: 39 },
    { x: 0, y: 48 }, { x: 0, y: 57 }, { x: 0, y: 66 }, { x: 0, y: 75 }, { x: 0, y: 84 },
    { x: 9, y: 6 }, { x: 9, y: 16 }, { x: 9, y: 26 }, { x: 9, y: 36 }, { x: 9, y: 46 },
    { x: 9, y: 56 }, { x: 9, y: 66 }, { x: 9, y: 76 }, { x: 9, y: 86 }, { x: 9, y: 93 },
    { x: 18, y: 8 }, { x: 18, y: 19 }, { x: 18, y: 30 }, { x: 18, y: 41 }, { x: 18, y: 52 },
    { x: 18, y: 63 }, { x: 18, y: 74 }, { x: 18, y: 83 }, { x: 24, y: 10 }, { x: 24, y: 55 },
    { x: 68, y: 3 }, { x: 68, y: 12 }, { x: 68, y: 21 }, { x: 68, y: 30 }, { x: 68, y: 39 },
    { x: 68, y: 48 }, { x: 68, y: 57 }, { x: 68, y: 66 }, { x: 68, y: 75 }, { x: 68, y: 84 },
    { x: 76, y: 6 }, { x: 76, y: 16 }, { x: 76, y: 26 }, { x: 76, y: 36 }, { x: 76, y: 46 },
    { x: 76, y: 56 }, { x: 76, y: 66 }, { x: 76, y: 76 }, { x: 76, y: 86 }, { x: 76, y: 93 },
    { x: 84, y: 8 }, { x: 84, y: 19 }, { x: 84, y: 30 }, { x: 84, y: 41 }, { x: 84, y: 52 },
    { x: 84, y: 63 }, { x: 84, y: 74 }, { x: 84, y: 83 }, { x: 90, y: 10 }, { x: 90, y: 55 }
];

const CHART_OPTIONEN_BASE = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
        x: {
            ticks: { color: "rgba(255,255,255,0.6)" },
            grid: { color: "rgba(255,255,255,0.05)" }
        },
        y: {
            ticks: { color: "rgba(255,255,255,0.6)" },
            grid: { color: "rgba(255,255,255,0.05)" }
        }
    }
};

function formatDatum(dtTxt) {
    let datumRaw = new Date(dtTxt);
    let wochentag = WOCHENTAGE[datumRaw.getDay()];
    return wochentag + " " + dtTxt.slice(8, 10) + "." + dtTxt.slice(5, 7) + ".";
}

function iconUrl(code, groesse = "2x") {
    return "https://openweathermap.org/img/wn/" + code + "@" + groesse + ".png";
}

function startIntro() {
    let overlay = document.querySelector("#intro-overlay");
    overlay.innerHTML = "";

    stadtFakten.forEach(function(eintrag, i) {
        let el = document.createElement("div");
        el.className = "schwebende-stadt";
        el.innerHTML = eintrag.land + " " + eintrag.name;

        let pos = STADT_POSITIONEN[i] || { x: Math.random() * 80, y: 50 };
        let vonOben = i % 2 === 0;
        let dauer = Math.random() * 3 + 8;
        let verzoegerung = i * 0.1;
        let alpha = Math.random() * 0.3 + 0.5;

        el.style.left = pos.x + "vw";
        el.style.top = vonOben ? "-50px" : "auto";
        el.style.bottom = vonOben ? "auto" : "-50px";
        el.style.fontSize = (Math.random() * 8 + 12) + "px";
        el.style.opacity = "0";
        el.style.setProperty("--start-y", pos.y + "vh");
        el.style.animationName = vonOben ? "schwebeTief" : "schwebeHoch";
        el.style.animationDuration = dauer + "s";
        el.style.animationDelay = verzoegerung + "s";
        el.style.animationIterationCount = "infinite";
        el.style.animationTimingFunction = "ease-in-out";

        el.addEventListener("click", function() {
            document.querySelector("#stadt-eingabe").value = eintrag.name;
            overlay.style.pointerEvents = "none";
            holeWetter();
        });

        overlay.appendChild(el);

        setTimeout(function(element, a) {
            element.style.opacity = a;
        }, verzoegerung * 1000, el, alpha);
    });
}

async function holeWetter() {
    let eingabe = document.querySelector("#stadt-eingabe");
    let stadt = eingabe.value.trim();
    let ergebnis = document.querySelector("#ergebnis");

    if (!stadt) {
        ergebnis.textContent = "Bitte eine Stadt eingeben.";
        return;
    }

    ergebnis.textContent = "Lade...";

    let url = "https://api.openweathermap.org/data/2.5/weather?q="
              + encodeURIComponent(stadt)
              + "&appid=" + API_KEY
              + "&units=metric&lang=de";

    let data = await fetch(url).then(r => r.json());

    if (data.cod !== 200) {
        ergebnis.textContent = "Stadt nicht gefunden.";
        return;
    }

    let { name, main, weather, wind } = data;
    let temp = Math.round(main.temp);
    let fuehlt = Math.round(main.feels_like);
    let { minHeute, maxHeute, regenHeute } = await holeForecast(stadt);

    ergebnis.innerHTML = "<img src='" + iconUrl(weather[0].icon, "4x") + "'><br>"
                       + name + ": " + temp + "°C (gefühlt wie " + fuehlt + "°C)<br>"
                       + minHeute + "° / " + maxHeute + "°C | " + weather[0].description
                       + "<br>💧 " + main.humidity + "%  💨 " + wind.speed + " m/s  🌧 " + regenHeute + "%";

    holeFakten(name);
}

async function holeForecast(stadt) {
    let url = "https://api.openweathermap.org/data/2.5/forecast?q="
              + encodeURIComponent(stadt)
              + "&appid=" + API_KEY
              + "&units=metric&lang=de";

    let data = await fetch(url).then(r => r.json());
    alleEintraege = data.list;

    let forecast = document.querySelector("#forecast");
    forecast.innerHTML = "";

    let heute = new Date().toISOString().slice(0, 10);
    let minHeute = 999, maxHeute = -999, regenHeute = 0;
    let min = 999, max = -999, maxRegen = 0;

    for (let eintrag of alleEintraege) {
        let temp = Math.round(eintrag.main.temp);
        let pop = Math.round(eintrag.pop * 100);
        let datum = eintrag.dt_txt.slice(0, 10);

        if (datum === heute) {
            if (temp < minHeute) minHeute = temp;
            if (temp > maxHeute) maxHeute = temp;
            if (pop > regenHeute) regenHeute = pop;
        }

        if (temp < min) min = temp;
        if (temp > max) max = temp;
        if (pop > maxRegen) maxRegen = pop;

        if (eintrag.dt_txt.includes("12:00:00")) {
            forecast.innerHTML += "<div class='forecast-tag' onclick='zeigeTagesverlauf(\"" + datum + "\")'>"
                                + formatDatum(eintrag.dt_txt) + "<br>"
                                + "<img src='" + iconUrl(eintrag.weather[0].icon) + "'><br>"
                                + min + "° / " + max + "°C<br>"
                                + "🌧 " + maxRegen + "%"
                                + "</div>";
            min = 999; max = -999; maxRegen = 0;
        }
    }

    zeigeTagesverlauf(heute);
    return { minHeute, maxHeute, regenHeute };
}

function zeigeTagesverlauf(datum) {
    let tagesEintraege = alleEintraege.filter(e => e.dt_txt.slice(0, 10) === datum);

    let stunden = tagesEintraege.map(e => e.dt_txt.slice(11, 16));
    let temperaturen = tagesEintraege.map(e => Math.round(e.main.temp));
    let regenWerte = tagesEintraege.map(e => Math.round(e.pop * 100));

    document.querySelector("#chart-container").classList.add("aktiv");

    if (aktiverChart) { aktiverChart.destroy(); }
    if (aktiversRegenChart) { aktiversRegenChart.destroy(); }

    let tempOptionen = JSON.parse(JSON.stringify(CHART_OPTIONEN_BASE));
    tempOptionen.plugins.title = { display: true, text: "Temperaturverlauf", color: "rgba(255,255,255,0.6)", font: { size: 12, weight: "normal" } };
    tempOptionen.scales.y.title = { display: true, text: "°C", color: "rgba(255,255,255,0.6)" };

    aktiverChart = new Chart(document.querySelector("#temp-chart").getContext("2d"), {
        type: "line",
        data: {
            labels: stunden,
            datasets: [{
                data: temperaturen,
                borderColor: "#667eea",
                backgroundColor: "rgba(102, 126, 234, 0.15)",
                borderWidth: 2,
                pointBackgroundColor: "#667eea",
                pointRadius: 4,
                fill: true,
                tension: 0.4
            }]
        },
        options: tempOptionen
    });

    let regenOptionen = JSON.parse(JSON.stringify(CHART_OPTIONEN_BASE));
    regenOptionen.plugins.title = { display: true, text: "Regenwahrscheinlichkeit", color: "rgba(255,255,255,0.6)", font: { size: 12, weight: "normal" } };
    regenOptionen.scales.y.min = 0;
    regenOptionen.scales.y.max = 100;
    regenOptionen.scales.y.title = { display: true, text: "%", color: "rgba(255,255,255,0.6)" };

    aktiversRegenChart = new Chart(document.querySelector("#regen-chart").getContext("2d"), {
        type: "bar",
        data: {
            labels: stunden,
            datasets: [{
                data: regenWerte,
                backgroundColor: "rgba(56, 189, 248, 0.5)",
                borderColor: "rgba(56, 189, 248, 0.9)",
                borderWidth: 1,
                borderRadius: 4
            }]
        },
        options: regenOptionen
    });

    document.querySelectorAll(".forecast-tag").forEach(function(karte) {
        karte.classList.toggle("aktiv", karte.getAttribute("onclick").includes(datum));
    });
}

async function holeFakten(stadt) {
    let faktenBox = document.querySelector("#fakten");
    faktenBox.classList.add("aktiv");

    let eintrag = stadtFakten.find(s => s.name.toLowerCase() === stadt.toLowerCase());

    let vorleseBtn = "<button onclick='toggleVorlesen()' id='vorlese-btn' style='background: transparent; border: 1px solid rgba(255,255,255,0.2); color: rgba(255,255,255,0.6); padding: 6px 12px; border-radius: 20px; font-size: 0.8rem; cursor: pointer; width: auto; letter-spacing: 0;'>🔊 Vorlesen</button>";

    if (eintrag) {
        aktuellerText = eintrag.fakten;
        faktenBox.innerHTML = "<div class='fakten-titel'>📚 Wusstest du?</div>" + eintrag.fakten + "<br><br>" + vorleseBtn;
    } else {
        let data = await fetch("https://de.wikipedia.org/api/rest_v1/page/summary/" + encodeURIComponent(stadt)).then(r => r.json());

        if (data.type === "disambiguation" || !data.extract) {
            faktenBox.innerHTML = "<div class='fakten-titel'>📚 Wusstest du?</div>Keine Infos gefunden.";
            return;
        }

        aktuellerText = data.extract.length > 300 ? data.extract.slice(0, 300) + "..." : data.extract;
        faktenBox.innerHTML = "<div class='fakten-titel'>📚 Wusstest du?</div>" + aktuellerText + "<br><br>" + vorleseBtn
                            + " <a href='https://de.wikipedia.org/wiki/" + encodeURIComponent(stadt) + "' target='_blank' style='color: rgba(102,126,234,0.9); font-size: 0.8rem;'>📖 Mehr auf Wikipedia</a>";
    }
}

function toggleVorlesen() {
    let btn = document.querySelector("#vorlese-btn");

    if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
        btn.textContent = "🔊 Vorlesen";
        return;
    }

    let utterance = new SpeechSynthesisUtterance(aktuellerText);
    utterance.lang = "de-DE";
    utterance.onend = function() { btn.textContent = "🔊 Vorlesen"; };
    btn.textContent = "⏹ Stopp";
    speechSynthesis.speak(utterance);
}

function holeStandort() {
    let ergebnis = document.querySelector("#ergebnis");

    if (!navigator.geolocation) {
        ergebnis.textContent = "Geolocation wird von deinem Browser nicht unterstützt.";
        return;
    }

    ergebnis.textContent = "Standort wird ermittelt...";

    navigator.geolocation.getCurrentPosition(
        async function(position) {
            let { latitude: lat, longitude: lon } = position.coords;
            let data = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + API_KEY + "&units=metric&lang=de").then(r => r.json());

            if (data.cod !== 200) {
                document.querySelector("#ergebnis").textContent = "Standort konnte nicht geladen werden.";
                return;
            }

            document.querySelector("#stadt-eingabe").value = data.name;
            holeWetter();
        },
        function() {
            document.querySelector("#ergebnis").textContent = "Standort-Zugriff verweigert.";
        }
    );
}

let vorschlagTimeout = null;

document.querySelector("#stadt-eingabe").addEventListener("input", function() {
    clearTimeout(vorschlagTimeout);
    let wert = this.value;

    if (wert.length < 3) {
        document.querySelector("#vorschlaege").innerHTML = "";
        return;
    }

    vorschlagTimeout = setTimeout(() => holeVorschlaege(wert), 300);
});

async function holeVorschlaege(eingabe) {
    let data = await fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + encodeURIComponent(eingabe) + "&limit=5&appid=" + API_KEY).then(r => r.json());

    let vorschlaege = document.querySelector("#vorschlaege");
    vorschlaege.innerHTML = "";

    if (!data.length) return;

    vorschlaege.innerHTML = "<div class='vorschlag-liste'>"
        + data.map(d => "<div class='vorschlag-item' onclick='waehleVorschlag(\"" + d.name + "\")'>"
            + d.name + (d.state ? ", " + d.state : "") + ", " + d.country
            + "</div>").join("")
        + "</div>";
}

function waehleVorschlag(name) {
    document.querySelector("#stadt-eingabe").value = name;
    document.querySelector("#vorschlaege").innerHTML = "";
    holeWetter();
}

window.onload = function() {
    startIntro();
    let zufallsStadt = stadtFakten[Math.floor(Math.random() * stadtFakten.length)].name;
    document.querySelector("#stadt-eingabe").value = zufallsStadt;
    holeWetter();
};