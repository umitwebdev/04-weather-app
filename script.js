async function holeWetter() {
    let eingabe = document.querySelector("#stadt-eingabe");
    let stadt = eingabe.value;
    let ergebnis = document.querySelector("#ergebnis");

    ergebnis.textContent = "Lade...";

    let antwort = await fetch("https://wttr.in/" + stadt + "?format=3");
    let text = await antwort.text();

    ergebnis.textContent = text;
}